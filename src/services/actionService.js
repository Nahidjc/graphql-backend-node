const DB = require("../db/database");


class ActionService {
  static db = new DB('action.json');

  static async getAll() {
    return await this.db.findAll();
  }

  static async getById(id) {
    return await this.db.findById(id);
  }
}

module.exports = ActionService;
