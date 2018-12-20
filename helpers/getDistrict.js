function getDistrict(input) {
  if(input == null) {
    return 'unassigned'
  }else {
    return input.districtName
  }
}

module.exports = getDistrict