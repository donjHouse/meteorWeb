import './elite.html'

Template.elite.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('eliteZagvaruud');
    })
});

Template.elite.helpers({
    elites: function() {
           return zagvaruud.find({});
       }
});
