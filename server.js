const prisma=require('./prismaInstance');
const express = require('express');
const bodyParser = require("body-parser"); 
const app = express();
const user=require('./createUser');
require("dotenv").config();
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.post('/createUser', user);
if(prisma){
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
else{
  console.log("Prisma is not connected");
}

