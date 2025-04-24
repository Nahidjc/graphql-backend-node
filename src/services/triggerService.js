const DB = require("../db/database");


class TriggerService {
  static db = new DB('trigger.json');

  static async getAll() {
    return await this.db.findAll();
  }

  static async getById(id) {
    return await this.db.findById(id);
  }
}

module.exports = TriggerService;
