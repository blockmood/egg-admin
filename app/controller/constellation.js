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

    let typeResult = await app.redis.get(type);
    console.log(typeResult);
    if (!typeResult) {
      let result = await axios.get(
        `${REQUEST_URL}&consName=${encodeURIComponent(
          consName
        )}&type=${encodeURIComponent(type)}`
      );
      await app.redis.set(
        type,
        JSON.stringify(result.data.result1),
        "Ex",
        `${parseInt(start - now)}`
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
}

module.exports = ConstellationController;
