var test = require('tape')
  , timecop = require('../index')

test('minutes', function(t) {
  t.plan(2)

  t.equal(timecop('1 minute').milliseconds(), 60000, 'Should parse singular')
  t.equal(timecop('15 minute').milliseconds(), 900000, 'Should parse plural')
})