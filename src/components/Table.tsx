import { DeleteIcon, EditIcon, Info } from "../assets/icons";
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
	const { getContact, selectedContact } = useContacts();

	const handleRowClick = (userId: number) => {
		void getContact(userId, selectedContact);
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
											<DeleteIcon key="delete-icon" />
											<EditIcon key="edit-icon" />
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
