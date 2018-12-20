function getDistrict(name) {
    if (name == undefined) {
        return `Unassigned`
    } else {
        return name
    }
}

module.exports = getDistrict