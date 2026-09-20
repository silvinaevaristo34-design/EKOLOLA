import { Plus, Truck, Wrench, CheckCircle, AlertCircle } from 'lucide-react'
import DashboardLayout from '../../components/DashboardLayout'
import { operatorNavItems } from './Dashboard'

const vehicles = [
  { plate: 'LD-42-KA', type: 'Camião 5t', capacity: '5.000 kg', status: 'Em recolha', driver: 'João Manuel', year: '2020', fuel: 'Diesel', lastService: '15 Ago 2026' },
  { plate: 'LD-18-CX', type: 'Furgão 3t', capacity: '3.000 kg', status: 'Disponível', driver: 'Pedro Kuito', year: '2022', fuel: 'Diesel', lastService: '10 Set 2026' },
  { plate: 'LD-95-MB', type: 'Camião 8t', capacity: '8.000 kg', status: 'Em manutenção', driver: '—', year: '2018', fuel: 'Diesel', lastService: '01 Set 2026' },
  { plate: 'LD-07-TK', type: 'Furgão 1.5t', capacity: '1.500 kg', status: 'Disponível', driver: 'Carlos Benguela', year: '2023', fuel: 'Gasóleo', lastService: '18 Set 2026' },
]

const statusConfig: Record<string, { color: string; icon: any; bg: string }> = {
  'Em recolha': { color: 'text-warning', icon: Truck, bg: 'bg-warning-light' },
  'Disponível': { color: 'text-primary', icon: CheckCircle, bg: 'bg-primary-light' },
  'Em manutenção': { color: 'text-danger', icon: Wrench, bg: 'bg-danger-light' },
}

export default function OperatorVehicles() {
  return (
    <DashboardLayout navItems={operatorNavItems} role="operator" title="Veículos" company="EcoTrans Angola">
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-display font-800 text-navy">Meus veículos</h1>
            <p className="text-sm text-slate-500">Gestão da frota de recolha.</p>
          </div>
          <button className="flex items-center gap-2 bg-accent-blue hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition">
            <Plus size={16} /> Adicionar veículo
          </button>
        </div>

        {/* Fleet summary */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Total', value: '4', color: 'text-navy' },
            { label: 'Disponíveis', value: '2', color: 'text-primary' },
            { label: 'Em serviço', value: '1', color: 'text-warning' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-xl border border-slate-100 p-4 text-center">
              <p className={`text-2xl font-display font-800 ${s.color}`}>{s.value}</p>
              <p className="text-xs text-slate-500 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {vehicles.map(v => {
            const cfg = statusConfig[v.status]
            const Icon = cfg.icon
            return (
              <div key={v.plate} className="bg-white rounded-2xl border border-slate-100 p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-navy rounded-xl flex items-center justify-center">
                      <Truck size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-mono text-sm font-bold text-navy">{v.plate}</p>
                      <p className="text-xs text-slate-500">{v.type}</p>
                    </div>
                  </div>
                  <span className={`flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${cfg.bg} ${cfg.color}`}>
                    <Icon size={12} /> {v.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { l: 'Capacidade', v: v.capacity },
                    { l: 'Ano', v: v.year },
                    { l: 'Combustível', v: v.fuel },
                    { l: 'Último serviço', v: v.lastService },
                    { l: 'Motorista', v: v.driver },
                  ].map(item => (
                    <div key={item.l}>
                      <p className="text-slate-400">{item.l}</p>
                      <p className="font-medium text-navy">{item.v}</p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 mt-4 pt-4 border-t border-slate-100">
                  <button className="flex-1 text-xs font-medium border border-slate-200 py-2 rounded-lg hover:bg-slate-50 transition text-slate-600">Editar</button>
                  <button className="flex-1 text-xs font-medium border border-slate-200 py-2 rounded-lg hover:bg-slate-50 transition text-slate-600">Histórico</button>
                  {v.status !== 'Em manutenção' && (
                    <button className="flex-1 text-xs font-medium bg-accent-blue text-white py-2 rounded-lg hover:bg-blue-700 transition">Atribuir</button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </DashboardLayout>
  )
}
