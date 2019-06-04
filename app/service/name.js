const Service = require('egg').Service;

class NameService extends Service {
  async find(page,size,name) {
  	let result = await this.app.mysql.select('name',{
  		where:{xing:name},
  		limit: Number(size), 
  		offset: Number(page), 
  	});
    return result
  }
}

module.exports = NameService;