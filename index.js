const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const userRouter = require("./routes/user.router");

const app = express();

app.use(cors());
app.use(morgan());
app.use(express.json());
app.use(userRouter);

app.listen(3000, () => {
  console.log("Server started");
});
