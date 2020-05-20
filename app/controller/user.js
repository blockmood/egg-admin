const Controller = require('egg').Controller
const { CODE, ERROR_INFO } = require('../constans/code')

const createRule = {
  username: { type: 'string', required: true },
  password: { type: 'string', required: true },
}

class UserController extends Controller {
  async login() {
    const { ctx, service } = this
    ctx.validate(createRule, ctx.request.body)
    let { username, password } = ctx.request.body
    let result = await this.service.user.login(username, password)
    ctx.body = {
      status: CODE.SUCCESS,
      data: result,
    }
  }
  async userinfo() {
    const { ctx, service } = this
    let result = await this.service.user.userinfo()
    ctx.body = {
      status: CODE.SUCCESS,
      data: result,
    }
  }
}

module.exports = UserController
