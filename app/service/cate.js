const Service = require("egg").Service;
const { CODE, ERROR_INFO, DATABASES_TABLE } = require("../constans/code");

class CateService extends Service {
  async select(page, pageSize) {
    const { ctx, service } = this;
    let result = await this.app.mysql.select(DATABASES_TABLE.CATE, {
      orders: [["id", "desc"]],
      limit: Number(pageSize),
      offset: Number(page * pageSize),
    });
    let total = await this.app.mysql.count(DATABASES_TABLE.CATE);
    return {
      result: result || [],
      total,
    };
  }
  async create(cate_name) {
    const { ctx, service } = this;
    let result = await this.app.mysql.insert(DATABASES_TABLE.CATE, {
      cate_name: cate_name,
      create_time: +new Date(),
    });
    return result;
  }
  async update(id, cate_name) {
    const { ctx, service } = this;
    let result = await this.app.mysql.update(DATABASES_TABLE.CATE, {
      id: id,
      cate_name: cate_name,
      update_time: +new Date(),
    });
    return result;
  }
  async delete(id) {
    const { ctx, service } = this;
    let result = await this.app.mysql.delete(DATABASES_TABLE.CATE, {
      id: id,
    });
    return result;
  }
}

module.exports = CateService;
