import { createContext, useState } from "react";

import { ContactContextType, IContact } from "../types";

export const ContactContext = createContext<ContactContextType | null>(null);

export const ContactProvider = ({ children }: { children: React.ReactNode }) => {
	const [contacts, setContacts] = useState<IContact[]>([]);

	const getContacts = async (): Promise<void> => {
		const res: Response = await fetch("https://random-data-api.com/api/v2/users?size=10");
		const data = (await res.json()) as IContact[];

		setContacts(data);
	};

	return (
		<ContactContext.Provider value={{ contacts, getContacts }}>{children}</ContactContext.Provider>
	);
};
