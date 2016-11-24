import { Meteor } from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router'







Meteor.startup(function() {
  Meteor.publish('zagvaruud', function(){
    return zagvaruud.find({}, {fields: {"_id":1, "Ner":1, "zurag":1, "turul.categoryName":1, "tailbar":1}})
  });
  Meteor.publish('singlePost', function(id){
      return zagvaruud.find({_id: id}, {fields: {"_id":1, "Ner":1, "zurag":1, "turul.categoryName":1, "content":1}})
  });
  Meteor.publish('eliteZagvaruud', function(){
    return zagvaruud.find({"turul.categoryName": "Элит хаус"}, {fields: {"_id":1, "Ner":1, "zurag":1, "turul.categoryName":1, "tailbar":1}})
  });
  Meteor.publish('modernZagvaruud', function(){
    return zagvaruud.find({"turul.categoryName": "Модерн хаус"}, {fields: {"_id":1, "Ner":1, "zurag":1, "turul.categoryName":1, "tailbar":1}})
  });
  Meteor.publish('songodogZagvaruud', function(){
    return zagvaruud.find({"turul.categoryName": "Сонгодог хаус"}, {fields: {"_id":1, "Ner":1, "zurag":1, "turul.categoryName":1, "tailbar":1}})
  });
  Meteor.publish('dunzenZagvaruud', function(){
    return zagvaruud.find({"turul.categoryName": "Дүнзэн хаус"}, {fields: {"_id":1, "Ner":1, "zurag":1, "turul.categoryName":1, "tailbar":1}})
  });
  Meteor.publish('canadaZagvaruud', function(){
    return zagvaruud.find({"turul.categoryName": "Канад хаус"}, {fields: {"_id":1, "Ner":1, "zurag":1, "turul.categoryName":1, "tailbar":1}})
  });
  Meteor.publish('engiinZagvaruud', function(){
    return zagvaruud.find({"turul.categoryName": "Энгийн хаус"}, {fields: {"_id":1, "Ner":1, "zurag":1, "turul.categoryName":1, "tailbar":1}})
  });
});
