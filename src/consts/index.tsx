import { DeleteIcon, EditIcon } from "../assets/icons";
import { IHeader } from "../types";

export const headers: IHeader[] = [
	{
		key: "first_name",
		label: "Name",
	},
	{
		key: "email",
		label: "Email",
	},
	{
		key: "phone_number",
		label: "Phone Number",
	},
	{
		key: "icon",
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
