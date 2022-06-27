const {
  Create,
  Delete,
  GetAll,
  GetOneM,
  UpdateOne,
  Login,
} = require("../dal/modules.doa.js");

const RegisterModule = async (newModule) => {
  return await Create(newModule);
};

const DeleteModule = async (id) => {
  return await Delete(id);
};

const AllModules = async () => {
  return await GetAll();
};

const GetOneModule = async (id) => {
  return await GetOneM(id);
};

const UpdateModule = async (id, updateModule) => {
  return await UpdateOne(id, updateModule);
};

module.exports = {
  RegisterModule,
  DeleteModule,
  AllModules,
  GetOneModule,
  UpdateModule,
};
