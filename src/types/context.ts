export interface IContact {
	id: number;
	avatar?: string;
	email: string;
	first_name: string;
	phone: number;
	[key: string]: string | undefined | React.ReactElement[] | number;
}

export type TSortOrder = "asc" | "desc";

export type ContactContextType = {
	contacts: IContact[];
	getContacts: () => Promise<void>;
	setContacts: (contacts: IContact[]) => void;
	setSortOrder: (order: TSortOrder) => void;
	sortOrder: TSortOrder;
	sortByName: () => void;
};
