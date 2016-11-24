import './modern.html'

Template.modern.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('modernZagvaruud');
    })
});

Template.modern.helpers({
    moderns: function() {
           return zagvaruud.find({});
       }
});
