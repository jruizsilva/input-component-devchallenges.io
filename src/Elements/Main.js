import styled, { css } from 'styled-components';

const color = {
  title: {
    default: '#4F4F4F',
  },
  code: {
    default: '#333333',
    light: '#828282',
  },
  label: {
    default: '#333333',
    hover: '#333333',
    focus: '#2962FF',
    error: '#D32F2F',
  },
  border: {
    default: '#828282',
    hover: '#333333',
    focus: '#2962FF',
    error: '#D32F2F',
  },
  placeholder: {
    default: '#828282',
  },
  input: {
    default: '#333333',
    disabled: '#F2F2F2',
  },
  helperText: {
    default: '#828282',
    error: '#D32F2F',
    hover: '#828282',
    focus: '#2962FF',
  },
  footer: {
    default: '#9E9E9E',
  },
};

const Main = styled.main`
  padding: 36px;
  padding-left: 48px;
`;
const H1 = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: ${color.title.default};
  margin: 0;
  margin-bottom: 64px;
`;

const Code = styled.code`
  font-family: 'Ubuntu Mono', monospace;
  display: inline-block;
  color: ${(props) => (props.light && color.code.light) || color.code.default};
  margin-bottom: 16px;
  font-size: 12px;
`;

const Input = styled.input`
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 500;
  border-radius: 8px;
  outline: none;
  font-size: 14px;
  margin-bottom: 4px;
  width: ${(props) => (props.fullWidth && '100%') || '200px'};
  padding: ${(props) =>
    (props.size === 'sm' && '10px 12px') ||
    (props.size === 'md' && '18px 12px') ||
    '18px 12px'};
  padding-left: ${(props) => props.startIcon && '36px'};
  padding-right: ${(props) => props.endIcon && '36px'};
  color: ${color.input.default};
  background-color: ${(props) => props.disabled && color.input.disabled};
  cursor: ${(props) => props.disabled && 'not-allowed'};

  border: 1px solid
    ${(props) =>
      (props.focus && props.error && color.border.error) ||
      (props.focus && color.border.focus) ||
      (props.hover && color.border.hover) ||
      (props.error && color.border.error) ||
      color.border.default};
`;
const Textarea = styled(Input).attrs({ as: 'textarea' })`
  resize: vertical;
  min-height: 150px;
`;

const Label = styled.label`
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 4px;
  color: ${(props) =>
    (props.focus && props.error && color.label.error) ||
    (props.focus && color.label.focus) ||
    (props.hover && color.label.hover) ||
    (props.error && color.label.error) ||
    color.label.default};
`;
const GroupInput = styled.div`
  display: flex;
  flex-direction: column;
  /*Layout Icon */
  position: relative;
  width: ${(props) => (props.fullWidth && '100%') || '200px'};
`;

const Row = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.columns || 1},
    ${(props) => props.width || '1fr'}
  );
  grid-column-gap: ${(props) => props.columnGap || '64px'};
  margin-bottom: 42px;
`;
const Col = styled.div``;

const HelperText = styled.p`
  margin: 0;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 10px;
  color: ${(props) =>
    (props.focus && props.error && color.helperText.error) ||
    (props.focus && color.helperText.focus) ||
    (props.hover && color.helperText.hover) ||
    (props.error && color.helperText.error) ||
    color.helperText.default};
`;

const Icon = styled.span`
  position: absolute;
  font-family: 'Material Icons';
  font-size: 18px;
  color: #828282;
  ${(props) =>
    props.startIcon &&
    css`
      left: 12px;
      bottom: 24px;
    `}
  ${(props) =>
    props.endIcon &&
    css`
      right: 12px;
      bottom: 24px;
    `}
`;

const Footer = styled.footer`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: ${color.footer.default};
  font-size: 14px;
`;

const Author = styled.span`
  font-weight: 700;
  text-decoration: underline;
`;

const Site = styled.span`
  font-weight: 500;
`;

export {
  Main,
  H1,
  Code,
  Input,
  Label,
  GroupInput,
  Row,
  Col,
  HelperText,
  Icon,
  Textarea,
  Footer,
  Author,
  Site,
};
