require('dotenv/config')
const companyModel = require('../models/company')

module.exports = {
    getCompany: (req, res) => {
        companyModel.getCompany()
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    addCompany: (req, res) => {
        const { name,logo, location, description, role_id } = req.body
        const data = {
            name,
            logo,
            location,
            description,
            role_id
        }
        companyModel.addCompany(data)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    deleteCompany: (req, res) => {
        const companyid = req.params.companyid

        companyModel.deleteCompany(companyid)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
    },
    updateCompany: (req, res) => {
        const companyid = req.params.companyid
        const { name, logo, location, description,} = req.body
        const data = {
            name,
            logo,
            location,
            description
        }
        companyModel.updateCompany(data, companyid)
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            console.log(err)
        })
    }
}