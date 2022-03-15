import {
  SuggestionListProps,
  SuggestionItem,
} from "../api/fetch-suggestion-list";
import Component from "../common/Component";

interface StateProps {
  suggestionList?: SuggestionItem[];
  cursor?: number;
}

const defaultState: StateProps = {
  suggestionList: [],
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
    const suggestionList = this.state?.suggestionList ?? [];
    if (!suggestionList.length) {
      return;
    }
    const nextCursor =
      (suggestionList.length + prevCursor) % (suggestionList.length + 1);
    this.setState({
      ...this.state,
      cursor: nextCursor,
    });
  }

  moveCursorDown() {
    const prevCursor = this.state?.cursor ?? 0;
    const suggestionList = this.state?.suggestionList ?? [];
    if (!suggestionList.length) {
      return;
    }
    const nextCursor = (prevCursor + 1) % (suggestionList.length + 1);
    this.setState({
      ...this.state,
      cursor: nextCursor,
    });
  }

  getSelectedItem(): string {
    const suggestionList = this.state?.suggestionList ?? [];
    const cursor = this.state?.cursor ?? 0;
    if (cursor > suggestionList.length) {
      return "";
    }

    return suggestionList[cursor].text;
  }

  hide() {
    this.$target.classList.add("hide");
  }

  show() {
    this.$target.classList.remove("hide");
  }

  getInnerHTML() {
    const suggestionList = this.state?.suggestionList ?? [];
    const cursor = this.state?.cursor;

    return `
            <ul class="suggestion-list">
            ${suggestionList
              .map(
                (suggestionItem, i) =>
                  `
                    <li class="suggestion-list-li ${
                      cursor === i + 1 ? "suggestion-list-selected" : ""
                    }">
                        ${suggestionItem.text}
                    </li>
                    `
              )
              .join("")} 
            </ul>
        `;
  }
}
