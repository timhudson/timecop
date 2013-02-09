var test = require('tape')
  , timecop = require('../index')

test('weeks', function(t) {
  t.plan(2)

  t.equal(timecop('1 week').milliseconds(), 604800000, 'Should parse singular')
  t.equal(timecop('15 weeks').milliseconds(), 9072000000, 'Should parse plural')
})