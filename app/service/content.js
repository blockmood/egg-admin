const Service = require('egg').Service
const { CODE, ERROR_INFO, DATABASES_TABLE } = require('../constans/code')

class ContentService extends Service {
  async select(page, pageSize) {
    const { ctx, service } = this
    let result = await this.app.mysql.query(
      `select * from ${DATABASES_TABLE.CONTENT} a left join ${DATABASES_TABLE.CATE} b on a.cate_id = b.id limit ${page},${pageSize}`
    )

    return {
      status: CODE.SUCCESS,
      data: result || [],
    }
  }
  async create(cate_id, content) {
    const { ctx, service } = this
    let result = await this.app.mysql.insert(DATABASES_TABLE.CONTENT, {
      cate_id: cate_id,
      content: content,
      create_time: +new Date(),
    })

    return {
      status: CODE.SUCCESS,
      data: result || [],
    }
  }

  async update(id, cate_id, content) {
    const { ctx, service } = this
    let result = await this.app.mysql.update(DATABASES_TABLE.CONTENT, {
      id: id,
      cate_id: cate_id,
      content: content,
      update_time: +new Date(),
    })

    return {
      status: CODE.SUCCESS,
      data: result || [],
    }
  }

  async delete(id) {
    const { ctx, service } = this
    let result = await this.app.mysql.delete(DATABASES_TABLE.CONTENT, {
      id,
    })

    return {
      status: CODE.SUCCESS,
      data: result || [],
    }
  }
}

module.exports = ContentService
