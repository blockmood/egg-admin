"use strict";

const Controller = require("egg").Controller;
const { CODE, ERROR_INFO } = require("../constans/code");

class CateController extends Controller {
  async list() {
    const { ctx } = this;
    let { page, pageSize } = ctx.request.body;
    let result = await this.service.cate.select(page - 1, pageSize);
    ctx.body = {
      status: CODE.SUCCESS,
      total: result.total,
      data: result.result,
    };
  }
  async create() {
    const { ctx } = this;
    const { cate_name } = ctx.request.body;
    let result = await this.service.cate.create(cate_name);
    ctx.body = {
      status: CODE.SUCCESS,
      data: result,
    };
  }
  async update() {
    const { ctx } = this;
    const { id, cate_name } = ctx.request.body;
    let result = await this.service.cate.update(id, cate_name);
    ctx.body = {
      status: CODE.SUCCESS,
      data: result,
    };
  }
  async delete() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    let result = await this.service.cate.delete(id);
    ctx.body = {
      status: CODE.SUCCESS,
      data: result,
    };
  }
}

module.exports = CateController;
