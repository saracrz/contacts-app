import { useContacts } from "../context/ContactContext";
import { ContactWrapper, NameWrapper } from "../styles";
import { Avatar } from "./Avatar";

export const Contact = (): JSX.Element | null => {
	const { selectedContact } = useContacts();

	return selectedContact ? (
		<ContactWrapper>
			<Avatar avatar={selectedContact.avatar} />
			<NameWrapper>
				<p>{selectedContact.first_name}</p>
				<p>{selectedContact.last_name}</p>
			</NameWrapper>
			<p className="email">{selectedContact.email}</p>
		</ContactWrapper>
	) : null;
};
