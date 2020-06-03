"use strict";

const Controller = require("egg").Controller;
const { CODE, ERROR_INFO } = require("../constans/code");

class TagController extends Controller {
  async list() {
    const { ctx } = this;
    let { page, pageSize } = ctx.request.body;
    let result = await this.service.tag.select(page - 1, pageSize);
    ctx.body = {
      status: CODE.SUCCESS,
      total: result.total,
      data: result.result,
    };
  }
  async create() {
    const { ctx } = this;
    const { tag_name, cate_id } = ctx.request.body;
    let result = await this.service.tag.create(tag_name, cate_id);
    ctx.body = {
      status: CODE.SUCCESS,
      data: result,
    };
  }
  async update() {
    const { ctx } = this;
    const { id, tag_name, cate_id } = ctx.request.body;
    let result = await this.service.tag.update(id, tag_name, cate_id);
    ctx.body = {
      status: CODE.SUCCESS,
      data: result,
    };
  }
  async delete() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    let result = await this.service.tag.delete(id);
    ctx.body = {
      status: CODE.SUCCESS,
      data: result,
    };
  }
}

module.exports = TagController;
