import express from "express";

const app = express();

app.get("/users", (req,res) => {
  console.log("test");

  res.json([
    'diego',
    'marka',
    'robson'
  ])
});

app.listen(3333);
 