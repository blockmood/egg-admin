"use strict";

const Controller = require("egg").Controller;
const { CODE, ERROR_INFO } = require("../constans/code");

const selectRule = {
  page: { type: "string", required: true },
  pageSize: { type: "string", required: true },
};

const createRule = {
  cate_name: { type: "string", required: true },
};

const deleteRule = {
  id: { type: "string", required: true },
};

class CateController extends Controller {
  async list() {
    const { ctx } = this;
    ctx.validate(selectRule, ctx.request.body);
    let { page, pageSize } = ctx.request.body;
    let result = await this.service.cate.select(page, pageSize);
    ctx.body = {
      status: CODE.SUCCESS,
      total: result.total,
      data: result.result,
    };
  }
  async create() {
    const { ctx } = this;
    ctx.validate(createRule, ctx.request.body);
    const { cate_name } = ctx.request.body;
    let result = await this.service.cate.create(cate_name);
    ctx.body = {
      status: CODE.SUCCESS,
      data: result,
    };
  }
  async update() {
    const { ctx } = this;
    ctx.validate(deleteRule, ctx.request.body);
    const { id, cate_name } = ctx.request.body;
    let result = await this.service.cate.update(id, cate_name);
    ctx.body = {
      status: CODE.SUCCESS,
      data: result,
    };
  }
  async delete() {
    const { ctx } = this;
    ctx.validate(deleteRule, ctx.request.body);
    const { id } = ctx.request.body;
    let result = await this.service.cate.delete(id);
    ctx.body = {
      status: CODE.SUCCESS,
      data: result,
    };
  }
}

module.exports = CateController;
