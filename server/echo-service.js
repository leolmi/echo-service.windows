/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 200 OK
 Standard response for successful HTTP requests. The actual response will depend on the request method used. In a GET request, the response will contain an entity corresponding to the requested resource. In a POST request the response will contain an entity describing or containing the result of the action.

 201 Created
 The request has been fulfilled and resulted in a new resource being created.

 202 Accepted
 The request has been accepted for processing, but the processing has not been completed. The request might or might not eventually be acted upon, as it might be disallowed when processing actually takes place.

 203 Non-Authoritative Information (since HTTP/1.1)
 The server successfully processed the request, but is returning information that may be from another source.

 204 No Content
 The server successfully processed the request, but is not returning any content. Usually used as a response to a successful delete request.

 205 Reset Content
 The server successfully processed the request, but is not returning any content. Unlike a 204 response, this response requires that the requester reset the document view.

 206 Partial Content
 The server is delivering only part of the resource (byte serving) due to a range header sent by the client. The range header is used by tools like wget to enable resuming of interrupted downloads, or split a download into multiple simultaneous streams.

 207 Multi-Status (WebDAV; RFC 4918)
 The message body that follows is an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.[4]

 208 Already Reported (WebDAV; RFC 5842)
 The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again.

 226 IM Used (RFC 3229)
 */

const _ = __webpack_require__(0);
const fs = __webpack_require__(5);
const _release = typeof __webpack_require__ === "function";
const _use =  true ? require : require;
var noop = function() {};
exports.noop = noop;

/**
 * Return standard 200
 * @param res
 * @param obj
 * @param cb
 * @returns {*}
 */
var ok = function(res, obj, cb) {
  cb = cb || noop;
  res.json(200, obj);
  return cb(obj);
};
exports.ok = ok;

/**
 * Return standard 201
 * @param res
 * @param obj
 * @param cb
 * @returns {*}
 */
var created = function(res, obj, cb) {
  cb = cb || noop;
  res.json(201, obj);
  return cb(obj);
};
exports.created = created;

/**
 * Return standard 204
 * @param res
 * @param obj
 * @param cb
 * @returns {*}
 */
var deleted = function(res, obj, cb) {
  cb = cb || noop;
  res.json(204);
  return cb(obj);
};
exports.deleted = deleted;

/**
 * Return standard 404
 * @param res
 * @returns {*}
 */
var notfound = function(res) { res.send(404); };
exports.notfound = notfound;

/**
 * Return standard 500
 * @param res
 * @param err
 * @param [code]
 * @returns {*}
 */
var error = function(res, err, code) {
  if (err && err.message)
    err = err.message;
  //  err = new Error(err);
  console.error(err);
  res.send(code || 500, err);
};
exports.error = error;

/**
 * Effettua il log su console
 * @param message
 * @param [err]
 * @param {number} [maxLength]
 */
var _log = function(message, err, maxLength) {
  var errmsg = '';
  if (err && _.isString(err)) errmsg = err;
  else if (err) errmsg = JSON.stringify(err);
  if (errmsg) message = message + ' ' + errmsg;
  if (message && maxLength) message = message.substr(0, maxLength)+'...';
  if (err) {
    console.error(message);
  } else {
    console.log(message);
  }
};
exports.log = _log;

/**
 * Aggiorna l'elemento ricercato per id
 * @param schema
 * @param req
 * @param res
 * @param {Function} customize
 * @param {Function} cb
 * @param {Boolean} [verbose]
 */
exports.update = function(schema, req, res, customize, cb, verbose) {
  if (verbose) console.log('[UPDATE] - body: ' + JSON.stringify(req.body));
  if (req.body._id) {
    delete req.body._id;
  }
  if (verbose) console.log('[UPDATE] - params: ' + JSON.stringify(req.params));
  schema.findById(req.params.id, function (err, obj) {
    if (err) {
      if (verbose) console.error('[UPDATE.ERROR] Schema dati: "' + schema.modelName + '", ' + err.message);
      return error(res, err);
    }
    if (!obj) {
      return notfound(res);
    }
    if (verbose) console.log('[UPDATE] - before merge: ' + JSON.stringify(obj));
    var updated = _.merge(obj, req.body, function (a, b) {
      return _.isArray(a) ? b : undefined;
    });
    updated.__v = obj.__v;
    if (customize)
      customize(updated);
    if (verbose) console.log('[UPDATE] - after merge: ' + JSON.stringify(updated));
    updated.save(function (err) {
      if (err) {
        if (verbose) console.log('[UPDATE.MONGO.ERROR] - save: ' + err.message);
        return error(res, err);
      }
      ok(res, obj, cb);
    });
  });
};

exports.create = function(schema, req, res, cb) {
  cb = cb || noop;
  schema.create(req.body, function(err, obj) {
    if(err) { return error(res, err); }
    return created(res, obj, cb);
  });
};

exports.destroy = function(schema, req, res, cb) {
  schema.findById(req.params.id, function (err, obj) {
    if(err) { return error(res, err); }
    if(!obj) { return notfound(res); }
    obj.remove(function(err) {
      if(err) { return error(res, err); }
      return deleted(res, obj, cb);
    });
  });
};

exports.get = function(schema, req, res) {
  schema.findById(req.params.id, function (err, obj) {
    if(err) {
      _log(null, '[TEST-X5] u.get.findById('+req.params.id+') ERROR:'+err.toString(), 100);
      return error(res, err);
    }
    if(!obj) {
      _log('[TEST-X5] u.get.findById('+req.params.id+') NO OBJECT');
      return notfound(res);
    }
    _log('[TEST-X5] u.get.findById('+req.params.id+') SUCCESS:'+JSON.stringify(obj), null, 100);
    res.json(obj);
  });
};

exports.index = function(schema, req, res, filter) {
  filter = filter || {};
  schema.find(filter, function (err, objs) {
    _log('Trovati: '+objs.length+' elementi di tipo "'+schema.fsTpye+'".');
    if(err) { return error(res, err); }
    ok(res, objs);
  });
};


var Composer = function(execFnName) {
  this.exec = execFnName || 'exec';
  this.stack = [];
  this.step=  0;
};
Composer.prototype = {
  use: function(step) {
    var self = this;
    self.stack.push(step);
    return self;
  },
  getStep: function() {
    var self = this;
    var step = self.step < self.stack.length ? self.stack[self.step] : null;
    self.step++;
    return step;
  },
  run: function(cb) {
    cb = cb || noop;
    var self = this;
    self.step = 0;
    if (self.stack.length<=0) return cb();
    (function next() {
      var step = self.getStep();
      if (!step) {
        cb();
      } else if (_.isFunction(step)) {
        step.call(self, next);
      } else if (_.isFunction(step[self.exec])) {
        step[self.exec](next);
      }
    })();
  }
};
exports.compose = function() { return new Composer(); };

/**
 * Generate new GUID
 * @returns {string}
 */
exports.guid = function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
};

function _toString(o) {
  if (_.isNaN(o) || _.isUndefined(o)) return '';
  if (_.isString(o)) return o;
  if (_.isFunction(o.toString))
    return o.toString();
  return JSON.stringify(o);
}

/**
 * Costruisce un messaggio effettuando la replace con i dati
 * in args (per indice) o i valori in o (object)
 * @param {string} msg
 * @param {array|object} args
 * @param {object} [o]
 * @returns {*}
 */
exports.format = function(msg, args, o) {
  if (args && _.isArray(args)) {
    args.forEach(function (v, i) {
      var rgx = new RegExp('\\{' + i + '\\}', 'g');
      msg = msg.replace(rgx, _toString(v));
    });
  }
  else if (args && _.isObject(args)) {
    o = args;
  }
  if (o && _.isObject(o)) {
    for(var pn in o) {
      var rgx = new RegExp('\\{'+pn+'\\}', 'g');
      msg = msg.replace(rgx, _toString(o[pn]));
    }
  }
  return msg;
};

exports.str = function() {
  const args = Array.prototype.slice.call(arguments);
  var txt = args.shift();
  if (txt) {
    var pi = 0;
    while (txt.indexOf('%s') > -1) {
      txt = txt.replace('%s', '' + (args[pi] || ''));
      pi++;
    }
  }
  return txt;
};

function _getErrorMessage(err) {
  err = err || 'Generic error!';
  if (_.isString(err))
    return err;
  if (_.isObject(err)) {
    if (err.message)
      return err.message;
    if (err.data)
      return _getErrorMessage(err.data);
    if (_.isFunction(err.toString))
      return err.toString();
  }
  return JSON.stringify(err);
}
exports.getErrorMessage = _getErrorMessage;


exports.getExtension = function(fn) {
  fn = fn ? ('' + fn).toLowerCase().trim() : '';
  var p = fn.lastIndexOf('.');
  if (p > 0&& p < fn.length - 1) return fn.substr(p + 1).trim();
};

function _isNulUndNan(v) {
  return _.isNull(v) || _.isUndefined(v) || _.isNaN(v);
}

function _checkBoolValue(value) {
  if (_isNulUndNan(value)) {
    return null;
  } else if (!_.isBoolean(value)) {
    return !!value
  }
  return value;
}
function _checkDatetimeValue(value) {
  if (_isNulUndNan(value))
    return null;
  else if (!_.isDate(value))
    return new Date(value);
  return value;
}
function _checkNumberValue(value) {
  if (_isNulUndNan(value))
    return null;
  else if (!_.isNumber(value))
    return parseFloat(value);
  return value;
}

exports.getTypedValue = function(v, type) {
  switch(type) {
    case 'number':
      return _checkNumberValue(value);
    case 'date':
      return _checkDatetimeValue(value);
    case 'bool':
      return _checkBoolValue(value);
    case 'string':
    default: return v?''+v:'';
  }
};


exports.getPathObj = function(obj, path) {
  if (!path || !_.isString(path) || !_.isObject(obj)) return;
  path = path.trim();
  if (path.indexOf('[') !== 0) path = '.' + path;
  var f = new Function('o', 'return o' + path);
  try {
    return f(obj);
  } catch (err) {}
};


exports.path = function() {
  const args = Array.prototype.slice.call(arguments);
  const url = [];
  args.forEach(function (part) {
    part = part.replace(/:\/\//, '{PATH-PROTOCOL-DELIMITER}');
    part.split(/\//).forEach(function (p) {
      if (p === '..') {
        url.pop();
      } else if (p) {
        url.push(p.replace(/{PATH-PROTOCOL-DELIMITER}/, '://'));
      }
    });
  });
  return url.join('/');
};

exports.equal = function(s1,s2) {
  return _.isString(s1) && _.isString(s2) && s1.trim().toLowerCase()===s2.trim().toLowerCase();
};

const TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
const WORDS = TEXT.split(' ');

function _random(min, max, o) {
  var cll;
  if (_.isArray(min)) {
    cll = min;
    min = 0;
    max = cll.length-1;
  }
  if (!_.isNumber(min)) return 0;
  if (!_.isNumber(max)) {
    max = min;
    min = 0;
  }
  const rn = (Math.random() * max) + min;
  const rnv = ((o||{}).decimal && !cll) ? rn : Math.floor(rn);
  return (cll) ? cll[rnv] : rnv;
}

function _randomValue(o) {
  switch(o.type) {
    case 'integer':
      return _random(o.min||0, o.max||100000);
    case 'number':
      return _random(o.min||0, o.max||100000, {decimal:true});
    case 'date':
      const mind = (new Date(2000,1,1)).getTime();
      const maxd = (new Date()).getTime();
      const delta = (o.max||maxd) - (o.min||mind);
      const dt = (o.min||mind) + _random(0, delta);
      return new Date(dt);
    case 'bool':
      return !!_random(0,2);
      break;
    case 'string':
    default:
      const cll = o.words||WORDS;
      return _random(cll);
  }
}

function _row(schema) {
  const row = {};
  schema.forEach(function(c){
    row[c.name] = _randomValue(c);
  });
  return row;
}

exports.generateTable = function(o) {
  const rows = [];
  o = o||{};
  if (!_.isArray(o.columns)||o.columns.length<1) {
    o.columns = [];
    o.colCount = o.colCount||8;
    for (var c = 0; c < o.colCount; c++) {
      o.columns.push({name:'col'+(c+1), type:_random(['string','number','date','bool','integer'])});
    }
  }
  // console.log('GENERATE TABLE schema:', o.columns);
  o.rowCount = o.rowCount||20;
  for(var r = 0; r < o.rowCount; r++) {
    rows.push(_row(o.columns))
  }
  // console.log('GENERATE TABLE:', rows);
  return rows;
};

