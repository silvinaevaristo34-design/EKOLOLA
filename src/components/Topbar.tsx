import { Bell, Search, HelpCircle, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

interface TopbarProps {
  title: string
  company?: string
}

export default function Topbar({ title, company = 'Empresa ABC' }: TopbarProps) {
  const [notifs] = useState(3)

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center gap-4 px-6 sticky top-0 z-20">
      <div className="flex-1 flex items-center gap-3">
        <div className="relative max-w-xs w-full hidden md:block">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Pesquisar..."
            className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="relative p-2 text-slate-500 hover:text-navy hover:bg-slate-100 rounded-lg transition">
          <Bell size={20} />
          {notifs > 0 && (
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full ring-2 ring-white" />
          )}
        </button>
        <button className="p-2 text-slate-500 hover:text-navy hover:bg-slate-100 rounded-lg transition">
          <HelpCircle size={20} />
        </button>

        <div className="flex items-center gap-2 ml-2 pl-3 border-l border-slate-200 cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold">
            A
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-semibold text-navy leading-tight">{company}</p>
            <p className="text-xs text-slate-500">Gerador</p>
          </div>
          <ChevronDown size={14} className="text-slate-400 group-hover:text-slate-600" />
        </div>
      </div>
    </header>
  )
}
