import { useContext, useEffect } from "react";

import { Table } from "../components/Table";
import { headers } from "../consts/index";
import { ContactContext } from "../context/ContactContext";
import { ContactContextType } from "../types";

export const ContactsSection = () => {
	const { contacts, getContacts } = useContext(ContactContext) as ContactContextType;

	useEffect(() => {
		if (!contacts.length) {
			void getContacts();
		}
	}, [getContacts, contacts.length]);

	return contacts.length > 0 ? <Table headers={headers} rows={contacts} /> : null;
};
