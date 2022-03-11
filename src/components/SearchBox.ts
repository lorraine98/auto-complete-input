import Component from "../common/Component";
import Search from "../icons/search.svg";
import Clear from "../icons/clear.svg";
import { debounce } from "../common/debounce";

export default class SearchBox extends Component {
  constructor($target: HTMLElement) {
    super($target);
  }

  componentInit() {
    this.bindEvent();
  }

  bindEvent() {
    this.$target.addEventListener(
      "keydown",
      debounce((e: InputEvent) => {
        const { value } = e.target as HTMLInputElement;
        if (value.trim()) {
          console.log(value);
        }
      })
    );
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
