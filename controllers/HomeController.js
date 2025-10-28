const {User} = require('../models');

exports.index = (req, res) => {
  res.render("home/index", {
    title: "Welcome",
    message: "Hello from MVC!",
  });
};

exports.getAllUsers = async (req,res) =>{
try {
  const user = await User.findAll();

  return res.json(users);
} catch(error){
  console.error("error fetching user", error);
  res.status(500).send("internal server error");
}
};