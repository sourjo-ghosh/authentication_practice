import app from "./app.js";
import config from "./config/config.js";
const port = config.PORT; 
import DBConnectFunc from "./config/database.js";

DBConnectFunc();

app.listen(port, ()=>{
  console.log(`Server is running on ${port}`)
})