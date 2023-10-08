import { IContact } from "./context";

export interface IHeader {
	label: string;
	key: string;
}

export interface ITable {
	headers: IHeader[];
	rows: IContact[];
}
