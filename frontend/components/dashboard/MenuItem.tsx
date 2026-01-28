'use client';

import { useState } from 'react';
import { MenuItem } from '../../types/auth.types';
import { DynamicIcon } from '../../utils/icons';

interface MenuItemComponentProps {
  item: MenuItem;
  allItems: MenuItem[];
  level?: number;
}

export function MenuItemComponent({ item, allItems, level = 0 }: MenuItemComponentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const children = allItems.filter(m => m.menu_parent_id === item.menu_id);
  const hasChildren = children.length > 0;

  return (
    <div>
      <div
        className={`flex items-center justify-between px-4 py-2.5 cursor-pointer hover:bg-slate-700 rounded-lg transition-colors ${
          level > 0 ? 'ml-4' : ''
        }`}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        <div className='flex items-center gap-3'>
          <DynamicIcon name={item.menu_icon_name} className='w-4 h-4 text-slate-400' />
          <span className='text-slate-200'>{item.menu_name}</span>
        </div>
        {hasChildren && (
          <svg
            className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
          </svg>
        )}
      </div>
      {hasChildren && isOpen && (
        <div className='mt-1'>
          {children.map(child => (
            <MenuItemComponent
              key={child.menu_id}
              item={child}
              allItems={allItems}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
