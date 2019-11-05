const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(8);

module.exports = {
  hash: function(password) {
    return bcrypt.hashSync(password, salt);
  },
  compare: function(password, hashPassword) {
    return bcrypt.compareSync(password, hashPassword);
  },
};
