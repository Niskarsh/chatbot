import { get, listen } from "./common.js";

const port = process.env.PORT || 3000;

get("/",async (req, res)=>{

});

listen(port,console.log(`Started listening on port ${port}`));

