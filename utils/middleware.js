const jwt = require('jsonwebtoken');

exports.authenticate = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) {
    res.status(401).json({ error: 'Access Denied!' });
  } else {
    const access_token = auth.split('Bearer ')[1];
    jwt.verify(access_token, process.env.KEY, function(err, decoded) {
      if (err) {
        res.status(401).json({ error: 'Access Denied!' });
      }
      req.auth_user = decoded;
      next();
    });
  }
};
