var test = require('tape')
  , timecop = require('../index')

test('days', function(t) {
  t.plan(6)

  var duration = timecop('1 week, 2 days, 3 hours, 4 minutes, 5 seconds and 6 milliseconds')

  t.equal(duration.milliseconds(), 788645006, 'Should output milliseconds')
  t.equal(duration.seconds(), 788645.01, 'Should output seconds')
  t.equal(duration.minutes(), 13144.08, 'Should output minutes')
  t.equal(duration.hours(), 219.07, 'Should output hours')
  t.equal(duration.days(), 9.13, 'Should output days')
  t.equal(duration.weeks(), 1.3, 'Should output weeks')
})