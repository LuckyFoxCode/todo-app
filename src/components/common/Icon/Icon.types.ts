import { SVGProps } from 'react';
import { IconType } from 'react-icons';

export interface IconProps extends SVGProps<SVGSVGElement> {
  iconName: IconType | null;
  size?: number;
  className?: string;
}
