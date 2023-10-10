import { createContext, useContext, useState } from "react";

import { defaultStateValue } from "../consts/index";
import { ContactContextType, IContact, TSortOrder } from "../types";

export const ContactContext = createContext<ContactContextType | null>(null);

export const ContactProvider = ({ children }: { children: React.ReactNode }) => {
	const [contacts, setContacts] = useState<IContact[]>(defaultStateValue);
	const [sortOrder, setSortOrder] = useState<TSortOrder>("asc");

	const getContacts = async (): Promise<void> => {
		const res: Response = await fetch("https://random-data-api.com/api/v2/users?size=15");
		const data = (await res.json()) as IContact[];

		setContacts(data);
	};

	const sortByName = () => {
		const sort = [...contacts].sort((a: IContact, b: IContact) => {
			if (sortOrder === "asc") {
				return a.first_name.localeCompare(b.first_name);
			}

			return b.first_name.localeCompare(a.first_name);
		});

		const toggleSortOrder = sortOrder === "asc" ? "desc" : "asc";
		setSortOrder(toggleSortOrder);

		setContacts(sort);
	};

	return (
		<ContactContext.Provider
			value={{ contacts, getContacts, setContacts, setSortOrder, sortOrder, sortByName }}
		>
			{children}
		</ContactContext.Provider>
	);
};

export const useContacts = () => useContext(ContactContext) as ContactContextType;
