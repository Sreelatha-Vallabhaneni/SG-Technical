import { StaticImageData } from 'next/image';
import { ReactNode, CSSProperties, ButtonHTMLAttributes } from 'react';

/* -------------------------------------------------------------------------- */
/*                               Base Utilities                               */
/* -------------------------------------------------------------------------- */

export interface WithChildren {
  children?: ReactNode;
}

export interface Clickable extends WithChildren {
  onClick?: () => void;
}

export interface StyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  style?: CSSProperties;
}
export interface StyledProps {
  className?: string;
  style?: CSSProperties;
}

/* -------------------------------------------------------------------------- */
/*                              Layout Components                              */
/* -------------------------------------------------------------------------- */

export interface LayoutProps extends WithChildren {}

export interface HeaderProps  {
  onMyBetsClick: () => void;
}

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface MobileNavProps {
  onMyBetsClick: () => void;
  isSidebarOpen?: boolean;
}
export interface ContainerProps {
  maxWidth?: number;
}

/* -------------------------------------------------------------------------- */
/*                              Navigation Types                               */
/* -------------------------------------------------------------------------- */


export interface NavItemProps extends Clickable, WithChildren {
  isActive?: boolean;
  className?: string;
  style?: CSSProperties;
  as?: string | React.ComponentType<any>;
}
export type NavItemData = {
  key: 'home' | 'live' | 'my-bets';
  label: string;
  icon: StaticImageData;
  onClick?: () => void;
};

/* -------------------------------------------------------------------------- */
/*                                UI Components                                */
/* -------------------------------------------------------------------------- */

export interface ButtonProps 
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    StyledProps {
    variant?: 'primary' | 'outline';
}