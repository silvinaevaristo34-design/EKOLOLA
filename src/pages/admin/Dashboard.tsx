import { LayoutDashboard, Building2, Truck, Recycle, ClipboardList, CreditCard, AlertTriangle, Package, Settings, MapPin, Shield, ArrowUpRight, TrendingUp } from 'lucide-react'
import DashboardLayout from '../../components/DashboardLayout'
import { Link } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

export const adminNavItems = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Empresas', href: '/admin/verify', icon: Building2, badge: 12 },
  { label: 'Operadores', href: '/admin/operators', icon: Truck },
  { label: 'Recicladores', href: '/admin/recyclers', icon: Recycle },
  { label: 'Recolhas', href: '/admin/collections', icon: ClipboardList },
  { label: 'Pagamentos', href: '/admin/payments', icon: CreditCard },
  { label: 'Disputas', href: '/admin/disputes', icon: AlertTriangle },
  { label: 'Categorias', href: '/admin/categories', icon: Package },
  { label: 'Mapa', href: '/admin/map', icon: MapPin },
  { label: 'Definições', href: '/admin/settings', icon: Settings },
]

const activityData = [
  { day: '14 Set', collections: 35 }, { day: '15 Set', collections: 42 }, { day: '16 Set', collections: 28 },
  { day: '17 Set', collections: 51 }, { day: '18 Set', collections: 48 }, { day: '19 Set', collections: 60 }, { day: '20 Set', collections: 38 },
]

const provinceData = [
  { name: 'Luanda', ops: 6420 }, { name: 'Benguela', ops: 892 }, { name: 'Huíla', ops: 634 },
  { name: 'Huambo', ops: 412 }, { name: 'Cabinda', ops: 284 }, { name: 'Namibe', ops: 178 },
]

const pendingCompanies = [
  { name: 'EcoSul Reciclagem Lda', type: 'Reciclador', province: 'Huíla', date: '19 Set 2026', docs: 3 },
  { name: 'Benfica Collect', type: 'Operador', province: 'Luanda', date: '18 Set 2026', docs: 2 },
  { name: 'Hotel Marina Palace', type: 'Gerador', province: 'Benguela', date: '18 Set 2026', docs: 2 },
]

