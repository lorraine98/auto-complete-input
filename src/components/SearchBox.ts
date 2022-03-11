import Component from '../core/Component';
import Search from '../icons/search';

export default class SearchBox extends Component {
    constructor($target: HTMLElement) {
        super($target);
    }

    getInnerHTML() {
        return `
          <label id="search-label">
            <input placeholder="Search movie" class="input" />
          </label>
      `;
    }
}
