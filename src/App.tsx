import { ContactProvider } from "./context/ContactContext";
import { ContactsSection } from "./sections/ContactsSection";

export const App = () => {
	return (
		<ContactProvider>
			<ContactsSection />
		</ContactProvider>
	);
};
