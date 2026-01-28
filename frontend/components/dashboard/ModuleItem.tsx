'use client';

import { useState } from 'react';
import { Module } from '../../types/auth.types';
import { DynamicIcon } from '../../utils/icons';
import { MenuItemList } from './MenuItemList';

interface ModuleItemProps {
  module: Module;
}

export function ModuleItem({ module }: ModuleItemProps) {
  const [isOpen, setIsOpen] = useState(true);
  const rootItems = module.menu.filter(m => m.menu_parent_id === null);

  return (
    <div className='mb-4'>
      <div
        className='flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-slate-800 rounded-lg transition-colors'
        onClick={() => setIsOpen(!isOpen)}
      >
        <DynamicIcon name={module.mod_icon_name} className='w-5 h-5 text-blue-400' />
        <span className='text-white font-semibold'>{module.mod_name}</span>
        <svg
          className={`w-4 h-4 text-slate-400 ml-auto transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
        </svg>
      </div>
      {isOpen && (
        <div className='mt-2 space-y-1'>
          <MenuItemList items={rootItems} allItems={module.menu} />
        </div>
      )}
    </div>
  );
}
