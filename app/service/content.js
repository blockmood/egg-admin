const Service = require("egg").Service;
const { CODE, ERROR_INFO, DATABASES_TABLE } = require("../constans/code");

class ContentService extends Service {
  async select(page, pageSize) {
    const { ctx, service } = this;
    let result = await this.app.mysql.query(
      `select a.*,b.cate_name from ${DATABASES_TABLE.CONTENT} a left join 
      ${DATABASES_TABLE.CATE} b on a.cate_id = b.id limit ${
        page * pageSize
      },${pageSize}`
    );
    let total = await this.app.mysql.count(DATABASES_TABLE.CONTENT);
    return {
      result: result || [],
      total,
    };
  }

  async create(data) {
    console.log({
      ...data,
      create_time: +new Date(),
    });
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
