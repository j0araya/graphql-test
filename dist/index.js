"use strict";

var _express = _interopRequireDefault(require("express"));

var _expressGraphql = _interopRequireDefault(require("express-graphql"));

var _schemas = _interopRequireDefault(require("../schemas/schemas"));

var _db = require("./db");

var _path = _interopRequireDefault(require("path"));

var _http = _interopRequireDefault(require("http"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = process.env.PORT || 8080;
var app = (0, _express["default"])();
(0, _db.connect)();
app.set('port', PORT);
app.get('/', function (req, res) {// res.json({ message: 'it WOrks' });
});

_mongoose["default"].connection.once('open', function () {
  console.log('connected to database');
});

app.use('*', (0, _cors["default"])());
app.use('/graphql', (0, _cors["default"])(), (0, _expressGraphql["default"])({
  graphiql: true,
  schema: _schemas["default"],
  rootValue: 'global',
  context: {
    messageId: 'test' // <--- context

  }
}));
app.listen(PORT, function () {
  console.log('Server running succefully...'.PORT);
});
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'public')));
//# sourceMappingURL=index.js.map