import Component from "../common/Component";
import Search from "../icons/search.svg";
import Clear from "../icons/clear.svg";

export default class SearchBox extends Component {
  constructor($target: HTMLElement) {
    super($target);
  }

  getInnerHTML() {
    return `
          <label class="relative d-flex items-center">
            <img src="${Search}" class="search-icon" />
            <input placeholder="Search movie" class="search-input" />
            <img src="${Clear}" class="clear-icon" />
          </label>
      `;
  }
}
