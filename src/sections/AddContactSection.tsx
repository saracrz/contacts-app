import { useState } from "react";

import { Input } from "../components";
import { useContacts } from "../context/ContactContext";
import { InputAndTitle, InputWrapper, SectionTitle } from "./styles";

export const AddContactSection = () => {
	const { addContact, formValues, setFormValues } = useContacts();
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
		setIsButtonDisabled(e.target.value === "");
	};

	const handleAddContact = () => {
		const newContact = {
			id: NaN,
			first_name: formValues.first_name,
			last_name: formValues.last_name,
			email: formValues.email,
			phone: " - ",
		};

		void addContact(newContact);
		setFormValues({ id: NaN, first_name: "", last_name: "", email: "", phone: "-" });
	};

	return (
		<InputWrapper>
			<InputAndTitle>
				<SectionTitle>Contacts</SectionTitle>
			</InputAndTitle>
			<Input
				disabledButton={isButtonDisabled}
				name={formValues.first_name}
				email={formValues.email}
				onChange={handleInputChange}
				onAddContact={handleAddContact}
			/>
		</InputWrapper>
	);
};
