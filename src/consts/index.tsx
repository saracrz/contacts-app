import { IContact, IHeader } from "../types";

export const headers: IHeader[] = [
	{
		headerKey: "first_name",
		label: "Name",
		isSortable: true,
	},
	{
		headerKey: "email",
		label: "Email",
		isSortable: true,
	},
	{
		headerKey: "phone",
		label: "Phone Number",
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
		phone: "",
	},
];
