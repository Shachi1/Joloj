exports.adminGetController = (req, res, next) => {
    res.render('pages/admin-panel', {title: 'Admin'})
}