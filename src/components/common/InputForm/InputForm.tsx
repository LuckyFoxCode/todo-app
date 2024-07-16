import { ChangeEvent } from 'react';
import { IconType } from 'react-icons';
import { CiWarning } from 'react-icons/ci';
import { cn } from '@/libs/utils';
import { Icon } from '../Icon';
import styles from './InputForm.module.scss';

interface InputFormProps {
  value: string;
  iconName: IconType;
  name?: string;
  label?: string;
  errorMsg?: string;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'email' | 'password';
}

export const InputForm = ({
  name,
  label,
  iconName,
  errorMsg,
  className,
  type = 'text',
  ...rest
}: InputFormProps) => (
  <div className={cn(styles.wrapper, className)}>
    <label
      htmlFor={name}
      className={styles.label}
    >
      {label}:
    </label>
    <div className='relative'>
      <input
        {...rest}
        id={name}
        type={type}
        name={name}
        className={styles.input}
      />
      <Icon
        iconName={iconName}
        size={20}
        className={styles.icon}
      />
    </div>
    <span className={styles.error}>
      <Icon
        iconName={CiWarning}
        size={18}
        className='mr-1'
      />
      {errorMsg}
    </span>
  </div>
);
