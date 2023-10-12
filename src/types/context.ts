import { IContact } from "./contact";

export type TSortOrder = "asc" | "desc";

export type ContactContextType = {
	contacts: IContact[];
	deselectContact: () => void;
	getContacts: () => Promise<void>;
	getContact: (id: number, contact: IContact | null) => Promise<void>;
	selectedContact: IContact | null;
	setContacts: (contacts: IContact[]) => void;
	setSelectedContact: (contact: IContact) => void;
	setSortOrder: (order: TSortOrder) => void;
	sortOrder: TSortOrder;
	sortByName: () => void;
};
