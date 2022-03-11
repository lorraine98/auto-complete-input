import "./css/index.css";

import App from "./components/App";
import { $, idToQuery } from "./common/dom";

new App($(idToQuery("app")));
