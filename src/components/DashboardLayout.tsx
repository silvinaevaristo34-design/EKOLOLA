import { type ReactNode } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { type LucideIcon } from 'lucide-react'

interface NavItem {
  label: string
  href: string
  icon: LucideIcon
  badge?: number
}

interface DashboardLayoutProps {
  children: ReactNode
  navItems: NavItem[]
  role: 'generator' | 'operator' | 'recycler' | 'admin'
  title: string
  company?: string
}

export default function DashboardLayout({ children, navItems, role, title, company }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar items={navItems} role={role} />
      <div className="flex-1 ml-64">
        <Topbar title={title} company={company} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
