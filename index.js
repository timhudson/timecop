var regexes = {
  milliseconds: /\d+(?= millisecond)/,
  seconds: /\d+(?= second)/,
  minutes: /\d+(?= minute)/,
  hours: /\d+(?= hour)/,
  days: /\d+(?= day)/,
  weeks: /\d+(?= week)/
}

var millisecondsTo = {
  milliseconds: 1,
  seconds: 1000,
  minutes: 60000,
  hours: 3600000,
  days: 86400000,
  weeks: 604800000
}

module.exports = function(input) {
  var time = {}
    , duration = 0
    , input = input.toLowerCase()

  for (var unit in regexes) {
    var match = input.match(regexes[unit])
    if (match !== null) time[unit] = Number(match[0])
  }

  for (var unit in time) {
    duration += time[unit] * millisecondsTo[unit]
  }

  return new Duration(duration)
}

function Duration(milliseconds) {
  this._milliseconds = milliseconds
}

Duration.prototype.milliseconds = function() {
  return this._milliseconds
}

Duration.prototype.seconds = function() {
  return Math.round((this._milliseconds / millisecondsTo.seconds)*100)/100
}

Duration.prototype.minutes = function() {
  return Math.round((this._milliseconds / millisecondsTo.minutes)*100)/100
}

Duration.prototype.hours = function() {
  return Math.round((this._milliseconds / millisecondsTo.hours)*100)/100
}

Duration.prototype.days = function() {
  return Math.round((this._milliseconds / millisecondsTo.days)*100)/100
}

Duration.prototype.weeks = function() {
  return Math.round((this._milliseconds / millisecondsTo.weeks)*100)/100
}
