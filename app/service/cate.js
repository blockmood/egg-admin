const Service = require('egg').Service
const { CODE, ERROR_INFO } = require('../constans/code')

class CateService extends Service {
  async select(page, pageSize) {
    const { ctx, service } = this
    let result = await this.app.mysql.select(
      `${this.config.databse_pre.name}_cate`,
      {
        limit: Number(pageSize),
        offset: Number(page),
      }
    )

    return {
      status: CODE.SUCCESS,
      data: result || [],
    }
  }
}

module.exports = CateService
