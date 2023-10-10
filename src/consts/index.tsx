import { DeleteIcon, EditIcon } from "../assets/icons";
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
		headerKey: "phone_number",
		label: "Phone Number",
	},
	{
		headerKey: "icons",
		label: "",
	},
];

export const iconsRows = [
	<DeleteIcon key="delete-icon" onClick={() => alert("clicked")} />,
	<EditIcon key="edit-icon" onClick={() => alert("clicked")} />,
];

export const defaultStateValue: IContact[] = [
	{
		id: NaN,
		avatar: "",
		email: "",
		first_name: "",
		phone: NaN,
	},
];
