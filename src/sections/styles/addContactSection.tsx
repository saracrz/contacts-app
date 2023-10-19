import styled from "styled-components";

export const InputWrapper = styled.div`
	display: flex;
	justify-content: end;
	margin: 60px 40px 0px 0px;

	@media (max-width: 995px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

export const InputAndTitle = styled.div`
	flex: 1;
`;
