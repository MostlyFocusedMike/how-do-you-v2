import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ContextProvider from './context/ContextProvider';

ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>,
    document.getElementById('main'),
);

// @ts-ignore
if (module.hot) {
    // @ts-ignore
    module.hot.accept('./routes', () => {
      ReactDOM.render(<App />, document.getElementById('main'));
    });
}
