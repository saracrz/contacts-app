import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import { AppRoot } from "./styles/StyledComponents";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<AppRoot />
		<App />
	</React.StrictMode>
);
