const express = require("express");
const path = require("path");
const app = express();
const port = process.env.port || 3000
const cors = require("cors");
app.use(cors());


app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(require("./routes/index"));

app.use(express.static(path.join(__dirname, "/public/")));


app.listen(port, () =>{
console.log("Server on port 3000");
});

