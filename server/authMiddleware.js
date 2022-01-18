const User = require("./db/models/User");

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log('token in middleware', token)
    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch(error) {
    next(error);
  }
};

module.exports = requireToken;
