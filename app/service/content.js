const Service = require("egg").Service;
const { CODE, ERROR_INFO, DATABASES_TABLE } = require("../constans/code");

class ContentService extends Service {
  async select(page, pageSize) {
    const { ctx, service } = this;
    let result = await this.app.mysql.query(
      `select * from ${DATABASES_TABLE.CONTENT} a left join ${DATABASES_TABLE.CONTENT} b on a.cate_id = b.id limit ${page},${pageSize}`
    );
    let total = await this.app.mysql.count(DATABASES_TABLE.CONTENT);

    return {
      result: result || [],
      total,
    };
  }
  async create({ cate_id, content, is_recommend, cover_img }) {
    const { ctx, service } = this;
    let result = await this.app.mysql.insert(DATABASES_TABLE.CONTENT, {
      cate_id: cate_id,
      content: content,
      create_time: +new Date(),
      cover_img: cover_img,
      is_recommend: is_recommend,
    });

    return result || [];
  }

  async update({ id, cate_id, content, is_recommend, cover_img }) {
    const { ctx, service } = this;
    let result = await this.app.mysql.update(DATABASES_TABLE.CONTENT, {
      id: id,
      cate_id: cate_id,
      content: content,
      cover_img: cover_img,
      is_recommend: is_recommend,
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
