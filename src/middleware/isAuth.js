const isAuth = (req, res, next) => {
  if (!req.body.session) {
    res.send('<h1>U are not authenticated</h1>');
  } else {
    next();
  }
};

module.exports = isAuth;
