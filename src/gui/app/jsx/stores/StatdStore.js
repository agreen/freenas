// Widget Data Flux Store
// ----------------

"use strict";

var _            = require("lodash");
var EventEmitter = require("events").EventEmitter;

var FreeNASDispatcher = require("../dispatcher/FreeNASDispatcher");
var FreeNASConstants  = require("../constants/FreeNASConstants");

var ActionTypes  = FreeNASConstants.ActionTypes;
var CHANGE_EVENT = "change";

var _widgetData = [];

var StatdStore = _.assign( {}, EventEmitter.prototype, {

    emitChange: function() {
      this.emit( CHANGE_EVENT );
    }

  , addChangeListener: function( callback ) {
      this.on( CHANGE_EVENT, callback );
    }

  , removeChangeListener: function( callback ) {
      this.removeListener( CHANGE_EVENT, callback );
    }

  , getWidgetData: function() {
      return _widgetData;
    }

});

StatdStore.dispatchToken = FreeNASDispatcher.register( function( payload ) {
  var action = payload.action;

  switch( action.type ) {

    case ActionTypes.RECEIVE_RAW_WIDGET_DATA:
      _widgetData = action.rawWidgetData;
      StatdStore.emitChange();
      break;
    case ActionTypes.MIDDLEWARE_EVENT:
      _widgetData = action.rawWidgetData;
      StatdStore.emitChange();
      break;

    default:
      // No action
  }
});

module.exports = StatdStore;
