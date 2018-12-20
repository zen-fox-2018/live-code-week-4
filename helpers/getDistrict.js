const Model = require(`../models`)
function getDistrict(name) {
    if (name == undefined) {
        return `Unassigned`
    } else {
        Model.District.findOne({
            where: {
                id: Number(name)
            }
        })
            .then((result) => {
                
                console.log(result.dataValues.districtName);
                return (result.dataValues.districtName)
                
            }).catch((err) => {
                console.log(err);
                
            });
        }
    }

module.exports = getDistrict