const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Users = require("../models/loginRegister");
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return (
    jwt.sign({ id }, "kishan sheth super secret key"),
    {
      expiresIn: maxAge,
    }
  );
};

module.exports.register = async (req, res) => {
    console.log('--------------');
  const { password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 8);
  try {
    console.log(req.body);
    const newUser = new Users({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      birthday: req.body.birthday,
      image: req.body.image,
      address: req.body.address,
      phone: req.body.phone,
      isAdmin: req.body.isAdmin,
    });

    const result = await newUser.save();
    const { password, ...rest } = result.toJSON();
    const token = createToken(newUser._id);

    res.cookie("jwt", token, {
      withCredentials: true,
      maxAge: maxAge * 1000,
    });
    res.status(201).json({ user: newUser, created: true });
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).send("Please provide username and password");
    }
    const user = await Users.findOne({ email: email }).exec();

    if (!user) {
      return res.status(400).send("Invalid username or password");
    }

    console.log(user);

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(400).send("Invalid email or password");
    }

    const token = createToken(user._id);

    res.cookie("jwt", token, {
      withCredentials: true,
      maxAge: maxAge * 1000,
    });
    res.status(200).json({ user: user, created: true });
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
};
