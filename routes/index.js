exports.index = function (req, res) {
    res.render('pages/index', {
        title: 'Node.js Express Ejs lesson1',
        subtitle: "By Pavel Arshavsky"
    });
}
exports.about = function (req, res) {
    res.render('pages/about');
};