import { SortIcon } from "../assets/icons";
import { useContacts, useSort } from "../context";
import { IHeader } from "../types";
import { TableCellHeader, TableHeaderWithIcon, TableRowHeader } from "./styles";

export const TableHeader = ({ isSortable, label, headerKey }: IHeader) => {
	const { sortByName } = useSort();
	const { contacts, setContacts } = useContacts();

	const handleSort = () => {
		const sortedData = sortByName(contacts);
		setContacts(sortedData);
	};

	return (
		<TableRowHeader key={headerKey}>
			{isSortable ? (
				<TableCellHeader onClick={handleSort}>
					<TableHeaderWithIcon>
						{label}
						<SortIcon />
					</TableHeaderWithIcon>
				</TableCellHeader>
			) : (
				<TableCellHeader>{label}</TableCellHeader>
			)}
		</TableRowHeader>
	);
};