exports.getFileName = function(name) {
  return (name||'file').replace(/[\\\/\s:\*\?"<>\|]/gi, '_');
};

exports.saveFile = function(filename, obj, cb, noformat) {
  var content = (noformat === true) ? JSON.stringify(obj) : JSON.stringify(obj, null, 2);
  var buffer = Buffer.from(content);
  try {
    var writer = fs.createWriteStream(filename, {flags: 'w'});
    writer.on('error', function(err) {
      cb(err);
    });
    writer.write(buffer, function() {
      cb();
    });
  }
  catch(err) {
    cb(err);
  }
};

exports.events = function() {
  return {
    onLog: function() {}
  }
};

exports.elapsed = function(tm) {
  const now = new Date();
  return now.getTime() - tm.getTime();
};

exports.use = _use;
exports.release = _release;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {
const path = __webpack_require__(4);
const fs = __webpack_require__(5);
const _ = __webpack_require__(0);
const u = __webpack_require__(1);
const root = path.normalize(__dirname + '/../../..');
const sts_path = path.normalize(root + '/echo-service.json');
const sts = fs.existsSync(sts_path) ? u.use('../echo-service.json') : {};

function _checkDefaults(s) {
  _.keys(s).forEach(function(pn){
    s[pn] = s[pn]||s['default_'+pn];
  });
}

function _checkPath(p) {
  return p ? path.normalize(p) : p;
}

function _checkValues(s) {
  s.port = parseInt(s.port||9001);
  s.tokenExpiration = parseInt(s.tokenExpiration||5);
}

// Export the config object
// ==============================================
const settings = {
  env: 'development',
  // Root path of server
  root: root,
  // Server ip
  ip: process.env.ECHO_IP,
  // Server port
  port: process.env.ECHO_PORT,
  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: 'echo-service-secret'
  },
  // Log options
  log: {
    // Enabled log on file (server-side)
    file: true
  },
  // Path del server
  serverPath: path.normalize(__dirname + '/../..'),
  // Path del client
  clientPath: '',
  // Store path for scenarios
  logPath: _checkPath(process.env.ECHO_LOG),
  // Store path for scenarios
  storePath: _checkPath(process.env.ECHO_STORE),
  // Reporting path
  reportingPath: '',
  // Token expires in minutes
  tokenExpiration: 5,
  // List of user roles
  userRoles: ['guest', 'user', 'admin']
};

// extends on json settings
_.extend(settings, sts);

// check defaults
_checkDefaults(settings);
// check values
_checkValues(settings);


module.exports = settings;

/* WEBPACK VAR INJECTION */}.call(exports, "server\\config\\environment"))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {
const fs = __webpack_require__(5);
const path = __webpack_require__(4);
const u = __webpack_require__(1);
const config = __webpack_require__(2);
const socket = __webpack_require__(11);
const SEPARATOR = '¶';
const log_folder = config.logPath || (u.release ? config.serverPath : path.join(__dirname, 'data'));

// INIT
var _starton = new Date();
var _file_id = '';
var _log_file = '';

function _zz(v) {
  return (v < 10) ? '0' + v : '' + v;
}
function _fileId(dt) {
  const M = dt.getMonth() + 1;
  const D = dt.getDate();
  return dt.getFullYear() + _zz(M) + _zz(D);
}

function _init() {
  _file_id = _fileId(_starton);
  _log_file = path.join(log_folder, 'echo-' + _file_id + '.log');
}
_init();

function _checkFile() {
  const now = new Date();
  if (_fileId(now) !== _file_id) {
    _starton = now;
    _init();
  }
  return now;
}


function _update(item) {
  const now = _checkFile();
  const logstr = '\n[' + now.toLocaleTimeString() + ' - ' + item.type + '] ' + item.verb + ': ' + item.message + SEPARATOR;
  if ((config.log||{}).file === true) {
    fs.appendFile(_log_file, logstr, function (err) {
      if (err) console.error(err);
    });
  }
  console.log('ECHO-SERVICE:LOG ' + logstr, item);
}

function _insert(o) {
  o = o  || {};
  o.time = new Date();
  o.time_str = o.time.toLocaleTimeString();
  o.message = o.message || '';
  o.type = o.type || 'info';
  o.verb = o.verb || '';
  socket.events.onLog(o);
  _update(o);
}

function _message(verb, item, scenario) {
  return verb + ' ' + (item||{})._type + ' (' + ((item||{})._id||'unknown') + ') item in scenario ' + ((scenario||{}).name||'unknown');
}

exports.insert = _insert;

exports.error = function(err, res) {
  _insert({
    type: 'error',
    message: u.getErrorMessage(err),
    data: err
  });
  console.error(err);
  if (res) u.error(res, err);
};

exports.element = function(item, isnew, scenario) {
  const verb = isnew ? 'add' : 'update';
  _insert({verb:verb, type:item._type, data:item, message:_message(verb,item,scenario)});
};

exports.delete = function(item, scenario) {
  const verb = 'delete';
  _insert({verb:verb, type:item._type, data:item, message:_message(verb,item,scenario)});
};

exports.get = function(cb) {
  if (fs.existsSync(_log_file)) {
    fs.readFile(_log_file, 'utf8', function(err, data) {
      console.log('log content:', data);
      cb(err, (data||'').split(SEPARATOR));
    });
  } else {
    cb(null, []);
  }
};

/* WEBPACK VAR INJECTION */}.call(exports, "server\\api\\log"))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {
const config = __webpack_require__(2);
const fs = __webpack_require__(5);
const u = __webpack_require__(1);
const _ = __webpack_require__(0);
const io = __webpack_require__(33);
const Cache = __webpack_require__(34);
const Log = __webpack_require__(6);
const commons = __webpack_require__(35);
const version = __webpack_require__(36);
const path = __webpack_require__(4);
const zip = __webpack_require__(37);

const DEFAULT_SCENARIO = 'default';
const CURRENT_JSON = 'current.json';
const SCENARIO_JSON = 'scenario.json';
const current_json = path.join((u.release ? config.serverPath : __dirname), CURRENT_JSON);


Cache.options.get = _get;
Cache.options.getAll = _getAllDocuments;


// fs.watch(io.storePath, function(eventType, filename){
//   console.log('%s  >>>  %s', filename, eventType);
// });

// restituisce il singolo documento
function _get(o, cb) {
  _current(function (current) {
    const file = o.file || commons.encodeName(o);
    const fp = path.join(io.storePath, current.scenario.folder, file);
    io.loadSingleFile(fp, cb);
  });
}
exports.get = _get;


function _validate(json, info) {
  if (json && info) {
    json._type = info.type;
    json._id = info.id;
    json._tid = info.type + '@' + info.id;
  }
}

function _getAllDocuments(cb, o) {
  function __add(cll, json , options) {
    if (options.full) {
      cll.push(json);
    } else {
      cll.push({
        id: json.id,
        name: json.name||json.title,
        title: json.title||json.name,
        description: json.desc||json.description,
        tags: json.tags||[],
        modifiedAt:json.modifiedAt||json.modifiedOn,
        modifiedBy:json.modifiedBy,
        _id: json._id,
        _type: json._type,
        _tid: json._tid
      });
    }
  }
  const docs = [];
  if (_.isBoolean(o)) {
    o = {full:o};
  } else if (_.isFunction(o)) {
    o = {filter:o};
  } else {
    o = o || {};
  }
  _current(function (current) {
    _onScenarioFiles(current.scenario, function(info, next){
      io.loadSingleFile(info.filePath, function (err, json) {
        if (err) {
          console.error(err);
        } else {
          _validate(json, info);
          if (_.isFunction(o.filter)) {
            if (o.filter(json, info)) {
              __add(docs, json, o);
            }
          } else {
            __add(docs, json, o);
          }
        }
        next();
      });
    }, function(err) {
      cb(err, docs);
    });
  });
}
exports.getAllDocuments = _getAllDocuments;

function _onScenarioFiles(scenario, iterator, cb) {
  if (!(scenario||{}).folder) return cb();
  const scenario_folder = path.join(io.storePath, scenario.folder);
  fs.readdir(scenario_folder, function(err, files) {
    if (err) {
      cb(err);
    } else {
      const seq = u.compose();
      files.forEach(function (f) {
        const fp = path.join(io.storePath, scenario.folder, f);
        const m = (/(\w+)@(.*)\.json/g).exec(f);
        if (m) {
          seq.use(function(next){
            iterator({fileName:f, filePath:fp, type:m[1], id:m[2]}, next);
          });
        }
      });
      seq.run(function() {
        cb();
      });
    }
  });
}

function _extendScenarioInfo(scenario, cb) {
  scenario.name = scenario.name || scenario.folder;
  _onScenarioFiles(scenario, function(info, next) {
    if (scenario) {
      scenario[info.type] = scenario[info.type] || [];
      scenario[info.type].push(info.id);
    }
    next();
  }, cb);
}

function _extend_scenario(info, other) {
  const _folder = info.folder;
  _.extend(info, other);
  info.folder = _folder;
}

// carica il singolo scenario
// gli scenari (come insieme di documenti) sono contenuti nelle relative cartelle
// se nella cartella esiste un file (scenario.json) questo contiene le specifiche
function _loadScenario(info, current, cll) {
  function __extend(cb) {
    _extendScenarioInfo(info, function() {
      if (((current||{}).scenario||{}).folder === info.folder) info._current = true;
      if (_.isArray(cll)) cll.push(info);
      cb();
    });
  }
  return function(cb) {
    io.onFile(io.storePath, info.folder, SCENARIO_JSON, function(file) {
      if (file) {
        io.loadSingleFile(file, function (err, json) {
          _extend_scenario(info, json);
          __extend(cb);
        });
      } else {
        __extend(cb);
      }
    });
  }
}

//Elenco degli scenari
exports.index = function(req, res) {
  const scenari = [];
  fs.readdir(io.storePath, function(err, files){
    if (err) return u.error(err);
    _current(function(current){
      const seq = u.compose();
      files.forEach(function(f){
        io.onFolder(io.storePath, f, function(folder){
          if (folder) {
            const info = {folder: f};
            seq.use(_loadScenario(info, current, scenari));
          }
        });
      });
      seq.run(function() {
        u.ok(res, scenari);
      });
    });
  });
};

function _validateInfo(info) {
  info.scenario = info.scenario || {};
  info.scenario.folder = info.scenario.folder || DEFAULT_SCENARIO;
  info.scenario.name = info.scenario.name || info.scenario.folder;
}

function _current(cb) {
  io.onFile(current_json, function(file){
    const current = {};
    if (file) {
      // carica il file se estiste
      io.loadSingleFile(file, function(err, info) {
        if (err) console.error(err);
        _.extend(current, info||{});
        _validateInfo(current);
        _loadScenario(current.scenario, current)(function(){
          cb(current);
        });
      });
    } else {
      // crea un nuovo file se non esiste
      _validateInfo(current);
      fs.writeFile(current_json, JSON.stringify(current, null, 2));
      cb(current);
    }
  });
}
exports.current = _current;

// Restituisce l'elenco delle info dei documenti dello scenario corrente
exports.docs = function(req, res) {
  const types = req.params.type ? req.params.type.split(',') : null;
  const options = types ? {
    full: true,
    filter: function(json, info) {
      return types.indexOf(json._type || info._type) > -1;
    }
  } : {};
  _getAllDocuments(function(err, docs){
    if (err) console.error(err);
    u.ok(res, docs||[]);
  }, options);
};

function _getTags(doc) {
  var t = (doc || {}).tags || [];
  if (_.isString(t)) t = t.split(',');
  return _.isArray(t) ? t : [];
}

// Restituisce l'elenco dei tags sui documenti
exports.tags = function(req, res) {
  _getAllDocuments(function(err, docs){
    if (err) console.error(err);
    const tags = [];
    (docs||[]).forEach(function(d){
      tags.push.apply(tags, _getTags(d));
    });
    u.ok(res, tags);
  });
};

// Restituisce le info dell'ambiente richiesto (se specificato)
// altrimenti le info dell'ambiente corrente
exports.info = function(req, res) {
  if ((req.params||{}).name) {
    const info = {folder: req.params.name, path:path.join(io.storePath, req.params.name)};
    _loadScenario(info)(function(){
      u.ok(res, info);
    });
  } else {
    _current(function(current) {
      const info = _.clone(version.infos);
      info.store = io.storePath;
      info.logServer = !!(config.log||{}).file;
      info.mode = config.env;
      _.extend(info, current);
      _extendScenarioInfo(info.scenario, function() {
        u.ok(res, info);
      });
    });
  }
};
exports.checkInfo = function(req, cb) {
  cb(null, { auth: false });
};

/**
 * Le impostazioni di scenario sono contenuti che vengono aggiunti al file di scenario
 */
exports.settings = function(req, res) {
  const sts = req.body;
  if (!sts) return u.error('Undefined scenario settings.');
  _current(function (current) {
    current.scenario.settings = sts;
    const fp = path.join(io.storePath, current.scenario.folder, SCENARIO_JSON);
    io.saveSingleFile(fp, current.scenario, function (err) {
      err ? u.error(res, err) : u.ok(res);
    });
  });
};




function _getElement(info, cb) {
  if (_.isString(info)) info = {id:info};
  if (!info.id && !info._id) return cb('Undefined element identity');
  _current(function (current) {
    if (info.type || info._type) {
      const fn = commons.encodeName(info);
      const fp = path.join(io.storePath, current.scenario.folder, fn);
      console.log('request document: ', fp);
      io.loadSingleFile(fp, function (err, doc) { cb(err, doc, fp, current); });
    } else {
      const check = '(.*?)@' + (info.id||info._id) + '.json';
      io.onScenarioFiles(current.scenario, check, function (f, fp) {
        io.loadSingleFile(fp, function (err, doc) {
          if (err) return cb(err);
          commons.validate(doc, f);
          cb(null, doc, fp, current);
        });
        return true;
      }, function () {
        cb('Not found (' + info.id + ')');
      });
    }
  });
}
exports.getElement = _getElement;

// Restituisce il singolo documento
exports.read = function(req, res) {
  _getElement(req.params, function(err, doc){
    err ? u.error(res, err) : u.ok(res, doc);
  });
};
exports.checkRead = function(req, cb) {
  cb(null, { auth: false });
};

function _saveFile(data, path, cb) {
  fs.truncate(path, 0, function(err) {
    if (err) return console.log("Error clearing file: " + err);
    const content = JSON.stringify(data||{}, null, 2);
    fs.writeFile(path, content, function (err) {
      if (err) return console.log("Error writing file: " + err);
      cb();
    });
  });
}

// salva le info di scenario
function _save(scenario, res, cb) {
  if (!scenario.name) return u.error(res, 'Undefined scenario name');
  console.log('SAVE SCENARIO:', scenario);
  scenario.folder = u.getFileName(scenario.name);
  const sf = path.join(io.storePath, scenario.folder);
  io.checkFolder(sf, function(err) {
    if (err) console.error(err);
    const cp = path.join(io.storePath, scenario.folder, SCENARIO_JSON);
    io.saveSingleFile(cp, scenario, function(err){
      err ? u.error(res, err) : cb(scenario);
    });
  });
}

// applica lo scenario scelto
function _apply(info, res) {
  function __update(current) {
    _validateInfo(current);
    _saveFile(current, current_json, function (err) {
      if (err) return u.error(res, err);
      const result = _.clone(version.infos);
      _.extend(result, current);
      Cache.refresh();
      u.ok(res, result);
    });
  }
  io.onFile(io.storePath, info.folder, SCENARIO_JSON, function (file) {
    const current = {
      scenario: _.omitBy(info, function(p, n) {
        return _.isArray(p) || _.startsWith(n, '_');
      })
    };
    if (file) {
      io.loadSingleFile(file, function (err, json) {
        _extend_scenario(current.scenario, json);
        __update(current);
      });
    } else {
      __update(current);
    }
  });
}


// Applica lo scenario
exports.apply = function(req, res) {
  console.log('SET SCENARIO:', req.body);
  (req.body||{}).folder ?
    _apply(req.body, res) :
    _save(req.body, res, function(s){ _apply(s, res); });
};



// applica le modifiche allo scenario
exports.update = function(req, res) {
  const scenario = _.omitBy((req.body || {}), function(p, n) {
    return _.isArray(p) || _.startsWith(n, '_');
  });
  if (!scenario.folder) return u.error(res, 'Undefined scenario!');
  const fp = path.join(io.storePath, scenario.folder, SCENARIO_JSON);
  io.saveSingleFile(fp, scenario, function (err) {
    err ? u.error(res, err) : u.ok(res);
  });
};




function _checkDoc(req, res, cb) {
  const doc = req.body;
  if (!doc || !_.isObject(doc)) return u.error(res, 'Undefined document!');
  doc._id = doc._id || doc.id;
  if (!doc._id) return u.error(res, 'Undefined document identity!');
  if (!doc._type && !doc.type) return u.error(res, 'Undefined document type!');
  delete doc._new;
  cb(doc);
}

// Salva il singolo elemento dello scenario
exports.saveDoc = function(req, res) {
  console.log('SAVE DOCUMENT:', req.body);
  _checkDoc(req, res, function(doc){
    const fn = commons.encodeName(doc);
    _current(function(current){
      const sf = path.join(io.storePath, current.scenario.folder);
      io.checkFolder(sf, function(err) {
        if (err) console.error(err);
        const fp = path.join(io.storePath, current.scenario.folder, fn);
        console.log('save document: ', fp);
        const isnew = !fs.existsSync(fp);
        if (isnew) {
          doc.createdBy = (req.user||{}).name||'echo';
          doc.createdAt = doc.modifiedAt||new Date();
        }
        io.saveSingleFile(fp, doc, function (err) {
          if (err) return u.error(res, err);
          u.ok(res, doc);
          Log.element(doc, isnew, current);
        });
      });
    });
  });
};
exports.checkSaveDoc = function(req, cb) {
  cb(null, { auth: false });
};

// Elimina un elemento dello scenario
exports.delete = function(req, res) {
  console.log('DELETE DOCUMENT:', req.params);
  _getElement(req.params, function(err, doc, fp, scenario){
    if (err) return u.error(res, err);
    io.deleteFile(fp, function (err) {
      if (err) return u.error(res, err);
      u.ok(res);
      Log.delete(doc, scenario);
    });
  });
};
exports.checkDelete = function(req, cb) {
  cb(null, { auth: false });
};


// Importa documenti in uno scenario
exports.push = function(req, res) {
  const info = req.body || {};
  if (!info.source || !_.isArray(info.source) || !info.source.length) return u.error(res, 'Undefined source!');
  if (!info.target || !info.target.folder) return u.error(res, 'Undefined target scenario');
  const tf = path.join(io.storePath, info.target.folder);
  io.checkFolder(tf, function(err) {
    if (err) return u.error(res, err);
    const seq = u.compose();
    const result = {count:0};
    info.source.forEach(function (s) {
      seq.use(function (cb) {
        const file = commons.encodeName(s);
        const fp = path.join(io.storePath, info.target.folder, file);
        io.saveSingleFile(fp, s, function(err) {
          if (err) {
            console.error(err);
          } else {
            result.count++;
            Log.element(s, true, {name:info.target.folder});
          }
          cb();
        });
      });
    });
    seq.run(function () {
      u.ok(res, 'Imported ' + result.count + ' elements into "' + info.target.name + '" scenario.');
    });
  });
};
exports.checkWrite = function(req, cb) {
  cb(null, { auth: false });
};

function _checkFolder(rpath, cb) {
  const folder = path.dirname(rpath);
  if (!folder) return cb();
  const fp = path.join(io.storePath, folder);
  io.checkFolder(fp, function(err){
    err ? console.error(err) : cb();
  });
}

function _saveSingleZipFile(z, rpath, cb) {
  z.file(rpath).async('string').then(function(json){
    _checkFolder(rpath, function() {
      const fp = path.join(io.storePath, rpath);
      const o = JSON.parse(json);
      io.saveSingleFile(fp, o, cb);
    });
  }, cb);
}

// Importa uno scenario
exports.upload = function(req, res) {
  var z = new zip();
  var data = new Buffer('');
  req.on('data', function(chunk) {
    data = Buffer.concat([data, chunk]);
  });
  req.on('end', function() {
    z.loadAsync(data).then(function () {
      const seq = u.compose();
      z.forEach(function(rp){
        if (/(.*).json/i.test(rp)) {
          seq.use(function(cb){
            _saveSingleZipFile(z, rp, function(err){
              if (err) console.error(err);
              cb();
            });
          });
        }
      });
      seq.run(function() {
        u.ok(res);
      });
    }, function(err){
      u.error(res, err);
    });
  });
  req.on('error', function(err) {
    u.error(res, err);
  });
};


function _zipFile(z, path, rpath, cb) {
  io.loadSingleFile(path, function(err, o){
    if (err) {
      console.error(err);
    } else {
      const content = JSON.stringify(o, null, 2);
      z.file(rpath, content);
    }
    cb();
  });
}

// Scarica il file richiesto e tutte le sue dipendenze
exports.download = function(req, res) {
  const folder = req.params.folder;
  if (!folder) return u.error(res, 'Undefined scenario!');
  var z = new zip();
  const seq = u.compose();
  const sf = path.join(io.storePath, folder);
  fs.readdir(sf, function (err, files) {
    if (err) return u.error(res, err);
    files.forEach(function(f){
      if (/(.*).json/i.test(f)) {
        seq.use(function(cb) {
          const rfp = path.join(folder, f);
          const fp = path.join(sf, f);
          _zipFile(z, fp, rfp, cb);
        });
      }
    });
    seq.run(function(){
      const fn = folder + '.zip';
      const zp = path.join(io.storePath, fn);
      z.generateNodeStream({type:'nodebuffer',streamFiles:true})
        .pipe(fs.createWriteStream(zp))
        .on('finish', function () {
          res.download(zp, fn);
        });
    });
  });
};






/* WEBPACK VAR INJECTION */}.call(exports, "server\\api\\scenario"))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var passport = __webpack_require__(9);
var config = __webpack_require__(2);
var jwt = __webpack_require__(12);
var expressJwt = __webpack_require__(38);
var compose = __webpack_require__(39);
var Users = __webpack_require__(13);
var validateJwt = expressJwt({ secret: config.secrets.session });
var Scenario = __webpack_require__(7);

/**
 * Attaches the user object to the request if authenticated
 * Otherwise returns 403/401
 * @param: [check]
 */
function isAuthenticated(check) {
  return compose()
  // Validate jwt
    .use(function (req, res, next) {
      Scenario.current(function (current) {
        if (!current) {return res.send(404);}
        req.auth = current.auth;
        if (current.auth) {
          if (req.query && req.query.hasOwnProperty('access_token')) {
            req.headers.authorization = 'Bearer ' + req.query.access_token;
          }
          validateJwt(req, res, next);
        } else {
          next();
        }
      });
    })
    // Attach user to request
    .use(function (req, res, next) {
      if (req.auth) {
        Users.find(req.user._id, function (err, user) {
          if (err) {return next(err);}
          if (!user) {return res.send(404);}
          req.user = user;
          next();
        });
      } else {
        next();
      }
    })
    // Security check
    .use(function (req, res, next) {
      if (req.auth && _.isFunction(check)) {
        check(req, function (err, result) {
          if (err) {return next(err);}
          if (!result) {return res.send(403);}
          next();
        });
      } else {
        next();
      }
    });
}

/**
 * Verifica se è necessaria l'autenticazione dell'utente sullo scenario richiesto
 */
function needAuthentication(check) {
  return compose()
    // Security on scenario
    .use(function(req, res, next) {
      if (_.isFunction(check)) {
        check(req, function (err, info) {
          if (err) {return next(err);}
          if (!info) {return next(new Error('Authorization context not found!'));}
          if (!info.auth) {return next();}
          // allow access_token to be passed through query parameter as well
          if(req.query && req.query.hasOwnProperty('access_token')) {
            req.headers.authorization = 'Bearer ' + req.query.access_token;
          }
          validateJwt(req, res, next);
        });
      } else {
        next();
      }
    });
}

/**
 * Checks if the user role meets the minimum requirements of the route
 */
function hasRole(roleRequired) {
  if (!roleRequired) throw new Error('Required role needs to be set');

  return compose()
    .use(isAuthenticated())
    .use(function meetsRequirements(req, res, next) {
      if (req.user && config.userRoles.indexOf(req.user.role) >= config.userRoles.indexOf(roleRequired)) {
        next();
      }
      else {
        res.send(403);
      }
    });
}

/**
 * Returns a jwt token signed by the app secret
 */
function signToken(id) {
  return jwt.sign({ _id: id }, config.secrets.session, { expiresInMinutes: 60*5 });
}

/**
 * Set token cookie directly for oAuth strategies
 */
function setTokenCookie(req, res) {
  if (!req.user) {return res.json(404, { message: 'Something went wrong, please try again.'});}
  var token = signToken(req.user._id, req.user.role);
  res.cookie('token', JSON.stringify(token));
  res.redirect('/');
}

