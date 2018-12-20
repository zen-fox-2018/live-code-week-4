function getDistrictName (obj) {
  if (obj === null) {
    return 'Unassigned'
  }
  else if (obj) {
    return obj.districtName
  }
}

module.exports = getDistrictName