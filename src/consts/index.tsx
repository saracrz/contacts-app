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
		headerKey: "icon",
		label: "",
	},
];

export const rows = [
	{
		name: "Peter",
		contactAvatar: "https://picsum.photos/100/100",
		email: "peter@gmail.com",
		phoneNumber: "00123123123",
		icon: [
			<DeleteIcon onClick={() => alert("clicked")} />,
			<EditIcon onClick={() => alert("clicked")} />,
		],
	},
	{
		name: "Steven",
		contactAvatar: "https://picsum.photos/100/100",
		email: "steven@gmail.com",
		phoneNumber: "00123123123",
		icon: [
			<DeleteIcon onClick={() => alert("clicked")} />,
			<EditIcon onClick={() => alert("clicked")} />,
		],
	},
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
