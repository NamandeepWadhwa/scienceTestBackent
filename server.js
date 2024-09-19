const prisma=require('./prismaInstance');
const express = require('express');
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World');
});
if(prisma){
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
else{
  console.log("Prisma is not connected");
}

