import './dunzen.html'

Template.dunzen.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('dunzenZagvaruud');
    })
});

Template.dunzen.helpers({
    dunzens: function() {
           return zagvaruud.find({});
       }
});