export default function AdminDashboard() {
  return (
    <DashboardLayout navItems={adminNavItems} role="admin" title="Admin" company="EKOLOLA Admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Shield size={18} className="text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wide">Administração</span>
            </div>
            <h1 className="text-2xl font-display font-800 text-navy">Painel de controlo EKOLOLA</h1>
            <p className="text-slate-500 text-sm">20 de setembro de 2026 · Todos os dados da plataforma</p>
          </div>
        </div>

        {/* Platform KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { label: 'Empresas na plataforma', value: '1.250', icon: Building2, color: 'text-accent-blue', bg: 'bg-accent-blue-light', trend: '+24 este mês' },
            { label: 'Operadores verificados', value: '320', icon: Truck, color: 'text-primary', bg: 'bg-primary-light', trend: '+8 este mês' },
            { label: 'Parceiros recicladores', value: '180', icon: Recycle, color: 'text-primary-dark', bg: 'bg-primary-light', trend: '+5 este mês' },
            { label: 'Recolhas este mês', value: '8.420', icon: ClipboardList, color: 'text-navy', bg: 'bg-slate-100', trend: '+18% vs mês ant.' },
            { label: 'Toneladas processadas', value: '2.840 t', icon: Package, color: 'text-warning', bg: 'bg-warning-light', trend: '+22% vs mês ant.' },
            { label: 'Volume financeiro', value: '42,5M Kz', icon: CreditCard, color: 'text-accent-blue', bg: 'bg-accent-blue-light', trend: '+31% vs mês ant.' },
          ].map(k => (
            <div key={k.label} className="bg-white rounded-2xl border border-slate-100 p-5">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-9 h-9 ${k.bg} rounded-lg flex items-center justify-center`}>
                  <k.icon size={18} className={k.color} />
                </div>
                <TrendingUp size={14} className="text-primary" />
              </div>
              <p className="text-2xl font-display font-800 text-navy">{k.value}</p>
              <p className="text-xs text-slate-500 mt-0.5">{k.label}</p>
              <p className="text-xs text-primary mt-0.5">{k.trend}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl border border-slate-100 p-5">
            <h3 className="font-display font-700 text-navy mb-5">Recolhas diárias (últimos 7 dias)</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
                <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: 10, border: '1px solid #E2E8F0', fontSize: 12 }} />
                <Line type="monotone" dataKey="collections" stroke="#16A34A" strokeWidth={2.5} dot={{ fill: '#16A34A', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 p-5">
            <h3 className="font-display font-700 text-navy mb-5">Operações por província</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={provinceData} layout="vertical" barSize={16}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" horizontal={false} />
                <XAxis type="number" tick={{ fontSize: 11, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
                <YAxis dataKey="name" type="category" tick={{ fontSize: 11, fill: '#475569' }} axisLine={false} tickLine={false} width={70} />
                <Tooltip contentStyle={{ borderRadius: 10, border: '1px solid #E2E8F0', fontSize: 12 }} />
                <Bar dataKey="ops" fill="#0F172A" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pending verifications */}
        <div className="bg-white rounded-2xl border border-slate-100">
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <h3 className="font-display font-700 text-navy">Empresas pendentes de verificação</h3>
              <span className="bg-warning text-navy text-xs font-bold px-2 py-0.5 rounded-full">12</span>
            </div>
            <Link to="/admin/verify" className="text-xs font-medium text-primary flex items-center gap-1 hover:text-primary-dark">
              Ver todas <ArrowUpRight size={12} />
            </Link>
          </div>
          <div className="divide-y divide-slate-50">
            {pendingCompanies.map(c => (
              <div key={c.name} className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 transition">
                <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 shrink-0">
                  <Building2 size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-navy truncate">{c.name}</p>
                  <p className="text-xs text-slate-500">{c.type} · {c.province} · {c.docs} documentos</p>
                </div>
                <span className="text-xs text-slate-400 shrink-0">{c.date}</span>
                <div className="flex gap-2 shrink-0">
                  <button className="text-xs border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition">Ver docs</button>
                  <button className="text-xs bg-primary text-white px-3 py-1.5 rounded-lg hover:bg-primary-dark transition font-medium">Aprovar</button>
                  <button className="text-xs border border-danger/30 text-danger px-3 py-1.5 rounded-lg hover:bg-danger-light transition">Rejeitar</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map preview */}
        <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-display font-700 text-navy">Mapa operacional de Angola</h3>
            <div className="flex gap-3 text-xs">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary" />Geradores</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-accent-blue" />Operadores</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-warning" />Recicladores</span>
            </div>
          </div>
          <div className="relative bg-slate-100 h-64 flex items-center justify-center overflow-hidden">
            {/* Angola map silhouette */}
            <svg viewBox="0 0 400 350" className="absolute inset-0 w-full h-full opacity-10">
              <path d="M80,20 L320,20 L380,80 L360,200 L300,320 L180,340 L60,280 L20,160 L40,80 Z" fill="#0F172A" />
            </svg>
            {/* Province dots */}
            {[
              { name: 'Luanda', x: '62%', y: '35%', count: 6420, color: '#16A34A', size: 20 },
              { name: 'Benguela', x: '42%', y: '58%', count: 892, color: '#2563EB', size: 14 },
              { name: 'Huíla', x: '52%', y: '70%', count: 634, color: '#F59E0B', size: 12 },
              { name: 'Huambo', x: '48%', y: '60%', count: 412, color: '#16A34A', size: 10 },
              { name: 'Cabinda', x: '58%', y: '18%', count: 284, color: '#2563EB', size: 9 },
            ].map(province => (
              <div key={province.name} className="absolute flex flex-col items-center" style={{ left: province.x, top: province.y, transform: 'translate(-50%, -50%)' }}>
                <div className="rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:opacity-80 transition shadow-lg" style={{ width: province.size, height: province.size, backgroundColor: province.color }}>
                </div>
                <span className="text-xs font-medium text-navy mt-1 bg-white/80 px-1.5 py-0.5 rounded text-center whitespace-nowrap" style={{ fontSize: 9 }}>
                  {province.name}
                </span>
              </div>
            ))}
            <p className="text-slate-400 text-sm bg-white/80 px-3 py-1 rounded-lg z-10">Mapa interativo (demo)</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
