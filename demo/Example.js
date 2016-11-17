import React from 'react';
import SplitPane from '../lib/SplitPane';


var Example = React.createClass({

    render: function() {
        return (
            <SplitPane resizerClassName="Resizer vertical" split="vertical" minSize="50" defaultSize="100">
                <div></div>
                <SplitPane resizerClassName="Resizer horizontal" split="horizontal">
                    <div></div>
                    <div></div>
                </SplitPane>
            </SplitPane>
        );
    }

});


React.render(<Example />, document.body);
