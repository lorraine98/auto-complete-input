import {
  SuggestionListProps,
  SuggestionItem,
} from "../api/fetch-suggestion-list";
import Component from "../common/Component";

interface StateProps {
  suggestionItems?: SuggestionItem[] | null;
  cursor?: number;
}

const defaultState: StateProps = {
  suggestionItems: null,
  cursor: 0,
};

export default class SuggestionList extends Component<
  SuggestionListProps,
  StateProps
> {
  constructor($target: HTMLElement, props?: SuggestionListProps) {
    super($target, props, defaultState);
  }

  setState(nextState: StateProps) {
    this.state = { ...this.state, ...nextState };
    this.render();
  }

  moveCursorUp() {
    const prevCursor = this.state?.cursor ?? 0;
    const suggestionItemLen = this.state?.suggestionItems?.length ?? 0;
    const nextCursor = (suggestionItemLen + prevCursor - 1) % suggestionItemLen;
    this.setState({
      ...this.state,
      cursor: nextCursor,
    });
  }

  moveCursorDown() {
    const prevCursor = this.state?.cursor ?? 0;
    const suggestionItemLen = this.state?.suggestionItems?.length ?? 0;
    const nextCursor = (prevCursor + 1) % suggestionItemLen;
    this.setState({
      ...this.state,
      cursor: nextCursor,
    });
  }

  hide() {
    this.$target.classList.add("hide");
  }

  show() {
    this.$target.classList.remove("hide");
  }

  getInnerHTML() {
    return `
            <ul class="${this.state?.suggestionItems ? "" : "hide"}">
            ${
              this.state?.suggestionItems?.length
                ? this.state.suggestionItems
                    .map(
                      (suggesitonItem, i) =>
                        `
                    <li class="suggestion-list-li ${
                      this.state?.cursor === i ? "suggestion-list-selected" : ""
                    }">
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
