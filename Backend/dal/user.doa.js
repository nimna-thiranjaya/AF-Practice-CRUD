const { ObjectId } = require("mongodb");

const Users = require("./connection").db("univercityDB").collection("Users");

const Create = async ({ name, address, nic, email, password, role }) => {
  const newuser = await Users.insertOne({
    name,
    address,
    nic,
    email,
    password,
    role,
  });
  return newuser;
};

const Delete = async (id) => {
  return await Users.findOneAndDelete({ _id: ObjectId(id) });
};

const GetAll = async () => {
  const users = await Users.find();
  return users.toArray();
};

const GetOne = async (id) => {
  const user = await Users.findOne({ _id: ObjectId(id) });
  return user;
};

const UpdateOne = async (id, { name, address, nic, email, password, role }) => {
  const updateUser = await Users.replaceOne(
    { _id: ObjectId(id) },
    {
      name,
      address,
      nic,
      email,
      password,
      role,
    }
  );
  return updateUser;
};
const Login = async ({ email, password }) => {
  const logUser = Users.findOne({ email: email, password: password });
  if (logUser) {
    return logUser;
  }
};

const ModuleAddtoUser = ({ userid, modules }) => {
  const result = Users.findOneAndUpdate(
    { _id: ObjectId(userid) },
    { $push: { modules: modules } }
  );
  return result;
};

module.exports = {
  Create,
  Delete,
  GetAll,
  GetOne,
  UpdateOne,
  Login,
  ModuleAddtoUser,
};
