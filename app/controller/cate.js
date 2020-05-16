'use strict'

const Controller = require('egg').Controller
const { CODE, ERROR_INFO } = require('../constans/code')

const createRule = {
  page: { type: 'string', required: true },
  pageSize: { type: 'string', required: true },
}

class CateController extends Controller {
  async list() {
    const { ctx } = this
    ctx.validate(createRule, ctx.request.body)
    let { page, pageSize } = ctx.request.body
    let result = await this.service.cate.select(page, pageSize)
    ctx.body = {
      status: CODE.SUCCESS,
      data: result,
    }
  }
}

module.exports = CateController
