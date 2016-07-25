import React from 'react/addons';
const { TestUtils } = React.addons;
import SplitPane from '../lib/SplitPane';
import Resizer from '../lib/Resizer';
import asserter from './assertions/Asserter';



describe('Default SplitPane', function () {

    const splitPane = (
        <SplitPane className='SplitPane' paneClassName='Pane' resizerClassName='Resizer'>
            <div>one</div>
            <div>two</div>
        </SplitPane>
    );


    it('should render the child panes', function () {
         asserter(splitPane).assertPaneContents(['one', 'two']);
    });

    it('should contain a Resizer', function () {
         asserter(splitPane).assertContainsResizer();
    });

});

