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
  async create(cate_name) {
    const { ctx, service } = this
    let result = await this.app.mysql.insert(
      `${this.config.databse_pre.name}_cate`,
      {
        cate_name: cate_name,
        create_time: +new Date(),
      }
    )
    return {
      status: CODE.SUCCESS,
      data: result || [],
    }
  }
  async update(id, cate_name) {
    const { ctx, service } = this
    let result = await this.app.mysql.update(
      `${this.config.databse_pre.name}_cate`,
      {
        id: id,
        cate_name: cate_name,
        update_time: +new Date(),
      }
    )
    return {
      status: CODE.SUCCESS,
      data: result || [],
    }
  }
  async delete(id) {
    const { ctx, service } = this
    let result = await this.app.mysql.delete(
      `${this.config.databse_pre.name}_cate`,
      {
        id: id,
      }
    )
    return {
      status: CODE.SUCCESS,
      data: result || [],
    }
  }
}

module.exports = CateService
