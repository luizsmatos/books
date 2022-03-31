/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useField } from '@unform/core';

import Container from './styles';

interface Props {
  name: string;
  label: string;
  children?: React.ReactNode;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const Input = ({ children, name, label, placeholder, ...rest }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, registerField, error, clearError } =
    useField(name);

  const handleInputFocus = useCallback(() => {
    clearError();
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    // Registra o campo no unform
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      <label htmlFor={name}>
        <p>{label}</p>
        <input
          name={name}
          ref={inputRef}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
        />
      </label>
      {children}
    </Container>
  );
};

export default Input;
