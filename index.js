'use strict';

const { resolve } = require('path');
const nodewww = require('./lib/nodewww');

// exact location of the file "www"
const absoluteWwwPath = resolve('./www');
nodewww.exposeWWW(absoluteWwwPath);