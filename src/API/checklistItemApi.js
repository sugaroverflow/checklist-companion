//This file is mocking a web API by hitting hard coded data.
var checklistitems = require("./checklistitemData").checklistitems;
var _ = require("lodash");

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(checklistitem) {
  return (
    checklistitem.firstName.toLowerCase() +
    "-" +
    checklistitem.lastName.toLowerCase()
  );
};

var _clone = function(item) {
  return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var ChecklistitemApi = {
  getAllChecklistitems: function() {
    return _clone(checklistitems);
  },

  getSubListItems: function(relatedId) {
    var subItems = checklistitems.filter(item => item.relatedId === relatedId);
    return _clone(subItems);
  },

  getChecklistitemById: function(id) {
    var checklistitem = checklistitems.filter(item => item.id === id);
    return _clone(checklistitem);
  },

  saveChecklistitem: function(checklistitem) {
    //pretend an ajax call to web api is made here
    console.log(
      "Pretend this just saved the checklistitem to the DB via AJAX call..."
    );

    if (checklistitem.id) {
      var existingChecklistitemIndex = _.indexOf(
        checklistitems,
        _.find(checklistitems, { id: checklistitem.id })
      );
      checklistitems.splice(existingChecklistitemIndex, 1, checklistitem);
    } else {
      //Just simulating creation here.
      //The server would generate ids for new checklistitems in a real app.
      //Cloning so copy returned is passed by value rather than by reference.
      checklistitem.id = _generateId(checklistitem);
      checklistitems.push(checklistitem);
    }

    return _clone(checklistitem);
  },

  deleteChecklistitem: function(id) {
    console.log(
      "Pretend this just deleted the checklistitem from the DB via an AJAX call..."
    );
    _.remove(checklistitems, { id: id });
  }
};

module.exports = ChecklistitemApi;
