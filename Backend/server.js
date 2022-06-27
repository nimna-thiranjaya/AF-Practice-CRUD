const koa = require("koa");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");
const app = new koa();
const MongoClient = require("./dal/connection.js");
const UserRouter = require("./routes/user.router.js");
const ModuleRouter = require("./routes/modules.router.js");

app.use(bodyParser());
app.use(cors());

app.use(UserRouter.routes()).use(UserRouter.allowedMethods());
app.use(ModuleRouter.routes()).use(ModuleRouter.allowedMethods());

app.listen(3000, () => {
  console.log("server run on 3000");
});
