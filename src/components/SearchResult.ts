import Component from "../common/Component";

interface StateProps {
  content: string;
}

export default class SearchResult extends Component<{}, StateProps> {
  setState(nextState: StateProps) {
    this.state = { ...this.state, ...nextState };
    this.render();
  }

  getInnerHTML() {
    return `
            <h1>${this.state?.content ?? ""}</h1>
        `;
  }
}
