import './engiin.html'


Template.engiin.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('engiinZagvaruud');
    })
});

Template.engiin.helpers({
    engiins: function() {
           return zagvaruud.find({});
       }
});
