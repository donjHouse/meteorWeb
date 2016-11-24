import './homeplansSingle.html'


Template.homeplansSingle.onCreated(function () {
  var id = FlowRouter.getParam('postId')
    var self = this;
    self.autorun(function () {
        self.subscribe('singlePost', id);
    });
});

Template.homeplansSingle.helpers({
     homeplans: function() {
       return zagvaruud.find({})
   }
});

Template.homeplansSingle.events({
  'click .delete'() {
    let hariu = confirm("Устгахад итгэлтэй байна уу? | Буцаах боломжгүй")
    if (hariu) {
        zagvaruud.remove(this._id);
        window.location = '/homeplans'
    } else {
        alert("no")
    }
},
});
