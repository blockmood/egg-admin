const Service = require("egg").Service;
const { CODE, ERROR_INFO, DATABASES_TABLE } = require("../constans/code");

class TagService extends Service {
  async select(page, pageSize) {
    const { ctx, service } = this;
    let result = await this.app.mysql.select(DATABASES_TABLE.TAG, {
      orders: [["id", "desc"]],
      limit: Number(pageSize),
      offset: Number(page * pageSize),
    });
    let total = await this.app.mysql.count(DATABASES_TABLE.TAG);
    return {
      result: result || [],
      total,
    };
  }
  async create(tag_name, cate_id) {
    const { ctx, service } = this;
    let result = await this.app.mysql.insert(DATABASES_TABLE.TAG, {
      tag_name: tag_name,
      cate_id: cate_id,
      create_time: +new Date(),
    });

    return result;
  }
  async update(id, tag_name, cate_id) {
    const { ctx, service } = this;
    let result = await this.app.mysql.update(DATABASES_TABLE.TAG, {
      id: id,
      tag_name: tag_name,
      cate_id: cate_id,
      update_time: +new Date(),
    });
    return result;
  }
  async delete(id) {
    const { ctx, service } = this;
    let result = await this.app.mysql.delete(DATABASES_TABLE.TAG, {
      id: id,
    });
    return result;
  }
}

module.exports = TagService;
