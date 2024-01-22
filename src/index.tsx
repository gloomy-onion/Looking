// eslint-disable-next-line import/no-unused-modules
import '@/assets/UI kit/fonts/Montserrat/Montserrat-VariableFont_wght.ttf';
import { createRoot } from 'react-dom/client';

import { App } from './components/App';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const container = createRoot(root);

// eslint-disable-next-line react/react-in-jsx-scope
container.render(<App />);
