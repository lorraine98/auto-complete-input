import Component from "../common/Component";
import Search from "../icons/search.svg";
import Clear from "../icons/clear.svg";
import SuggestionList from "./SuggestionList";

import { debounce } from "../common/debounce";
import { fetchSuggestionList } from "../api/fetch-suggestion-list";
import { $, classToQuery, idToQuery } from "../common/dom";
import { ID } from "../common/constant";
import { getItem, hasItem, setItem } from "../common/sessionStorage";

interface Props {
  onSubmitInput: (content: string) => void;
}

export default class SearchBox extends Component<Props> {
  private suggestionListComp?: SuggestionList;

  constructor($target: HTMLElement, props: Props) {
    super($target, props);
  }

  componentInit() {
    this.bindEvents();
  }

  initSubcomponents() {
    this.suggestionListComp = new SuggestionList(
      $(idToQuery(ID.SuggestionListComp), this.$target)
    );
  }

  async getSuggestionList(word: string) {
    if (hasItem(word)) {
      return getItem(word);
    } else {
      const suggestionList = await fetchSuggestionList(word);
      suggestionList.length && setItem(word, suggestionList);

      return suggestionList;
    }
  }

  clearInputValue() {
    const $input = $(
      classToQuery("search-input"),
      this.$target
    ) as HTMLInputElement;
    $input.value = "";
    $input.focus();
    this.suggestionListComp?.hide();
  }

  bindEvents() {
    this.$target.addEventListener("keydown", (e) => {
      if (e.isComposing) {
        return; //조합문자가 아님에도 조합문자라고 인식하는 버그가 있어 처리함.
      }
      this.suggestionListComp?.show();
      const { key } = e;
      if (key === "ArrowUp") {
        this.suggestionListComp?.moveCursorUp();
      } else if (key === "ArrowDown") {
        this.suggestionListComp?.moveCursorDown();
      } else if (key == "Backspace") {
        this.suggestionListComp?.setState({
          cursor: 0,
        });
      }
    });

    this.$target.addEventListener(
      "keydown",
      debounce(async (e: InputEvent) => {
        const { value } = e.target as HTMLInputElement;
        if (value.trim()) {
          const suggestionList = await this.getSuggestionList(value);
          this.suggestionListComp?.setState({
            suggestionList,
          });
        } else {
          this.suggestionListComp?.hide();
        }
      })
    );

    this.$target.addEventListener("click", (e) => {
      const { classList, innerText } = e.target as HTMLElement;
      if (classList.contains("clear-icon")) {
        this.clearInputValue();
      }
      if (classList.contains("suggestion-list-li")) {
        this.props?.onSubmitInput(innerText);
        this.suggestionListComp?.hide();
      }
    });

    document.addEventListener("click", (e) => {
      const $eventTarget = e.target as HTMLElement;
      if (!$eventTarget.closest(idToQuery(this.$target.id))) {
        this.suggestionListComp?.hide();
      }
    });

    this.$target.addEventListener("focusin", () => {
      this.suggestionListComp?.show();
    });

    this.$target.addEventListener("submit", (e) => {
      e.preventDefault();
      const selectedItem = this.suggestionListComp?.getSelectedItem() ?? "";
      this.props?.onSubmitInput(selectedItem);
      this.suggestionListComp?.hide();
    });
  }

  componentDidMount() {
    this.initSubcomponents();
  }

  componentDidUpdate() {
    this.initSubcomponents();
  }

  getInnerHTML() {
    return `
          <form class="relative d-flex items-center">
            <img src="${Search}" class="search-icon" />
            <input placeholder="'가' 또는 '나'를 입력해보세요." class="search-input" />
            <img src="${Clear}" class="clear-icon" />
            <div id="${ID.SuggestionListComp}" class="suggestion-list-wrapper"></div>
          </form>
      `;
  }
}
