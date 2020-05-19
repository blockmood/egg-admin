'use strict'

const Controller = require('egg').Controller
const { CODE, ERROR_INFO } = require('../constans/code')

const selectRule = {
  page: { type: 'string', required: true },
  pageSize: { type: 'string', required: true },
}

const createRule = {
  content: { type: 'string', required: true },
  cate_id: { type: 'string', required: true },
}

const updateRule = {
  id: { type: 'string', required: true },
  content: { type: 'string', required: true },
  cate_id: { type: 'string', required: true },
}

const deleteRule = {
  id: { type: 'string', required: true },
}

class CateController extends Controller {
  async list() {
    const { ctx } = this
    ctx.validate(selectRule, ctx.request.body)
    let { page, pageSize } = ctx.request.body
    let result = await this.service.content.select(page, pageSize)
    ctx.body = {
      status: CODE.SUCCESS,
      data: result,
    }
  }

  async create() {
    const { ctx } = this
    ctx.validate(createRule, ctx.request.body)
    let { cate_id, content } = ctx.request.body
    let result = await this.service.content.create(cate_id, content)
    ctx.body = {
      status: CODE.SUCCESS,
      data: result,
    }
  }

  async update() {
    const { ctx } = this
    ctx.validate(updateRule, ctx.request.body)
    let { id, cate_id, content } = ctx.request.body
    let result = await this.service.content.update(id, cate_id, content)
    ctx.body = {
      status: CODE.SUCCESS,
      data: result,
    }
  }

  async delete() {
    const { ctx } = this
    ctx.validate(deleteRule, ctx.request.body)
    let { id } = ctx.request.body
    let result = await this.service.content.delete(id)
    ctx.body = {
      status: CODE.SUCCESS,
      data: result,
    }
  }
}

module.exports = CateController
