const router = require('express').Router()
const {
    getAllContact,
    getSingleContact,
    createContact,
    updateContact,
    deleteContact,
    showAllContact
} = require('../controllers/fishDoctorController')


router.get('/', getAllContact)
router.get('/:id', getSingleContact)
router.get('/delete/:id', deleteContact)
router.post('/', createContact)
router.put('/:id', updateContact)
// router.get('doctors-list/fish-doctor')
// router.get('fish-doctor', showAllContact)

module.exports = router

//app.get('/fish-doctor', (req, res) => {
    //     res.render('pages/fish-doctor.ejs', {
    //         title: 'Fish Doctor',
    //         contacts,
    //         error: {}
    //     })
    // })