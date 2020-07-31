const User = require("../models/user");
const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET;

module.exports = {
  signup,
  login,
};

async function signup(req, res) {
  req.body.role = "user";
  console.log(req.body);
  const user = new User(req.body);
  try {
    await user.save();
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ err: "bad credentials" });
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    { user: { id: user.id, name: user.name, role: user.role } },
    SECRET,
    {
      expiresIn: "24h",
    }
  );
}
