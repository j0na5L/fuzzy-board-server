var fuzzyModel = require('../model/fuzzy-board');

module.exports.getAll = function(req, res) {
    res.json(fuzzyModel.getAll());
};

module.exports.get = function(req, res) {
    var fuzzyItem = fuzzyModel.get(req.params.id);
    if (fuzzyItem) {
        res.json(fuzzyItem.get(req.params.id));
    } else {
        res.status(404);
        res.send();
    }
};

module.exports.add = function(req, res) {
    var newItem = req.body;
    var id = fuzzyModel.add(newItem);
    res.setHeader('Location', 'fuzzies/' + id);
    res.status(201);
    res.json({
        id: id
    });
};

module.exports.update = function(req, res) {
    var updateItem = req.body;
    var id = req.params.id;
    if (fuzzyModel.get(id)) {
        fuzzyModel.delete(id);
        fuzzyModel.add(id, updateItem);
        res.status(204);
        res.send();
    } else {
        res.status(404);
        res.send();
    }
};

module.exports.delete = function(req, res) {
    fuzzyModel.delete(req.params.id);
    res.status(200);
    res.send();
};
