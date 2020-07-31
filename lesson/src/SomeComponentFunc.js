import React from 'react';
import { observer } from 'mobx-react';

import store from './store';

const SomeComponentFunc = observer ((props) => {
    return (
        <div>
            <span>Count todos: {store.countTodos}</span>
        </div>
    )
})

export { SomeComponentFunc };
export default SomeComponentFunc;