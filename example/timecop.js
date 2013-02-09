var timecop = require('../index.js')

var duration = timecop('Every 2 seconds and 300 milliseconds').milliseconds()
  , start = Date.now()

var interval = setInterval(function() {
  console.log(Date.now() - start)
  start = Date.now()
}, duration)

setTimeout(function() {
  clearInterval(interval)
}, 10000)