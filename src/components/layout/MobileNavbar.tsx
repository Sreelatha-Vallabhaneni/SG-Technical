'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Nav, NavItem, NavIcon, NavLabel } from './MobileNavbar.styles';
import { MobileNavProps, NavItemData } from '@src/typings/layout-components';

import homeIcon from '../../../public/icon_tabbar_home.svg';
import timeWatchIcon from '../../../public/icon-time-watch.svg';
import myBetsIcon from '../../../public/icon-coupon.svg';


export default function MobileNav({ onMyBetsClick }: MobileNavProps) {
  const [active, setActive] = useState<'home' | 'live' | 'my-bets'>('home');

  const navItems: NavItemData[] = [
    {
      key: 'home',
      label: 'Home',
      icon: homeIcon,
      onClick: () => setActive('home'),
    },
    {
      key: 'live',
      label: 'Live',
      icon: timeWatchIcon,
      onClick: () => setActive('live'),
    },
    {
      key: 'my-bets',
      label: 'My Bets',
      icon: myBetsIcon,
      onClick: () => {
        setActive('my-bets');
        onMyBetsClick();
      },
    },
  ];

  return (
    <Nav>
      {navItems.map((item) => (
        <NavItem
          key={item.key}
          isActive={active === item.key}
          onClick={item.onClick}
        >
          <NavIcon>
            <Image
              src={item.icon}
              alt={item.label}
              width={24}
              height={24}
              style={{
                filter:
                  active === item.key
                  ? 'brightness(0) invert(1)'
                  : 'invert(35%) sepia(85%) saturate(400%) hue-rotate(190deg)'
              }}
            />
          </NavIcon>
          <NavLabel>{item.label}</NavLabel>
        </NavItem>
      ))}
    </Nav>
  );
}