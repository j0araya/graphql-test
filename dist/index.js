"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _expressGraphql = _interopRequireDefault(require("express-graphql"));

var _graphql = require("graphql");

var _schemas = _interopRequireDefault(require("./schemas/schemas"));

var _Models = _interopRequireDefault(require("./models/Models"));

var _db = require("./db");

var _path = _interopRequireDefault(require("path"));

var _http = require("http");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _cors = _interopRequireDefault(require("cors"));

var _compression = _interopRequireDefault(require("compression"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _subscriptionsTransportWs = require("subscriptions-transport-ws");

var _apolloServerExpress = require("apollo-server-express");

var _serverConfig = require("./serverConfig");

var app = (0, _express["default"])();
var server = (0, _http.createServer)(app);
(0, _db.connect)();
app.set('port', _serverConfig.PORT);
app.get('/', function (req, res) {// res.json({ message: 'it WOrks' });
});

_mongoose["default"].connection.once('open', function () {
  console.log('connected to database');
});

app.use('*', (0, _cors["default"])());
app.use((0, _compression["default"])());
app.use('/graphql', _bodyParser["default"].json(), (0, _expressGraphql["default"])({
  graphiql: true,
  schema: _schemas["default"],
  rootValue: 'global',
  context: _schemas["default"]
}));
server.listen(_serverConfig.PORT, function () {
  new _subscriptionsTransportWs.SubscriptionServer({
    execute: _graphql.execute,
    subscribe: _graphql.subscribe,
    schema: _schemas["default"]
  }, {
    server: server,
    path: '/subscriptions'
  }); // console.log('Server running succefully...'. PORT)
});
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'public')));
//# sourceMappingURL=index.js.map