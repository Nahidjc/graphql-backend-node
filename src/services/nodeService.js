const DB = require("../db/database");


class NodeService {
  static db = new DB('node.json');

  static async getAll() {
    return await this.db.findAll();
  }

  static async getById(id) {
    return await this.db.findById(id);
  }
}

module.exports = NodeService;
