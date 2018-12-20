const Model = require('../models')

function getDistrict(input) {
  if(input == null) {
    return 'unassigned'
  }else {
    Model.District.findByPk(input)
      .then(function(district) {
        return district.dataValues.districtName
      })
      .catch(function(err) {
        throw err
      })  
  }
}

module.exports = getDistrict