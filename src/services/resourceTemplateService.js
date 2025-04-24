const DB = require("../db/database");


class ResourceTemplateService {
  static db = new DB('resourceTemplate.json');

  static async getAll() {
    return await this.db.findAll();
  }

  static async getById(id) {
    return await this.db.findById(id);
  }
}

module.exports = ResourceTemplateService;
