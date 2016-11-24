import { Meteor } from 'meteor/meteor';

zagvaruud = new Mongo.Collection('zagvaruud');


turul = new SimpleSchema({
    categoryName: {
        type: String,
        label: "Төрөл",
        allowedValues: ['Элит хаус', 'Модерн хаус', 'Сонгодог хаус', 'Дүнзэн хаус', 'Канад хаус', 'Энгийн хаус'],
        autoform: {
            options: [
                {label: "Элит хаус", value: "Элит хаус"},
                {label: "Модерн хаус", value: "Модерн хаус"},
                {label: "Сонгодог хаус", value: "Сонгодог хаус"},
                {label: "Дүнзэн хаус", value: "Дүнзэн хаус"},
                {label: "Канад хаус", value: "Канад хаус"},
                {label: "Энгийн хаус", value: "Энгийн хаус"}
            ]
        }
    },
});

var Schemas = {};

Schemas.zagvaruud = new SimpleSchema({
    zurag: {
      type: String,
      label: "Нүүр зураг | url оруулна уу"
    },
    turul: {
        type: turul
    },
    tailbar: {
        type: String,
        label: "Тайлбар",
        autoform: {
          afFieldInput: {
            type: 'textangular'
                  }
                },
    },
    content: {
      type: String,
      label: "Content",
      autoform: {
        afFieldInput: {
          type: 'textangular'
                }
              }
    }
});

zagvaruud.attachSchema(Schemas.zagvaruud);
