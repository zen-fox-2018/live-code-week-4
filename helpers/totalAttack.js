function totalAttack(array) {
  let total = 0
  for (var i = 0; i < array.length; i++) {
    total = total + array[i].attack
  }
  return total
}

module.exports = totalAttack