import { IContact, IHeader } from "../types";

export const headers: IHeader[] = [
	{
		headerKey: "first_name",
		label: "Name",
		isSortable: true,
	},
	{
		headerKey: "last_name",
		label: "Last Name",
	},
	{
		headerKey: "email",
		label: "Email",
		isSortable: true,
	},
	{
		headerKey: "icons",
		label: "",
	},
];

export const defaultStateValue: IContact[] = [
	{
		id: NaN,
		avatar: "",
		email: "",
		first_name: "",
		last_name: "",
		phone: "",
	},
];
