import { createContext, useContext, useState } from "react";

import { ContactContextType, IContact, TContactData, TContactsData } from "../types";

export const ContactContext = createContext<ContactContextType | null>(null);

export const ContactProvider = ({ children }: { children: React.ReactNode }) => {
	const [contacts, setContacts] = useState<IContact[]>([]);
	const [selectedContact, setSelectedContact] = useState<IContact | null>(null);

	const getContacts = async (): Promise<void> => {
		const res: Response = await fetch("https://reqres.in/api/users");
		const data = (await res.json()) as TContactsData;

		setContacts(data.data);
	};

	const getContact = async (id: number): Promise<void> => {
		const res: Response = await fetch(`https://reqres.in/api/users/${id}`);
		const data = (await res.json()) as TContactData;

		setSelectedContact(data.data);
	};

	const addContact = async (newContact: IContact): Promise<void> => {
		const response = await fetch("https://reqres.in/api/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				avatar: "https://picsum.photos/100/100",
				id: newContact.id,
				first_name: newContact.first_name,
				last_name: newContact.last_name,
				email: newContact.email,
			}),
		});

		if (response.ok) {
			const data = (await response.json()) as IContact;
			setContacts([...contacts, data]);
		} else {
			console.error("Failed to add contact.");
		}
	};

	const deselectContact = () => {
		setSelectedContact(null);
	};

	return (
		<ContactContext.Provider
			value={{
				addContact,
				contacts,
				deselectContact,
				getContact,
				getContacts,
				selectedContact,
				setContacts,
				setSelectedContact,
			}}
		>
			{children}
		</ContactContext.Provider>
	);
};

export const useContacts = () => useContext(ContactContext) as ContactContextType;
