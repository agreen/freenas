

"use strict";

import React from "react";
import _ from "lodash";

import Icon from "./Icon";

var Widget = React.createClass({
  getInitialState: function () {
    return {  count              : 0
            , sizeArr            : [ "s", "m", "l" ]
            , widgetStyle        : { left: this.props.position[0], top: this.props.position[1] }
            , widgetContetnStyle : { width: this.props.dimensions[0], height: this.props.dimensions[1] }
    };
  }

  , changeSize: function () {
    //console.log( "changeSize" );
    var i = ( this.state.count < this.state.sizeArr.length ? this.state.count : 0 );
    //console.log( i );
    i++;
    //console.log( i );

    this.setState( {    size   : this.state.sizeArr[ i - 1 ] + this.state.size.substring( 1, this.state.size.length )                      , count  : i
                   } );
  }

  , render: function () {
    console.log( this.state );
    return (
      <div className={"widget " + this.props.size} style= { this.state.widgetStyle }>
        <header>
          <span className="widgetTitle">
            {this.props.title}
            <Icon
              glyph="gear"
              icoSize="lg"
              onTouchStart = { this.changeSize }
              onClick      = { this.changeSize } />
            </span>
        </header>
        <div className="widget-content" style= { this.state.widgetContetnStyle }>
          { this.props.children }
        </div>
      </div>

    );
  }
});

module.exports = Widget;

