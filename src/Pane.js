'use strict';

import React from 'react';
import VendorPrefix from 'react-vendor-prefix';


export default React.createClass({


    getInitialState() {
        return {};
    },

    render() {
        let style = {
            flex: 1,
            position: 'relative',
            outline: 'none',
            overflow: 'none'
        };
        if (this.state.size) {
            if (this.props.split === 'horizontal') {
                style.height = this.state.size;
                style.display = 'flex';
            } else {
                style.width = this.state.size;
            }
            style.flex = 'none';
        }
        const prefixed = VendorPrefix.prefix({styles: style});

        return <div className={this.props.className} style={prefixed.styles}>{this.props.children}</div>;
    }
});


