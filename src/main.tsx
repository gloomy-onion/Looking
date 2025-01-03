import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'shared/api/redux';
import { App } from './app';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
