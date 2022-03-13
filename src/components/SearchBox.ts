import Component from "../common/Component";
import Search from "../icons/search.svg";
import Clear from "../icons/clear.svg";
import SuggestionList from "./SuggestionList";

import { debounce } from "../common/debounce";
import { fetchSuggestionList } from "../api/fetch-suggestion-list";
import { $, classToQuery, idToQuery } from "../common/dom";
import { ID } from "../common/constant";
import { getItem, setItem } from "../common/sessionStorage";

interface Props {
  onSubmitInput: (content: string) => void;
}

export default class SearchBox extends Component<Props> {
  private suggestionListComp?: SuggestionList;

  constructor($target: HTMLElement, props: Props) {
    super($target, props);
  }

  componentInit() {
    this.bindEvent();
  }

  async getSuggestionList(value: string) {
    if (getItem(value)) {
      return getItem(value);
    } else {
      const res = await fetchSuggestionList(`/autocomplete?value=${value}`);
      res.length && setItem(value, res);
      return res;
    }
  }

  bindEvent() {
    this.$target.addEventListener("keydown", (e) => {
      this.suggestionListComp?.show();
      if (e.isComposing) {
        return;
      }
      const { key } = e;
      if (key === "ArrowUp") {
        this.suggestionListComp?.moveCursorUp();
      } else if (key === "ArrowDown") {
        this.suggestionListComp?.moveCursorDown();
      } else if (key === "Enter") {
        e.preventDefault();
        const selectedItem = this.suggestionListComp?.getSelectedItem() ?? "";
        this.props?.onSubmitInput(selectedItem);
        this.suggestionListComp?.hide();
      }
    });

    this.$target.addEventListener(
      "keydown",
      debounce(async (e: InputEvent) => {
        const { value } = e.target as HTMLInputElement;
        if (value.trim()) {
          const suggestionItems = await this.getSuggestionList(value);
          this.suggestionListComp?.setState({
            suggestionItems,
          });
        } else {
          this.suggestionListComp?.setState({ suggestionItems: null });
        }
      })
    );

    document.addEventListener("click", (e) => {
      const $eventTarget = e.target as HTMLElement;
      if (!$eventTarget.closest(idToQuery(this.$target.id))) {
        this.suggestionListComp?.hide();
      }
    });

    this.$target.addEventListener("click", (e) => {
      const { className, innerText } = e.target as HTMLInputElement;
      if (className === "clear-icon") {
        this.clearInputValue();
      }
      if (className === "suggestion-list-li ") {
        this.props?.onSubmitInput(innerText);
        this.suggestionListComp?.hide();
      }
    });

    this.$target.addEventListener("focusin", () => {
      this.suggestionListComp?.show();
    });
  }

  clearInputValue() {
    const $input = $(
      classToQuery("search-input"),
      this.$target
    ) as HTMLInputElement;
    $input.value = "";
    this.suggestionListComp?.setState({ suggestionItems: null });
    $input.focus();
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
            <div id="${ID.SuggestionListComp}" class="suggestion-list-wrapper"></div>
          </form>
      `;
  }
}
