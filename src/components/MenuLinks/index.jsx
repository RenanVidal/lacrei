import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MenuLinks ({children, to, style, cname}) {
  return (
    <NavLink className={({isActive}) => `
      ${isActive ? style : ''}
    `} to={to}  end>
      {children}
    </NavLink>
  );
}
