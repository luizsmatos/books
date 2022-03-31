import React, { createRef, useCallback, useState } from 'react';
import { FormHandles, SubmitHandler } from '@unform/core';
import * as Yup from 'yup';

import Input from 'components/Input';
import { useAuth } from 'hooks/useAuth';

import logo from 'assets/images/logo-white.png';
import { Container, Form, Loader, LoaderContainer, Tooltip } from './styles';

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = createRef<FormHandles>();
  const { signIn, failedTryLogin, loading } = useAuth();
  const [errorValidation, setErrorValidation] = useState(false);

  const handleSubmit: SubmitHandler<FormData> = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn(data);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const validationErrors = {} as Record<string, string>;
          err.inner.forEach(({ path, message }) => {
            if (path) {
              validationErrors[path] = message;
            }
          });
          formRef.current?.setErrors(validationErrors);
          setErrorValidation(true);
        }
      }
    },
    []
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <header>
          <img src={logo} alt="ioasys logo" />
          <h3>Books</h3>
        </header>

        <Input name="email" label="E-mail" placeholder="Seu e-mail" />

        <Input
          name="password"
          label="Senha"
          placeholder="Sua senha"
          type="password"
          autoComplete="off"
        >
          <button type="submit">Entrar</button>
        </Input>

        <Tooltip hidden={failedTryLogin || errorValidation}>
          <span>Email e/ou senha incorretos.</span>
        </Tooltip>
      </Form>

      {loading && (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      )}
    </Container>
  );
};

export default Login;
