import { get, listen } from "./common.js";

const port = process.env.PORT || 3000;

get("/",async (req, res)=>{
    res.render("home.hbs");
});

listen(port,console.log(`Started listening on port ${port}`));

