const Router = require("@koa/router");
const {
  RegisterModule,
  DeleteModule,
  AllModules,
  GetOneModule,
  UpdateModule,
} = require("../apis/modules.api.js");

const ModuleRouter = new Router({
  prefix: "/modules",
});

ModuleRouter.post("/", async (ctx) => {
  const moduleData = ctx.request.body;
  const result = await RegisterModule(moduleData);
  ctx.response.status = 200;
  ctx.body = { success: result.acknowledged, message: "Module Added" };
});

ModuleRouter.delete("/:id", async (ctx) => {
  const id = ctx.params.id;
  const result = await DeleteModule(id);
  ctx.response.status = 200;
  ctx.body = { success: result.acknowledged, message: "Module Deleted" };
});

ModuleRouter.get("/", async (ctx) => {
  const result = await AllModules();
  ctx.response.status = 200;
  ctx.body = result;
});

ModuleRouter.get("/:id", async (ctx) => {
  const id = ctx.params.id;
  const result = await GetOneModule(id);
  ctx.response.status = 200;
  ctx.body = result;
});

ModuleRouter.put("/:id", async (ctx) => {
  const updateModule = ctx.request.body;
  const id = ctx.params.id;
  const result = await UpdateModule(id, updateModule);
  ctx.response.status = 200;
  ctx.body = { result: result, message: "Module Update Successful" };
});

module.exports = ModuleRouter;
