import {
	AvatarAndNameWrapper,
	Content,
	HeaderWrapper,
	TableBody,
	TableCellBody,
	TableCellHeader,
	TableRow,
	TableRowHeader,
	TableWrapper,
} from "../styles";
import { Avatar } from "./Avatar";

interface Header {
	label: string;
	key: string;
}

interface Row {
	name: string;
	icon: React.ReactElement[];
	[key: string]: string | undefined | React.ReactElement[];
}

interface TableInterface {
	headers: Header[];
	rows: Row[];
}

export const Table = ({ headers, rows }: TableInterface) => {
	return (
		<Content>
			<TableWrapper>
				<HeaderWrapper>
					{headers.map((header) => (
						<TableRowHeader key={header.key}>
							<TableCellHeader key={header.key}>{header.label}</TableCellHeader>
						</TableRowHeader>
					))}
				</HeaderWrapper>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name}>
							{headers.map((header) => (
								<TableCellBody key={header.key}>
									{header.key === "name" ? (
										<AvatarAndNameWrapper>
											<Avatar contactAvatar={row.contactAvatar} />
											{row[header.key]}
										</AvatarAndNameWrapper>
									) : (
										row[header.key]
									)}
								</TableCellBody>
							))}
						</TableRow>
					))}
				</TableBody>
			</TableWrapper>
		</Content>
	);
};
