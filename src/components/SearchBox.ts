import Component from "../common/Component";
import Search from "../icons/search.svg";
import Clear from "../icons/clear.svg";
import SuggestionList from "./SuggestionList";

import { debounce } from "../common/debounce";
import { getSuggestionList } from "../api/get-suggestion-list";
import { $, classToQuery, idToQuery } from "../common/dom";
import { ID } from "../common/constant";

export default class SearchBox extends Component {
  private suggestionListComp?: SuggestionList;

  constructor($target: HTMLElement) {
    super($target);
  }

  componentInit() {
    this.bindEvent();
  }

  bindEvent() {
    this.$target.addEventListener(
      "keydown",
      debounce(async (e: InputEvent) => {
        const { value } = e.target as HTMLInputElement;
        if (value.trim()) {
          const suggestionItems = await getSuggestionList(
            `/autocomplete?value=${value}`
          );
          this.suggestionListComp?.setState({
            suggestionItems,
          });
        } else {
          this.suggestionListComp?.setState({ suggestionItems: null });
        }
      })
    );

    this.$target.addEventListener("click", (e) => {
      const { className } = e.target as HTMLInputElement;
      if (className === "clear-icon") {
        const $input = $(classToQuery("search-input")) as HTMLInputElement;
        $input.value = "";
        this.suggestionListComp?.setState({ suggestionItems: null });
      }
    });
  }

  componentDidMount() {
    this.suggestionListComp = new SuggestionList(
      $(idToQuery(ID.SuggestionListComp), this.$target)
    );
  }

  getInnerHTML() {
    return `
          <form class="relative d-flex items-center">
            <img src="${Search}" class="search-icon" />
            <input placeholder="'가' 또는 '나'를 입력해보세요." class="search-input" />
            <img src="${Clear}" class="clear-icon" />
          </form>
          <div id="${ID.SuggestionListComp}" class="suggestion-list-wrapper"></div>
      `;
  }
}
