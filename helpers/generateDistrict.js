function getDistrict() {
    if (this.DistrictId) {
        models.District.findOne({where: {
            id : this.DistrictId
        }})
        .then(district => {
            return district.districtName
        })
        .catch(err => {
            throw new Error(err)
        })
    } else {
        return "unassigned"
    }
}


module.exports = getDistrict