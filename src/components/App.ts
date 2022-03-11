import { ID } from "../common/constant";
import Component from "../common/Component";
import { $, idToQuery } from "../common/dom";
import SearchBox from "./SearchBox";

export default class App extends Component {
  private searchBoxComp?: SearchBox;

  constructor($target: HTMLElement) {
    super($target);
  }

  componentDidMount() {
    this.searchBoxComp = new SearchBox(
      $(idToQuery(ID.SearchBoxComp), this.$target)
    );
  }

  getInnerHTML() {
    return `
            <section id="${ID.SearchBoxComp}"  class="d-flex justify-center mt-7"></section>
      `;
  }
}
