var stuff = require('../data/index');


    show = (req, res) => {
        res.render('index', { title: 'Willies Express Exercise #40009', likes: 'Things I like to do:', myData: stuff.dataArray});
    },
    

    module.exports = { show };