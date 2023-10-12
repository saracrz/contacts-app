import styled from "styled-components";

export const AvatarAndNameWrapper = styled.div`
	align-items: center;
	display: flex;

	img {
		margin-right: 1rem;
	}
`;

export const TableContent = styled.div`
	background-color: white;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 1rem;
	width: 100%;

	@media (max-width: 768px) {
		margin-bottom: 10px;
	}
`;

export const TableWrapper = styled.table`
	background-color: white;
	border-collapse: collapse;
`;

export const HeaderWrapper = styled.thead``;

export const TableHeaderWithIcon = styled.div`
	align-items: center;
	cursor: pointer;
	display: flex;

	svg {
		margin-left: 1rem;
	}
`;

export const TableRowHeader = styled.tr`
	display: table-cell;
`;

export const TableRow = styled.tr`
	height: 68px;
`;

export const TableCellHeader = styled.th`
	color: #4e5661;
	font-size: 14px;
	font-weight: 600;
	padding: 14px;
	text-align: left;
`;

export const TableBody = styled.tbody``;

export const TableCellBody = styled.td`
	border-bottom: 1px solid #d3d3d3;
	font-size: 14px;
	padding: 16px 14px;
	text-align: left;
`;
