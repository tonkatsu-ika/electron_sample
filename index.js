'use strict';

const electron = require('electron');
const remote = electron.remote;
const fileUtil = remote.require('./lib/fileUtil');

fileUtil.fetchReadmeList( (err, matches) => {
  if(!err) document.write(matches.join());
});
