// # alfabet spil til Theodor
//
// This is a bit of documentation, try 'Read' above. Code can be written as semi-literate code, see more here <https://en.wikipedia.org/wiki/Literate_programming>

module.meta = {
  id: 'alphabet-game',
  version: '0.0.1'
};
var da = require('direape@0.1');
da.run(da.parent, 'appedit:html',`
<center>
  <h1>Du skal �ndre mig!</h1>
  <p>Try to edit the code.</p>
  <p>Choose Edit above, and then<br>
     alter the code on the left side...</p>
  (vi keybindings is enabled,<br>
  so press <tt>i</tt> to insert)
</center>
${Object.keys(require('lodash')).join('<br>')}
`);