exports.isAuthenticated = isAuthenticated;
exports.hasRole = hasRole;
exports.signToken = signToken;
exports.setTokenCookie = setTokenCookie;
exports.needAuthentication = needAuthentication;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _ = __webpack_require__(0);
var u = __webpack_require__(1);


var _standardTypes = {
  number:'number',
  integer:'integer',
  text:'text',
  string:'string',
  datetime:'datetime',
  boolean:'boolean'
};
exports.standardTypes = _standardTypes;

var TableSchema = function(helper, tablename, columns) {
  this.name = tablename;
  this.columns = columns;
  this.helper = helper;
};
TableSchema.prototype = {
  name:'',
  columns:[],
  helper: null,
  getSqlValue: function(col, value) {
    var column = _.isObject(col) ? col : _.find(this.columns, function (c) {
      return c.COLUMN_NAME == col;
    });
    return this.helper ?
      this.helper.getSqlValue(column.DATA_TYPE, value) :
      value;
  }
};

exports.getTableSchema = function(helper, tablename, columns) {
  return new TableSchema(helper, tablename, columns);
};

exports.mergeStr = function(value, template) {
  template = template || '00';
  value = '' + value;
  if (value.length < template.length)
    return template.slice(0, -value.length) + value;
  return value;
};

function _getConstraint(column, others) {
  var cns = '';
  var c = column ? column.constraints : {};
  if (c.notNull) cns+=' NOT NULL';
  if (c.unique) cns+=' UNIQUE';
  if (c.primaryKey) cns+=' PRIMARY KEY';
  if (c.foreignKey && c.foreignTable) cns+=' FOREIGN KEY REFERENCES '+c.foreignTable+'('+c.foreignKey+')';
  if (c.check) cns+=' CHECK ('+c.check+')';
  if (c.default) cns+=' DEFAULT '+c.default;
  return cns
}
function _getName(schema) {
  return _.isString(schema) ? schema : schema.name;
}
function _getType(c) {
  switch(c.type) {
    case _standardTypes.text:
      return (c.unicode?'n':'')+'text';
    case _standardTypes.integer:
      return 'int';
    case _standardTypes.numeric:
      return 'float';
    case _standardTypes.datetime:
      return 'datetime';
    case _standardTypes.boolean:
      return 'bit';
    case _standardTypes.string:
    default: return (c.unicode?'n':'')+'varchar('+(c.length>0?c.length:'MAX')+')';
  }
}

exports.validateCreateTable = function(res, schema) {
  if (!schema.name) {
    u.error(res, 'Undefined element name');
    return false;
  }
  if (!schema.columns || !schema.columns.length) {
    u.error(res, 'Schema doesn\'t contains a valid columns array');
    return false;
  }
  return true;
};

exports.getCreateTableSql = function(schema, getConstraint, getName, getType) {
  var others = [];
  getConstraint = getConstraint || _getConstraint;
  getName = getName || _getName;
  getType = getType || _getType;
  var columns = _.map(schema.columns, function (c) {
    return getName(c.name) + getType(c) + getConstraint(c, others);
  });
  return 'CREATE TABLE ' + getName(schema) + ' (' + columns.join(',') + (others.length ? ',' + others.join(',') : '') + ')';
};

exports.getDropSql = function(schema, getName) {
  getName = getName || _getName;
  var type = schema.type.toUpperCase();
  switch(type) {
    case 'TABLE':
    case 'PROCEDURE':
    case 'FUNCTION':
    case 'DATABASE':
    case 'VIEW':
      return 'DROP '+type+' '+getName(schema);
      break;
    case 'TRUNCATE':
      return 'TRUNCATE TABLE '+getName(schema);
      break;
  }
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// const Log = require('./log.controller');
const _events = {
  _time: (new Date()).getTime(),
  onLog: function() {
    console.log('NOT registered events (%s)', _events._time);
  }
};

exports.events = _events;

exports.register = function(socket) {
  _events.onLog = function(log) {
    socket.emit('log', log);
    console.log('SOCKET EMIT log', log);
  };
  console.log('Registered events (%s)', _events._time);
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {
const jwt = __webpack_require__(12);
const crypto = __webpack_require__(40);
const config = __webpack_require__(2);
const u = __webpack_require__(1);
const _ = __webpack_require__(0);
const path = __webpack_require__(4);
const USERS_STORE = 'users.json';
const store = __webpack_require__(41);

const users_store_path = path.join((u.release ? config.serverPath : __dirname), USERS_STORE);
//
// /**
//  * Deletes a user
//  * restriction: 'admin'
//  */
// exports.destroy = function(req, res) {
//   User.findByIdAndRemove(req.params.id, function(err, user) {
//     if(err) return res.send(500, err);
//     Settings.remove(user);
//     return res.send(204);
//   });
// };
//
// /**
//  * Change a users password
//  */
// exports.changePassword = function(req, res, next) {
//   var userId = req.user._id;
//   var oldPass = String(req.body.oldPassword);
//   var newPass = String(req.body.newPassword);
//
//   User.findById(userId, function (err, user) {
//     if(user.authenticate(oldPass)) {
//       user.password = newPass;
//       user.save(function(err) {
//         if (err) return validationError(res, err);
//         res.send(200);
//       });
//     } else {
//       res.send(403);
//     }
//   });
// };


function _error(res, err, code) {
  return res.json(code || 422, err);
}

function _encryptPassword(user, password) {
  if (!password || !user.salt) {return '';}
  var salt = Buffer.from(user.salt, 'base64');
  return crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha1').toString('base64');
}

function _authenticate(user, psw) {
  return _encryptPassword(user, psw) === user.hashedPassword;
}

function _salt() {
  return crypto.randomBytes(16).toString('base64');
}

exports.index = function(req, res) {
  const users = _.map(store, function(us){
    return _.omit(us, ['salt','hashedPassword']);
  });
  res.json(200, users);
};

exports.me = function(req, res, next) {
  var userId = (req.user||{})._id;
  const user = _.find(store, function(us){
    return us._id === userId;
  });
  return user ? res.json(user) : res.json(404);
};

exports.role = function(req, res) {
  const userId = req.params.id;
  if (!userId) {return res.json(404); }
  const user = _.find(store, function(us){
    return us._id === userId;
  });
  return user ? res.json(user.role) : res.json(404);
};


function _find(o, cb) {
  if (!o) {return cb({ message: 'Cannot find the user.' });}
  var user = null;
  if (o.id || o._id) {
    const id = o.id || o._id;
    user = _.find(store, function(us){
      return us._id === id;
    });
  } else if (o.name) {
    user = _.find(store, function(us){
      return us.name === o.name;
    });
  }
  if (!user) {
    cb({ message: 'Cannot find the user.' });
  } else {
    cb(null, user);
  }
}
exports.find = _find;

function _token(user) {
  var expiration = config.tokenExpiration || 5;
  if (!_.isNumber(expiration) || expiration < 1) {expiration = 5;}
  return jwt.sign({_id: user._id}, config.secrets.session, {expiresInMinutes: 60 * expiration});
}

function _update() {
  u.saveFile(users_store_path, store, function(err) {
    err ? console.error(err) : console.log('Users store updated');
  });
}

function _save(user, cb) {
  store.push(user);
  _update();
}

exports.create = function (req, res, next) {
  var user = req.body;
  user.role = 'user';
  // validazioni
  if (!user.name) {return _error(res, {message:'Unspecified username'});}
  if (!user.password) {return _error(res, {message:'Unspecified password!'});}
  _find({name:user.name}, function(err, ex){
    if (ex) {return _error(res, 'The specified username is already in use.');}
    user._id = u.guid();
    user.salt = _salt();
    user.hashedPassword =  _encryptPassword(user, user.password);
    _save(user, function(err){
      if (err) {return _error(res, err);}
      res.json({ token: _token(user) });
    });
  });
};

exports.delete = function (req, res) {
  const userId = req.params.id;
  if (!userId) {return res.json(404); }
  const user = _.find(store, function(us){
    return us._id === userId;
  });
  if (!user) {return res.json(404);}
  if (user._id === req.user._id) {return _error(res, 'Cannot delete yourself!');}
  _.pull(store, user);
  _update();
  res.send(204);
};


// INIT:
var _toUpdate = false;
(store||[]).forEach(function(user) {
  if (user._default) {
    user.salt = _salt();
    user.hashedPassword =  _encryptPassword(user, user._default);
    delete user._default;
    _toUpdate = true;
  }
});
if (_toUpdate) {_update();}


/* WEBPACK VAR INJECTION */}.call(exports, "server\\api\\user"))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const _ = __webpack_require__(0);
// const Log = require('../log/log.controller');
const u = __webpack_require__(1);
const URL = __webpack_require__(55);
const Scenario = __webpack_require__(7);
const fs = __webpack_require__(5);
const path = __webpack_require__(4);

function _parseUrl(req) {
  const U = URL.parse(req.url);
  return {
    params: req.query||req.params,
    data: req.body,
    pathname: U.pathname,
    verb: (req.method||'').toLowerCase(),
    path: U.pathname.replace('/api/test/', '')
  };
}

function _pathValue(path, o) {
  var s = o;
  path.split('.').forEach(function(p){s = s[p];});
  //console.log('PATH VALUE:  path=%s  value=%s  OBJECT:', path, s, o);
  return s;
}

function _evalExp(exp, scope) {
  var k = [null];
  k = k.concat(_.keys(scope));
  k.push('return ' + exp);
  const args = _.map(_.keys(scope), function(a) {return scope[a];});
  const validator = new (Function.prototype.bind.apply(Function, k));
  try {
    const result = validator.apply(validator, args);
    return { value: result };
  } catch(err) {
    console.log('EXPRESSION ERROR: ', err);
    return { error: err };
  }
}

function _validateExp(exp, scope) {
  const result = _evalExp(exp, scope)
  return (result.error) ? false : !!result.value;
}

function _getData(o) {
  return (o.verb==='post') ? o.data : o.params;
}

function _validate(call, o, cb) {
  var error = '';
  var code = 500;
  (call.rules || []).forEach(function (r) {
    if (!_validateExp(r.expression, {
        _: _,
        params: o.params,
        data: o.data,
        value: _pathValue(r.path, _getData(o))
      })) {
      if (error) error += '\n';
      error += r.error;
      code = r.code||500;
    }
  });
  cb(error, code);
}


function _getValue(v, o) {
  switch (v.type) {
    case 'data':
      return u.generateTable(v.settings || {});
    case 'manual':
    default:
      const scope = {
        _: _,
        params: (o || {}).params || {},
        data: (o || {}).data || {}
      };
      return _evalExp((v.settings || {}).value || 'value', scope).value || '';
  }
}

function _parseValues(resp, values, o) {
  _.keys(resp).forEach(function(k){
    if (_.isString(resp[k]) && resp[k].indexOf('{{')===0) {
      const rgx = new RegExp('\\{\\{(.*)\\}\\}');
      const m = rgx.exec(resp[k]);
      if (m) {
        const v = _.find(values, function(xv) { return xv.name===m[1]; });
        if (v) resp[k] = _getValue(v, o);
      }
    } else if (_.isObject(resp[k])) {
      _parseValues(resp[k], values);
    }
  });
}

function _result(res, call, o) {
  if (call.response && _.isString(call.response)) {
    try {
      call.response = JSON.parse(call.response);
    } catch(err) {
      return u.error(res, err);
    }
  }
  _parseValues(call.response, call.values, o);
  u.ok(res, call.response);
}

function _findCall(service, o, cb) {
  const call = _.find(service.calls||[], function (c) {
    return o.path === u.path(service.path, c.path) && u.equal(c.verb, o.verb);
  });
  const err = (!call) ? 'No call can reply!' : null;
  cb(err, call);
}

function _download(res, call) {
  if (!call.file) return u.error(res, 'Undefined file!');
  fs.stat(call.file, function(err, stats){
    if (err) return u.error(res, err);
    const filename = path.basename(call.file);
    res.download(call.file, filename);
  });
}

module.exports = function(req, res) {
  const o = _parseUrl(req);
  var rgx = new RegExp(o.path+';');
  Scenario.getAllDocuments(function(err, services){
    if (err) return u.error(res, err);
    if (!services || services.length<1) return u.error(res, 'No service can reply!');
    if (services.length>1) return u.error(res, 'More than one service!');
    const s = services[0];
    if (s.active === false) return u.error(res, 'Service not active!');
    _findCall(s, o, function(err, call){
      if (err) return u.error(res, err);
      _validate(call, o, function(err, code){
        if (err) return u.error(res, err, code);
        if (call['respType'] === 'file') return _download(res, call);
        _result(res, call, o);
      });
    });
  }, {
    full: true,
    filter: function(json){
      return json._type === 'custom' && rgx.test(json.paths);
    }
  });
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

console.log('-----------------------------------------------\nECHO-SERVICE starting...');
const express = __webpack_require__(3);
const config = __webpack_require__(2);
// Setup server
const app = express();
const server = __webpack_require__(16).createServer(app);
const socketio = __webpack_require__(17)(server, {
  serveClient: (config.env !== 'production'),
  path: '/socket.io'
});

__webpack_require__(18)(socketio);
__webpack_require__(19)(app);
__webpack_require__(28)(app);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('ECHO-SERVICE listening on %d\n-----------------------------------------------', config.port);
});

// Expose app
exports = module.exports = app;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _log(message) {
  const now = new Date();
  return {
    time: now,
    time_str: now.toLocaleTimeString(),
    type: 'info',
    message: message
  };
}

// When the user disconnects.. perform this
function onDisconnect(socket) {
  socket.emit('log', _log('"'+socket.address+'" leave echo!'));
}

// When the user connects.. perform this
function onConnect(socket) {
  // When the client emits 'info', this listens and executes
  socket.on('info', function (data) {
    console.info('[%s] %s (by socket)', socket.address, JSON.stringify(data, null, 2));
  });

  // Insert sockets below
  __webpack_require__(11).register(socket);

  socket.emit('log', _log('Wellcome "'+socket.address+'" to echo!'));
}

module.exports = function (socketio) {
  // socket.io (v1.x.x) is powered by debug.
  // In order to see all the debug output, set DEBUG (in server/config/local.env.js) to including the desired scope.
  //
  // ex: DEBUG: "http*,socket.io:socket"

  // We can authenticate socket.io users and access their token through socket.handshake.decoded_token
  //
  // 1. You will need to send the token in `client/components/socket/socket.service.js`
  //
  // 2. Require authentication here:
  // socketio.use(require('socketio-jwt').authorize({
  //   secret: config.secrets.session,
  //   handshake: true
  // }));

  socketio.on('connection', function (socket) {
    const hs = socket.handshake.address||{};
    socket.address = hs.address ? hs.address + ':' + hs.port : hs;
    console.log('handshake:', socket.handshake);

    socket.connectedAt = new Date();
    // Call onDisconnect.
    socket.on('disconnect', function () {
      onDisconnect(socket);
      console.info('[SOCKET.IO on %s] DISCONNECTED', socket.address);
    });

    // Call onConnect.
    onConnect(socket);
    console.info('[SOCKET.IO on %s] CONNECTED', socket.address);
  });

  socketio.on('error', function (err) {
    console.error(err);
  });
};



/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const express = __webpack_require__(3);
const favicon = __webpack_require__(20);
const morgan = __webpack_require__(21);
const compression = __webpack_require__(22);
const bodyParser = __webpack_require__(23);
const methodOverride = __webpack_require__(24);
const cookieParser = __webpack_require__(25);
const errorHandler = __webpack_require__(26);
const path = __webpack_require__(4);
const config = __webpack_require__(2);
const client_path = config.clientPath||'client';

var _counter = 0;

//CORS middleware
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
};

//LOG middleware
var serverLog = function(req, res, next) {
  _counter++;
  console.log('Echo-Service request n°%s [%s %s]',_counter, req.method, req.url);
  next();
};

module.exports = function(app) {
  var env = app.get('env');

  app.set('views', path.join(config.serverPath, 'views'));
  app.engine('html', __webpack_require__(27).renderFile);
  app.set('view engine', 'html');
  app.use(compression());

  app.use(bodyParser.json({limit: '100mb'}));
  app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));

  app.use(methodOverride());
  app.use(allowCrossDomain);
  app.use(cookieParser());
  app.use(serverLog);

  app.use(express.static(path.join(config.root, client_path)));
  app.set('appPath', client_path);

  app.use(morgan('dev'));
  app.use(errorHandler()); // Error handler - has to be last
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("method-override");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("errorhandler");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("ejs");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var errors = __webpack_require__(29);

