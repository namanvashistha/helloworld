const express = require("express");

const app = express();

app.post("/", (req, res) => {
   res.send("hello world - post");
});

app.get("/", async (req, res) => {
   var a = [
      {
         "sku": 1,
         "old": 4
      },
      {
         "sku": 2,
         "old": 5
      },
   ];
   var b = [
      {
         "sku": 1,
         "new": 34234
      },
      {
         "sku": 2,
         "new": 3523453
      }

   ];
   console.log(a);
   res.send("hello world - get");
});

// PORT
const PORT = 3000;

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});
