const { ObjectId } = require("mongodb");

const Modules = require("./connection").db("univercityDB").collection("Module");

const Create = async ({ name, code, specialzation }) => {
  const newModule = await Modules.insertOne({
    name,
    code,
    specialzation,
  });
  return newModule;
};

const Delete = async (id) => {
  return await Modules.findOneAndDelete({ _id: ObjectId(id) });
};

const GetAll = async () => {
  const allModules = await Modules.find();
  return allModules.toArray();
};

const GetOneM = async (id) => {
  const module = await Modules.findOne({ _id: ObjectId(id) });
  return module;
};

const UpdateOne = async (id, { name, code, specialzation }) => {
  const updateModule = await Modules.replaceOne(
    { _id: ObjectId(id) },
    {
      name,
      code,
      specialzation,
    }
  );
  return updateModule;
};

const userAddtomodule = ({ mid, students }) => {
  const result = Modules.findOneAndUpdate(
    { _id: ObjectId(mid) },
    { $push: { students: students } }
  );
  return result;
};

module.exports = {
  Create,
  Delete,
  GetAll,
  GetOneM,
  UpdateOne,
  userAddtomodule,
};
