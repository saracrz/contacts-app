import styled, { createGlobalStyle } from "styled-components";

export const AppRoot = createGlobalStyle`
        * {
            font-family: Verdana, sans-serif;
        }
    
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 1rem;
`;

export const TableWrapper = styled.table`
	border-collapse: collapse;
	width: 100%;
`;

export const HeaderWrapper = styled.thead``;

export const TableRowHeader = styled.tr`
	background-color: #d7d7d740;
	display: table-cell;
`;

export const TableRow = styled.tr``;

export const TableCellHeader = styled.th`
	font-size: 14px;
	color: #626f81;
	font-weight: 400;
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

export const AvatarAndNameWrapper = styled.div`
	display: flex;
	align-items: center;

	img {
		margin-right: 1rem;
	}
`;

export const AvatarImg = styled.img`
	width: 32px;
	height: auto;
	border-radius: 50%;
`;

export const Icon = styled.svg`
	color: #626262;
	cursor: pointer;
	height: 22px;
	padding: 6px;
	width: 22px;
`;
