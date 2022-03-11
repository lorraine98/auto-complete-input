import Component from "../common/Component";
import Search from "../icons/search.svg";
import Clear from "../icons/clear.svg";

export default class SearchBox extends Component {
  constructor($target: HTMLElement) {
    super($target);
  }

  getInnerHTML() {
    return `
          <label id="search-label">
            <img src="${Search}" />
            <input placeholder="Search movie" class="input" />
            <img src="${Clear}" />
          </label>
      `;
  }
}
