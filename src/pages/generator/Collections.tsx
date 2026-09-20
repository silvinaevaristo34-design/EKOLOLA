import { Search, Filter, Plus, Eye, Clock, CheckCircle, Truck, Package } from 'lucide-react'
import DashboardLayout from '../../components/DashboardLayout'
import { generatorNavItems } from './Dashboard'
import { Link } from 'react-router-dom'

const collections = [
  { id: 'KSC-2026-001284', material: 'Plástico PET', qty: '438 kg', status: 'Processado', date: '18 Set 2026', operator: 'EcoTrans Angola', value: '65.000 Kz', location: 'Talatona' },
  { id: 'KSC-2026-001251', material: 'Papel e Cartão', qty: '320 kg', status: 'A caminho', date: '20 Set 2026', operator: 'Luanda Circular', value: '48.000 Kz', location: 'Talatona' },
  { id: 'KSC-2026-001238', material: 'Metal', qty: '185 kg', status: 'Agendado', date: '22 Set 2026', operator: 'Verde Angola', value: '32.000 Kz', location: 'Viana' },
  { id: 'KSC-2026-001220', material: 'Vidro', qty: '95 kg', status: 'Pendente', date: '23 Set 2026', operator: '—', value: '—', location: 'Talatona' },
  { id: 'KSC-2026-001198', material: 'Plástico PET', qty: '512 kg', status: 'Processado', date: '10 Set 2026', operator: 'EcoTrans Angola', value: '74.000 Kz', location: 'Cacuaco' },
  { id: 'KSC-2026-001175', material: 'Eletrónicos', qty: '68 kg', status: 'Processado', date: '5 Set 2026', operator: 'Verde Angola', value: '95.000 Kz', location: 'Talatona' },
]

const statusConfig: Record<string, { color: string; icon: any }> = {
  'Processado': { color: 'text-primary bg-primary-light', icon: CheckCircle },
  'A caminho': { color: 'text-warning bg-warning-light', icon: Truck },
  'Agendado': { color: 'text-accent-blue bg-accent-blue-light', icon: Clock },
  'Pendente': { color: 'text-slate-600 bg-slate-100', icon: Package },
}

export default function GeneratorCollections() {
  return (
    <DashboardLayout navItems={generatorNavItems} role="generator" title="Recolhas" company="Nova Vida Supermercados">
      <div className="space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-display font-800 text-navy">Recolhas</h1>
            <p className="text-sm text-slate-500">Histórico e estado de todas as suas operações.</p>
          </div>
          <Link to="/generator/new-collection" className="flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-primary-dark transition shrink-0">
            <Plus size={16} /> Nova recolha
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Total este mês', value: '18', color: 'text-navy' },
            { label: 'Processadas', value: '14', color: 'text-primary' },
            { label: 'Em curso', value: '2', color: 'text-warning' },
            { label: 'Pendentes', value: '2', color: 'text-slate-600' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-xl border border-slate-100 p-4">
              <p className={`text-2xl font-display font-800 ${s.color}`}>{s.value}</p>
              <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
          <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100">
            <div className="relative flex-1 max-w-xs">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input placeholder="Pesquisar por ID ou material..." className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
            </div>
            <button className="flex items-center gap-1.5 text-sm text-slate-600 border border-slate-200 px-3 py-2 rounded-lg hover:bg-slate-50">
              <Filter size={14} /> Filtros
            </button>
            <select className="text-sm border border-slate-200 rounded-lg px-3 py-2 text-slate-600 bg-white focus:outline-none">
              <option>Todos os estados</option>
              <option>Processado</option>
              <option>A caminho</option>
              <option>Agendado</option>
              <option>Pendente</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  {['ID', 'Material', 'Quantidade', 'Local', 'Data', 'Operador', 'Valor', 'Estado', ''].map(h => (
                    <th key={h} className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wide px-5 py-3">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {collections.map(c => {
                  const cfg = statusConfig[c.status]
                  const Icon = cfg.icon
                  return (
                    <tr key={c.id} className="hover:bg-slate-50 transition">
                      <td className="px-5 py-4 font-mono text-xs text-slate-600">{c.id}</td>
                      <td className="px-5 py-4 font-medium text-navy">{c.material}</td>
                      <td className="px-5 py-4 text-slate-700">{c.qty}</td>
                      <td className="px-5 py-4 text-slate-600">{c.location}</td>
                      <td className="px-5 py-4 text-slate-500">{c.date}</td>
                      <td className="px-5 py-4 text-slate-700">{c.operator}</td>
                      <td className="px-5 py-4 font-medium text-navy">{c.value}</td>
                      <td className="px-5 py-4">
                        <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${cfg.color}`}>
                          <Icon size={11} />
                          {c.status}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary-light rounded-lg transition">
                          <Eye size={16} />
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between px-5 py-4 border-t border-slate-100">
            <p className="text-xs text-slate-500">Mostrando 6 de 143 resultados</p>
            <div className="flex gap-1">
              {[1, 2, 3, '...', 24].map((p, i) => (
                <button key={i} className={`w-8 h-8 text-xs rounded-lg transition ${p === 1 ? 'bg-primary text-white' : 'text-slate-600 hover:bg-slate-100'}`}>{p}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
