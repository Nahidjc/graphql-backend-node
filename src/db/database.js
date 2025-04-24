const fs = require('fs').promises;
const path = require('path');

class DB {
  constructor(filename) {
    this.filePath = path.join(process.cwd(), 'src', 'data', filename);
  }

  async readData() {
    try {
      const content = await fs.readFile(this.filePath, 'utf-8');
      return JSON.parse(content || '[]');
    } catch (err) {
      if (err.code === 'ENOENT') return [];
      throw err;
    }
  }

  async writeData(data) {
    await fs.writeFile(this.filePath, JSON.stringify(data, null, 2), 'utf-8');
  }

  async findAll() {
    return this.readData();
  }

  async findById(id) {
    const data = await this.readData();
    return data.find(item => item._id === id) || null;
  }

  async create(item) {
    const data = await this.readData();
    data.push(item);
    await this.writeData(data);
    return item;
  }

  async findByIdAndUpdate(id, payload) {
    const data = await this.readData();
    const index = data.findIndex(item => item._id === id);
    if (index === -1) return null;
    data[index] = { ...data[index], ...payload };
    await this.writeData(data);
    return data[index];
  }

  async findByIdAndDelete(id) {
    const data = await this.readData();
    const index = data.findIndex(item => item._id === id);
    if (index === -1) return null;
    const deletedItem = data[index];
    data.splice(index, 1);
    await this.writeData(data);
    return deletedItem;
  }
}

module.exports = DB;
