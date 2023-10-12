import { ContactProvider } from "./context/ContactContext";
import { AddContactSection, ContactsSection } from "./sections";

export const App = () => {
	return (
		<ContactProvider>
			<AddContactSection />
			<ContactsSection />
		</ContactProvider>
	);
};
