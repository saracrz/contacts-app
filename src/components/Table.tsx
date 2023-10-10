import {
	AvatarAndNameWrapper,
	Content,
	HeaderWrapper,
	TableBody,
	TableCellBody,
	TableRow,
	TableWrapper,
} from "../styles";
import { ITable } from "../types";
import { Avatar } from "./Avatar";
import { TableHeader } from "./TableHeader";

export const Table = ({ headers, rows }: ITable) => {
	return (
		<Content>
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
						<TableRow key={row.id}>
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
								</TableCellBody>
							))}
						</TableRow>
					))}
				</TableBody>
			</TableWrapper>
		</Content>
	);
};
