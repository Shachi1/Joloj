exports.dashboardGetController = (req, res, next) => {
    res.render('pages/dashboard', {title: 'Dashboard'})
}