import { ContactProvider, FormProvider, SortProvider } from "./context";
import { AddContactSection, ContactsSection } from "./sections";

export const App = () => {
	return (
		<ContactProvider>
			<FormProvider>
				<SortProvider>
					<AddContactSection />
					<ContactsSection />
				</SortProvider>
			</FormProvider>
		</ContactProvider>
	);
};
