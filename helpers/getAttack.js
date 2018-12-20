function getAttack(params) {
    let counter = 0
    params.forEach(element => {
        counter += element.attack
    });
    return counter
}
module.exports = getAttack