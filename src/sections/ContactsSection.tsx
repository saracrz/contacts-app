import { useEffect } from "react";

import { Contact, Table } from "../components";
import { headers } from "../consts/index";
import { useContacts } from "../context/ContactContext";
import { ContactSectionWrapper } from "./styles";

export const ContactsSection = () => {
	const { contacts, getContacts } = useContacts();

	useEffect(() => {
		if (!contacts.length) {
			void getContacts();
		}
	}, [contacts.length, getContacts]);

	return (
		<ContactSectionWrapper>
			<Table headers={headers} rows={contacts} />
			<Contact />
		</ContactSectionWrapper>
	);
};
