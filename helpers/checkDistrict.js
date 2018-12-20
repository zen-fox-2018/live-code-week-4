
function checkDistrict(District) {
    if(District == null) {
        return "Unassaigned"
    } else {
        return District.districtName
    }
}

module.exports = checkDistrict