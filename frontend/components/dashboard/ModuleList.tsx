'use client';

import { Module } from '../../types/auth.types';
import { ModuleItem } from './ModuleItem';

interface ModuleListProps {
  modules: Module[];
}

export function ModuleList({ modules }: ModuleListProps) {
  return (
    <>
      {modules.map(module => (
        <ModuleItem key={module.mod_id} module={module} />
      ))}
    </>
  );
}
