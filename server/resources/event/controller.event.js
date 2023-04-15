const UserModel = require("./model.event");

module.exports = {

  addUser: async (req) => {
      return await EventModel.create({ ...req.body });
  },
};
