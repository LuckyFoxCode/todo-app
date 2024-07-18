import { FormEvent, ReactNode } from 'react';
import { cn } from '@/libs/utils';

interface AuthFormProps {
  title: string;
  children: ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  className?: string;
}

export const AuthForm = ({
  title,
  children,
  onSubmit,
  className,
}: AuthFormProps) => {
  return (
    <div
      className={cn(
        'flex w-[400px] flex-col rounded-lg bg-light/80 px-4 py-8 shadow-lg shadow-n-6/50',
        className,
      )}
    >
      <h2 className='mb-3 font-montserrat text-3xl text-n-6'>{title}</h2>
      <form
        onSubmit={onSubmit}
        className='flex flex-col'
      >
        {children}
        <button
          type='submit'
          className='mt-8 rounded-lg bg-slate-100 px-4 py-2 text-slate-400 shadow-md shadow-transparent transition-all duration-300 hover:text-slate-600 hover:shadow-n-6 focus:bg-light focus:text-slate-500 focus:shadow-slate-400 focus:outline-none'
        >
          Submit
        </button>
      </form>
    </div>
  );
};
