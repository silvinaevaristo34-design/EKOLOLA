import { LayoutDashboard, Package, Archive, Inbox, Settings2, CreditCard, BarChart3, FileText, Settings, Recycle, ArrowUpRight, CheckCircle } from 'lucide-react'
import DashboardLayout from '../../components/DashboardLayout'
import { Link } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export const recyclerNavItems = [
  { label: 'Dashboard', href: '/recycler/dashboard', icon: LayoutDashboard },
  { label: 'Materiais', href: '/recycler/materials', icon: Package, badge: 8 },
  { label: 'Lotes', href: '/recycler/lots', icon: Archive },
  { label: 'Receções', href: '/recycler/receptions', icon: Inbox },
  { label: 'Processamento', href: '/recycler/processing', icon: Settings2 },
  { label: 'Capacidade', href: '/recycler/capacity', icon: Recycle },
  { label: 'Pagamentos', href: '/recycler/payments', icon: CreditCard },
  { label: 'Relatórios', href: '/recycler/reports', icon: BarChart3 },
  { label: 'Documentos', href: '/recycler/documents', icon: FileText },
  { label: 'Definições', href: '/recycler/settings', icon: Settings },
]

const monthData = [
  { month: 'Mar', ton: 8.2 }, { month: 'Abr', ton: 10.1 }, { month: 'Mai', ton: 9.5 },
  { month: 'Jun', ton: 12.8 }, { month: 'Jul', ton: 11.2 }, { month: 'Ago', ton: 13.4 },
  { month: 'Set', ton: 9.8 },
]

const pendingLots = [
  { id: 'LOTE-KSC-2026-00842', material: 'Plástico PET', origin: 'Nova Vida Supermercados', qty: '486 kg', status: 'Em trânsito', eta: '2h 30min' },
  { id: 'LOTE-KSC-2026-00841', material: 'Alumínio', origin: 'Kwanza Industrial', qty: '312 kg', status: 'Aguardando receção', eta: 'No armazém' },
  { id: 'LOTE-KSC-2026-00839', material: 'Papel/Cartão', origin: 'Kiala Distribuição', qty: '580 kg', status: 'Em triagem', eta: '—' },
]

export default function RecyclerDashboard() {
  return (
    <DashboardLayout navItems={recyclerNavItems} role="recycler" title="Dashboard" company="Verde Angola Reciclagem">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-display font-800 text-navy">Bom dia, Verde Angola Reciclagem 👋</h1>
            <p className="text-slate-500 text-sm mt-0.5">20 de setembro de 2026</p>
          </div>
          <Link to="/recycler/marketplace" className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition shadow-sm shrink-0">
            <Package size={16} /> Mercado Circular
          </Link>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Materiais recebidos', value: '12,4 ton', icon: Inbox, color: 'text-primary', bg: 'bg-primary-light', sub: 'este mês' },
            { label: 'Processados', value: '9,8 ton', icon: CheckCircle, color: 'text-primary-dark', bg: 'bg-primary-light', sub: 'este mês' },
            { label: 'Pendentes', value: '2,6 ton', icon: Archive, color: 'text-warning', bg: 'bg-warning-light', sub: 'aguardando' },
            { label: 'Taxa de processamento', value: '79%', icon: Recycle, color: 'text-accent-blue', bg: 'bg-accent-blue-light', sub: 'eficiência' },
          ].map(k => (
            <div key={k.label} className="bg-white rounded-2xl border border-slate-100 p-5">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-9 h-9 ${k.bg} rounded-lg flex items-center justify-center`}>
                  <k.icon size={18} className={k.color} />
                </div>
              </div>
              <p className="text-2xl font-display font-800 text-navy">{k.value}</p>
              <p className="text-xs text-slate-500 mt-0.5">{k.label}</p>
              <p className="text-xs text-slate-400">{k.sub}</p>
            </div>
          ))}
        </div>

        {/* Capacity bar */}
        <div className="bg-white rounded-2xl border border-slate-100 p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-700 text-navy">Capacidade mensal</h3>
            <span className="text-sm font-bold text-navy">12,4 / 20 ton</span>
          </div>
          <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full transition-all" style={{ width: '62%' }} />
          </div>
          <div className="flex justify-between text-xs text-slate-400 mt-2">
            <span>62% utilizado</span>
            <span>7,6 ton disponíveis</span>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-4">
            {[
              { mat: 'Plástico PET', used: 5.2, cap: 8, color: '#2563EB' },
              { mat: 'Alumínio', used: 3.8, cap: 5, color: '#16A34A' },
              { mat: 'Papel/Cartão', used: 3.4, cap: 7, color: '#F59E0B' },
            ].map(m => (
              <div key={m.mat} className="p-3 bg-slate-50 rounded-xl">
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: m.color }} />
                  <p className="text-xs font-medium text-slate-700">{m.mat}</p>
                </div>
                <p className="text-sm font-bold text-navy">{m.used}t <span className="text-xs font-normal text-slate-400">/ {m.cap}t</span></p>
                <div className="h-1.5 bg-slate-200 rounded-full mt-1.5 overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${(m.used / m.cap) * 100}%`, backgroundColor: m.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chart + lots */}
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 p-5">
            <h3 className="font-display font-700 text-navy mb-5">Materiais processados por mês (toneladas)</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={monthData} barSize={24}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: 10, border: '1px solid #E2E8F0', fontSize: 12 }} />
                <Bar dataKey="ton" fill="#166534" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-700 text-navy text-sm">Lotes em andamento</h3>
              <span className="text-xs text-slate-400">3 ativos</span>
            </div>
            <div className="space-y-3">
              {pendingLots.map(lot => (
                <div key={lot.id} className="p-3 bg-slate-50 rounded-xl">
                  <p className="font-mono text-xs text-slate-500 mb-1">{lot.id.replace('LOTE-KSC-', '')}</p>
                  <p className="text-sm font-semibold text-navy">{lot.material}</p>
                  <p className="text-xs text-slate-500 mb-1.5">{lot.qty} · {lot.origin}</p>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${lot.status === 'Em trânsito' ? 'bg-warning-light text-warning' : lot.status === 'Aguardando receção' ? 'bg-accent-blue-light text-accent-blue' : 'bg-primary-light text-primary'}`}>
                    {lot.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
