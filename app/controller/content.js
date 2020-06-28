"use strict";

const Controller = require("egg").Controller;
const { CODE, ERROR_INFO } = require("../constans/code");

class CateController extends Controller {
  async list() {
    const { ctx } = this;
    let { page, pageSize, title } = ctx.request.body;
    let result = await this.service.content.select(page - 1, pageSize, title);
    ctx.body = {
      status: CODE.SUCCESS,
      total: result.total,
      data: result.result,
    };
  }

  async create() {
    const { ctx } = this;
    let result = await this.service.content.create(ctx.request.body);
    ctx.body = {
      status: CODE.SUCCESS,
      data: result,
    };
  }

  async update() {
    const { ctx } = this;
    let result = await this.service.content.update(ctx.request.body);
    ctx.body = {
      status: CODE.SUCCESS,
      data: result,
    };
  }

  async delete() {
    const { ctx } = this;
    let { id } = ctx.request.body;
    let result = await this.service.content.delete(id);
    ctx.body = {
      status: CODE.SUCCESS,
      data: result,
    };
  }
}

module.exports = CateController;
