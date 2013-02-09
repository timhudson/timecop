var test = require('tape')
  , timecop = require('../index')

test('seconds', function(t) {
  t.plan(2)

  t.equal(timecop('1 second').milliseconds(), 1000, 'Should parse singular')
  t.equal(timecop('15 seconds').milliseconds(), 15000, 'Should parse plural')
})