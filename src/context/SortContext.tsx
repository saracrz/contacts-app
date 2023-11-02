import { createContext, useContext, useState } from "react";

import { IContact, SortContextType } from "../types";

export const SortContext = createContext<SortContextType | null>(null);

export const SortProvider = ({ children }: { children: React.ReactNode }) => {
	const [sortOrder, setSortOrder] = useState<string>("asc");

	const sortByName = (contacts: IContact[]): IContact[] => {
		const sortedContacts = [...contacts].sort((a: IContact, b: IContact) => {
			if (sortOrder === "asc") {
				return a.first_name.localeCompare(b.first_name);
			}

			return b.first_name.localeCompare(a.first_name);
		});

		const toggleSortOrder = sortOrder === "asc" ? "desc" : "asc";
		setSortOrder(toggleSortOrder);

		return sortedContacts;
	};

	return (
		<SortContext.Provider value={{ sortOrder, sortByName, setSortOrder }}>
			{children}
		</SortContext.Provider>
	);
};

export const useSort = () => useContext(SortContext) as SortContextType;
