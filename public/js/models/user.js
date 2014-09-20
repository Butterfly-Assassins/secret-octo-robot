var Backbone = require('backbone');

var User = Backbone.Model.extend({
    validate: function (attrs) {
        console.log("validate called with: \n");
        console.dir(attrs);
    }
});

module.exports = User;
