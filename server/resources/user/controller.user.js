const UserModel = require("./model.user");

module.exports = {

  addUser: async (req) => {
      return await UserModel.create({ ...req.body });
  },

  

  
};
