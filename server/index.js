const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();


const app = express();
app.use(cors());
app.use(express.json()); //Middleware to parse incoming JSON payloads

//${process.env.DB_USERNAME}
//${process.env.DB_PASSWORD}

//static files

// app.use(express.static(path.join(__dirname, './client/dist' )));

// app.get('*', function(_, res) {
//   res.sendFile(path.join(__dirname, './client/dist/index.html'), function(err) {
//     res.status(500).send(err);
//   });
// });

const PORT = process.env.PORT || 5000;

// mondoDB connection

const DB_URI =  `mongodb+srv://alawodetoheeb8:Tosibey2@cluster0.vlpywiq.mongodb.net/toyyibEcommerce?retryWrites=true&w=majority`

const mongoDb_url = mongoose
  .connect(
    DB_URI
  )
  .then(() => console.log("connected to the database"))
  .catch((error) => console.log(error));

console.log(mongoDb_url);

//User-schema;

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
});

//my-Model

const userModel = mongoose.model("user", userSchema);

// my-APIs
app.get("/", (req, res) => {
  res.send(`server is running on port: ${PORT}`);
});

// API- signup
app.post("/signup", async (req, res) => {
  console.log(req.body);
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.send({ message: "Email is already registered", alert: false });
    } else {
      const add = new userModel({
        firstName,
        lastName,
        email,
        password: password,
        confirmPassword: confirmPassword,
      });

      await add.save();
      return res.send({ message: "Signup successful", alert: true });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Server Error" });
  }
});

// API login
app.post("/login", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  let existingUser;
  try {
    existingUser = await userModel.findOne({ email });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Server Error" });
  }
  if (existingUser) {
    return res.send({ message: "Login Succesful", alert: true });
  } else {
    return res.send({ message: "User Not Found, kindly sign up", alert: false });
  }
  
}) 

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});


//Product Schema

const schemaProduct = mongoose.Schema({
  name : String,
  category : String,
  image : String,
  price : String,
  description : String,
});

const productModel = mongoose.model("product", schemaProduct);

//post a product into the database
// API post product
app.post("/uploadproduct", async(req, res) => {
  console.log(req.body);
    const data = await productModel(req.body);
    const dataSave = await data.save();
  res.send({message : "upload succesfully"});
});

//get product from database
//API get  All products
app.get("/product", async(req, res) => {
  const data = await productModel.find({})
  res.send(data)
})