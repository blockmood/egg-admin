const Service = require("egg").Service;
const { CODE, ERROR_INFO, DATABASES_TABLE } = require("../constans/code");

class NewsService extends Service {
  async listSelect(page, pageSize) {
    const { ctx, service } = this;
    let result = await this.app.mysql.query(
      `select a.title,a.cover_img,b.cate_name from ${DATABASES_TABLE.CONTENT} a left join
      ${DATABASES_TABLE.CATE} b on a.cate_id = b.id limit ${page},${pageSize}`
    );

    let recommend = await this.app.mysql.query(
      `select id,title,cover_img from ${DATABASES_TABLE.CONTENT} where is_recommend = 1 order by id desc limit 0,5`
    );

    return {
      result: result || [],
      recommend: recommend || [],
    };
  }
}

module.exports = NewsService;
