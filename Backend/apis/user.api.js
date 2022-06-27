const {
  Create,
  Delete,
  GetAll,
  GetOne,
  UpdateOne,
  Login,
  ModuleAddtoUser,
} = require("../dal/user.doa.js");
const { userAddtomodule, GetOneM } = require("../dal/modules.doa.js");

const RegisterUser = async (newuser) => {
  return await Create(newuser);
};

const DeleteUser = async (id) => {
  return await Delete(id);
};

const AllUsers = async () => {
  return await GetAll();
};

const GetOneUser = async (id) => {
  return await GetOne(id);
};

const updateUser = async (id, updateuser) => {
  return await UpdateOne(id, updateuser);
};

const UserLogin = async (data) => {
  return await Login(data);
};

const RegModules = async (data) => {
  const module = await GetOneM(data.mid);
  const user = await GetOne(data.uid);
  const userid = data.uid;
  const mid = data.mid;

  if (module && user) {
    var student = {
      stid: userid,
      name: user.name,
      email: user.email,
    };
    var updateUser = {
      mid: mid,
      students: student,
    };

    var UpdateModule = {
      userid: userid,
      modules: module,
    };
  }
  return await userAddtomodule(updateUser), ModuleAddtoUser(UpdateModule);
};

module.exports = {
  RegisterUser,
  DeleteUser,
  AllUsers,
  GetOneUser,
  updateUser,
  UserLogin,
  RegModules,
};
