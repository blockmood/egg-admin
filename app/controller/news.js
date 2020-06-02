"use strict";

const Controller = require("egg").Controller;
const { CODE, ERROR_INFO } = require("../constans/code");

class NewsController extends Controller {
  async list() {
    const { ctx } = this;
    let { page, pageSize } = ctx.request.body;
    let result = await this.service.news.listSelect(page - 1, pageSize);
    ctx.body = {
      status: CODE.SUCCESS,
      data: result.result,
      recommend: result.recommend,
      hot: result.hot,
    };
  }

  async content() {}
}
module.exports = NewsController;
