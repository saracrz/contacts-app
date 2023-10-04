import {
	Content,
	HeaderWrapper,
	TableBody,
	TableCellBody,
	TableCellHeader,
	TableRow,
	TableRowHeader,
	TableWrapper,
} from "../styles";

interface Header {
	label: string;
	key: string;
}

interface Row {
	name: string;
	[key: string]: string;
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
								<TableCellBody key={header.label}>{row[header.key]}</TableCellBody>
							))}
						</TableRow>
					))}
				</TableBody>
			</TableWrapper>
		</Content>
	);
};
