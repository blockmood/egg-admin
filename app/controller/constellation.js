"use strict";

const Controller = require("egg").Controller;
const axios = require("axios");
const { CODE, ERROR_INFO, REQUEST_URL } = require("../constans/code");

// today,tomorrow,week,nextweek,month,year

class ConstellationController extends Controller {
  async query() {
    const { ctx, app } = this;
    const { type, consName } = ctx.request.body;
    let start =
      new Date(new Date().toLocaleDateString()).getTime() +
      24 * 60 * 60 * 1000 -
      1;

    let now = +new Date();

    let typeResult = await app.redis.get(`${consName}_${type}`);
    if (!typeResult) {
      let result = await axios.get(
        `${REQUEST_URL}&consName=${encodeURIComponent(
          consName
        )}&type=${encodeURIComponent(type)}`
      );
      await app.redis.set(
        `${consName}_${type}`,
        JSON.stringify(result.data.result1),
        "Ex",
        `${parseInt((start - now) / 1000)}`
      );
      ctx.body = {
        status: CODE.SUCCESS,
        data: result.data.result1,
      };
    } else {
      ctx.body = {
        status: CODE.SUCCESS,
        data: JSON.parse(typeResult),
      };
    }
  }
  async delete() {
    const { ctx, app } = this;
    const { type } = ctx.request.body;
    let result = await app.redis.del(type);
    ctx.body = {
      status: CODE.SUCCESS,
      type,
    };
  }
}

module.exports = ConstellationController;
