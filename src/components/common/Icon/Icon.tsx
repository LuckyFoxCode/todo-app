import { cn } from '@/libs/utils';
import { IconProps } from './Icon.types';

export const Icon = ({
  className,
  size = 16,
  iconName: IconComponent,
  ...rest
}: IconProps) =>
  IconComponent && (
    <IconComponent
      className={cn('transition-colors duration-300', className)}
      size={size}
      {...rest}
    />
  );
