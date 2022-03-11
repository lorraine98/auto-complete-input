import { Comp } from "../common/constant";
import Component from "../core/Component";
import { $, idToQuery } from "../core/dom";
import SearchBox from "./SearchBox";

export default class App extends Component {
  private searchBoxComp?: SearchBox;

  constructor($target: HTMLElement) {
    super($target);
  }

  componentDidMount() {
    this.searchBoxComp = new SearchBox(
      $(idToQuery(Comp.SearchBoxComp), this.$target)
    );
  }

  getInnerHTML() {
    return `
            <section id="${Comp.SearchBoxComp}"  class="d-flex justify-center mt-7"></section>
      `;
  }
}
