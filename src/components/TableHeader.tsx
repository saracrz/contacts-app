import { SortIcon } from "../assets/icons";
import { useContacts } from "../context/ContactContext";
import { IHeader } from "../types";
import { TableCellHeader, TableHeaderWithIcon, TableRowHeader } from "./styles";

export const TableHeader = ({ isSortable, label, headerKey }: IHeader) => {
	const { sortByName } = useContacts();

	return (
		<TableRowHeader key={headerKey}>
			{isSortable ? (
				<TableCellHeader onClick={sortByName}>
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