module.exports = function(app) {
  app.use('/api', __webpack_require__(30));
  app.use('/api/scenario', __webpack_require__(32));
  app.use('/api/data', __webpack_require__(42));
  app.use('/api/reporting', __webpack_require__(53));
  app.use(function(req, res, next) {
    var m = /.*\/api\/test\/((.*)[\?]\??(.*)?|(.*))/.exec(req.url);
    m ? __webpack_require__(14)(req, res) : next();
  });
  app.use('/api/test', __webpack_require__(14));
  app.use('/auth', __webpack_require__(56));
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Error responses
 */



module.exports[404] = function pageNotFound(req, res) {
  var viewFilePath = '404';
  var statusCode = 404;
  var result = {
    status: statusCode
  };

  res.status(result.status);
  res.render(viewFilePath, function (err) {
    if (err) { return res.json(result, result.status); }

    res.render(viewFilePath);
  });
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const api = __webpack_require__(31);
const u = __webpack_require__(1);
const express = __webpack_require__(3);
const Log = __webpack_require__(6);

var router = express.Router();


router.get('/', function(req, res){
  return u.ok(res, api);
});

router.get('/log', function(req, res) {
  Log.get(function(err, items){
    if (err) {return u.error(res, err);}
    u.ok(res, items);
  });
});

module.exports = router;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = [{"description":"Scenari","baseRoute":"api/scenario","routes":[{"verb":"get","route":"api/scenario","description":"Elenco degli scenari disponibili","response":{"type":"object","object":{"folder":{"type":"string","description":"Nome del folder server dove risiedono i file dello scenario"},"name":{"type":"string","description":"Nome dello scenario"},"auth":{"type":"boolean","description":"Identifica uno scenario con la sicurezza attiva"},"{type}":{"type":"array","description":"Per ogni tipo di documento esiste un array che ne enumera gli identificativi"}}}},{"verb":"get","route":"api/scenario/current","description":"Info dello scenario corrente","response":{"type":"object","object":{"folder":{"type":"string","description":"Nome del folder server dove risiedono i file dello scenario"},"name":{"type":"string","description":"Nome dello scenario"},"auth":{"type":"boolean","description":"Identifica uno scenario con la sicurezza attiva"},"{type}":{"type":"array","description":"Per ogni tipo di documento esiste un array che ne enumera gli identificativi"}}}},{"verb":"get","route":"api/scenario/info/:name","description":"Info dello scenario","body":{"name":{"type":"string","description":"Folder dello scenario richiesto"}},"response":{"type":"object","object":{"folder":{"type":"string","description":"Nome del folder server dove risiedono i file dello scenario"},"name":{"type":"string","description":"Nome dello scenario"},"auth":{"type":"boolean","description":"Identifica uno scenario con la sicurezza attiva"},"{type}":{"type":"array","description":"Per ogni tipo di documento esiste un array che ne enumera gli identificativi"}}}},{"verb":"get","route":"api/scenario/download/:folder","description":"Download scenario","body":{"folder":{"type":"string","description":"Nome del folder dello scenario da scaricare"}},"response":{"type":"file","description":"File compresso dello scenario ({FOLDER-NAME}.zip)"}},{"verb":"post","route":"api/scenario/push","description":"Inserisce documenti in uno scenario","auth":true,"body":{"source":{"type":"array","description":"elenco dei documenti da inserire nello scenario"},"target":{"type":"object","description":"info di scenario target (deve avere almeno la property folder)"}},"response":"Niente se ha successo, altrimenti l'errore rilevato"},{"verb":"post","route":"api/scenario/apply","description":"Applica uno scenario","body":"Se passato il folder applica lo scenario, altrimenti, se è un oggetto, ne crea uno nuovo","response":"Niente se ha successo, altrimenti l'errore rilevato"},{"verb":"post","route":"api/scenario/update","description":"Applica le modifiche allo scenario","body":"Scenario con le modifiche apportate","response":"Niente se ha successo, altrimenti l'errore rilevato"},{"verb":"post","route":"api/scenario/settings","description":"Applica le modifiche alle impostazioni dello scenario","body":"Impostazioni con le modifiche apportate","response":"Niente se ha successo, altrimenti l'errore rilevato"},{"verb":"post","route":"api/scenario/upload","description":"Carica uno scenario sul server","body":"File compresso con i documenti dello scenario (xxx.zip)","response":"Niente se ha successo, altrimenti l'errore rilevato"}]},{"description":"Documenti","baseRoute":"api/scenario","routes":[{"verb":"get","route":"api/scenario/documents/:type*?","description":"Elenco dei documenti dello scenario corrente","body":{"type":{"type":"string","description":"Se definito filtra i documenti per tipologia restituendo il contenuto integralmente"}},"response":{"type":"array","object":{"id":{"type":"string","description":"Identificativo del documento"},"name":{"type":"string","description":"Nome del documento"},"title":{"type":"string","description":"Titolo del documento"},"description":{"type":"string","description":"Descrizione del documento"},"modifiedAt":{"type":"date","description":"Data dell'ultima modifica"},"modifiedBy":{"type":"date","description":"Autore dell'ultima modifica"},"_id":{"type":"string","description":"Identificativo del documento (interno)"},"_type":{"type":"string","description":"Tipologia del documento (interno)"},"_tid":{"type":"string","description":"Identificativo con tipo del documento (interno)"}}}},{"verb":"get","route":"api/scenario/tags","description":"Elenco dei tag sui documenti dello scenario corrente","response":{"type":"array","description":"Elenco dei tag"}},{"verb":"get","route":"api/scenario/document/:id/:type*?","description":"Il singolo documento per id e (opzionale) tipo","body":{"id":{"type":"string","description":"Identificativo del documento"},"type":{"type":"string","description":"(opzionale) Tipologia del documento"}},"response":{"type":"object","description":"Contenuto del documento in formato json"}},{"verb":"post","route":"api/scenario/save","description":"Salva un documento","auth":true,"body":"Documento da salvare","response":"Niente se ha successo, altrimenti l'errore rilevato"},{"verb":"delete","route":"api/scenario/:id/:type*?","description":"Elimina un documento","auth":true,"body":{"id":{"type":"string","description":"Identificativo del documento"},"type":{"type":"string","description":"(opzionale) Tipologia del documento"}},"response":"Niente se ha successo, altrimenti l'errore rilevato"}]},{"description":"Dati","baseRoute":"api/data","routes":[{"verb":"get","route":"api/data/providers","description":"Elenco dei providers disponibili","response":{"type":"array","object":{"active":{"type":"bool","description":"Descrive lo stato di attività della connessione"},"enabled":{"type":"bool","description":"Se vero è possibile utilizzare questo provider"},"library":{"type":"string","description":"Nome della libreria"},"name":{"type":"string","description":"Nome del provider"},"code":{"type":"string","description":"Codifica del nome"},"instance":{"type":"object","description":"logic"},"defaultPort":{"type":"number","description":"Porta predefinita"}}}},{"verb":"get","route":"api/data/schema/:id","auth":true,"description":"Schema relativo alla connessione indicata","body":{"id":{"type":"string","description":"Identificativo della connessione"}},"response":{"type":"object","description":"ANSI standard information_schema"}},{"verb":"get","route":"api/data/system","auth":true,"description":"Elenco dei parametri di sistema","response":{"type":"array","object":{"name":{"type":"string","description":"Nome del parametro"},"id":{"type":"string","description":"Identificativo"},"value":{"type":"any","description":"Valore del parametro di sistema"},"dataType":{"type":"string","description":"Tipo dato"}}}},{"verb":"post","route":"api/data/execute","auth":true,"description":"Esecuzione di una query","body":{"id":{"type":"string","description":"Identificativo della query da eseguire"},"parameters":{"type":"array","description":"Elenco dei parametri per l'esecuzione"}},"response":{"type":"object","object":{"rows":{"type":"array","description":"Elenco dei records"},"columns":{"type":"array","description":"Schema dati"},"sql":{"type":"string","description":"SQL eseguito dal provider"},"query":{"type":"object","description":"Documento query eseguita"}}}},{"verb":"post","route":"api/data/test/conn","description":"Test della connessione","body":"Documento connection da eseguire","response":"Niente se ha successo, altrimenti l'errore rilevato"},{"verb":"post","route":"api/data/test/exec","description":"Test della query","body":"Documento query da eseguire","response":{"type":"object","object":{"rows":{"type":"array","description":"Elenco dei records"},"columns":{"type":"array","description":"Schema dati"},"sql":{"type":"string","description":"SQL eseguito dal provider"},"query":{"type":"object","description":"Documento query eseguita"}}}}]},{"description":"Utenti","baseRoute":"api/user","routes":[{"verb":"get","route":"api/user","description":"Elenco degli utenti (solo per ruoli 'admin')","response":{"type":"array","description":"Elenco degli utenti"}},{"verb":"get","route":"api/user/me","description":"Info sull'utente correntemente loggato","response":{"type":"object","description":"Utente corrente"}},{"verb":"get","route":"api/user/:id","description":"Info sull'utente","body":{"id":{"type":"string","description":"Identificativo dell'utente"}},"response":{"type":"string","description":"Profilo dell'utente"}},{"verb":"post","route":"api/user","description":"Crea un nuovo utente (solo per ruoli 'admin')","body":{"name":{"type":"string","description":"Nome dell'utente"},"password":{"type":"string","description":"Password dell'utente"}},"response":"Niente se ha successo, altrimenti l'errore rilevato"},{"verb":"delete","route":"api/user/:id","description":"Elimina un utente (solo per ruoli 'admin')","body":{"id":{"type":"string","description":"Identificativo dell'utente"}},"response":"Niente se ha successo, altrimenti l'errore rilevato"}]},{"description":"Auth","baseRoute":"auth","routes":[{"verb":"post","route":"auth/local","description":"Autenticazione","response":{"type":"object","description":"Restituisce un oggetto contenente il token se autenticato altrimenti l'errore relativo"}}]},{"description":"LOG","baseRoute":"api/log","routes":[{"verb":"get","route":"api/log","description":"Elenco delle righe di log inserite dall'avvio del servizio nel periodo definito nella configurazione","response":{"type":"array","description":"Elenco delle righe di log"}}]},{"description":"API","baseRoute":"api","routes":[{"verb":"get","route":"api","description":"Elenco delle api di echo-service","response":{"type":"object","description":"Questo documento!"}}]}]

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(3);
var controller = __webpack_require__(7);
var auth = __webpack_require__(8);

var router = express.Router();

// elenco deli scenari
router.get('/', controller.index);
// elenco dei tags sui documenti
router.get('/', controller.tags);
// restituisce l'elenco dei documenti (solo info) dello scenario corrente
// se è specificato il type restituisce l'elenco dei documenti (full) di quel tipo
router.get('/documents/:type*?', auth.needAuthentication(controller.checkInfo), controller.docs);
// restituisce le info dello scenario corrente (OK)
router.get('/current', auth.needAuthentication(controller.checkInfo), controller.info);
// restituisce il singolo documento
router.get('/document/:id/:type*?', auth.needAuthentication(controller.checkRead), controller.read);
// restituisce le info di scenario
router.get('/info/:name', auth.needAuthentication(controller.checkInfo), controller.info);
// scarica lo scenario
router.get('/download/:folder', controller.download);

// salva il documento
router.post('/save', auth.needAuthentication(controller.checkSaveDoc), controller.saveDoc);
// applica uno scenario
router.post('/apply', controller.apply);
// applica le modifiche ad uno scenario
router.post('/update', controller.update);
// salva i documenti nello scenario
router.post('/push', auth.needAuthentication(controller.checkWrite), controller.push);
// salva le info di scenario
router.post('/settings', auth.hasRole('admin'), controller.settings);
// carica uno scenario
router.post('/upload', controller.upload);


// elimina un documento
router.delete('/:id/:type*?', auth.needAuthentication(controller.checkDelete), controller.delete);

module.exports = router;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {
const fs = __webpack_require__(5);
const path = __webpack_require__(4);
const _ = __webpack_require__(0);
const u = __webpack_require__(1);
const config = __webpack_require__(2);
const data_path = config.storePath || (u.release ? config.serverPath : path.join(__dirname, 'data'));

console.log('ECHO-SERVICE store location: %s', data_path);
exports.storePath = data_path;

/** Salva l'oggetto in formato json (sovrascrivendo)
 * @param {string} filename
 * @param {object} obj
 * @param {function} cb
 * @param {boolean} [noformat]
 */
exports.saveSingleFile = function(filename, obj, cb, noformat) {
  var content = (noformat === true) ? JSON.stringify(obj) : JSON.stringify(obj, null, 2);
  var buffer = new Buffer(content);
  try {
    var writer = fs.createWriteStream(filename, {flags: 'w'});
    writer.on('error', function(err) {
      cb(err);
    });
    writer.write(buffer, function() {
      cb();
    });
  }
  catch(err) {
    cb(err);
  }
};

exports.checkFolder = function(folder, cb) {
  fs.stat(folder, function(err, stats) {
    if (err) {
      if (err.errno === 34 || err.errno === -4058 || err.code === 'ENOENT') {
        //se non esiste la crea
        fs.mkdir(folder, cb);
      } else {
        cb(err);
      }
    } else {
      cb();
    }
  });
};

exports.onFolder = function() {
  const args = Array.prototype.slice.call(arguments);
  const cb = args.pop();
  const folder = path.join.apply(null, args);
  if (fs.existsSync(folder)) {
    (fs.statSync(folder).isDirectory() && _.isFunction(cb)) ? cb(folder) : cb();
  } else {
    cb();
  }
};

exports.onFile = function() {
  const args = Array.prototype.slice.call(arguments);
  const cb = args.pop();
  const file = path.join.apply(null, args);
  if (fs.existsSync(file)) {
    (fs.statSync(file).isFile() && _.isFunction(cb)) ? cb(file) : cb();
  } else {
    cb();
  }
};

exports.loadSingleFile = function(filename, cb) {
  //console.log('try open file: %s',filename);
  fs.stat(filename, function(err, stats) {
    if (err) return cb(err);
    //console.log('try read file: %s',filename);
    fs.readFile(filename, 'utf8', function (err, data) {
      data = data.replace(/^\uFEFF/, '');
      if (err) return cb(err);
      try {
        var obj = JSON.parse(data);
        //console.log('file done:', obj);
        return cb(null, obj);
      } catch(err) {
        cb(err);
      }
    });
  });
};

// Cicla tutti i file di uno scenario
exports.onScenarioFiles = function(scenario, checkrgx, handler, nfcb) {
  const name = _.isObject(scenario) ? scenario.folder : scenario;
  const folder = path.join(data_path, name);
  checkrgx = checkrgx || '(.*?)@(.*?).json';
  const check = new RegExp(checkrgx, 'i');
  fs.readdir(folder, function (err, files) {
    if (err) return cb(err);
    const found = _.find(files, function(f){
      const fp = path.join(folder, f);
      return check.test(f) && handler(f, fp);
    });
    if (!found && _.isFunction(nfcb)) nfcb();
  });
};

exports.deleteFile = function(filename, cb) {
  fs.stat(filename, function(err, stats) {
    if (err) return cb(err);
    fs.unlink(filename, function(err){
      if (err) return cb(err);
      cb();
    });
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, "server\\api\\scenario"))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const _ = __webpack_require__(0);

const _cache = [];
var _refreshing = null;
const _options = {};

exports.options = _options;

exports.refresh = function() {
  if (!_refreshing && _.isFunction(_options.getAll)) {
    _refreshing = new Promise(function (resolve, reject) {
      _cache.splice(0);
      _options.getAll(function (docs) {
        _cache.push.apply(_cache, docs);
        resolve();
        _refreshing = null;
      });
    });
  }
  return _refreshing;
};


function _update(doc, action) {
  var idx = -1;
  const ex = _.find(_cache||[], function(d, i){
    idx=i;
    return d._id === doc._id;
  });
  switch(action) {
    case '-':
    case 'delete':
    case 'remove':
      if (ex) {
        _cache.splice(idx, 1);
      }
      break;
    case '*':
    case '+':
    case 'update':
    case 'modify':
    case 'edit':
    case 'change':
    case 'add':
    case 'insert':
    case 'new':
      if (_.isFunction(_options.get)) {
        _options.get(doc, function (err, fdoc) {
          if (err) return console.error(err);
          ex ? _cache.splice(idx, 1, fdoc) : _cache.push(fdoc);
        });
      }
      break;
  }
}

exports.update = function(doc, action) {
  if (_refreshing) {
    _refreshing.then(function () {
      _update(doc, action);
    });
  } else {
    _update(doc, action);
  }
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const _ = __webpack_require__(0);

function _tid(type, id) {
  var o = null;
  if (_.isObject(type)) {
    o = type;
    if (type._tid) return type._tid;
    id = type._id || type.id;
    type = type._type || type.type;
  }
  if (!type || !id) return console.error('Undefined type or id (%s,%s)', type, id);
  const tid = type + '@' + id;
  if (o) o._tid = tid;
  return tid;
}
exports.tid = _tid;

exports.encodeName = function(type, id) {
  return _tid(type, id) + '.json';
};

exports.decodeName = function(name, cb, rj) {
  if (!name) return console.error('Undefined name');
  rj = rj||_.noop;
  cb = cb||_.noop;
  const m = /(.*)@(.*).json/.exec(name);
  if (m) {
    cb(m[1], m[2]);
  } else {
    rj();
  }
};

exports.validate = function(doc, filename) {
  const m = (/(.*)@(.*).json/i).exec(filename);
  if (m) {
    doc._id = doc._id||doc.id||m[2];
    doc._type =  doc._type||doc.type||m[1];
    doc._tid =  doc._type + '@' + doc._id;
    delete doc._new;
  }
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.infos = {
  ver: '3.0.0',
  notes: 'new server api',
  history:[{
    '2.0.52': 'custom calls #1',
    '2.0.51': 'oracle close connection',
    '2.0.50': 'crypto.pbkdf2 without specifying a digest',
    '2.0.48': 'lock managing state',
    '2.0.47': 'multivalues parameters',
    '2.0.45':'update material and layout',
    '2.0.43': 'upload scenario data overwriting current',
    '2.0.41': 'fix server stability #1',
    '2.0.39': 'system parameters v1.0',
    '2.0.38': 'confirm and log on tabula rasa',
    '2.0.37': 'import scenario fix',
    '2.0.36': 'dynamic page loader',
    '2.0.35': 'Authorization cors, new api: files (beta version)',
    '2.0.34': 'Fix vari & oracle dataentry (beta version)',
    '2.0.30': 'Log performances',
    '2.0.29': 'Upgrade schema browser (oracle db schema)',
    '2.0.27': 'Verifica della dipendenza dei provider.',
    '2.0.25': 'Scenari sotto sicurezza',
    '2.0.21': 'Parametri preferiti e modifica dei documenti.',
    '2.0.16': 'Provider Oracle (leggere oracledb.md).',
    '2.0.15': 'Verifica della versione.',
    '2.0.13': 'Aggiunto metodo execute su connection: api/connection/execute. Utile per eseguire statements SQL.',
    '2.0.11': 'Aggiunto servizio base di dataentry: api/dataentry..',
    '2.0.5': 'Da questa versione non sono più visibili i "vecchi" scenari. Per recuperarli è necessario reimportarli uno alla volta.',
    '2.0.8': 'Accesso ai dati tramite provider. Provider attivi: SQL-Server e MYSQL'
  }]
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("jszip");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("express-jwt");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("composable-middleware");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = [{"name":"admin","role":"admin","_id":"352bd835-07be-44f1-96e4-c482dc818d6f","salt":"FrVqgAnK5xtotktXoLEqZA==","hashedPassword":"tSH8BOyNI7jaHFN11nEl5z2PfGeQ48p9MQbzbGNXYn28kQ6lI6wKiGwawIi4zt7vB1MY47MYeF6wwpC5j5ukdw=="},{"name":"user","role":"user","_id":"183a62a9-09b8-4fb1-8be4-e5798827c1f6","salt":"7D9F3Q0I7Bw+KbYTzOXHvw==","hashedPassword":"Vv05fT6xuKqtkhRzlaIYnnJTCUzsMgBUCIlCJh9rx8PTuIxvaJR4PJDRPsIG0erWJ4TLIypFEsd2fMOY/aSvsQ=="},{"name":"guest","role":"guest","_id":"24abbdc5-0aa6-4bb5-bdf1-8ab0d0e4bb47","salt":"w/AA+dsIv2qRA20C9B8j7A==","hashedPassword":"ty3o7SYAzZZtkSXhYXW5jKzQRBu/gRtmVK/T5GbAHGAVtBiWKACrfCiqopi3aQTzDbSpZNiRYvhu31k+Pi4EWQ=="}]

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(3);
var controller = __webpack_require__(43);
var auth = __webpack_require__(8);

var router = express.Router();

// elenco dei providers
router.get('/providers', controller.providers);
// restituisce lo schema db
router.get('/schema/:id', auth.needAuthentication(controller.checkData), controller.schema);
// restituisce i parametri di sistema
router.get('/system', auth.needAuthentication(controller.checkData), controller.system);

// restituisce i dati
router.post('/execute', auth.needAuthentication(controller.checkData), controller.execute);
// test connessione
router.post('/test/conn', controller.testconn);
// test di esecuzione
router.post('/test/exec', controller.test);

module.exports = router;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const manager = __webpack_require__(44);
const u = __webpack_require__(1);
const _ = __webpack_require__(0);
const Log = __webpack_require__(6);
const Scenario = __webpack_require__(7);
const QueryParser = __webpack_require__(51);
const SqlEditor = __webpack_require__(52);
const SYS_PARAM_KEY = '5933a09f-d99d-4107-a11b-b0e85e1b8b78';
var _esecution = 0;

// elenco providers
exports.providers = function(req, res) {
  u.ok(res, manager.providers);
};

// test della connessione
exports.testconn = function(req, res) {
  var conn = req.body;
  if (!conn || !conn.provider) return u.error(res, 'Undefined connection or provider!');
  if (!conn.active) return u.error(res, 'Connection seems not active!');
  manager.getProvider(conn.provider, function(err, provider){
    if (err) return u.error(res, err);
    provider.test(conn, function(err){
      if(err) {
        console.log('Connection error', err);
        return u.error(res, err);
      }
      return u.ok(res);
    });
  });
};

exports.schema = function(req, res) {
  var cnnId = req.params.id;
  if (!cnnId) return u.error(res, 'Undefined connection!');
  Scenario.getElement(cnnId, function (err, conn) {
    if (err) return u.error(res, err);
    if (!conn.active) return u.error(res, 'Connection seems not active!');
    manager.getProvider(conn.provider, function (err, provider) {
      if (err) return u.error(res, err);
      provider.schema(conn, function (err, schema) {
        if (err) return u.error(res, err);
        return u.ok(res, schema);
      });
    });
  });
};
exports.checkData = function(req, cb) {
  cb(null, { auth: false });
};

function _retrieveData(query, sqlstr, cb) {
  _esecution++;
  var esc = _esecution;
  Scenario.getElement(query.connection, function(err, conn){
    if (err) return cb(err);
    if (!conn.active) return cb('Connection seems not active!');
    manager.getProvider(conn.provider, function(err, provider){
      if (err) return cb(err);
      provider.retrieveData(conn, query, sqlstr, esc, cb);
    });
  });
}

function _checkQueryType(doc, cb) {
  // console.log('CHECK QUERY TYPE - doc:', doc);
  if (doc._type === SqlEditor.type) {
    SqlEditor.getConnection(doc.content||doc, function(err, id){
      doc.connection = id;
      doc.query = SqlEditor.parse(doc.content||doc);
      cb();
    });
  } else {
    cb();
  }
}

function _calcResult(req, res, doc, exparams) {
  if (!doc) return u.error(res, 'Undefined query!');
  if (doc.active === false) return u.error(res, 'Query not active!');
  const parameters = _.clone(doc.parameters);
  // console.log('Query parameters: ', parameters);
  (exparams || []).forEach(function (rp) {
    var exp = _.find(parameters, function (p) {
      return p.name === rp.name;
    });
    if (exp) exp.value = rp.value;
  });
  _checkSystemParameters(req, parameters, function() {
    // console.log('Parameters for evaluation: ', parameters);
    _checkQueryType(doc, function(){
      const parser = new QueryParser(doc.query);
      // console.log('QUERY: parser', parser);
      const sqlstr = parser.eval(parameters);
      // console.log('SQL: %s', sqlstr);
      _retrieveData(doc, sqlstr, function (err, data) {
        if (err) return Log.error(err, res);
        return u.ok(res, data);
      });
    });
  });
}

exports.execute = function(req, res) {
  const info = req.body;
  console.log('request execution: ', info);
  const id = (info||{}).id || (info||{})._id;
  if (!id) return u.error(res, 'Undefined query document!');
  if (id === SYS_PARAM_KEY) {
    const result = { rows: [{}], columns: [], query:info };
    _systemParameters(req, function(params){
      params.forEach(function(sp){
        result.rows[0][sp.name] = sp.value;
        result.columns.push({name:sp.name, type:sp.dataType});
      });
      u.ok(res, result);
    });
  } else {
    Scenario.getElement(info, function (err, doc) {
      if (err) return u.error(res, err);
      console.log('prepare calc: ', doc);
      _calcResult(req, res, doc, info.parameters || []);
    });
  }
};

exports.test = function(req, res) {
  _calcResult(req, res, req.body);
};

function _checkSystemParameters(context, parameters, cb) {
  _systemParameters(context, function(sysparams){
    (parameters || []).forEach(function (p) {
      if ((p.lookup || {}).id === SYS_PARAM_KEY) {
        const sysp = _.find(sysparams, function (sp) {
          return sp.name === p.lookup.fieldKey;
        });
        p.value = (sysp || {}).value;
      }
    });
    cb();
  });
}

function _calc(exp) {
  const f = new Function('return ' + exp);
  try {
    return f();
  } catch (err) {
    return err;
  }
}

function _systemParameters(context, cb) {
  Scenario.current(function(current){
    const params = [
      {name: 'Now', id: 'system_now', value: new Date(), dataType: 'date'},
      {name: 'User', id: 'system_user', value: (context || {}).user || 'echo', dataType: 'string'}
    ];
    // i parametri di sistema possono essere customizzati nel file di scenario
    (((current.scenario||{}).settings||{}).parameters||[]).forEach(function(p){
      if (!_.find(params, function(xp) { return xp.name === p.name || xp.id === p.id; })) {
        const rp = _.clone(p);
        if (_.isString(rp.value) && _.startsWith(rp.value, '=')) rp.value = _calc(rp.value.slice(1));
        params.push(rp);
      }
    });
    cb(params);
  });
}
exports.systemParameters = _systemParameters;

exports.system = function(req, res) {
  _systemParameters(req, function(params){
    u.ok(res, params);
  });
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const _ = __webpack_require__(0);
const u = __webpack_require__(1);

const _providers = {
  mssql: {
    active: true,
    enabled: u.use.resolve('mssql'),
    library: 'mssql',
    name: 'SQL Server',
    code: 'sqlserver',
    instance: __webpack_require__(45),
    defaultPort: 1433
  },
  mysql: {
    active: true,
    enabled: u.use.resolve('mysql'),
    library: 'mysql',
    name: 'MySQL',
    code: 'mysql',
    instance: __webpack_require__(47),
    defaultPort: 3306
  },
  oracle: {
    active: true,
    enabled: u.use.resolve('oracledb'),
    library: 'oracledb',
    name: 'Oracle',
    code: 'oracle',
    instance: __webpack_require__(49),
    defaultPort: 1521
  // },
  // ibmdb2: {
  //   active: false,
  //   enabled: u.use.resolve('ibm_db'),
  //   library: 'ibm_db',
  //   name: 'DB2',
  //   code: 'ibmdb2',
  //   instance: require('./provider-ibmdb2'),
  //   defaultPort: 50000
  }
};

exports.providers = _providers;

exports.context = function(cb) {
  cb = cb || _.noop;
  var context = [];
  _.keys(_providers).forEach(function(c){
    var provider = _providers[c];
    if (provider.active) {
      context.push({
        name: provider.name,
        code: provider.code,
        defaultPort: provider.defaultPort
      });
    }
  });
  cb(context);
};

// Get list of providers
exports.getProvider = function(name, cb) {
  if (!_.has(_providers, name))
    name = 'mssql';

  if (!_providers[name].enabled) {
    return cb(new Error('Provider "' + name + '" not available: library "' + _providers[name].library + '" not loaded/installed!'));
  }

  cb(null, _providers[name].instance);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var helper = __webpack_require__(46);
var _ = __webpack_require__(0);
var u = __webpack_require__(1);
var mssql = u.use.resolve('mssql') ? u.use('mssql') : {};
var Log = __webpack_require__(6);
var LOG_PREFIX = '[SQL Server] ';
var LOG_DATAENTRY_PREFIX = '[DATA-ENTRY SQLSERVER] ';

function manageError(res, err) {
  Log.error(err);
  return u.error(res, err);
}
function noProviderAction(res) {
  return manageError(res, 'Action not recognized/available on provider!');
}


function handleError(err, sqlstr, cb) {
  err.SQL = sqlstr;
  Log.error(err);
  return cb(err);
}

function getConfig(connection) {
  var config = {
    user: connection.user,
    password: connection.password,
    server: connection.server,
    database: connection.database
  };
  if (connection.port)  //default: 1433
    config.port = connection.port;
  return config;
}

function executeSQL(SQL, cb, conn) {
  var request = conn ? new mssql.Request(conn) : new mssql.Request();
  Log.insert({
    message: LOG_PREFIX + '- SQL statement (request) ' + (SQL||'').substr(0, 50),
    sql: SQL
  });
  request.query(SQL)
    .then(function(result) {
      var affected = request.rowsAffected;
      Log.insert({
        message: LOG_PREFIX + '- SQL statement (executed'+(affected ? ' ' + affected : '')+') ' + (SQL||'').substr(0, 50),
        sql: SQL
      });
      cb(null, result, affected);
    })
    .catch(function(err){
      cb(err);
    });
}

function getSchemaPart(conn, step, target, cb) {
  executeSQL(step.sql, function(err, result, affected){
    if (err) target.errors.push(err);
    target[step.pn] = result || [];
    cb();
  }, conn);
}

function getTableSchema(tablename, cb) {
  var SQL = helper.information_schema.SQL_TABLECOLUMNS.replace(/\{\{TABLENAME\}\}/, tablename);
  console.log('[DATA-ENTRY SQLSERVER] composed table schema sql: ' + SQL);
  executeSQL(SQL, function (err, result, affected) {
    console.log('[DATA-ENTRY SQLSERVER] calculating table schema...' + (err ? 'errors' : 'ok'));
    if (err) cb(err);
    var schema = helper.getTableSchema(tablename, result);
    console.log('[DATA-ENTRY SQLSERVER] calculated table schema: ' + JSON.stringify(schema));
    cb(null, schema);
  });
}

function onConnection(options, res, cb) {
  var config = getConfig(options.connection);
  mssql.connect(config)
    .then(function() {
      Log.insert({
        message: u.str('%s- connected (%s)', LOG_PREFIX, options.connection.name||options.connection.database),
        data: config
      });
      cb();
    })
    .catch(function(err) {
      return manageError(res, err);
    });
}

function onTable(options, res, cb) {
  onConnection(options, res, function() {
    getTableSchema(options.tablename, function(err, schema){
      if (err) return manageError(res, err);
      cb(schema);
    });
  });
}





exports.name = 'sqlserver';
exports.helper = helper;

exports.execute = function(connection, statement, res) {
  var config = getConfig(connection);
  mssql.connect(config)
    .then(function() {
      executeSQL(statement, function(err, result, affected) {
        if (err) return manageError(res, err);
        var results = {
          rows: result,
          fields: []
        };
        u.ok(res, results);
      });
    })
    .catch(function(err) {
      return manageError(res, err);
    });
};

exports.test = function(connection, cb) {
  var config = getConfig(connection);
  var conn = new mssql.Connection(config, function(err) {
    if (err) return cb(err);
    var request = new mssql.Request(conn);
    request.query(helper.TESTSQL, function(err) {
      if (err) return cb(err);
      return cb();
    });
  });
};

exports.schema = function(connection, cb) {
  var config = getConfig(connection);
  var schema = {
    title: connection.database
  };
  var conn = new mssql.Connection(config, function (err) {
    if (err) return cb(err);
    const seq = u.compose();
    helper.schemaParts.forEach(function (prm) {
      seq.use(function(next) {
        getSchemaPart(conn, prm, schema, function (err) {
          if (err) console.error(err);
          next();
        });
      });
    });
    seq.run(function() {
      cb(null, schema);
    });
  });
};

exports.retrieveData = function(connection, query, sqlstr, esc, cb) {
  const start = new Date();
  const config = getConfig(connection);
  const conn = new mssql.Connection(config, function(err) {
    if (err) return handleError(err, sqlstr, cb);

    // Query
    var request = new mssql.Request(conn);
    Log.insert({
      message: u.str('[%s] - Query "%s" execution n°%s start on %s:%s',
        connection.provider, query.name, esc, connection.server, connection.database),
      sql: sqlstr,
      data: query
    });
    request.query(sqlstr, function(err, recordset) {
      const elapsed = u.elapsed(start);
      if (err) return handleError(err, sqlstr, cb);

      const columns = [];
      if (recordset && recordset.columns){
        for (var c in recordset.columns) {
          var col = recordset.columns[c];
          columns.push({
            name: col.name,
            index: col.index,
            length: col.length,
            scale: col.scale,
            precision: col.precision,
            nullable: col.nullable,
            caseSensitive: col.caseSensitive,
            identity: col.identity,
            readOnly: col.readOnly,
            type: col.type ? col.type.declaration : ''
          });
        }
      }
      Log.insert({
        message: u.str('[%s] - Query "%s" execution n°%s ends on %s:%s (%s records)',
          connection.provider, query.name, esc, connection.server, connection.database, (recordset||[]).length),
        data: recordset,
        elapsed: elapsed,
        schema: columns
      });
      return cb(null, { rows: recordset, columns: columns, sql:sqlstr, query:query });
    });
  });
};



exports.remove = function(options, res) {
  onTable(options, res, function(schema) {
    const sql_where = [];
    schema.columns.forEach(function(c){
      if (_.has(options.key, c.COLUMN_NAME)) {
        var sql_value = schema.getSqlValue(c, options.key[c.COLUMN_NAME]);
        if (sql_value) sql_where.push('[' + c.COLUMN_NAME + ']=' + sql_value);
      }
    });
    const SQL = 'DELETE FROM [' + options.tablename + '] WHERE ' + sql_where.join(' AND ');
    executeSQL(SQL, function(err, result, affected) {
      if (err) return manageError(res, err);
      return u.ok(res, affected);
    });
  });
};

exports.insert = function(options, res) {
  const title = LOG_DATAENTRY_PREFIX + '.[insert] ';
  onTable(options, res, function (schema) {
    const sql_columns = [];
    const sql_values = [];

    schema.columns.forEach(function(c){
      if (_.has(options.datarow, c.COLUMN_NAME)) {
        const sql_value = schema.getSqlValue(c, options.datarow[c.COLUMN_NAME]);
        if (sql_value) {
          sql_columns.push('[' + c.COLUMN_NAME + ']');
          sql_values.push(sql_value);
        }
      }
    });

    const SQL = 'INSERT INTO [' + options.tablename + '] (' + sql_columns.join(',') + ') VALUES (' + sql_values.join(',') + ')';
    console.log(title + 'composed sql: ' + SQL);
    executeSQL(SQL, function (err, result, affected) {
      if (err) return manageError(res, err);
      console.log(title + 'successfully inserted: ' + affected);
      return u.ok(res, affected);
    });
  });
};

exports.update = function(options, res) {
  const title = LOG_DATAENTRY_PREFIX + '.[update] ';
  onTable(options, res, function (schema) {
    const sql_set = [];
    const sql_where = [];
    var sql_value = undefined;

    schema.columns.forEach(function(c){
      if (_.has(options.datarow, c.COLUMN_NAME)) {
        sql_value = schema.getSqlValue(c, options.datarow[c.COLUMN_NAME]);
        if (sql_value) sql_set.push('['+ c.COLUMN_NAME+']='+sql_value);
      }
      if (_.has(options.key, c.COLUMN_NAME)) {
        sql_value = schema.getSqlValue(c, options.key[c.COLUMN_NAME]);
        if (sql_value) sql_where.push('['+ c.COLUMN_NAME+']='+sql_value);
      }
    });

    const SQL = 'UPDATE [' + options.tablename + '] SET ' + sql_set.join(',') + ' WHERE ' + sql_where.join(' AND ');
    console.log(title + 'composed sql: ' + SQL);
    executeSQL(SQL, function (err, result, affected) {
      if (err) return manageError(res, err);
      console.log(title + 'successfully updated: ' + affected);
      return u.ok(res, affected);
    });
  });
};

exports.create = function(options, res) {
  const title = LOG_DATAENTRY_PREFIX + '.[create] ';
  const type = options.schema.type.toUpperCase();
  var SQL = '';
  switch(type) {
    case 'TABLE':
      if (!helper.validateCreateTable(res, options.schema)) return;
      SQL = helper.getCreateTableSql(options.schema);
      break;
    default:
      return noProviderAction(res);
  }
  onConnection(options, res, function() {
    console.log(title + 'composed sql: ' + SQL);
    executeSQL(SQL, function (err, result, affected) {
      if (err) return manageError(res, err);
      console.log(title + 'successfully created: ' + affected);
      return u.ok(res, affected);
    });
  });
};

exports.drop = function(options, res) {
  const title = LOG_DATAENTRY_PREFIX + '.[drop] ';
  const SQL = helper.getDropSql(options.schema);
  if (!SQL) return noProviderAction(res);
  onConnection(options, res, function() {
    console.log(title + 'composed sql: ' + SQL);
    executeSQL(SQL, function (err, result, affected) {
      if (err) return manageError(res, err);
      console.log(title + 'successfully dropped: ' + affected);
      return u.ok(res, affected);
    });
  });
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var helper = __webpack_require__(10);
var _ = __webpack_require__(0);


function get126DateString(date) {
  if (!_.isDate(date))
    return '' + date;
  return date.getFullYear() + '-' + helper.mergeStr(date.getMonth() + 1) + '-' + helper.mergeStr(date.getDate()) + 'T' +
    helper.mergeStr(date.getHours()) + ':' + helper.mergeStr(date.getMinutes()) + ':' + helper.mergeStr(date.getSeconds()) + '.' +
    helper.mergeStr(date.getMilliseconds(), '000');
}


exports.name = 'sqlserver';
exports.TESTSQL = 'SELECT 1 AS NUMBER';
exports.information_schema = {
    SQL_TABLECOLUMNS: "SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME='{{TABLENAME}}'",
    SQL_TABLES: "SELECT * FROM INFORMATION_SCHEMA.TABLES",
    SQL_COLUMNS: "SELECT * FROM INFORMATION_SCHEMA.COLUMNS",
    SQL_ROUTINES: "SELECT * FROM INFORMATION_SCHEMA.ROUTINES",
    SQL_ROUTINE_COLUMNS: "SELECT * FROM INFORMATION_SCHEMA.ROUTINE_COLUMNS",
    SQL_PARAMETERS: "SELECT * FROM INFORMATION_SCHEMA.PARAMETERS",
    SQL_RELATIONS: [
      "SELECT KCU1.CONSTRAINT_NAME AS FK_CONSTRAINT_NAME",
      ", KCU1.TABLE_CATALOG AS FK_TABLE_CATALOG",
      ", KCU1.TABLE_SCHEMA AS FK_TABLE_SCHEMA",
      ", KCU1.TABLE_NAME AS FK_TABLE_NAME",
      ", KCU1.COLUMN_NAME AS FK_COLUMN_NAME",
      ", KCU1.ORDINAL_POSITION AS FK_ORDINAL_POSITION",
      ", KCU2.CONSTRAINT_NAME AS REFERENCED_CONSTRAINT_NAME",
      ", KCU2.TABLE_CATALOG AS REFERENCED_TABLE_CATALOG",
      ", KCU2.TABLE_SCHEMA AS REFERENCED_TABLE_SCHEMA",
      ", KCU2.TABLE_NAME AS REFERENCED_TABLE_NAME",
      ", KCU2.COLUMN_NAME AS REFERENCED_COLUMN_NAME",
      ", KCU2.ORDINAL_POSITION AS REFERENCED_ORDINAL_POSITION",
      "FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS AS RC",
      "INNER JOIN INFORMATION_SCHEMA.KEY_COLUMN_USAGE AS KCU1",
      "ON KCU1.CONSTRAINT_CATALOG = RC.CONSTRAINT_CATALOG",
      "AND KCU1.CONSTRAINT_SCHEMA = RC.CONSTRAINT_SCHEMA",
      "AND KCU1.CONSTRAINT_NAME = RC.CONSTRAINT_NAME",
      "INNER JOIN INFORMATION_SCHEMA.KEY_COLUMN_USAGE AS KCU2",
      "ON KCU2.CONSTRAINT_CATALOG = RC.UNIQUE_CONSTRAINT_CATALOG",
      "AND KCU2.CONSTRAINT_SCHEMA = RC.UNIQUE_CONSTRAINT_SCHEMA",
      "AND KCU2.CONSTRAINT_NAME = RC.UNIQUE_CONSTRAINT_NAME",
      "AND KCU2.ORDINAL_POSITION = KCU1.ORDINAL_POSITION"
    ]
  };
exports.schemaParts = [
    {sql: this.information_schema.SQL_TABLES, pn: 'tables'},
    {sql: this.information_schema.SQL_COLUMNS, pn: 'columns'},
    {sql: this.information_schema.SQL_ROUTINES, pn: 'routines'},
    {sql: this.information_schema.SQL_ROUTINE_COLUMNS, pn: 'routineColumns'},
    {sql: this.information_schema.SQL_PARAMETERS, pn: 'parameters'},
    {sql: this.information_schema.SQL_RELATIONS.join("\n"), pn: 'relations'}
  ];
exports.typemap = {
  "bigint": "numeric",
  "bit": "numeric",
  "decimal": "numeric",
  "int": "numeric",
  "money": "numeric",
  "numeric": "numeric",
  "smallint": "numeric",
  "smallmoney": "numeric",
  "tinyint": "numeric",

  "float": "numeric",
  "real": "numeric",

  "date": "date",
  "datetime": "date",
  "datetime2": "date",
  "datetimeoffset": "date",
  "smalldatetime": "date",
  "time": "date",

  "char": "string",
  "varchar": "string",
  "text": "string",

  "nchar": "nstring",
  "nvarchar": "nstring",
  "ntext": "nstring",

  "binary": "object",
  "varbinary": "object",
  "image": "object",

  "cursor": "object",
  "timestamp": "date",
  "hierarchyid": "string",
  "uniqueidentifier": "string",
  "sql_variant": "string",
  "xml": "string",
  "table": "object",

  "geography": "object",
  "geometry": "object"
};

exports.getTableSchema = function(tablename, columns) {
  return helper.getTableSchema(this, tablename, columns);
};

exports.getSqlValue = function(datatype, value) {
  var type = (datatype || "string").toLowerCase();
  if (value == null || value == undefined) return null;
  switch (this.typemap[type]) {
    case 'numeric':
      return value;
    case 'string':
      return "'" + (value.replace(/'/g, '\'\'')) + "'";
    case 'nstring':
      return "N'" + (value.replace(/'/g, '\'\'')) + "'";
    case 'date':
      if (_.isDate(value))
        return 'CONVERT(datetime, ' + get126DateString(value) + ', 126)';
      return '' + value;
    case 'object':
      if (Buffer.isBuffer(value))
        return "0x" + (value.toString('hex'));
      return null;
    default:
      return null;
  }
};

function _getName(schema) {
  var name = _.isString(schema) ?  schema : schema.name;
  return '['+name+']';
}

exports.validateCreateTable = helper.validateCreateTable;
exports.getCreateTableSql = function(schema) {
  return helper.getCreateTableSql(schema, null, _getName);
};

exports.getDropSql = function(schema) {
  return helper.getDropSql(schema, _getName)
};



/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var helper = __webpack_require__(48);
var _ = __webpack_require__(0);
var u = __webpack_require__(1);
var mysql = u.use.resolve('mysql') ? u.use('mysql') : {};
var Log = __webpack_require__(6);
var LOG_PREFIX = '[MySQL] ';
var LOG_DATAENTRY_PREFIX = '[DATA-ENTRY MYSQL] ';


function manageError(res, err) {
  Log.error(err);
  return u.error(res, err);
}
function noProviderAction(res) {
  return manageError(res, 'Action not recognized/available on provider!');
}
function handleError(err, SQL, cb) {
  err.SQL = SQL;
  Log.error(err);
  return cb(err);
}

function getConfig(connection) {
  var config = {
    user: connection.user,
    password: connection.password,
    host: connection.server,
    database: connection.database
  };
  if (connection.port)  //default: 3306
    config.port = connection.port;
  return config;
}

function executeSQL(config, SQL, cb) {
  var conn = mysql.createConnection(config);
  Log.insert({
    message: LOG_PREFIX + '- SQL statement (request) ' + (SQL||'').substr(0, 50),
    sql: SQL
  });
  conn.query(SQL, function(err, recordset, fields) {
    if (err) {
      Log.error(err);
      return cb(err);
    }
    Log.insert({
      message: LOG_PREFIX + '- SQL statement (executed' + (recordset.length ? ' ' + recordset.length : '') + ') ' + (SQL || '').substr(0, 50),
      sql: SQL
    });
    return cb(null, recordset, fields);
  });
  conn.end();
}


function getSchemaPart(conn, step, target, cb) {
  var sql = step.sql.replace(/\{\{DATABASE\}\}/, target.title);
  conn.query(sql, function(err, result) {
    if (err) target.errors.push(err);
    target[step.pn] = result || [];
    cb();
  });
}

function getTableSchema(database, tablename, cb) {
  var SQL = helper.information_schema.SQL_TABLECOLUMNS.replace(/\{\{TABLENAME\}\}/, tablename);
  SQL = SQL.replace(/\{\{DATABASE\}\}/, database);
  console.log('[DATA-ENTRY MYSQL] composed table schema sql: ' + SQL);
  executeSQL(SQL, function (err, result, affected) {
    console.log('[DATA-ENTRY MYSQL] calculating table schema...' + (err ? 'errors' : 'ok'));
    if (err) cb(err);
    var schema = helper.getTableSchema(tablename, result);
    console.log('[DATA-ENTRY MYSQL] calculated table schema: ' + JSON.stringify(schema));
    cb(null, schema);
  });
}

function onTable(config, tablename, res, cb) {
  sql.connect(config)
    .then(function() {
      getTableSchema(config.database, tablename, function(err, schema){
        if (err) return manageError(res, err);
        cb(schema);
      });
    })
    .catch(function(err) {
      return manageError(res, err);
    });
}




exports.name = 'mysql';
exports.helper = helper;

exports.execute = function(connection, statement, res) {
  var config = getConfig(connection);
  executeSQL(config, statement, function(err, recordset, fields) {
    if (err) return manageError(res, err);
    var result = {
      rows: recordset,
      fields: fields
    };
    u.ok(res, result);
  });
};

exports.test = function(connection, cb) {
  const config = getConfig(connection);
  const conn = mysql.createConnection(config);
  conn.query(helper.TESTSQL, function(err) {
    if (err) return cb(err);
    return cb();
  });
  conn.end();
};

exports.schema = function(connection, cb) {
  const config = getConfig(connection);
  const schema = {
    title: connection.database,
    errors: []
  };
  const conn = mysql.createConnection(config);
  const seq = u.compose();
  helper.schemaParts.forEach(function (prm) {
    seq.use(function(next){
      getSchemaPart(conn, prm, schema, function (err) {
        if (err) console.error(err);
        next();
      });
    });
  });
  seq.run(function() {
    cb(null, schema);
    conn.end();
  });
};

exports.retrieveData = function(connection, query, SQL, esc, cb) {
  const start = new Date();
  const config = getConfig(connection);
  Log.insert({
    message: u.str('[%s] - Query "%s" execution n°%s start on %s:%s',
      config.provider, query.name, esc, config.host, config.database),
    sql: SQL,
    data: query
  });
  executeSQL(config, SQL, function(err, recordset, fields){
    const elapsed = u.elapsed(start);
    if (err) return handleError(err, SQL, cb);
    const columns = fields ? fields.map(function(f){
      return {
        name: f.name,
        length: f.length,
        precision: f.decimals,
        default: f.default,
        type: helper.parseType(f.type),
        nullable: f.zeroFill,
        flags: f.flags
      };
    }) : [];
    Log.insert({
      message: u.str('[%s] - Query "%s" execution n°%s ends on %s:%s (%s records)',
        config.provider, query.name, esc, config.host, config.database, (recordset||[]).length),
      data: recordset,
      elapsed: elapsed,
      schema: columns
    });
    return cb(null, { rows: recordset, columns: columns, sql:SQL, query:query });
  });
};



exports.remove = function(options, res) {
  const config = getConfig(options);
  onTable(config, options.tablename, res, function(schema) {
    const sql_where = [];
    schema.columns.forEach(function(c){
      if (_.has(options.key, c.COLUMN_NAME)) {
        var sql_value = schema.getSqlValue(c, options.key[c.COLUMN_NAME]);
        if (sql_value) sql_where.push(c.COLUMN_NAME + '=' + sql_value);
      }
    });
    const SQL = 'DELETE FROM ' + options.tablename + ' WHERE ' + sql_where.join(' AND ');
    executeSQL(config, SQL, function(err, result, affected) {
      if (err) return manageError(res, err);
      return u.ok(res, affected);
    });
  });
};

exports.insert = function(options, res) {
  const title = LOG_DATAENTRY_PREFIX + '.[insert] ';
  const config = getConfig(options);
  onTable(config, options.tablename, res, function (schema) {
    const sql_columns = [];
    const sql_values = [];

    schema.columns.forEach(function(c){
      if (_.has(options.datarow, c.COLUMN_NAME)) {
        const sql_value = schema.getSqlValue(c, options.datarow[c.COLUMN_NAME]);
        if (sql_value) {
          sql_columns.push(c.COLUMN_NAME);
          sql_values.push(sql_value);
        }
      }
    });

    const SQL = 'INSERT INTO ' + options.tablename + ' (' + sql_columns.join(',') + ') VALUES (' + sql_values.join(',') + ')';
    console.log(title + 'composed sql: ' + SQL);
    executeSQL(config, SQL, function (err, recordset) {
      if (err) return manageError(res, err);
      console.log(title + 'successfully inserted: ' + recordset.length);
      return u.ok(res, recordset.length);
    });
  });
};

exports.update = function(options, res) {
  const title = LOG_DATAENTRY_PREFIX + '.[update] ';
  const config = getConfig(options);
  onTable(config, options.tablename, res, function (schema) {
    const sql_set = [];
    const sql_where = [];
    var sql_value;

    schema.columns.forEach(function(c){
      if (_.has(options.datarow, c.COLUMN_NAME)) {
        sql_value = schema.getSqlValue(c, options.datarow[c.COLUMN_NAME]);
        if (sql_value) sql_set.push(c.COLUMN_NAME+'='+sql_value);
      }
      if (_.has(options.key, c.COLUMN_NAME)) {
        sql_value = schema.getSqlValue(c, options.key[c.COLUMN_NAME]);
        if (sql_value) sql_where.push(c.COLUMN_NAME+'='+sql_value);
      }
    });

    const SQL = 'UPDATE ' + options.tablename + ' SET ' + sql_set.join(',') + ' WHERE ' + sql_where.join(' AND ');
    console.log(title + 'composed sql: ' + SQL);
    executeSQL(config, SQL, function (err, recordset) {
      if (err) return manageError(res, err);
      console.log(title + 'successfully updated: ' + recordset.length);
      return u.ok(res, recordset.length);
    });
  });
};


exports.create = function(options, res) {
  const title = LOG_DATAENTRY_PREFIX + '.[drop] ';
  const type = options.schema.type.toUpperCase();
  var SQL = '';
  switch(type) {
    case 'TABLE':
      SQL = helper.getCreateTableSql(options.schema);
      break;
    default:
      return noProviderAction(res);
  }
  console.log(title + 'composed sql: ' + SQL);
  const config = getConfig(options);
  executeSQL(config, SQL, function (err, recordset) {
    if (err) return manageError(res, err);
    console.log(title + 'successfully created: ' + recordset.length);
    return u.ok(res, recordset.length);
  });
};

exports.drop = function(options, res) {
  const title = LOG_DATAENTRY_PREFIX + '.[drop] ';
  const SQL = helper.getDropSql(options.schema);
  if (!SQL) return noProviderAction(res);
  console.log(title + 'composed sql: ' + SQL);
  const config = getConfig(options);
  executeSQL(config, SQL, function (err, recordset) {
    if (err) return manageError(res, err);
    console.log(title + 'successfully dropped: ' + recordset.length);
    return u.ok(res, recordset.length);
  });
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var helper = __webpack_require__(10);
var _ = __webpack_require__(0);

function getDateString(date) {
  if (!_.isDate(date))
    return '' + date;
  return date.getFullYear() + '-' + helper.mergeStr(date.getMonth() + 1) + '-' + helper.mergeStr(date.getDate()) + ' ' +
    helper.mergeStr(date.getHours()) + ':' + helper.mergeStr(date.getMinutes()) + ':' + helper.mergeStr(date.getSeconds()) + '.' +
    helper.mergeStr(date.getMilliseconds(), '000');
}

exports.name = 'mysql';
exports.TESTSQL = 'SELECT 1 AS NUMBER';
exports.information_schema = {
  SQL_TABLECOLUMNS: "SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = '{{DATABASE}}' AND TABLE_NAME = '{{TABLENAME}}'",
  SQL_TABLES: "SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = '{{DATABASE}}'",
  SQL_COLUMNS: "SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = '{{DATABASE}}'",
  SQL_ROUTINES: "SELECT * FROM INFORMATION_SCHEMA.ROUTINES WHERE TABLE_SCHEMA = '{{DATABASE}}'",
  SQL_ROUTINE_COLUMNS: "SELECT * FROM INFORMATION_SCHEMA.ROUTINE_COLUMNS WHERE TABLE_SCHEMA = '{{DATABASE}}'",
  SQL_PARAMETERS: "SELECT * FROM INFORMATION_SCHEMA.PARAMETERS WHERE TABLE_SCHEMA = '{{DATABASE}}'",
  SQL_RELATIONS: [
    "SELECT KCU1.CONSTRAINT_NAME AS FK_CONSTRAINT_NAME",
    ", KCU1.TABLE_CATALOG AS FK_TABLE_CATALOG",
    ", KCU1.TABLE_SCHEMA AS FK_TABLE_SCHEMA",
    ", KCU1.TABLE_NAME AS FK_TABLE_NAME",
    ", KCU1.COLUMN_NAME AS FK_COLUMN_NAME",
    ", KCU1.ORDINAL_POSITION AS FK_ORDINAL_POSITION",
    ", KCU2.CONSTRAINT_NAME AS REFERENCED_CONSTRAINT_NAME",
    ", KCU2.TABLE_CATALOG AS REFERENCED_TABLE_CATALOG",
    ", KCU2.TABLE_SCHEMA AS REFERENCED_TABLE_SCHEMA",
    ", KCU2.TABLE_NAME AS REFERENCED_TABLE_NAME",
    ", KCU2.COLUMN_NAME AS REFERENCED_COLUMN_NAME",
    ", KCU2.ORDINAL_POSITION AS REFERENCED_ORDINAL_POSITION",
    "FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS AS RC",
    "INNER JOIN INFORMATION_SCHEMA.KEY_COLUMN_USAGE AS KCU1",
    "ON KCU1.CONSTRAINT_CATALOG = RC.CONSTRAINT_CATALOG",
    "AND KCU1.CONSTRAINT_SCHEMA = RC.CONSTRAINT_SCHEMA",
    "AND KCU1.CONSTRAINT_NAME = RC.CONSTRAINT_NAME",
    "INNER JOIN INFORMATION_SCHEMA.KEY_COLUMN_USAGE AS KCU2",
    "ON KCU2.CONSTRAINT_CATALOG = RC.UNIQUE_CONSTRAINT_CATALOG",
    "AND KCU2.CONSTRAINT_SCHEMA = RC.UNIQUE_CONSTRAINT_SCHEMA",
    "AND KCU2.CONSTRAINT_NAME = RC.UNIQUE_CONSTRAINT_NAME",
    "AND KCU2.ORDINAL_POSITION = KCU1.ORDINAL_POSITION"
  ]
};
exports.schemaParts = [
  {sql: this.information_schema.SQL_TABLES, pn: 'tables'},
  {sql: this.information_schema.SQL_COLUMNS, pn: 'columns'},
  {sql: this.information_schema.SQL_ROUTINES, pn: 'routines'},
  {sql: this.information_schema.SQL_ROUTINE_COLUMNS, pn: 'routineColumns'},
  {sql: this.information_schema.SQL_PARAMETERS, pn: 'parameters'},
  {sql: this.information_schema.SQL_RELATIONS.join("\n"), pn: 'relations'}
];
exports.typemap = {
  "0": "decimal",
  "1": "tiny",
  "2": "short",
  "3": "long",
  "4": "float",
  "5": "double",
  "6": "null",
  "7": "timestamp",
  "8": "longlong",
  "9": "int24",
  "10": "date",
  "11": "time",
  "12": "datetime",
  "13": "year",
  "14": "newdate",
  "15": "varchar",
  "16": "bit",
  "17": "timestamp2",
  "18": "datetime2",
  "19": "time2",
  "245": "json",
  "246": "newdecimal",
  "247": "enum",
  "248": "set",
  "249": "tiny_blob",
  "250": "medium_blob",
  "251": "long_blob",
  "252": "blob",
  "253": "var_string",
  "254": "string",
  "255": "geometry"
};

var jstypemap = {
  "0": "numeric",
  "1": "numeric",
  "2": "numeric",
  "3": "numeric",
  "4": "numeric",
  "5": "numeric",
  "6": "object",
  "7": "date",
  "8": "numeric",
  "9": "numeric",
  "10": "date",
  "11": "date",
  "12": "date",
  "13": "numeric",
  "14": "date",
  "15": "string",
  "16": "numeric",
  "17": "date",
  "18": "date",
  "19": "date",
  "245": "string",
  "246": "numeric",
  "247": "object",
  "248": "object",
  "249": "object",
  "250": "object",
  "251": "object",
  "252": "object",
  "253": "string",
  "254": "string",
  "255": "object"
};

exports.parseType = function(code) {
  return this.typemap['' + code];
};

exports.getTableSchema = function(tablename, columns) {
  return helper.getTableSchema(this, tablename, columns);
};
exports.getSqlValue = function(code, value) {
  var type = (code || "254").toLowerCase();
  if (value == null || value == undefined) return null;
  switch (this.jstypemap[type]) {
    case 'numeric':
      return value;
    case 'string':
      return "'" + (value.replace(/'/g, '\'\'')) + "'";
    case 'nstring':
      return "N'" + (value.replace(/'/g, '\'\'')) + "'";
    case 'date':
      if (_.isDate(value))
        return 'str_to_date(\'' + getDateString(value) + '\', \'%Y-%m-%d %H:%i:%s\')';
      return '' + value;
    case 'object':
      if (Buffer.isBuffer(value))
        return "0x" + (value.toString('hex'));
      return null;
    default:
      return null;
  }
};
exports.validateCreateTable = helper.validateCreateTable;
exports.getCreateTableSql = function(schema) {
  return helper.getCreateTableSql(schema);
};

exports.getDropSql = helper.getDropSql;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const helper = __webpack_require__(50);
const _ = __webpack_require__(0);
const u = __webpack_require__(1);
var oracle = u.use.resolve('oracledb') ? u.use('oracledb') : {};
var Log = __webpack_require__(6);
var LOG_PREFIX = '[Oracle] ';
var LOG_DATAENTRY_PREFIX = '[DATA-ENTRY ORACLE] ';
var _cnnCounter = 0;

const ORACLEDBTYPES = {
  101: 'binarydouble',    //Oracledb.DB_TYPE_BINARY_DOUBLE  // (101) BINARY_DOUBLE
  100: 'binaryfloat',     //Oracledb.DB_TYPE_BINARY_FLOAT   // (100) BINARY_FLOAT
  113: 'blob',            //Oracledb.DB_TYPE_BLOB           // (113) BLOB
  96: 'char',             //Oracledb.DB_TYPE_CHAR           // (96) CHAR
  112: 'clob',            //Oracledb.DB_TYPE_CLOB           // (112) CLOB
  12: 'date',             //Oracledb.DB_TYPE_DATE           // (12) DATE
  2: 'number',            //Oracledb.DB_TYPE_NUMBER         // (2) NUMBER or FLOAT
  23: 'raw',              //Oracledb.DB_TYPE_RAW            // (23) RAW
  104: 'rowID',           //Oracledb.DB_TYPE_ROWID          // (104) ROWID
  187: 'timestamp',       //Oracledb.DB_TYPE_TIMESTAMP      // (187) TIMESTAMP
  232: 'timestampLTZ',    //Oracledb.DB_TYPE_TIMESTAMP_LTZ  // (232) TIMESTAMP WITH LOCAL TIME ZONE
  188: 'timestampTZ',     //Oracledb.DB_TYPE_TIMESTAMP_TZ   // (188) TIMESTAMP WITH TIME ZONE
  1: 'varchar2'           //Oracledb.DB_TYPE_VARCHAR        // (1) VARCHAR2
};
const NODEORACLETYPES = {
  0: 'string',      //Oracledb.DEFAULT  Used with fetchInfo to reset the fetch type to the database type
  2001: 'string',   //Oracledb.STRING   Bind as JavaScript String type.  Can be used for most database types.
  2002: 'number',   //Oracledb.NUMBER   Bind as JavaScript number type.  Can also be used for fetchAsString and fetchInfo
  2003: 'date',     //Oracledb.DATE     Bind as JavaScript date type.  Can also be used for fetchAsString and fetchInfo
  2004: 'object',   //Oracledb.CURSOR   Bind a REF CURSOR to a node-oracledb ResultSet class
  2005: 'object',   //Oracledb.BUFFER   Bind a RAW or BLOB to a Node.js Buffer
  2006: 'object',   //Oracledb.CLOB     Bind a CLOB to a Node.js Stream, create a temporary CLOB, or for fetchAsString and fetchInfo
  2007: 'object'    //Oracledb.BLOB     Bind a BLOB to a Node.js Stream or create a temporary BLOB, or for fetchAsBuffer and fetchInfo
};


function manageError(res, err, cnn) {
  Log.error(err);
  if (cnn) closeConnection(cnn);
  return u.error(res, err);
}
function noProviderAction(res) {
  return manageError(res, 'Action not recognized/available on provider!');
}
function handleError(err, SQL, cb, cnn) {
  err.SQL = SQL;
  Log.error(err);
  if (cnn) closeConnection(cnn);
  return cb(err);
}
function closeConnection(cnn) {
  if (cnn && _.isFunction(cnn.close)) {
    cnn.close(function (err) {
      if (err) console.error(err.message);
      console.log('Connection %s closed', cnn.id);
    });
  }
}

function getConnectionString(connection) {
  var str = (connection.port) ?
    connection.server + ':' + connection.port :
    connection.server;
  if (!str) {
    str = connection.database;
  } else if (connection.database) {
    str = str ? str + '/' + connection.database : connection.database;
  }
  return str;
}

function getConfig(connection) {
  var cnnstr = getConnectionString(connection);
  return {
    user: connection.user,
    password: connection.password,
    connectString: cnnstr
  };
}

function executeSQL(SQL, cb, conn) {
  Log.insert({
    message: LOG_PREFIX + '- SQL statement (request) ' + (SQL||'').substr(0, 50),
    sql: SQL
  });
  conn.execute(SQL, [], { outFormat: oracle.OBJECT, maxRows: 1000000, extendedMetaData:true }, function(err, result){
    if (err) {
      Log.error(err);
      return cb(err);
    } else {
      Log.insert({
        message: LOG_PREFIX + '- SQL statement (executed) ' + (SQL||'').substr(0, 50),
        sql: SQL
      });
      return cb(null, result);
    }
  });
}


function onConnection(conn, cb) {
  var config = getConfig(conn);
  try {
    oracle.getConnection(config, function (err, connection) {
      if (err) {
        Log.error(err);
        return cb(err);
      } else {
        Log.insert({
          message: u.str('%s- connected (%s)', LOG_PREFIX, conn.name),
          data: conn
        });
        connection.id = ++_cnnCounter;
        console.log('Connection %s opened', connection.id);
        return cb(null, connection);
      }
    });
  }
  catch(err) {
    return cb(err);
  }
}

function getSchemaPart(conn, step, target, cb) {
  executeSQL(step.sql, function(err, result){
    if (err) target.errors.push(err);
    target[step.pn] = result ? result.rows || [] : [];
    cb();
  }, conn);
}

function getTableSchema(conn, tablename, cb) {
  var SQL = helper.information_schema.SQL_TABLECOLUMNS.replace(/\{\{TABLENAME\}\}/, tablename);
  console.log('%s composed table schema sql: %s', LOG_DATAENTRY_PREFIX, SQL);
  executeSQL(SQL, function (err, result, affected) {
    console.log(LOG_DATAENTRY_PREFIX + 'calculating table schema...' + (err ? 'errors' : 'ok'));
    if (err) cb(err);
    var schema = helper.getTableSchema(tablename, result);
    console.log(LOG_DATAENTRY_PREFIX + 'calculated table schema: ' + JSON.stringify(schema));
    cb(null, schema);
  }, conn);
}

function onTable(options, res, cb) {
  onConnection(options.connection, function(err, cnn){
    if (err) return manageError(res, err);
    getTableSchema(cnn, options.tablename, function(err, schema){
      if (err) return manageError(res, err);
      cb(schema, cnn);
    });
  });
}



function handleErrorCnn(res, err, cnn) {
  closeConnection(cnn);
  _.isFunction(res) ? res(err) : u.error(res, err);
}



exports.name = 'oracle';
exports.helper = helper;

exports.execute = function(connection, statement, res) {
  onConnection(connection, function(err, cnn){
    if (err) return u.error(res, err);
    executeSQL(statement, function(err, result){
      if (err) return handleErrorCnn(res, err, cnn);
      var results = {
        rows: result,
        fields: []
      };
      u.ok(res, results);
      closeConnection(cnn);
    }, cnn);
  });
};

exports.test = function(connection, cb) {
  onConnection(connection, function(err, cnn){
    if (err) return cb(err);
    executeSQL(helper.TESTSQL, function(err){
      cb(err);
      closeConnection(cnn);
    }, cnn);
  });
};

exports.schema = function(connection, cb) {
  var schema = {
    title: connection.name,
    errors: []
  };
  onConnection(connection, function(err, cnn){
    if (err) return cb(err);
    const seq = u.compose();
    helper.schemaParts.forEach(function (prm) {
      seq.use(function(next){
        getSchemaPart(cnn, prm, schema, function (err) {
          if (err) console.error(err);
          next();
        });
      });
    });
    seq.run(function() {
      closeConnection(cnn);
      cb(null, schema);
    });
  });
};

exports.retrieveData = function(connection, query, sqlstr, esc, cb) {
  const start = new Date();
  onConnection(connection, function(err, cnn) {
    if (err) return handleError(err, sqlstr, cb, cnn);
    Log.insert({
      message: u.str('[%s] - Query "%s" execution n°%s start on %s:%s',
        connection.provider, query.name, esc, connection.server, connection.database),
      sql: sqlstr,
      data: query
    });
    executeSQL(sqlstr, function(err, result) {
      const elapsed = u.elapsed(start);
      if (err) return handleError(err, sqlstr, cb, cnn);
      var columns = [];
      if (result.metaData) {
        console.log(LOG_PREFIX + '- META DATA: ' + JSON.stringify(result.metaData));
        columns = _.map(result.metaData, function (d) {
          return {
            name: d.name || '',
            type: NODEORACLETYPES[d.fetchType] || 'string',
            originalType: ORACLEDBTYPES[d.dbType] || 'undefined',
            size: d.byteSize || 0,
            precision: d.precision || 0,
            scale: d.scale || 0,
            isNullable: d.nullable || false
          };
        });
      }
      closeConnection(cnn);
      Log.insert({
        message: u.str('[%s] - Query "%s" execution n°%s ends on %s:%s (%s records)',
          connection.provider, query.name, esc, connection.server, connection.database, ((result||{}).rows||[]).length),
        data: result,
        elapsed: elapsed,
        schema: columns
      });
      return cb(null, { rows: result.rows, columns: columns, sql:sqlstr, query:query });
    }, cnn);
  });
};






exports.remove = function(options, res) {
  onTable(options, res, function(schema, conn) {
    const sql_where = [];
    schema.columns.forEach(function(c){
      if (_.has(options.key, c.COLUMN_NAME)) {
        var sql_value = schema.getSqlValue(c, options.key[c.COLUMN_NAME]);
        if (sql_value) sql_where.push( c.COLUMN_NAME + '=' + sql_value);
      }
    });
    const SQL = 'DELETE FROM ' + options.tablename + ' WHERE ' + sql_where.join(' AND ');
    executeSQL(SQL, function(err, result) {
      if (err) return manageError(res, err, conn);
      closeConnection(conn);
      return u.ok(res);
    }, conn);
  });
};

exports.insert = function(options, res) {
  const title = LOG_DATAENTRY_PREFIX + '.[insert] ';
  onTable(options, res, function (schema, conn) {
    const sql_columns = [];
    const sql_values = [];

    schema.columns.forEach(function(c){
      if (_.has(options.datarow, c.COLUMN_NAME)) {
        const sql_value = schema.getSqlValue(c, options.datarow[c.COLUMN_NAME]);
        if (sql_value) {
          sql_columns.push(c.COLUMN_NAME);
          sql_values.push(sql_value);
        }
      }
    });

    const SQL = 'INSERT INTO ' + options.tablename + ' (' + sql_columns.join(',') + ') VALUES (' + sql_values.join(',') + ')';
    console.log(title + 'composed sql: ' + SQL);
    executeSQL(SQL, function (err, result) {
      if (err) return manageError(res, err, conn);
      console.log(title + 'successfully inserted');
      closeConnection(conn);
      return u.ok(res);
    }, conn);
  });
};

exports.update = function(options, res) {
  const title = LOG_DATAENTRY_PREFIX + '.[update] ';
  onTable(options, res, function (schema, conn) {
    const sql_set = [];
    const sql_where = [];
    var sql_value;

    schema.columns.forEach(function(c){
      if (_.has(options.datarow, c.COLUMN_NAME)) {
        sql_value = schema.getSqlValue(c, options.datarow[c.COLUMN_NAME]);
        if (sql_value) sql_set.push(c.COLUMN_NAME+'='+sql_value);
      }
      if (_.has(options.key, c.COLUMN_NAME)) {
        sql_value = schema.getSqlValue(c, options.key[c.COLUMN_NAME]);
        if (sql_value) sql_where.push(c.COLUMN_NAME+'='+sql_value);
      }
    });

    const SQL = 'UPDATE ' + options.tablename + ' SET ' + sql_set.join(',') + ' WHERE ' + sql_where.join(' AND ');
    console.log(title + 'composed sql: ' + SQL);
    executeSQL(SQL, function (err, result) {
      if (err) return manageError(res, err, conn);
      console.log(title + 'updated successfully');
      closeConnection(conn);
      return u.ok(res);
    }, conn);
  });
};

exports.create = function(options, res) {
  const title = LOG_DATAENTRY_PREFIX + '.[create] ';
  const type = options.schema.type.toUpperCase();
  var SQL = '';
  switch(type) {
    case 'TABLE':
      SQL = helper.getCreateTableSql(options.schema);
      break;
    default:
      return noProviderAction(res);
  }
  onConnection(options.connection, function(err, cnn) {
    console.log(title + 'composed sql: ' + SQL);
    executeSQL(SQL, function (err, result) {
      if (err) return manageError(res, err, cnn);
      console.log(title + 'successfully created');
      closeConnection(cnn);
      return u.ok(res);
    });
  });
};

exports.drop = function(options, res) {
  const title = LOG_DATAENTRY_PREFIX + '.[drop] ';
  const SQL = helper.getDropSql(options.schema);
  if (!SQL) return noProviderAction(res);
  onConnection(options.connection, function(err, cnn){
    console.log(title + 'composed sql: ' + SQL);
    executeSQL(SQL, function(err, result) {
      if (err) return manageError(res, err, cnn);
      console.log(title + 'successfully dropped');
      closeConnection(cnn);
      return u.ok(res);
    }, cnn);
  });
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var helper = __webpack_require__(10);
var _ = __webpack_require__(0);

function getDateString(date) {
  if (!_.isDate(date))
    return '' + date;
  return date.getFullYear() + '-' + helper.mergeStr(date.getMonth() + 1) + '-' + helper.mergeStr(date.getDate()) + ' ' +
    helper.mergeStr(date.getHours()) + ':' + helper.mergeStr(date.getMinutes()) + ':' + helper.mergeStr(date.getSeconds());
}

exports.name = 'oracle';
exports.TESTSQL = 'SELECT 1 FROM DUAL';
var SQL_COLUMNS_FIELDS = 'TABLE_NAME, COLUMN_NAME, DATA_TYPE, DATA_TYPE_MOD, DATA_TYPE_OWNER, DATA_LENGTH, DATA_PRECISION, DATA_SCALE, NULLABLE, COLUMN_ID, DEFAULT_LENGTH, NUM_DISTINCT, LOW_VALUE, HIGH_VALUE, DENSITY, NUM_NULLS, NUM_BUCKETS, LAST_ANALYZED, SAMPLE_SIZE, CHARACTER_SET_NAME, CHAR_COL_DECL_LENGTH, GLOBAL_STATS, USER_STATS, AVG_COL_LEN, CHAR_LENGTH, CHAR_USED, V80_FMT_IMAGE, DATA_UPGRADED, HISTOGRAM';

exports.information_schema = {
  SQL_TABLECOLUMNS: "SELECT "+SQL_COLUMNS_FIELDS+" FROM USER_TAB_COLUMNS WHERE TABLE_NAME={{TABLENAME}} ORDER BY COLUMN_ID",
  SQL_TABLES: "SELECT * FROM USER_TABLES",
  SQL_VIEWS: "SELECT VIEW_NAME, VIEW_TYPE_OWNER, VIEW_TYPE FROM USER_VIEWS",
  SQL_COLUMNS: "SELECT "+SQL_COLUMNS_FIELDS+" FROM USER_TAB_COLUMNS",
  SQL_ROUTINES: "SELECT * FROM INFORMATION_SCHEMA.ROUTINES WHERE TABLE_SCHEMA = '{{DATABASE}}'",
  SQL_ROUTINE_COLUMNS: "SELECT * FROM INFORMATION_SCHEMA.ROUTINE_COLUMNS WHERE TABLE_SCHEMA = '{{DATABASE}}'",
  SQL_PARAMETERS: "SELECT * FROM INFORMATION_SCHEMA.PARAMETERS WHERE TABLE_SCHEMA = '{{DATABASE}}'",
  SQL_RELATIONS: [
    "SELECT KCU1.CONSTRAINT_NAME AS FK_CONSTRAINT_NAME",
    ", KCU1.TABLE_CATALOG AS FK_TABLE_CATALOG",
    ", KCU1.TABLE_SCHEMA AS FK_TABLE_SCHEMA",
    ", KCU1.TABLE_NAME AS FK_TABLE_NAME",
    ", KCU1.COLUMN_NAME AS FK_COLUMN_NAME",
    ", KCU1.ORDINAL_POSITION AS FK_ORDINAL_POSITION",
    ", KCU2.CONSTRAINT_NAME AS REFERENCED_CONSTRAINT_NAME",
    ", KCU2.TABLE_CATALOG AS REFERENCED_TABLE_CATALOG",
    ", KCU2.TABLE_SCHEMA AS REFERENCED_TABLE_SCHEMA",
    ", KCU2.TABLE_NAME AS REFERENCED_TABLE_NAME",
    ", KCU2.COLUMN_NAME AS REFERENCED_COLUMN_NAME",
    ", KCU2.ORDINAL_POSITION AS REFERENCED_ORDINAL_POSITION",
    "FROM INFORMATION_SCHEMA.REFERENTIAL_CONSTRAINTS AS RC",
    "INNER JOIN INFORMATION_SCHEMA.KEY_COLUMN_USAGE AS KCU1",
    "ON KCU1.CONSTRAINT_CATALOG = RC.CONSTRAINT_CATALOG",
    "AND KCU1.CONSTRAINT_SCHEMA = RC.CONSTRAINT_SCHEMA",
    "AND KCU1.CONSTRAINT_NAME = RC.CONSTRAINT_NAME",
    "INNER JOIN INFORMATION_SCHEMA.KEY_COLUMN_USAGE AS KCU2",
    "ON KCU2.CONSTRAINT_CATALOG = RC.UNIQUE_CONSTRAINT_CATALOG",
    "AND KCU2.CONSTRAINT_SCHEMA = RC.UNIQUE_CONSTRAINT_SCHEMA",
    "AND KCU2.CONSTRAINT_NAME = RC.UNIQUE_CONSTRAINT_NAME",
    "AND KCU2.ORDINAL_POSITION = KCU1.ORDINAL_POSITION"
  ]
};
exports.schemaParts = [
  {sql: this.information_schema.SQL_TABLES, pn: 'tables'},
  {sql: this.information_schema.SQL_VIEWS, pn: 'views'},
  {sql: this.information_schema.SQL_COLUMNS, pn: 'columns'}
  //{sql: this.information_schema.SQL_ROUTINES, pn: 'routines'},
  //{sql: this.information_schema.SQL_ROUTINE_COLUMNS, pn: 'routineColumns'},
  //{sql: this.information_schema.SQL_PARAMETERS, pn: 'parameters'},
  //{sql: this.information_schema.SQL_RELATIONS.join("\n"), pn: 'relations'}
];
exports.typemap = {
  "0": "decimal",
  "1": "tiny",
  "2": "short",
  "3": "long",
  "4": "float",
  "5": "double",
  "6": "null",
  "7": "timestamp",
  "8": "longlong",
  "9": "int24",
  "10": "date",
  "11": "time",
  "12": "datetime",
  "13": "year",
  "14": "newdate",
  "15": "varchar",
  "16": "bit",
  "17": "timestamp2",
  "18": "datetime2",
  "19": "time2",
  "245": "json",
  "246": "newdecimal",
  "247": "enum",
  "248": "set",
  "249": "tiny_blob",
  "250": "medium_blob",
  "251": "long_blob",
  "252": "blob",
  "253": "var_string",
  "254": "string",
  "255": "geometry"
};

var jstypemap = {
  "0": "numeric",
  "1": "numeric",
  "2": "numeric",
  "3": "numeric",
  "4": "numeric",
  "5": "numeric",
  "6": "object",
  "7": "date",
  "8": "numeric",
  "9": "numeric",
  "10": "date",
  "11": "date",
  "12": "date",
  "13": "numeric",
  "14": "date",
  "15": "string",
  "16": "numeric",
  "17": "date",
  "18": "date",
  "19": "date",
  "245": "string",
  "246": "numeric",
  "247": "object",
  "248": "object",
  "249": "object",
  "250": "object",
  "251": "object",
  "252": "object",
  "253": "string",
  "254": "string",
  "255": "object"
};

exports.parseType = function(code) {
  return this.typemap['' + code];
};

exports.getTableSchema = function(tablename, columns) {
  return helper.getTableSchema(this, tablename, columns);
};
exports.getSqlValue = function(code, value) {
  var type = (code || "254").toLowerCase();
  if (value == null || value == undefined) return null;
  switch (this.jstypemap[type]) {
    case 'numeric':
      return value;
    case 'string':
      return "'" + (value.replace(/'/g, '\'\'')) + "'";
    case 'nstring':
      return "N'" + (value.replace(/'/g, '\'\'')) + "'";
    case 'date':
      if (_.isDate(value))
        return 'TO_DATE(\'' + getDateString(value) + '\',\'YYYY-MM-DD HH24:MI:SS\')';
      return '' + value;
    case 'object':
      if (Buffer.isBuffer(value))
        return "0x" + (value.toString('hex'));
      return null;
    default:
      return null;
  }
};

function _getConstraint(column, others) {
  var cns = '';
  var c = column ? column.constraints : {};
  if (c.notNull) cns+=' NOT NULL';
  if (c.unique) others.push('UNIQUE ('+c.name+')');
  if (c.primaryKey) others.push('PRIMARY KEY ('+c.name+')');
  if (c.foreignKey && c.foreignTable) others.push('CONSTRAINT fk_'+c.foreignTable+'_'+c.name+' FOREIGN KEY ('+c.name+') REFERENCES '+c.foreignTable+'('+c.foreignKey+')');
  if (c.check) others.push(' HECK ('+c.check+')');
  if (c.default) cns+=' DEFAULT '+c.default;
  return cns
}

function _getName(schema) {
  return _.isString(schema) ? schema : (schema.schemaName?schema.schemaName+'.':'')+schema.name;
}
function _getType(c) {
  switch(c.type) {
    case helper.standardTypes.text:
      return (c.unicode?'n':'')+'text';
    case helper.standardTypes.integer:
      return 'int';
    case helper.standardTypes.numeric:
      return 'float';
    case helper.standardTypes.datetime:
      return 'datetime';
    case helper.standardTypes.boolean:
      return 'bit';
    case helper.standardTypes.string:
    default: return (c.unicode?'n':'')+'varchar2('+(c.length>0?c.length:'MAX')+')';
  }
}
exports.validateCreateTable = helper.validateCreateTable;
exports.getCreateTableSql = function(schema) {
  return helper.getCreateTableSql(schema, _getConstraint, _getName, _getType);
};

exports.getDropSql = function(schema) {
  return helper.getDropSql(schema, _getName)
};



/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _ = __webpack_require__(0);

var PARAMETER_BOOKMARK = '@PARAMETER';
var OPTIONAL_ALLVALUES = '##ALL##';
var MULTIVALUE_SEPARATOR = '##;##';
var expressions = {
  VALUE_REPLACER: "return P['" + PARAMETER_BOOKMARK + "']",
  OPTIONAL: "return P['" + PARAMETER_BOOKMARK + "']!='" + OPTIONAL_ALLVALUES + "'",
  OPTIONALNOT: "return P['" + PARAMETER_BOOKMARK + "']=='" + OPTIONAL_ALLVALUES + "'"
};


var part = function(text, pos, content) {
  this.text = text;
  this.pos = pos || 0;
  this.content = content || '';
};

function getValue(p) {
  return p.value;
}

function getEvalScope(parameters) {
  var S = {};
  if (_.isArray(parameters))
    parameters.forEach(function(p){ S[p.name] = getValue(p); });
  else if (_.isObject(parameters))
    _.keys(parameters).forEach(function(pn){
      S[pn] = parameters[pn];
    });
  return S;
}

function evalExpression(exp, paramName, parameters) {
  var scope = getEvalScope(parameters);
  var func = exp
    .replace(PARAMETER_BOOKMARK, paramName)
    .replace('this', '');
  var evaluator = new Function('P', func);
  return evaluator(scope);
}

function mergeStr(value, template) {
  template = template || '00';
  value = ''+value;
  if (value.length<template.length)
    return template.slice(0, -value.length)+value;
  return value;
}

function getDateString(date) {
  if (!_.isDate(date))
    return '' + date;
  return date.getFullYear() + '-' + mergeStr(date.getMonth() + 1) + '-' + mergeStr(date.getDate()) + 'T' +
    mergeStr(date.getHours()) + ':' + mergeStr(date.getMinutes()) + ':' + mergeStr(date.getSeconds());
  //+ '.' + mergeStr(date.getMilliseconds(), '000');
}

function _isNullOrEmpty(v) {
  return _.isNull(v) || _.isUndefined(v) || _.isNaN(v);
}

function _getValue(type, value, apexes) {
  var res;
  switch (type.toLowerCase()) {
    case 'date':
    case 'datetime':
      var dt_val = (!_.isDate(value)) ? new Date(value) : value;
      res = getDateString(dt_val);
      if (apexes) res = '\''+res+'\'';
      break;
    case 'string':
      res = apexes ? '\''+res+'\'' : value;
      break;
    default:
      res = value;
      break;
  }
  return _isNullOrEmpty(res) ? 'NULL' : res;
}

function getSql(res, paramName, parameters) {
  if (_.isArray(parameters)) {
    var parameter = _.find(parameters, function (p) {
      return p.name === paramName;
    });
    if (parameter) {
      var type = parameter.valueType || parameter['dataType'] || 'string';
      if (parameter['isMultiSelect'] && res && _.isFunction(res.indexOf) && res.indexOf(MULTIVALUE_SEPARATOR)>-1) {
        var values = _.map(res.split(MULTIVALUE_SEPARATOR), function(v){
          return _getValue(type, v, true);
        });
        res = values.join(',');
      } else {
        res = _getValue(type, res);
      }
    }
  }
  return res;
}


part.prototype = {
  text: '',
  content: '',
  pos: 0,
  level: 0,
  isText:function() {
    return this.text.indexOf('{{')<0;
  },
  isStartIf:function() {
    return this.text.toLowerCase().indexOf('{{if ')===0;
  },
  isStartIfNot:function() {
    return this.text.toLowerCase().indexOf('{{if! ')===0;
  },
  isEndIf:function() {
    return this.text.toLowerCase().indexOf('{{endif')===0;
  },
  isValueReplacer:function() {
    return this.text.indexOf('{{=')===0;
  },
  calcLevel: function(level) {
    if (this.isStartIf() || this.isStartIfNot())
      this.level = level+1;
    else if (this.isEndIf())
      this.level = level-1;
    else
      this.level = level;
    return this.level;
  },
  eval: function(parameters, lockLevel, cb) {
    var paramName, res;
    if (this.isEndIf()) {
      lockLevel = (lockLevel>this.level) ? -1 : lockLevel;
      cb('', lockLevel);
    }
    else if (lockLevel>=this.level) {
      cb('', lockLevel);
    }
    else if (this.isValueReplacer()) {
      paramName = (this.content || '').slice(1).trim();
      res = evalExpression(expressions.VALUE_REPLACER, paramName, parameters);
      var value = getSql(res, paramName, parameters);
      cb(value, lockLevel);
    }
    else if (this.isStartIf()) {
      paramName = (this.content || '').slice(2).trim();
      res = evalExpression(expressions.OPTIONAL, paramName, parameters);
      if (!res && lockLevel < this.level)
        lockLevel = this.level;
      cb('', lockLevel);
    }
    else if (this.isStartIfNot()) {
      paramName = (this.content || '').slice(3).trim();
      res = evalExpression(expressions.OPTIONALNOT, paramName, parameters);
      if (!res && lockLevel < this.level)
        lockLevel = this.level;
      cb('', lockLevel);
    }
    else if (this.isText()) {
      cb(this.text, lockLevel);
    }
  }
};

function getParts(t) {
  var rgx = /{{(.*?)}}/g;
  var parts = [];
  var m;
  var level = 0;
  var pos = 0;
  while ((m = rgx.exec(t)) !== null) {
    if (m.index === rgx.lastIndex) {
      rgx.lastIndex++;
    }
    var p = new part(m[0], m.index, m[1]);
    if (pos < p.pos) {
      var p1 = new part(t.substr(pos, p.pos - pos));
      p1.level = level;
      parts.push(p1);
      pos = p.pos + p.text.length;
    }
    level = p.calcLevel(level);
    parts.push(p);
  }
  if (t.length > pos)
    parts.push(new part(t.substr(pos, t.length - pos)));
  return parts;
}

var QueryParser = function(query) {
  this.original = ''+query;
  this.parts = getParts(''+query);
};

QueryParser.prototype = {
  original: '',
  parts:[],
  eval: function (parameters) {
    var sql = '';
    var lockLevel = -1;
    this.parts.forEach(function(p) {
      p.eval(parameters, lockLevel, function(text, lock){
        sql += text;
        lockLevel = lock;
      });
    });
    return sql;
  }
};

module.exports = QueryParser;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const Scenario = __webpack_require__(7);
const _ = __webpack_require__(0);
const DOC_TYPE = 'sqleditor';
const CONN_TYPE = 'connections';

exports.type = DOC_TYPE;

exports.getConnection = function(doc, cb) {
  Scenario.getAllDocuments(function(err, cnns) {
    if (err) return cb(err);
    const cnn =  _.find(cnns, function(c){
      return c.name === doc.solutionKey;
    });
    if (!cnn) return cb('Connection not found!');
    cb(null, cnn._id);
  }, {
    filter: function(json, info) {
      return (json._type || info._type) === CONN_TYPE;
    }
  });
};

exports.parse = function(doc) {
  var sql = doc.sqlStatement;

  /// <if test="#NOME-PARAMETRO# != All"><![CDATA[ xxxxxxxxxxxxxxxxxxxxxxxxxxx  ]]></if>
  /// rgx1 = /<if (.*?)>((.|\s)*?)<\/if>/gmi
  /// [1] = clausola
  /// [2] = testo sql interno
  /// >>>>
  ///  {{IF NOME-PARAMETRO}}
  ///    '{{=NOME-PARAMETRO}}'
  ///  {{ENDIF}}


  /// #NOME-PARAMETRO#
  /// rgx2 = /#(.*?)#/gi
  /// [1] = nome parametro
  /// >>>>
  /// {{NOME-PARAMETRO}}

  const rgx_if = /<if (.*?)>((.|\s)*?)<\/if>/gmi;
  const rgx_par = /#(.*?)#/gi;

  // Replace IF syntax
  sql = sql.replace(rgx_if, function(str, cls, cnt){
    const args = Array.prototype.slice.call(arguments);
    console.log('replace arguments: ', args);
    cnt = cnt.replace(/<\!\[CDATA\[/g, '');
    cnt = cnt.replace(/\]\]>/g, '');
    const parname = (/#(.*?)#/gi).exec(cls)[1];
    const start = cls.indexOf('==') ? '{{IF ' : '{{IF! ';
    return start + parname + '}}\n' + cnt + '{{ENDIF}}';
  });

  // Replace PARAMETERS
  sql = sql.replace(rgx_par, function(str, par){
    return '{{=' + par + '}}';
  });

  console.log('SQL TRANSFORMATION');
  console.log('\toriginal:', doc.sqlStatement);
  console.log('\treturn:', sql);

  return sql;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(3);
var controller = __webpack_require__(54);
var auth = __webpack_require__(8);

var router = express.Router();

router.get('/', auth.isAuthenticated(), controller.manageRenderings);
router.get('/renderDocument', auth.isAuthenticated(), controller.renderDocument);
router.get('/loadDocument', auth.isAuthenticated(), controller.loadDocument);
router.get('/saveDocument', auth.isAuthenticated(), controller.saveDocument);
router.get('/manageRenderedReports', auth.isAuthenticated(), controller.manageRenderings);
router.post('/', auth.isAuthenticated(), controller.manageRenderings);
router.post('/renderDocument', auth.isAuthenticated(), controller.renderDocument);
router.post('/loadDocument', auth.isAuthenticated(), controller.loadDocument);
router.post('/saveDocument', auth.isAuthenticated(), controller.saveDocument);
router.post('/manageRenderedReports', auth.isAuthenticated(), controller.manageRenderings);

module.exports = router;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

const _ = __webpack_require__(0);
var u = __webpack_require__(1);
var fs = __webpack_require__(5);
var path = __webpack_require__(4);
const config = __webpack_require__(2);
const reporting_path = config.reportingPath || (u.release ? config.serverPath : __dirname);

//Manage a rendering request
exports.manageRenderings = function(req, res) {
  var requestArgument = req.body || {};
  var filePath = path.join(reporting_path, 'AnalisiStockDerivati.mdc');
  var report='';
  var output = {};
  var renderings = {};

  /* start - streaming mode */
/*  var stat = fs.statSync(filePath);
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': stat.size
  });
  var readStream = fs.createReadStream(filePath);
  readStream.on('open', function () {
    readStream.pipe(res);
  });
  readStream.on('error', function(err) {
    res.end(err);
  })
  */
  /* end - streaming mode */

  /* start - file reading mode */
  if (fs.existsSync(filePath)) {
    return u.notfound(res);
  } else {
    report = fs.readFileSync(filePath,{encoding:'UTF-8'});
    //report = fs.readFileSync(filePath);

    //renderings.reportRenderedList = {reportContent: [].slice.call(report)};
    renderings.reportRenderedList = [{reportContent: [report]}];
    renderings.resultCount = 0;
    renderings.logMessages = [];

    output.renderings = renderings;

    u.ok(res, output);
  }
  /* end - file reading mode */
};

exports.renderDocument = function(req, res) {
  u.notfound(res);
};

exports.loadDocument = function(req, res) {
  var output = {};
  var documentOperation = {};
  var echoReport = {};

  echoReport.reportId = u.guid();
  echoReport.reportName = 'Analisi Stock Derivati';
  echoReport.mrtContent = '';
  echoReport.parameterBindings = [];
  echoReport.parameters = [];
  echoReport.reportDataSources = [];
  echoReport.multipleRenderingParameters = [];
  echoReport.isNew = true;

  documentOperation.logMessages = ['report loaded from echoService'];
  documentOperation.document = echoReport;

  output.documentOperation = documentOperation;

  //res.json(200,{documentOperation: {logMessages: ['report loaded from echoService'], document: echoReport}});
  u.ok(res, output);
};
exports.saveDocument = function(req, res) {
  u.notfound(res);
};


/* WEBPACK VAR INJECTION */}.call(exports, "server\\api\\reporting"))

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(3);
var passport = __webpack_require__(9);
var config = __webpack_require__(2);
var User = __webpack_require__(13);

// Passport Configuration
__webpack_require__(57).setup(User, config);

var router = express.Router();

router.use('/local', __webpack_require__(59));

module.exports = router;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var passport = __webpack_require__(9);
var LocalStrategy = __webpack_require__(58).Strategy;

exports.setup = function (User, config) {
  passport.use(new LocalStrategy({
      usernameField: 'name',
      passwordField: 'password' // this is the virtual field on the model
    },
    function(name, password, done) {
      User.find({
        name: name
      }, function(err, user) {
        if (err) {return done(err);}

        if (!user) {
          return done(null, false, { message: 'This user is not registered.' });
        }
        if (!user.authenticate(password)) {
          return done(null, false, { message: 'This password is not correct.' });
        }
        return done(null, user);
      });
    }
  ));
};


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("passport-local");

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(3);
var passport = __webpack_require__(9);
var auth = __webpack_require__(8);

var router = express.Router();

router.post('/', function(req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    var error = err || info;
    if (error) return res.json(401, error);
    if (!user) return res.json(404, {message: 'Something went wrong, please try again.'});

    var token = auth.signToken(user._id, user.role);
    res.json({token: token});
  })(req, res, next);
});

module.exports = router;


/***/ })
/******/ ]);