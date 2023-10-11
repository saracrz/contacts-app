import { IContact } from "./contact";

export type TSortOrder = "asc" | "desc";

export type ContactContextType = {
	contacts: IContact[];
	getContacts: () => Promise<void>;
	getContact: (id: number, contact: IContact[]) => Promise<void>;
	selectedContact: IContact | null;
	setContacts: (contacts: IContact[]) => void;
	setSelectedContact?: (contact: IContact) => void;
	setSortOrder: (order: TSortOrder) => void;
	sortOrder: TSortOrder;
	sortByName: () => void;
};
