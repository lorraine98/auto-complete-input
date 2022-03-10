import './css/style.css';

import App from './components/App';
import { $, idToQuery } from './core/dom';

new App($(idToQuery('app')));
