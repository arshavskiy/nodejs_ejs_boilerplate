let data = {
    title: 'Node.js Express Ejs lesson1',
    subtitle: "By Pavel Arshavsky",
    navigation: ['Home', 'Projects', 'About', 'Contact us']
};


exports.index = function (req, res) {
    res.render('pages/index', data);
}
exports.about = function (req, res) {
    res.render('pages/about', data);
};