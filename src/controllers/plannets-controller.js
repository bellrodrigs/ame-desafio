'use strict';

const mongoose = require('mongoose');
const Plannet = mongoose.model('Plannet');


exports.get = (req, res, next) => {
    Plannet
        .find({})
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

exports.getById = (req, res, next) => {
    const id = req.params.id
    Plannet
        .findOne({ '_id': id }, {__v:0})
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}
exports.getByName = (req, res, next) => {
    const name = req.params.name
    Plannet
        .findOne({ name: new RegExp('^'+name+'$', "i") }, {__v:0})
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

exports.post = (req, res, next) => {
    var plannet = new Plannet(req.body);
    plannet.save()
        .then(x => {
            res.status(201).send({
                message: 'Planeta salvo com sucesso'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao cadastrar o Planeta =(', data: e
            });
        });

};

exports.delete = (req, res, next) => {
    const id = req.body.id
    Plannet
        .findOneAndRemove({'_id':id})
        .then(x => {
            res.status(200).send({
                message: 'Planeta removido com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao remover o Planeta =(', data: e
            });
        });
};


