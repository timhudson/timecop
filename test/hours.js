var test = require('tape')
  , timecop = require('../index')

test('hours', function(t) {
  t.plan(2)

  t.equal(timecop('1 hour').milliseconds(), 3600000, 'Should parse singular')
  t.equal(timecop('15 hours').milliseconds(), 54000000, 'Should parse plural')
})