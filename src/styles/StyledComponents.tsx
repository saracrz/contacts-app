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
	font-size: 18px;
	color: #626f81;
	font-weight: 400;
	padding: 20px;
	text-align: left;
`;

export const TableBody = styled.tbody``;

export const TableCellBody = styled.td`
	border-bottom: 1px solid #d3d3d3;
	text-align: left;
	padding: 20px;
	font-size: 18px;
`;
