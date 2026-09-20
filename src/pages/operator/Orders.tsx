import { Search, Filter, MapPin, Scale, Calendar, Star, Truck } from 'lucide-react'
import DashboardLayout from '../../components/DashboardLayout'
import { operatorNavItems } from './Dashboard'

const orders = [
  { id: 'KSC-0024', client: 'Kwanza Industrial', material: 'Metal', qty: '850 kg', location: 'Viana', municipality: 'Viana', date: '22 Set', dist: '6.1 km', value: '72.000 Kz', urgent: false, contact: '+244 912 345 678' },
  { id: 'KSC-0023', client: 'Atlântico Hotel', material: 'Orgânico', qty: '340 kg', location: 'Ingombota', municipality: 'Ingombota', date: '21 Set', dist: '3.2 km', value: '28.000 Kz', urgent: true, contact: '+244 923 456 789' },
  { id: 'KSC-0022', client: 'Nova Vida Supermercados', material: 'Plástico PET', qty: '450 kg', location: 'Talatona', municipality: 'Belas', date: '22 Set', dist: '8.4 km', value: '45.000 Kz', urgent: false, contact: '+244 934 567 890' },
  { id: 'KSC-0021', client: 'Kiala Distribuição', material: 'Papel/Cartão', qty: '680 kg', location: 'Viana', municipality: 'Viana', date: '23 Set', dist: '5.8 km', value: '38.000 Kz', urgent: false, contact: '+244 945 678 901' },
  { id: 'KSC-0020', client: 'Hospital Geral de Luanda', material: 'Eletrónicos', qty: '95 kg', location: 'Maianga', municipality: 'Maianga', date: '24 Set', dist: '12 km', value: '95.000 Kz', urgent: false, contact: '+244 956 789 012' },
]

const materialEmoji: Record<string, string> = {
  Metal: '🔩', Orgânico: '🌿', 'Plástico PET': '🧴', 'Papel/Cartão': '📦', Eletrónicos: '💻',
}

export default function OperatorOrders() {
  return (
    <DashboardLayout navItems={operatorNavItems} role="operator" title="Pedidos" company="EcoTrans Angola">
      <div className="space-y-5">
        <div>
          <h1 className="text-2xl font-display font-800 text-navy">Pedidos disponíveis</h1>
          <p className="text-sm text-slate-500">Pedidos compatíveis com o seu perfil e área de atuação.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          <div className="relative flex-1 min-w-48 max-w-xs">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input placeholder="Pesquisar..." className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue" />
          </div>
          {['Todos', 'Plástico', 'Metal', 'Papel', 'Orgânico', 'Eletrónicos'].map(f => (
            <button key={f} className={`text-sm px-4 py-2.5 rounded-xl border transition ${f === 'Todos' ? 'bg-accent-blue text-white border-accent-blue' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'}`}>{f}</button>
          ))}
        </div>

        <div className="space-y-3">
          {orders.map(order => (
            <div key={order.id} className="bg-white rounded-2xl border border-slate-100 p-5 hover:shadow-sm transition">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-2xl shrink-0">
                  {materialEmoji[order.material] || '♻️'}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <p className="font-display font-700 text-navy">{order.client}</p>
                    <span className="font-mono text-xs text-slate-400">{order.id}</span>
                    {order.urgent && <span className="text-xs bg-danger-light text-danger px-2 py-0.5 rounded-full font-semibold">🔴 Urgente</span>}
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-3">
                    <span className="flex items-center gap-1"><Scale size={13} /> {order.qty}</span>
                    <span className="flex items-center gap-1"><MapPin size={13} /> {order.location}, {order.municipality}</span>
                    <span className="flex items-center gap-1"><Truck size={13} /> {order.dist}</span>
                    <span className="flex items-center gap-1"><Calendar size={13} /> {order.date}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-bold text-navy">{order.value}</span>
                    <span className="text-xs text-slate-400">· valor estimado</span>
                  </div>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button className="text-sm border border-slate-200 text-slate-600 px-4 py-2.5 rounded-xl hover:bg-slate-50 transition font-medium">
                    Ver detalhes
                  </button>
                  <button className="text-sm bg-accent-blue hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl transition font-semibold">
                    Aceitar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center py-4">
          <button className="text-sm text-accent-blue font-medium hover:text-blue-700 transition">Carregar mais pedidos</button>
        </div>
      </div>
    </DashboardLayout>
  )
}
