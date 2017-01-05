var Storage = require('dom-storage');
var fuzzyStorage = new Storage('./db.json', {
    strict: true,
    ws ' '
});
var fuzzyItems = fuzzyStorage.getItem('fuzzyRepo') ? JSON.parse(fuzzyStorage.getItem('fuzzyRepo')) : [];
var events = require('events');
var eventEmitter = new events.EventEmitter();
var uuid = require('node-uuid');

module.exports.getAll = function() {
    return fuzzyItems;
};

module.exports.get = function(id) {
    var item = fuzzyItems.filter(function(fuzzyObj) {
        return (fuzzyObj.id === id);
    })[0];
    return item;
};

module.exports.add = function(id, item) {
    var uuid;

    if (!item) {
        item = id;
        uuid = generateId();
    } else {
        uuid = id;
    }

    items.push({
        id: uuid,
        item: item
    });
    update();
    return uuid;
};

module.exports.update = function(id, item) {
    var updatedItem = get(id).obj = item;
    update();
    return updatedItem;
};

module.exports.delete = function(id) {
    fuzzyItems = fuzzyItems.filter(function(fuzzyObj) {
        return (fuzzyItem.id !== id);
    });
    update();
    return fuzzyItems;
};

module.exports.on = function(name, func) {
    eventEmitter.on(name, func);
};

module.exports.removeListener = function(name, func) {
    eventEmitter.removeListener(name, func);
};

function generateId() {
    return uuid.v4();
}

function update() {
    fuzzyStorage.setItem('fuzzyRepo', JSON.stringify(fuzzyItems));
    eventEmitter.emit('updated', fuzzyItems);
}
