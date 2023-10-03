import { Table } from "./components";

const headers = [
	{
		key: "name",
		label: "Name",
	},
	{
		key: "email",
		label: "Email",
	},
	{
		key: "phoneNumber",
		label: "Phone Number",
	},
];

const rows = [
	{
		name: "Peter",
		email: "peter@gmail.com",
		phoneNumber: "00123123123",
	},
	{
		name: "Steven",
		email: "steven@gmail.com",
		phoneNumber: "00123123123",
	},
];

export const App = () => {
	return (
		<div className="App">
			<h2>Contacts</h2>
			<Table headers={headers} rows={rows} />
		</div>
	);
};
