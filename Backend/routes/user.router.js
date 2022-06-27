const Router = require("@koa/router");
const {
  RegisterUser,
  DeleteUser,
  AllUsers,
  GetOneUser,
  updateUser,
  UserLogin,
  RegModules,
} = require("../apis/user.api");

const UserRouter = new Router({
  prefix: "/users",
});

UserRouter.post("/", async (ctx) => {
  const userData = ctx.request.body;
  const result = await RegisterUser(userData);
  ctx.response.status = 200;
  ctx.body = { success: result.acknowledged, message: "User added" };
});

UserRouter.delete("/:id", async (ctx) => {
  const id = ctx.params.id;
  const result = await DeleteUser(id);
  ctx.response.status = 200;
  ctx.body = { success: result.acknowledged, message: "User Deleted" };
});

UserRouter.get("/", async (ctx) => {
  const result = await AllUsers();
  ctx.response.status = 200;
  ctx.body = result;
});

UserRouter.get("/:id", async (ctx) => {
  const id = ctx.params.id;
  const result = await GetOneUser(id);
  ctx.response.status = 200;
  ctx.body = result;
});

UserRouter.put("/:id", async (ctx) => {
  const userData = ctx.request.body;
  const id = ctx.params.id;
  const result = await updateUser(id, userData);
  ctx.response.status = 200;
  ctx.body = { result: result, message: "User Update Successful" };
});

UserRouter.post("/login", async (ctx) => {
  const data = ctx.request.body;
  const loguser = await UserLogin(data);
  if (loguser) {
    ctx.response.status = 200;
    ctx.body = { success: true, Role: loguser.role, token: loguser._id };
  } else {
    ctx.response.status = 200;
    ctx.body = { success: false, message: "Login Error" };
  }
});

UserRouter.post("/regmodule", async (ctx) => {
  const data = ctx.request.body;
  const result = await RegModules(data);
  ctx.response.status = 200;
  ctx.body = { success: true, result: result };
});

module.exports = UserRouter;
