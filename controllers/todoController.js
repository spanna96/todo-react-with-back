const Todo = require("../models/Todo");
const mongoose = require('mongoose');



exports.getController = (req, res) => Todo.find({}).then((responnnns) => res.send(responnnns))

exports.addComtroller = (req, res) => {

    console.log(req.body, 'aaaaaaaaaaa');
    const pushka = new Todo({
        code: req.body.code,
        text: req.body.text,
        color: req.body.color,
    })


    pushka.save({
        code: req.body.code,
        text: req.body.text,
        color: req.body.color,
    }).then((r) => res.send(r))
}


exports.deleteController = (req, res) => Todo.findOneAndDelete({ code: req.body.code }).then((responnnns) => Todo.find({}).then((responnnns) => res.send(responnnns)));



exports.updateController = (req, res) => {
    Todo.findOneAndUpdate({ code: req.body.code },{ text: req.body.text, color: req.body.color }).then((responnnns) => {
        res.send(responnnns);
    })
}


