import { ChangeEvent, FormEvent, useState } from 'react';
import { CiLock, CiUser } from 'react-icons/ci';
import { AuthForm } from './AuthForm';
import { InputForm } from '../common';

export const LoginForm = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [users, setUsers] = useState<{ username: string; password: string }[]>(
    [],
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setUsers([...users, formData]);
    setFormData({ username: '', password: '' });
  };

  console.log(users);

  return (
    <AuthForm
      title='Login'
      onSubmit={handleSubmit}
    >
      <InputForm
        type='text'
        label='UserName'
        iconName={CiUser}
        onChange={handleChange}
        name='username'
        value={formData.username}
        errorMsg='Enter your username...'
      />
      <InputForm
        type='password'
        label='Password'
        iconName={CiLock}
        onChange={handleChange}
        name='password'
        value={formData.password}
        errorMsg='Enter your password...'
      />
    </AuthForm>
  );
};
