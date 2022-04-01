import styled from 'styled-components';

export const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
`;

export const LoginLabel = styled.label.attrs(props => ({
	htmlFor: props.id,
}))``;

export const LoginInput = styled.input.attrs(props => ({
	type: props.type,
	id: props.id,
}))`
	padding: 5px 10px;
`;
