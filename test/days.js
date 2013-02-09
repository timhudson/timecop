var test = require('tape')
  , timecop = require('../index')

test('days', function(t) {
  t.plan(2)

  t.equal(timecop('1 day').milliseconds(), 86400000, 'Should parse singular')
  t.equal(timecop('15 days').milliseconds(), 1296000000, 'Should parse plural')
})