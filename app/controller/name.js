const Controller = require('egg').Controller;
const { CODE,ERROR_INFO } = require('../constans/code')

const createRule = {
  name: { type: 'string', required: true },
  size: { type: 'string', required: true },
  page: { type: 'string', required: true }
};

class NameController extends Controller {
  async index() {
    const { ctx,service } = this;
    ctx.validate(createRule, ctx.request.body);
    let { page,size,name } = ctx.request.body
    if(name.length > 1){
    	ctx.body = {
    		status:CODE.ERROR,
    		message:ERROR_INFO.ERROR_NAME_INFO
    	}
    	return
    }
    let result = await this.service.name.find(page,size,name)
    ctx.body = {
		status:CODE.SUCCESS,
		data:result
    }
  }
}

module.exports = NameController;
