import styled from "styled-components";

export const StyledInput = styled.input`
	border-radius: 15px;
	border: 1px solid #eae8e8;
	margin-right: 5px;
	padding: 0px 10px;
	width: 200px;
	height: 30px;
	&:focus {
		border: 2px solid #dde2ff;
		outline: none;
	}

	@media (max-width: 867px) {
		margin-bottom: 10px;
	}
`;
