const Data = require('../models/datamodel');
const mongoose = require('mongoose');
const addLink = (req, res) => {
    console.log("kavin", req.body);
    const newPerson = new Data({
        name: req.body.name,
        link: req.body.link
    });
    newPerson.save()
        .then((re) => {
            console.log("Save result:", re);
            console.log("Success");
            res.json({ result: "success" });
        })
        .catch((err) => {
            console.error('Error while saving:', err);
            res.json({ result: "error" });
        });
};

const authentication = async (req, res) => {
    console.log(req.query);
    try {
        const database = mongoose.connection.db;
        const collection = database.collection('admin');
        const result = await collection.find({ password: req.query.password }).toArray();
        if (result.length >= 1) {
            res.json({ auth: true })
        }
        else {
            res.json({ auth: false });
        }
    } catch (error) {
        console.error('Error while fetching links:', error);
        res.status(500).send('Internal Server Error');
    }
};
const getData = async (req, res) => {
    console.log(req.query);
    try {
        const database = mongoose.connection.db;
        const collection = database.collection('userlinks');
        const result = await collection.find().toArray();
        console.log(result);
        res.json(result);
    } catch (error) {
        console.error('Error while fetching links:', error);
        res.status(500).send('Internal Server Error');
    }
};
const deleteLink = async (req, res) => {
    console.log(req.body);
    try {
        const database = mongoose.connection.db;
        const collection = database.collection('userlinks');
        const result = await collection.deleteOne({ link: req.body.id });
        console.log(result);
        if (result.acknowledged) {
            res.send({ success: "ok" })
        }
        else {
            res.send({ success: "no" })
        }

    } catch (error) {
        console.error('Error while fetching links:', error);
        res.status(500).send('Internal Server Error');
    }
};
const editLink = async (req, res) => {
    try {
        const database = mongoose.connection.db;
        const collection = database.collection('userlinks');
        const filter = { link: req.body.oldLink };
        const update = {
            $set: { link: req.body.newLink, name: req.body.name }
        }
        const result = await collection.updateOne(filter, update);
        console.log(result);
        if (result.acknowledged) {
            res.send({ success: "ok" })
        }
        else {
            res.send({ success: "no" })
        }

    } catch (error) {
        console.error('Error while fetching links:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    addLink, authentication, getData, deleteLink, editLink
}