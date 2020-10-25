const PostModel = require('../models/Post');
const errorHandler = require('../../lib/helpers/error-handler');

class Post {
  async getAll(req, res) {
    await PostModel.find({}, (err, result) => {
      if (err) {
        let parseError = errorHandler(err.name, err.code);
        return res.status(parseError.code).json(parseError);
      } else {
        return res.json(result);
      }
    });
  }
  async get(req, res) {
    await PostModel.findById(req.params.id, (err, result) => {
      if (err) {
        let parseError = errorHandler(err.name, err.code);
        return res.status(parseError.code).json(parseError);
      } else {
        return res.json(result);
      }
    });
  }
  async create(req, res) {
    await PostModel.create(req.body, (err, result) => {
      if (err) {
        let parseError = errorHandler(err.name, err.code);
        return res.status(parseError.code).json(parseError);
      } else {
        return res.json(result);
      }
    });
  }
  async update(req, res) {
    await PostModel.updateOne({ _id: req.params.id }, req.body, (err, result) => {
      console.log(req.body);
      if (err) {
        let parseError = errorHandler(err.name, err.code);
        return res.status(parseError.code).json(parseError);
      } else {
        return res.json({ matchedDocs: result.n, modifiedDocs: result.nModified });
      }
    });
  }
  async delete(req, res) {
    await PostModel.deleteOne({ _id: req.params.id }, (err, result) => {
      console.log(req.body);
      if (err) {
        let parseError = errorHandler(err.name, err.code);
        return res.status(parseError.code).json(parseError);
      } else {
        return res.json({ matchedDocs: result.n, modifiedDocs: result.nModified });
      }
    });
  }
}

module.exports = new Post();
