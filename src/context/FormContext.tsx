import { createContext, useContext, useState } from "react";

import { FormContextType, IContact } from "../types";

export const FormContext = createContext<FormContextType | null>(null);

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
	const [formValues, setFormValues] = useState<IContact>({
		id: NaN,
		first_name: "",
		last_name: "",
		email: "",
		phone: "",
	});

	return (
		<FormContext.Provider value={{ formValues, setFormValues }}>{children}</FormContext.Provider>
	);
};

export const useForm = () => useContext(FormContext) as FormContextType;
