import { LayoutDashboard, ClipboardList, Truck, Map, Users, CreditCard, FileText, Star, Settings, Package, Plus, ArrowUpRight, Clock, CheckCircle } from 'lucide-react'
import DashboardLayout from '../../components/DashboardLayout'
import { Link } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export const operatorNavItems = [
  { label: 'Dashboard', href: '/operator/dashboard', icon: LayoutDashboard },
  { label: 'Pedidos', href: '/operator/orders', icon: ClipboardList, badge: 24 },
  { label: 'Recolhas', href: '/operator/collections', icon: Package },
  { label: 'Rotas', href: '/operator/routes', icon: Map },
  { label: 'Veículos', href: '/operator/vehicles', icon: Truck },
  { label: 'Motoristas', href: '/operator/drivers', icon: Users },
  { label: 'Pagamentos', href: '/operator/payments', icon: CreditCard },
  { label: 'Documentos', href: '/operator/documents', icon: FileText },
  { label: 'Avaliações', href: '/operator/reviews', icon: Star },
  { label: 'Definições', href: '/operator/settings', icon: Settings },
]

const revenueData = [
  { month: 'Mar', kz: 980000 }, { month: 'Abr', kz: 1250000 }, { month: 'Mai', kz: 1100000 },
  { month: 'Jun', kz: 1650000 }, { month: 'Jul', kz: 1420000 }, { month: 'Ago', kz: 1890000 },
  { month: 'Set', kz: 1850000 },
]

const availableOrders = [
  { id: 'KSC-0024', client: 'Kwanza Industrial', material: 'Metal', qty: '850 kg', location: 'Viana', date: '22 Set', dist: '6.1 km', value: '72.000 Kz', urgent: false },
  { id: 'KSC-0023', client: 'Atlântico Hotel', material: 'Orgânico', qty: '340 kg', location: 'Ingombota', date: '21 Set', dist: '3.2 km', value: '28.000 Kz', urgent: true },
  { id: 'KSC-0022', client: 'Nova Vida Supermercados', material: 'Plástico PET', qty: '450 kg', location: 'Talatona', date: '22 Set', dist: '8.4 km', value: '45.000 Kz', urgent: false },
]

export default function OperatorDashboard() {
  return (
    <DashboardLayout navItems={operatorNavItems} role="operator" title="Dashboard" company="EcoTrans Angola">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-display font-800 text-navy">Bom dia, EcoTrans Angola 👋</h1>
            <p className="text-slate-500 text-sm mt-0.5">20 de setembro de 2026 · Luanda</p>
          </div>
          <Link to="/operator/orders" className="flex items-center gap-2 bg-accent-blue hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition shadow-sm shrink-0">
            <ClipboardList size={16} /> Ver pedidos
          </Link>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Pedidos disponíveis', value: '24', icon: ClipboardList, color: 'text-accent-blue', bg: 'bg-accent-blue-light', trend: 'Novos' },
            { label: 'Recolhas hoje', value: '8', icon: Package, color: 'text-primary', bg: 'bg-primary-light', trend: '↑ 2' },
            { label: 'Em andamento', value: '3', icon: Truck, color: 'text-warning', bg: 'bg-warning-light', trend: 'Ativo' },
            { label: 'Receita do mês', value: '1.850.000 Kz', icon: CreditCard, color: 'text-primary-dark', bg: 'bg-primary-light', trend: '+18%' },
          ].map(k => (
            <div key={k.label} className="bg-white rounded-2xl border border-slate-100 p-5">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-9 h-9 ${k.bg} rounded-lg flex items-center justify-center`}>
                  <k.icon size={18} className={k.color} />
                </div>
                <span className="text-xs font-semibold text-primary bg-primary-light px-2 py-0.5 rounded-full">{k.trend}</span>
              </div>
              <p className="text-xl font-display font-800 text-navy">{k.value}</p>
              <p className="text-xs text-slate-500 mt-0.5">{k.label}</p>
            </div>
          ))}
        </div>

        {/* Revenue chart */}
        <div className="bg-white rounded-2xl border border-slate-100 p-5">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-display font-700 text-navy">Receita mensal (Kz)</h3>
            <span className="text-xs text-slate-400">2026</span>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={revenueData} barSize={28}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: '#94A3B8' }} axisLine={false} tickLine={false} tickFormatter={v => `${(v/1000000).toFixed(1)}M`} />
              <Tooltip contentStyle={{ borderRadius: 10, border: '1px solid #E2E8F0', fontSize: 12 }} formatter={(v) => [`${Number(v).toLocaleString()} Kz`, 'Receita']} />
              <Bar dataKey="kz" fill="#2563EB" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Available orders */}
        <div className="bg-white rounded-2xl border border-slate-100">
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
            <h3 className="font-display font-700 text-navy">Pedidos disponíveis</h3>
            <Link to="/operator/orders" className="text-xs font-medium text-accent-blue flex items-center gap-1 hover:text-blue-700">
              Ver todos (24) <ArrowUpRight size={12} />
            </Link>
          </div>
          <div className="divide-y divide-slate-50">
            {availableOrders.map(order => (
              <div key={order.id} className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 transition">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-sm font-semibold text-navy">{order.client}</p>
                    {order.urgent && <span className="text-xs bg-danger-light text-danger px-2 py-0.5 rounded-full font-medium">Urgente</span>}
                  </div>
                  <p className="text-xs text-slate-500">{order.material} · {order.qty} · {order.location} · {order.dist}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-bold text-navy">{order.value}</p>
                  <p className="text-xs text-slate-400">{order.date}</p>
                </div>
                <button className="shrink-0 bg-accent-blue text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-blue-700 transition">
                  Aceitar
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Fleet status */}
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { plate: 'LD-42-KA', type: 'Camião 5t', driver: 'João Manuel', status: 'Em recolha', color: 'text-warning bg-warning-light' },
            { plate: 'LD-18-CX', type: 'Furgão 3t', driver: 'Pedro Kuito', status: 'Disponível', color: 'text-primary bg-primary-light' },
            { plate: 'LD-95-MB', type: 'Camião 8t', driver: '—', status: 'Em manutenção', color: 'text-danger bg-danger-light' },
          ].map(v => (
            <div key={v.plate} className="bg-white rounded-xl border border-slate-100 p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="font-mono text-sm font-bold text-navy">{v.plate}</p>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${v.color}`}>{v.status}</span>
              </div>
              <p className="text-xs text-slate-500">{v.type}</p>
              <p className="text-xs text-slate-400 mt-0.5">Motorista: {v.driver}</p>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
