'use strict'

const Controller = require('egg').Controller
const { CODE, ERROR_INFO } = require('../constans/code')

const selectRule = {}

class CateController extends Controller {
  async list() {
    const { ctx } = this
    ctx.validate(selectRule, ctx.request.body)
  }
}
