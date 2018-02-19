const Service = require('node-windows').Service;
const path = require('path');
const _ = require('lodash');

function _param(prefix) {
  if (!_.isArray(prefix)) prefix = [prefix];
  var l = 0;
  return prefix ? (_.find(process.argv, function(a) {
    return !!_.find(prefix, function(p) {
      l = p.length;
      return _.startsWith(a, p);
    });
  })||'').slice(l) : null;
}
function _has(name) {
  if (!_.isArray(name)) name = [name];
  return !!_.find(process.argv, function (a) { return name.indexOf(a) > -1;});
}

const UNINSTALL = _has(['--uninstall','-u']);
const PORT = _param(['--port=','-p=']);
const STORE = _param(['--store=', '-s=']);
const NAME = _param(['--name=', '-n=']) || 'Echo Service';
const OPTIONS = {
  name: NAME,
  description: 'Echo service Spike development backend',
  script: path.join(__dirname, 'server/echo-service.js'),
  nodeOptions: [
    '--harmony',
    '--max_old_space_size=4096'
  ],
  env: []
};
if (PORT) {
  OPTIONS.env.push({
    name: 'ECHO_PORT',
    value: PORT
  })
}
if (STORE) {
  OPTIONS.env.push({
    name: 'ECHO_STORE',
    value: STORE
  })
}

// Create a new service object
const svc = new Service(OPTIONS);
// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
  console.log('%s intalled.', NAME);
});

svc.on('uninstall',function(){
  console.log('%s uninstalled.', NAME);
});
UNINSTALL ? svc.uninstall() : svc.install();
