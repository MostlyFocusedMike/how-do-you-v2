import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import ContextProvider from './context/ContextProvider';

ReactDOM.render(
    <ContextProvider>
        <Routes />
    </ContextProvider>,
    document.getElementById('main'),
);

// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept('./routes', () => {
      ReactDOM.render(<Routes />, document.getElementById('main'));
    });
}
