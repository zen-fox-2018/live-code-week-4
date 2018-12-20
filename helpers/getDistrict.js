function getDistrict(district) {
  if (!district) {
    return `unassigned`
  } else {
    return district;
  }
}

module.exports = getDistrict;