import { useEffect } from "react";

import { Table } from "../components/Table";
import { headers } from "../consts/index";
import { useContacts } from "../context/ContactContext";

export const ContactsSection = () => {
	const { contacts, getContacts } = useContacts();

	useEffect(() => {
		void getContacts();
	}, []);

	return <Table headers={headers} rows={contacts} />;
};
