import { Table } from "./components";
import { headers, rows } from "./consts/index";

export const App = () => {
	return (
		<div className="App">
			<h2>Contacts</h2>
			<Table headers={headers} rows={rows} />
		</div>
	);
};
