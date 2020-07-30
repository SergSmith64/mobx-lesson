import React from 'react';
import { observer } from 'mobx-react';

import store from './store';
import { observe } from 'mobx';

@observer class SomeComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <span>Count todos: {store.countTodos}</span>
            </div>
        )
    }
}

export { SomeComponent };
export default SomeComponent;