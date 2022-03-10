import Component from '../core/Component';

export default class App extends Component {
    constructor($target: HTMLElement) {
        super($target);
    }

    getInnerHTML() {
        return `
            <h1>🎥Auto Complete</h1>
      `;
    }
}
