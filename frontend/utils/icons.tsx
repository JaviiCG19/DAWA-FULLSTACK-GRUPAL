import type { LucideProps } from 'lucide-react';
import {
  BarChart3,
  Building2,
  Circle,
  ClipboardList,
  Clock3,
  FilePenLine,
  Gauge,
  GraduationCap,
  LayoutDashboard,
  Menu as MenuIcon,
  Workflow,
} from 'lucide-react';

interface DynamicIconProps extends LucideProps {
  name?: string | null;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  switch (name) {
    case 'bx bx-menu':
      return <MenuIcon {...props} />;
    case 'bx bx-chart':
      return <BarChart3 {...props} />;
    case 'icon_001':
      return <GraduationCap {...props} />;
    case 'icon_002':
      return <Building2 {...props} />;
    case 'icon_003':
      return <Workflow {...props} />;
    case 'icon_004':
      return <FilePenLine {...props} />;
    case 'icon_005':
      return <Clock3 {...props} />;
    case 'icon_dashboard':
      return <LayoutDashboard {...props} />;
    case 'icon_stats':
      return <Gauge {...props} />;
    case null:
    case undefined:
      return <Circle {...props} />;
    default:
      return <ClipboardList {...props} />;
  }
}
