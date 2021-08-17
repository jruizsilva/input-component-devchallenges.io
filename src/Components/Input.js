import React, { useState } from 'react';
import {
  Input,
  Label,
  GroupInput,
  HelperText,
  Icon,
  Textarea,
} from '../Elements/Main';

const InputComponent = ({
  type,
  label,
  placeholder,
  error: initialError,
  disabled,
  helperText,
  startIcon,
  endIcon,
  icon,
  value,
  size,
  fullWidth,
  multiline,
  row,
}) => {
  const [focus, setFocus] = useState(null);
  const [hover, setHover] = useState(null);
  const [error, setError] = useState(initialError);

  const onFocus = () => {
    setFocus(true);
  };
  const onBlur = () => {
    setFocus(false);
  };
  const onMouseEnter = () => {
    setHover(true);
  };
  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <GroupInput icon={icon} fullWidth={fullWidth}>
      <Label focus={focus} error={error} hover={hover}>
        {label}
      </Label>
      {(multiline && (
        <Textarea
          focus={focus}
          error={error}
          hover={hover}
          rows={row}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          disabled={disabled}
          defaultValue={value}
          fullWidth={fullWidth}
        ></Textarea>
      )) || (
        <Input
          focus={focus}
          error={error}
          hover={hover}
          type={type}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          error={error}
          disabled={disabled}
          startIcon={startIcon}
          endIcon={endIcon}
          defaultValue={value}
          size={size}
          fullWidth={fullWidth}
        />
      )}
      {helperText && (
        <HelperText error={error} hover={hover} focus={focus}>
          {helperText}
        </HelperText>
      )}
      <Icon startIcon={startIcon} endIcon={endIcon}>
        {icon}
      </Icon>
    </GroupInput>
  );
};

export default InputComponent;
