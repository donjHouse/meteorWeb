import {FlowRouter} from 'meteor/kadira:flow-router'

FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "nuur"});
    }
});

FlowRouter.route('/faq', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "faq"});
  }
});

FlowRouter.route('/zuunnast2', {
  action: function() {
    BlazeLayout.render("mainLayout", {content: "zuunnast2"});
  }
});

FlowRouter.route('/contact', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "contact"});
    }
});

FlowRouter.route('/howitworks', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "howitworks"});
    }
});

FlowRouter.route('/contact', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "contact"});
    }
});

FlowRouter.route('/admin', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "admin"});
    }
});

FlowRouter.route('/homeplans', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "homeplans"});

    }
});

FlowRouter.route('/blog', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "blog"});

    }
});


FlowRouter.route('/homeplans/post/:postId', {
    name: 'homeplanPost',
    action: function(params) {
        BlazeLayout.render("mainLayout", {
          content: "homeplansSingle",
          params: params
        });
    }
});



// turul---------------------------
FlowRouter.route('/homeplans/elite', {
    action: function() {
      BlazeLayout.render("mainLayout", {content: "elite"});
    }
});

FlowRouter.route('/homeplans/modern',{
  action: function() {
    BlazeLayout.render("mainLayout", {content: "modern"});
  }});

FlowRouter.route('/homeplans/songodog',{
  action: function() {
      BlazeLayout.render("mainLayout", {content: "songodog"});

  }});

FlowRouter.route('/homeplans/dunzen',{
  action: function() {
      BlazeLayout.render("mainLayout", {content: "dunzen"});

  }});

FlowRouter.route('/homeplans/canada',{
  action: function() {
      BlazeLayout.render("mainLayout", {content: "canada"});

  }});

FlowRouter.route('/homeplans/engiin',{
  action: function() {
      BlazeLayout.render("mainLayout", {content: "engiin"});

  }});
// turul-----------------------------------
