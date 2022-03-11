import {
  SuggestionListProps,
  SuggestionItem,
} from "../api/get-suggestion-list";
import Component from "../common/Component";

const defaultState = {
  suggestionItems: [],
  pointer: 0,
};

interface StateProps {
  suggestionItems: SuggestionItem[] | null;
  pointer?: number;
}

export default class SuggestionList extends Component<
  SuggestionListProps,
  StateProps
> {
  constructor($target: HTMLElement) {
    super($target);
  }

  setState(nextState: StateProps) {
    this.state = { ...this.state, ...nextState };
    this.render();
  }

  getInnerHTML() {
    return `
            <ul class="${this.state?.suggestionItems ? "" : "hide"}">
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
