const {Kingdom, Soldier, District} = require('../models')

function genDis(id) {
    Kingdom.findOne({where:{id}})
        .then(dataKingdom => {
            if (dataKingdom.DistrictId == null) {
                return `unassign`
              } else {
                District.findOne({where: {id: dataKingdom.DistrictId}})
                  .then(data => {
                    return data.dataValues.districtName
                  })
                  .catch(err => {
                    throw new Error(err)
                  })
              }
        })
        .catch(err => {
            console.log(err)
        })
}

module.exports = genDis