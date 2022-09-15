const moment = require('moment-timezone');
const validation = require('../Utils/validate');
const Role = require('../Models/RoleSchema');


const apiRoles = {
  async create (req, res) {
    const { name, description } = req.body;
    const invalidFields = validation.validateRole({ name, description });

    if (invalidFields.length) {
      return res.status(400).json({ status: invalidFields });
    }

    try {
      const newRole = await Role.create({ name, description });
      return res.json(newRole);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async getAllActive(_req, res) {
    try {
      const role = await Role.find({ active: true });
      return res.status(200).json(role);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async getById(req, res) {
    const { id } = req.params;

    try {
      const role = await Role.findOne({ _id: id });
      return res.status(200).json(role);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async queryActive(req, res) {
    const requestObj = req.body;

     try {
      const roles = await Role.find({...requestObj, active: true});
      return res.status(200).json(roles);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async delete(req, res) {
    const { id } = req.params;

    try {
      const deleteResponse = await Role.findOneAndUpdate(
        { _id: id },
        { active: false },
        { new: true },
        (feature) => feature);
      console.log(deleteResponse);
      return res.status(200).json({ message: 'succ.messageess' });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async patch(req, res) {
    const { id } = req.params;
    const requestObj = req.body;

    try {
      const updateStatus = await Role.findOneAndUpdate({ _id: id }, requestObj);
      return res.status(200).json(updateStatus);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  async deactivate(req, res) {
    const { id } = req.params;

    try {
      const updateResponse = await Role.findOneAndUpdate(
        { _id: id },
        { active: false },
        { new: true },
        (feature) => feature);
      return res.status(200).json(updateResponse);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
};

module.exports = apiRoles;
