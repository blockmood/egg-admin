"use strict";

const Controller = require("egg").Controller;
const { KEY, CODE } = require("../constans/code");
const qiniu = require("qiniu");

class UploadController extends Controller {
  async uploadFile() {
    const { ctx } = this;
    var mac = new qiniu.auth.digest.Mac(KEY.access_key, KEY.secret_key);
    var options = {
      scope: "smoos",
    };
    var putPolicy = new qiniu.rs.PutPolicy(options);
    var uploadToken = putPolicy.uploadToken(mac);
    ctx.body = {
      status: CODE.SUCCESS,
      token: uploadToken,
    };
  }
}

module.exports = UploadController;
