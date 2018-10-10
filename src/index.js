"use strict";
import addBlock from './lib/test.js';

require('./lib/test.js');

alert(addBlock('world'));
/*
function addBlock(say) {
  const block = document.createElement('say');
  block.className = 'my-class';
  block.id = 'my-id';
  block.style.backgroundColor = 'green';
  block.innerHTML = 'Hello world';
  "use strict"
  ./node_modules/.bin/eslint /home/obi/2018-FS-11-Frontend-Valiev/src/lib/test.js
}
*/
