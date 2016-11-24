import './songodog.html';

Template.songodog.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('songodogZagvaruud');
    })
});

Template.songodog.helpers({
    songodogs: function() {
           return zagvaruud.find({});
       }
});
