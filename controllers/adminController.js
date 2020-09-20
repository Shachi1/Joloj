exports.adminGetController = (req, res, next) => {
    res.render('pages/adminPanel/admin-panel', {title: 'Admin'})
}