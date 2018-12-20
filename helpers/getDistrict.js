function getDistrict(district) {
  if (!district) {
    return `unassigned`
  } else {
    return district.districtName;
  }
}

module.exports = getDistrict;