import { IContact } from "./contact";

export interface IHeader {
	isSortable?: boolean;
	headerKey: string;
	label: string;
}

export interface ITable {
	headers: IHeader[];
	rows: IContact[];
}
