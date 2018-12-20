function setDistrict(district) {
    if (district === null || district === undefined) {
        return "Unassigned"
    } else {
        return district
    }
}
module.exports = setDistrict