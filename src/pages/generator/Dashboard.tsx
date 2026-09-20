import { LayoutDashboard, Recycle, MapPin, BarChart3, Leaf, CreditCard, FileText, Users, Settings, Package, Plus, ArrowUpRight, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import DashboardLayout from '../../components/DashboardLayout'
import { Link } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts'

const navItems = [
  { label: 'Dashboard', href: '/generator/dashboard', icon: LayoutDashboard },
  { label: 'Recolhas', href: '/generator/collections', icon: Recycle },
  { label: 'Nova recolha', href: '/generator/new-collection', icon: Plus, badge: 0 },
  { label: 'Rastreamento', href: '/generator/tracking', icon: MapPin },
  { label: 'Relatórios', href: '/generator/reports', icon: BarChart3 },
  { label: 'Impacto', href: '/generator/impact', icon: Leaf },
  { label: 'Pagamentos', href: '/generator/payments', icon: CreditCard },
  { label: 'Documentos', href: '/generator/documents', icon: FileText },
  { label: 'Equipa', href: '/generator/team', icon: Users },
  { label: 'Definições', href: '/generator/settings', icon: Settings },
]

const monthlyData = [
  { month: 'Mar', kg: 1800 },
  { month: 'Abr', kg: 2200 },
  { month: 'Mai', kg: 1950 },
  { month: 'Jun', kg: 2800 },
  { month: 'Jul', kg: 2400 },
  { month: 'Ago', kg: 3100 },
  { month: 'Set', kg: 2450 },
]

const pieData = [
  { name: 'Plástico', value: 35, color: '#2563EB' },
  { name: 'Papel', value: 28, color: '#16A34A' },
  { name: 'Metal', value: 18, color: '#475569' },
  { name: 'Vidro', value: 10, color: '#F59E0B' },
  { name: 'Eletrónicos', value: 5, color: '#DC2626' },
  { name: 'Outros', value: 4, color: '#94A3B8' },
]

const recentCollections = [
  { id: 'KSC-2026-001284', material: 'Plástico PET', qty: '438 kg', status: 'Processado', date: '18 Set 2026', operator: 'EcoTrans Angola', color: 'text-primary bg-primary-light' },
  { id: 'KSC-2026-001251', material: 'Papel e Cartão', qty: '320 kg', status: 'A caminho', date: '20 Set 2026', operator: 'Luanda Circular', color: 'text-warning bg-warning-light' },
  { id: 'KSC-2026-001238', material: 'Metal', qty: '185 kg', status: 'Agendado', date: '22 Set 2026', operator: 'Verde Angola', color: 'text-accent-blue bg-accent-blue-light' },
  { id: 'KSC-2026-001220', material: 'Vidro', qty: '95 kg', status: 'Pendente', date: '23 Set 2026', operator: '—', color: 'text-slate-600 bg-slate-100' },
]

const kpis = [
  { label: 'Resíduos gerados', value: '2.450 kg', sub: 'este mês', icon: Package, color: 'text-slate-600', bg: 'bg-slate-100', trend: '+12%' },
  { label: 'Resíduos encaminhados', value: '1.980 kg', sub: 'este mês', icon: Recycle, color: 'text-primary', bg: 'bg-primary-light', trend: '+8%' },
  { label: 'Recolhas este mês', value: '18', sub: 'operações', icon: CheckCircle, color: 'text-accent-blue', bg: 'bg-accent-blue-light', trend: '+3' },
  { label: 'Taxa de valorização', value: '81%', sub: 'dos resíduos', icon: Leaf, color: 'text-primary-dark', bg: 'bg-primary-light', trend: '+2pp' },
]

export { navItems as generatorNavItems }

export default function GeneratorDashboard() {
  return (
    <DashboardLayout navItems={navItems} role="generator" title="Dashboard" company="Nova Vida Supermercados">
      <div className="space-y-6">
        {/* Greeting */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-display font-800 text-navy">Bom dia, Nova Vida Supermercados 👋</h1>
            <p className="text-slate-500 text-sm mt-0.5">Veja o estado das suas operações de hoje, 20 de setembro de 2026.</p>
          </div>
          <Link to="/generator/new-collection" className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition shadow-sm shrink-0">
            <Plus size={16} /> Nova recolha
          </Link>
        </div>

        {/* Alert */}
        <div className="flex items-start gap-3 bg-warning-light border border-warning/30 rounded-xl p-4">
          <AlertCircle size={18} className="text-warning shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-navy">Recolha #KSC-2026-001251 a caminho</p>
            <p className="text-xs text-slate-600 mt-0.5">O operador EcoTrans Angola está a 18 minutos do seu local em Talatona. <Link to="/generator/tracking" className="text-primary font-medium">Rastrear →</Link></p>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map(k => (
            <div key={k.label} className="bg-white rounded-2xl border border-slate-100 p-5">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-9 h-9 ${k.bg} rounded-lg flex items-center justify-center`}>
                  <k.icon size={18} className={k.color} />
                </div>
                <span className="text-xs font-semibold text-primary bg-primary-light px-2 py-0.5 rounded-full">{k.trend}</span>
              </div>
              <p className="text-2xl font-display font-800 text-navy">{k.value}</p>
              <p className="text-xs text-slate-500 mt-0.5">{k.label}</p>
              <p className="text-xs text-slate-400">{k.sub}</p>
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid lg:grid-cols-3 gap-4">
          {/* Bar chart */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 p-5">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display font-700 text-navy">Resíduos por mês (kg)</h3>
              <span className="text-xs text-slate-400">2026</span>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={monthlyData} barSize={28}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: 10, border: '1px solid #E2E8F0', fontSize: 12 }} />
                <Bar dataKey="kg" fill="#16A34A" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie chart */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5">
            <h3 className="font-display font-700 text-navy mb-5">Por material</h3>
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie data={pieData} innerRadius={45} outerRadius={68} dataKey="value" paddingAngle={2}>
                  {pieData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: 10, border: '1px solid #E2E8F0', fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-2 space-y-1.5">
              {pieData.slice(0, 4).map(d => (
                <div key={d.name} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }} />
                    <span className="text-slate-600">{d.name}</span>
                  </div>
                  <span className="font-medium text-navy">{d.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact quick stats */}
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: Recycle, value: '1.980 kg', label: 'desviados de aterros', color: 'text-primary', bg: 'bg-primary-light' },
            { icon: Leaf, value: '3.420 kg CO₂e', label: 'emissões estimadas evitadas*', color: 'text-primary-dark', bg: 'bg-primary-light' },
            { icon: CheckCircle, value: '12', label: 'árvores equivalentes*', color: 'text-accent-blue', bg: 'bg-accent-blue-light' },
          ].map(item => (
            <div key={item.label} className={`${item.bg} rounded-2xl p-5 flex items-center gap-4`}>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <item.icon size={22} className={item.color} />
              </div>
              <div>
                <p className="text-xl font-display font-800 text-navy">{item.value}</p>
                <p className="text-xs text-slate-600">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400">* Valores estimados com base em metodologias de referência. Não constituem certificação ambiental.</p>

        {/* Recent collections */}
        <div className="bg-white rounded-2xl border border-slate-100">
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
            <h3 className="font-display font-700 text-navy">Recolhas recentes</h3>
            <Link to="/generator/collections" className="text-xs font-medium text-primary flex items-center gap-1 hover:text-primary-dark">
              Ver todas <ArrowUpRight size={12} />
            </Link>
          </div>
          <div className="divide-y divide-slate-50">
            {recentCollections.map(c => (
              <div key={c.id} className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 transition">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-navy truncate">{c.id}</p>
                    <span className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${c.color}`}>{c.status}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">{c.material} · {c.qty} · {c.operator}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock size={12} />
                    {c.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
