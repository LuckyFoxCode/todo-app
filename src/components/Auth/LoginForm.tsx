import { CiLock, CiUser, CiWarning } from 'react-icons/ci';
import { useLoginForm } from '@/hooks/useAuthForm';
import { LoginFormInputs } from '@/libs/interfaces';
import { AuthForm } from './AuthForm';
import { Icon } from '../common';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useLoginForm();

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);

    reset();
  };

  return (
    <AuthForm
      title='Login'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='mb-4 flex flex-col gap-y-1 font-montserrat'>
        <label
          htmlFor='email'
          className='text-sm text-slate-600'
        >
          Email
        </label>
        <div className='relative text-slate-700'>
          <Icon
            iconName={CiUser}
            size={18}
            className='absolute left-2 top-1/2 -translate-y-1/2'
          />
          <input
            type='email'
            id='email'
            {...register('email')}
            placeholder='Email'
            className='w-full rounded-lg bg-slate-100 px-7 py-2 shadow-md shadow-transparent transition-all duration-300 focus:bg-light focus:shadow-slate-400 focus:outline-none'
          />
        </div>
        {errors.email && (
          <span className='flex items-center text-sm text-n-0'>
            <Icon
              iconName={CiWarning}
              className='mr-1'
            />
            {errors.email?.message}
          </span>
        )}
      </div>
      <div className='flex flex-col gap-y-1 font-montserrat'>
        <label
          htmlFor='password'
          className='text-sm text-slate-600'
        >
          Password
        </label>
        <div className='relative text-slate-700'>
          <Icon
            iconName={CiLock}
            size={18}
            className='absolute left-2 top-1/2 -translate-y-1/2'
          />
          <input
            type='password'
            id='password'
            {...register('password')}
            placeholder='Password'
            className='w-full rounded-lg bg-slate-100 px-7 py-2 shadow-md shadow-transparent transition-all duration-300 focus:bg-light focus:shadow-slate-400 focus:outline-none'
          />
        </div>
        {errors.password && (
          <span className='flex items-center text-sm text-n-0'>
            <Icon
              iconName={CiWarning}
              className='mr-1'
            />
            {errors.password?.message}
          </span>
        )}
      </div>
    </AuthForm>
  );
};
