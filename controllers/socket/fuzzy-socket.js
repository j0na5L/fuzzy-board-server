var fuzzyModel = require('../model/fuzzy-board');

module.exports = function(socket) {
    function onChange(items) {
        socket.emit('broadcast', items);
    }

    onChange(fuzzyModel.getAll());

    on('socket', onChange);

    socket.on('disconnect', function() {
        removeListener('socket', onChange);
    });
};
