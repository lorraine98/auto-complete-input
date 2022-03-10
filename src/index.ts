import './css/global.css';

import App from './components/App';

const target = document.querySelector('#app') as HTMLElement;
if (!target) throw new Error('Cannot find app');
new App({ target });
