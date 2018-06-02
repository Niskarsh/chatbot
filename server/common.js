import express from "express";
import handlebars from "hbs";
import bodyparser from "body-parser";
import apiRoutes from "./routes/api.routes.js";

const app = express();
app.set("view engine", handlebars);
app.use(express.static(__dirname+"/../public"));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use("/",apiRoutes);

export default app;