import './canada.html'


Template.canada.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('canadaZagvaruud');
    })
});

Template.canada.helpers({
    canadas: function() {
           return zagvaruud.find({});
       }
});
