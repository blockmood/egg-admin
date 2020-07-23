const Service = require("egg").Service;
const { CODE, ERROR_INFO, DATABASES_TABLE } = require("../constans/code");

class ContentService extends Service {
  async select(page, pageSize, title, is_hot = 0) {
    const { ctx, service } = this;
    let result;
    let total;
    if (!title && !is_hot) {
      result = await this.app.mysql.query(
        `select a.*,b.cate_name from ${DATABASES_TABLE.CONTENT} a left join 
        ${DATABASES_TABLE.CATE} b on a.cate_id = b.id order by id desc limit ${
          page * pageSize
        },${pageSize} `
      );
      total = await this.app.mysql.count(DATABASES_TABLE.CONTENT);
    } else {
      result = await this.app.mysql.query(
        `select a.*,b.cate_name from ${DATABASES_TABLE.CONTENT} a left join 
        ${DATABASES_TABLE.CATE} b on a.cate_id = b.id where title LIKE '%${title}%' or is_hot = ${is_hot}`
      );
      total = result.length === 0 ? 0 : 1;
    }

    return {
      result: result || [],
      total,
    };
  }

  async create(data) {
    const { ctx, service } = this;
    let result = await this.app.mysql.insert(DATABASES_TABLE.CONTENT, {
      ...data,
      create_time: +new Date(),
    });

    return result || [];
  }

  async update(data) {
    const { ctx, service } = this;
    let { cate_name, ...reset } = data;
    let result = await this.app.mysql.update(DATABASES_TABLE.CONTENT, {
      ...reset,
      update_time: +new Date(),
    });

    return result || [];
  }

  async delete(id) {
    const { ctx, service } = this;
    let result = await this.app.mysql.delete(DATABASES_TABLE.CONTENT, {
      id,
    });

    return result || [];
  }
}

module.exports = ContentService;
