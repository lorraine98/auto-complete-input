import Component from "../common/Component";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";

import { ID } from "../common/constant";
import { $, idToQuery } from "../common/dom";

export default class App extends Component {
  private searchBoxComp?: SearchBox;
  private searchResultComp?: SearchResult;

  constructor($target: HTMLElement) {
    super($target);
  }

  initSubcomponents() {
    const onSubmitInput = (content: string) => {
      this.searchResultComp?.setState({ content });
    };

    this.searchBoxComp = new SearchBox(
      $(idToQuery(ID.SearchBoxComp), this.$target),
      { onSubmitInput }
    );

    this.searchResultComp = new SearchResult(
      $(idToQuery(ID.SearchResultComp), this.$target)
    );
  }

  componentDidMount() {
    this.initSubcomponents();
  }

  componentDidUpdate() {
    this.initSubcomponents();
  }

  getInnerHTML() {
    return `
            <section id="${ID.SearchBoxComp}"  class="d-flex justify-center mt-4 relative"></section>
            <section id="${ID.SearchResultComp}" class="d-flex justify-center mt-20"></section>
      `;
  }
}
