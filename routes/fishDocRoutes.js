const router = require('express').Router()
const {
    getAllContact,
    getSingleContact,
    createContact,
    updateContact,
    deleteContact,
    showAllContact
} = require('../controllers/fishDoctorController')

router.get('doctors-list/', getAllContact)
router.get('doctors-list/:id', getSingleContact)
router.get('doctors-list/delete/:id', deleteContact)
router.post('doctors-list/', createContact)
router.put('doctors-list/:id', updateContact)
router.get('doctors-list/fish-doctor')
router.get('/fish-doctor', showAllContact)

module.exports = router

//app.get('/fish-doctor', (req, res) => {
    //     res.render('pages/fish-doctor.ejs', {
    //         title: 'Fish Doctor',
    //         contacts,
    //         error: {}
    //     })
    // })