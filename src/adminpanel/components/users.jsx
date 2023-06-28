import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async (email, password) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log('Usuário registrado com sucesso!');
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(email, password);
    // Limpar os campos de e-mail e senha após o registro
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default RegisterForm;
