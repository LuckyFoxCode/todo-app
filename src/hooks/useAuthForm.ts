import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormInputs } from '@/libs/interfaces';
import { loginSchema } from '@/validation/authSchema';

export const useLoginForm = () =>
  useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });
