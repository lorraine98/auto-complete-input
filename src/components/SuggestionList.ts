import {
  SuggestionListProps,
  SuggestionItem,
} from "../api/get-suggestion-list";
import Component from "../common/Component";
import { $, classToQuery } from "../common/dom";

interface StateProps {
  suggestionItems: SuggestionItem[] | null;
  cursor?: number;
}

const defaultState: StateProps = {
  suggestionItems: [],
  cursor: 0,
};

export default class SuggestionList extends Component<
  SuggestionListProps,
  StateProps
> {
  constructor($target: HTMLElement) {
    super($target);
  }

  componentInit() {
    this.bindEvent();
  }

  setState(nextState: StateProps) {
    this.state = { ...this.state, ...nextState };
    this.render();
  }

  bindEvent() {
    window.addEventListener("keydown", (e) => {
      if ($(classToQuery("show"))) {
        const { key } = e;

        if (key === "ArrowUp") {
        } else if (key === "ArrowDown") {
        } else if (key === "Enter") {
        }
      }
    });
  }

  getInnerHTML() {
    return `
            <ul class="${this.state?.suggestionItems ? "show" : "hide"}">
            ${
              this.state?.suggestionItems?.length
                ? this.state.suggestionItems
                    .map(
                      (suggesitonItem) =>
                        `
                    <li class="suggestion-list-li">
                        ${suggesitonItem.text}
                    </li>
                    `
                    )
                    .join("")
                : `<li class="suggestion-list-li">검색 결과가 없습니다.</li>`
            } 
            </ul>
        `;
  }
}
