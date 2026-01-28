'use client';

import { MenuItem } from '../../types/auth.types';
import { MenuItemComponent } from './MenuItem';

interface MenuItemListProps {
  items: MenuItem[];
  allItems: MenuItem[];
  level?: number;
}

export function MenuItemList({ items, allItems, level = 0 }: MenuItemListProps) {
  return (
    <>
      {items.map(item => (
        <MenuItemComponent key={item.menu_id} item={item} allItems={allItems} level={level} />
      ))}
    </>
  );
}
