module.exports = function drinAll(callback, flavour) {
  if (flavour !== 'octopus') {
    callback(flavour)
  }
}