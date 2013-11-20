#!/bin/bash
rm -f js/strings.js
echo "(function(){ window.i18n = {}; }());" >> js/strings.js
messageformat -s -l en translations/en_US  js/strings.js -ns window.i18n.en_US >> js/strings.js
messageformat -s -l pl translations/pl_PL  js/strings.js -ns window.i18n.pl_PL >> js/strings.js