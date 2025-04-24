const DB = require("../db/database");


class ResponseService {
  static db = new DB('response.json');

  static async getAll() {
    return await this.db.findAll();
  }

  static async getById(id) {
    return await this.db.findById(id);
  }
}

module.exports = ResponseService;
