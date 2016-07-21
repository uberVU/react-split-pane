'use strict';

import React from 'react';


export default React.createClass({

    onMouseDown(event) {
        this.props.onMouseDown(event);
    },

    render() {
        return <span className={this.props.className} onMouseDown={this.onMouseDown} />
    }
});


