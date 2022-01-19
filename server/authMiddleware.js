const User = require("./db/models/User");

const requireToken = async (req, res, next) => {
  console.log( 'Hiii')

  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch(error) {
    next(error);
  }
};

const isAdmin = async (req, res, next) => {
console.log( 'HELLO')
    if(!req.user.isAdmin) {
    res.send('You dont have access!')
    }
    next()
}

module.exports =
{ requireToken, isAdmin };
