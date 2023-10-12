import { DeleteIcon, Info } from "../assets/icons";
import { useContacts } from "../context/ContactContext";
import { ITable } from "../types";
import { Avatar } from "./Avatar";
import {
	AvatarAndNameWrapper,
	HeaderWrapper,
	TableBody,
	TableCellBody,
	TableContent,
	TableRow,
	TableWrapper,
} from "./styles";
import { TableHeader } from "./TableHeader";

export const Table = ({ headers, rows }: ITable) => {
	const { getContact, selectedContact, setContacts, contacts } = useContacts();

	const handleRowClick = (contactId: number) => {
		void getContact(contactId, selectedContact);
	};

	const handleDeleteRow = (contactId: number) => {
		const updatedData = contacts.filter((row) => row.id !== contactId);
		setContacts(updatedData);
	};

	return (
		<TableContent>
			<TableWrapper>
				<HeaderWrapper>
					{headers.map((header) => (
						<TableHeader
							key={header.headerKey}
							headerKey={header.headerKey}
							label={header.label}
							isSortable={header.isSortable}
						/>
					))}
				</HeaderWrapper>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.id} selected={row.id === selectedContact?.id}>
							{headers.map((header) => (
								<TableCellBody key={header.headerKey}>
									{header.headerKey === "first_name" ? (
										<AvatarAndNameWrapper>
											<Avatar avatar={row.avatar} />
											{row[header.headerKey]}
										</AvatarAndNameWrapper>
									) : (
										row[header.headerKey]
									)}
									{header.headerKey === "icons" ? (
										<>
											<DeleteIcon key="delete-icon" onClick={() => handleDeleteRow(row.id)} />
											<Info key="more-icon" onClick={() => handleRowClick(row.id)} />
										</>
									) : null}
								</TableCellBody>
							))}
						</TableRow>
					))}
				</TableBody>
			</TableWrapper>
		</TableContent>
	);
};
