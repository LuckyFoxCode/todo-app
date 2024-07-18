import z from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: 'Enter valid email' }),
  password: z.string().min(6, { message: 'Password length min 6 letters' }),
});
