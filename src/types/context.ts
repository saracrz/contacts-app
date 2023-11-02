import { IContact } from "./contact";

export type TSortOrder = "asc" | "desc";

export type ContactContextType = {
	addContact: (newContact: IContact) => Promise<void>;
	contacts: IContact[];
	deselectContact: () => void;
	getContact: (id: number, contact: IContact | null) => Promise<void>;
	getContacts: () => Promise<void>;
	selectedContact: IContact | null;
	setContacts: React.Dispatch<React.SetStateAction<IContact[]>>;
	setSelectedContact: React.Dispatch<React.SetStateAction<IContact | null>>;
};

export type FormContextType = {
	formValues: IContact;
	setFormValues: (contact: IContact) => void;
};

export type SortContextType = {
	sortOrder: string;
	sortByName: (contacts: IContact[]) => IContact[];
	setSortOrder: React.Dispatch<React.SetStateAction<string>>;
};
