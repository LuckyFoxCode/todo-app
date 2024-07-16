import { FormEvent, ReactNode } from 'react';

interface AuthFormProps {
  title: string;
  children: ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export const AuthForm = ({ title, children, onSubmit }: AuthFormProps) => {
  return (
    <div className='flex w-[400px] flex-col gap-y-3 rounded-lg bg-light/80 px-4 py-8 shadow-lg shadow-n-6/50'>
      <h2 className='font-montserrat text-3xl text-n-6'>{title}</h2>
      <form
        onSubmit={onSubmit}
        className='flex flex-col'
      >
        {children}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
