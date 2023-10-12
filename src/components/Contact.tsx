import { useContacts } from "../context/ContactContext";
import { Avatar } from "./Avatar";
import { Card } from "./Card";
import { ContactWrapper, NameWrapper } from "./styles";

export const Contact = (): JSX.Element | null => {
	const { selectedContact } = useContacts();

	return selectedContact ? (
		<Card title="Contact details">
			<ContactWrapper>
				<Avatar avatar={selectedContact.avatar} />
				<NameWrapper>
					<p>{selectedContact.first_name}</p>
					<p>{selectedContact.last_name}</p>
				</NameWrapper>
				<p className="email">{selectedContact.email}</p>
			</ContactWrapper>
		</Card>
	) : null;
};
