const Service = require("egg").Service;
const { CODE, ERROR_INFO, DATABASES_TABLE } = require("../constans/code");

class NewsService extends Service {
  async listSelect(page, pageSize) {
    const { ctx, service } = this;
    let result = await this.app.mysql.query(
      `select a.title,a.cover_img,b.cate_name,c.tag_name from ${DATABASES_TABLE.CONTENT} a left join
      ${DATABASES_TABLE.CATE} b on a.cate_id = b.id left join ${DATABASES_TABLE.TAG} c on a.tag_id = c.id limit ${page},${pageSize}`
    );

    let recommend = await this.app.mysql.query(
      `select id,title,cover_img from ${DATABASES_TABLE.CONTENT} where is_recommend = 1 order by id desc limit 0,5`
    );

    var arr = [];

    for (let i = 0; i < 5; i++) {
      let hot = await this.app.mysql.query(
        `select a.id,a.title,a.cover_img,b.cate_name from ${
          DATABASES_TABLE.CONTENT
        } a left join
        ${DATABASES_TABLE.CATE} b on a.cate_id = b.id where is_hot = 1 limit ${
          i * 2
        },2`
      );
      if (hot.length) {
        arr.push({
          list: hot,
        });
      }
    }

    return {
      result: result || [],
      recommend: recommend || [],
      hot: arr,
    };
  }
}

module.exports = NewsService;
