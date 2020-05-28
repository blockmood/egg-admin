const Service = require("egg").Service;
const { CODE, ERROR_INFO, DATABASES_TABLE } = require("../constans/code");

class ContentService extends Service {
  async select(page, pageSize) {
    const { ctx, service } = this;
    let result = await this.app.mysql.query(
      `select * from ${DATABASES_TABLE.CONTENT} a left join ${DATABASES_TABLE.CATE} b on a.cate_id = b.id limit ${page},${pageSize}`
    );
    console.log(result)
    let total = await this.app.mysql.count(DATABASES_TABLE.CONTENT);

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
    let result = await this.app.mysql.update(DATABASES_TABLE.CONTENT, {
      ...data,  
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
