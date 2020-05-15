const Service = require('egg').Service
const md5 = require('md5')
const Utils = require('../utils/utils')
const { CODE, ERROR_INFO } = require('../constans/code')

class UserService extends Service {
  async login(username, password) {
    let result = await this.app.mysql.select(
      `${this.config.databse_pre.name}_user`,
      {
        where: { username: username },
      }
    )
    if (!result[0]) {
      return Utils.errorMsg(CODE.ERROR, ERROR_INFO.USERNAME)
    }
    if (md5(password) == result[0].password) {
      const token = this.app.jwt.sign(
        { foo: username },
        this.app.config.jwt.secret,
        { expiresIn: '24h' }
      )
      return {
        code: CODE.SUCCESS,
        token: `Bearer ${token}`,
      }
    } else {
      return Utils.errorMsg(CODE.ERROR, ERROR_INFO.PASSWORD)
    }
  }
}

module.exports = UserService
