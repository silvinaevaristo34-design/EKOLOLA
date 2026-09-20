import { Search, MapPin, Scale, Filter, Heart } from 'lucide-react'
import DashboardLayout from '../../components/DashboardLayout'
import { recyclerNavItems } from './Dashboard'

const materials = [
  { id: 'M001', type: 'PET Transparente', category: 'Plástico', qty: '2.400 kg', location: 'Luanda, Talatona', state: 'Triado', price: '120 Kz/kg', total: '288.000 Kz', generator: 'Nova Vida Supermercados', available: '24 Set 2026', emoji: '🧴' },
  { id: 'M002', type: 'Alumínio laminado', category: 'Metal', qty: '850 kg', location: 'Luanda, Viana', state: 'Triado', price: '850 Kz/kg', total: '722.500 Kz', generator: 'Kwanza Industrial', available: '22 Set 2026', emoji: '🪙' },
  { id: 'M003', type: 'Papel de escritório', category: 'Papel', qty: '1.200 kg', location: 'Luanda, Ingombota', state: 'Prensado', price: '45 Kz/kg', total: '54.000 Kz', generator: 'Kiala Distribuição', available: '25 Set 2026', emoji: '📄' },
  { id: 'M004', type: 'Vidro incolor', category: 'Vidro', qty: '680 kg', location: 'Luanda, Maianga', state: 'Não triado', price: '30 Kz/kg', total: '20.400 Kz', generator: 'Atlântico Hotel', available: '23 Set 2026', emoji: '🍶' },
  { id: 'M005', type: 'PEAD Rígido', category: 'Plástico', qty: '1.050 kg', location: 'Luanda, Cacuaco', state: 'Triado', price: '95 Kz/kg', total: '99.750 Kz', generator: 'Luanda Circular', available: '26 Set 2026', emoji: '🧴' },
  { id: 'M006', type: 'Aço estrutural', category: 'Metal', qty: '2.100 kg', location: 'Benguela, Lobito', state: 'Não triado', price: '180 Kz/kg', total: '378.000 Kz', generator: 'Construtora do Sul', available: '28 Set 2026', emoji: '🔩' },
]

const categories = ['Todos', 'Plástico', 'Metal', 'Papel', 'Vidro', 'Eletrónicos', 'Orgânico']

const stateColor: Record<string, string> = {
  'Triado': 'bg-primary-light text-primary',
  'Prensado': 'bg-accent-blue-light text-accent-blue',
  'Não triado': 'bg-warning-light text-warning',
}

export default function RecyclerMarketplace() {
  return (
    <DashboardLayout navItems={recyclerNavItems} role="recycler" title="Mercado" company="Verde Angola Reciclagem">
      <div className="space-y-5">
        <div>
          <h1 className="text-2xl font-display font-800 text-navy">Mercado Circular</h1>
          <p className="text-sm text-slate-500">Materiais disponíveis para aquisição de empresas verificadas.</p>
        </div>

        {/* Search and filters */}
        <div className="flex flex-wrap gap-3">
          <div className="relative flex-1 min-w-48">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input placeholder="Pesquisar material, empresa ou localização..." className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          </div>
          <button className="flex items-center gap-1.5 text-sm border border-slate-200 px-4 py-2.5 rounded-xl hover:bg-slate-50 bg-white transition text-slate-600">
            <Filter size={14} /> Filtros
          </button>
          <select className="text-sm border border-slate-200 rounded-xl px-3 py-2.5 bg-white text-slate-600 focus:outline-none">
            <option>Ordenar por: Relevância</option>
            <option>Preço: menor</option>
            <option>Preço: maior</option>
            <option>Quantidade</option>
            <option>Data</option>
          </select>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1">
          {categories.map(cat => (
            <button key={cat} className={`shrink-0 text-sm px-4 py-2 rounded-xl border transition ${cat === 'Todos' ? 'bg-primary text-white border-primary' : 'bg-white border-slate-200 text-slate-600 hover:border-primary/30 hover:text-primary'}`}>{cat}</button>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>6 materiais disponíveis</span>
        </div>

        {/* Material cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {materials.map(m => (
            <div key={m.id} className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-sm transition group">
              <div className="bg-slate-50 p-6 flex items-center justify-between">
                <span className="text-4xl">{m.emoji}</span>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${stateColor[m.state]}`}>{m.state}</span>
                  <button className="p-1.5 text-slate-300 hover:text-danger transition">
                    <Heart size={16} />
                  </button>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs text-slate-400 mb-0.5">{m.category} · {m.id}</p>
                <h4 className="font-display font-700 text-navy text-base mb-1">{m.type}</h4>
                <p className="text-xs text-slate-500 mb-3">{m.generator}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-1.5 text-xs text-slate-600">
                    <Scale size={12} /> {m.qty}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-600">
                    <MapPin size={12} /> {m.location}
                  </div>
                </div>
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <p className="text-xl font-display font-800 text-navy">{m.price}</p>
                    <p className="text-xs text-slate-400">Total: {m.total}</p>
                  </div>
                  <p className="text-xs text-slate-400">Disp. {m.available}</p>
                </div>
                <button className="w-full bg-primary hover:bg-primary-dark text-white text-sm font-semibold py-2.5 rounded-xl transition">
                  Demonstrar interesse
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
