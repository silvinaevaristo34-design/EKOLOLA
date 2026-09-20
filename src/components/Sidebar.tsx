import { Link, useLocation } from 'react-router-dom'
import { type LucideIcon } from 'lucide-react'
import Logo from './Logo'

interface NavItem {
  label: string
  href: string
  icon: LucideIcon
  badge?: number
}

interface SidebarProps {
  items: NavItem[]
  role: 'generator' | 'operator' | 'recycler' | 'admin'
}

export default function Sidebar({ items, role }: SidebarProps) {
  const location = useLocation()

  const roleColors = {
    generator: 'bg-primary',
    operator: 'bg-accent-blue',
    recycler: 'bg-primary-dark',
    admin: 'bg-navy',
  }

  return (
    <aside className="w-64 h-screen bg-navy flex flex-col fixed left-0 top-0 z-30 sidebar-scroll overflow-y-auto">
      <div className="px-6 py-5 border-b border-white/10">
        <Logo white />
        <span className="text-xs text-slate-400 mt-1 block capitalize">{role === 'generator' ? 'Gerador' : role === 'operator' ? 'Operador' : role === 'recycler' ? 'Reciclador' : 'Administrador'}</span>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {items.map((item) => {
          const Icon = item.icon
          const active = location.pathname === item.href || location.pathname.startsWith(item.href + '/')
          return (
            <Link
              key={item.href}
              to={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                active
                  ? 'bg-primary text-white'
                  : 'text-slate-400 hover:text-white hover:bg-white/8'
              }`}
            >
              <Icon size={18} />
              <span className="flex-1">{item.label}</span>
              {item.badge !== undefined && item.badge > 0 && (
                <span className="bg-warning text-navy text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                  {item.badge}
                </span>
              )}
            </Link>
          )
        })}
      </nav>

      <div className="px-4 py-4 border-t border-white/10">
        <Link to="/" className="flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors">
          <span>← Sair da plataforma</span>
        </Link>
      </div>
    </aside>
  )
}
