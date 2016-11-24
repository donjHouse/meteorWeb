import './homeplans.html'


Template.homeplans.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('zagvaruud');
    })
});

Template.homeplans.helpers({
    homeplans: function() {
           return zagvaruud.find({});
       }
});
