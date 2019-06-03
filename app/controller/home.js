'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const result = await this.app.mysql.select('user')
    console.log(result)
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
