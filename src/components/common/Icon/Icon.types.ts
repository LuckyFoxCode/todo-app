import React from 'react';
import { IconType } from 'react-icons';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  iconName: IconType | null;
  size?: number;
  className?: string;
}
