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
import { ITable } from "../types";
import { Avatar } from "./Avatar";

export const Table = ({ headers, rows }: ITable) => {
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
						<TableRow key={row.id}>
							{headers.map((header) => (
								<TableCellBody key={header.key}>
									{header.key === "first_name" ? (
										<AvatarAndNameWrapper>
											<Avatar avatar={row.avatar} />
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
