# timecop

Simple parsing of written durations

[![build status](https://secure.travis-ci.org/timhudson/timecop.png)](http://travis-ci.org/timhudson/timecop)

# example

``` js
var timecop = require('../index.js');

var duration = timecop('Every 2 seconds and 300 milliseconds').milliseconds();

var interval = setInterval(function() {
  console.log('I am logging every 2.3 seconds');
}, duration);
```

# timecop checks for milliseconds, seconds, minutes, hours, days and weeks

``` js
timecop('1 week, 2 days, 3 hours, 4 minutes, 5 seconds and 6 milliseconds');
```

# and outputs to any of those same units

``` js
var duration = timecop('2 days');

duration.milliseconds(); // 172800000
duration.seconds(); // 172800
duration.minutes(); // 2880
duration.hours(); // 48
duration.days(); // 2
duration.weeks(); // 0.29
```

# install

With [npm](https://npmjs.org) do:

```
npm install timecop
```

# license

MIT