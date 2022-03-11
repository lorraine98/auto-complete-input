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
  suggestionItems?: SuggestionItem[];
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
            <ul>
                ${this.state?.suggestionItems
                  ?.map(
                    (suggesitonItem) =>
                      `
                        <li class="mt-4">
                            ${suggesitonItem.text}
                        </li>
                    `
                  )
                  .join("")}
            </ul>
        `;
  }
}
