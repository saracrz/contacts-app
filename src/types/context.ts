import { IContact } from "./contact";

export type TSortOrder = "asc" | "desc";

export type ContactContextType = {
	addContact: (contact: IContact) => Promise<void>;
	contacts: IContact[];
	deselectContact: () => void;
	formValues: IContact;
	getContacts: () => Promise<void>;
	getContact: (id: number, contact: IContact | null) => Promise<void>;
	selectedContact: IContact | null;
	setContacts: (contacts: IContact[]) => void;
	setFormValues: (contact: IContact) => void;
	setSelectedContact: (contact: IContact) => void;
	setSortOrder: (order: TSortOrder) => void;
	sortOrder: TSortOrder;
	sortByName: () => void;
};
