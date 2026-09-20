import { Phone, MapPin, Truck, Clock, CheckCircle, Package, Recycle, FileText } from 'lucide-react'
import DashboardLayout from '../../components/DashboardLayout'
import { generatorNavItems } from './Dashboard'

const statusSteps = [
  { label: 'Pedido criado', done: true, time: '08:15' },
  { label: 'Operador selecionado', done: true, time: '08:32' },
  { label: 'Agendado', done: true, time: '09:00' },
  { label: 'A caminho', done: true, active: true, time: '09:45' },
  { label: 'Recolhido', done: false, time: '—' },
  { label: 'Entregue ao reciclador', done: false, time: '—' },
  { label: 'Processado', done: false, time: '—' },
]

export default function GeneratorTracking() {
  return (
    <DashboardLayout navItems={generatorNavItems} role="generator" title="Rastreamento" company="Nova Vida Supermercados">
      <div className="space-y-5">
        <div>
          <h1 className="text-2xl font-display font-800 text-navy">Rastreamento em tempo real</h1>
          <p className="text-sm text-slate-500">Acompanhe a sua recolha ao vivo.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {/* Map placeholder */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 overflow-hidden" style={{ minHeight: 400 }}>
            <div className="relative w-full h-full min-h-96 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
              {/* Simplified map visualization */}
              <div className="absolute inset-0 p-8">
                <svg viewBox="0 0 600 400" className="w-full h-full opacity-20">
                  {/* Road lines */}
                  <line x1="0" y1="200" x2="600" y2="200" stroke="#94A3B8" strokeWidth="3" strokeDasharray="8,4"/>
                  <line x1="300" y1="0" x2="300" y2="400" stroke="#94A3B8" strokeWidth="2" strokeDasharray="8,4"/>
                  <line x1="0" y1="100" x2="600" y2="300" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="6,3"/>
                  <line x1="0" y1="300" x2="600" y2="100" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="6,3"/>
                  <rect x="50" y="80" width="60" height="40" rx="4" fill="#E2E8F0"/>
                  <rect x="200" y="280" width="80" height="50" rx="4" fill="#E2E8F0"/>
                  <rect x="400" y="100" width="70" height="45" rx="4" fill="#E2E8F0"/>
                  <rect x="450" y="260" width="60" height="40" rx="4" fill="#E2E8F0"/>
                </svg>

                {/* Route line */}
                <svg viewBox="0 0 600 400" className="absolute inset-0 w-full h-full">
                  <polyline points="100,320 180,250 280,200 380,160 480,130" stroke="#16A34A" strokeWidth="3" fill="none" strokeDasharray="6,3" opacity="0.8"/>
                </svg>

                {/* Markers */}
                <div className="absolute" style={{ left: '15%', top: '72%' }}>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center shadow-lg ring-4 ring-white">
                      <Package size={18} className="text-white" />
                    </div>
                    <div className="mt-1 bg-navy text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap">
                      📍 Nova Vida — Talatona
                    </div>
                  </div>
                </div>

                <div className="absolute animate-bounce" style={{ left: '58%', top: '35%' }}>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-warning rounded-full flex items-center justify-center shadow-lg ring-4 ring-white">
                      <Truck size={18} className="text-white" />
                    </div>
                    <div className="mt-1 bg-warning text-navy text-xs px-2 py-1 rounded-lg font-medium whitespace-nowrap">
                      🚛 Camião KSC-04
                    </div>
                  </div>
                </div>

                <div className="absolute" style={{ left: '76%', top: '24%' }}>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg ring-4 ring-white">
                      <Recycle size={18} className="text-white" />
                    </div>
                    <div className="mt-1 bg-primary text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap">
                      ♻️ Verde Angola Reciclagem
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-slate-400 text-sm z-10 bg-white/80 px-3 py-1 rounded-lg">Mapa em tempo real (demo)</p>
            </div>
          </div>

          {/* Side panel */}
          <div className="space-y-4">
            {/* Collection info */}
            <div className="bg-white rounded-2xl border border-slate-100 p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-slate-400 font-medium mb-0.5">RECOLHA</p>
                  <p className="font-mono text-sm font-bold text-navy">KSC-2026-001251</p>
                </div>
                <span className="text-xs font-semibold bg-warning-light text-warning px-3 py-1.5 rounded-full">A caminho</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl mb-4">
                <div className="w-10 h-10 bg-warning rounded-full flex items-center justify-center text-white font-bold shrink-0">J</div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-navy">João Manuel</p>
                  <p className="text-xs text-slate-500">Camião KSC-04 · 5 ton</p>
                </div>
                <a href="tel:+244912345678" className="p-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition">
                  <Phone size={16} />
                </a>
              </div>

              <div className="space-y-2.5">
                {[
                  { icon: Clock, label: 'Chegada estimada', value: '18 minutos', color: 'text-warning' },
                  { icon: MapPin, label: 'Distância restante', value: '4.2 km', color: 'text-accent-blue' },
                  { icon: Package, label: 'Material', value: 'Papel e Cartão', color: 'text-slate-600' },
                  { icon: Package, label: 'Peso estimado', value: '320 kg', color: 'text-slate-600' },
                ].map(item => (
                  <div key={item.label} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-slate-500">
                      <item.icon size={14} />
                      {item.label}
                    </div>
                    <span className={`font-semibold ${item.color}`}>{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 mt-4">
                <button className="flex-1 flex items-center justify-center gap-1.5 text-sm font-medium border border-slate-200 py-2.5 rounded-xl hover:bg-slate-50 transition text-slate-600">
                  <Phone size={14} /> Contactar
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 text-sm font-medium bg-primary text-white py-2.5 rounded-xl hover:bg-primary-dark transition">
                  <FileText size={14} /> Detalhes
                </button>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-2xl border border-slate-100 p-5">
              <h4 className="font-display font-700 text-navy text-sm mb-4">Estado da operação</h4>
              <div className="space-y-0">
                {statusSteps.map((s, i) => (
                  <div key={s.label} className="flex items-start gap-3">
                    <div className="flex flex-col items-center">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${s.active ? 'bg-warning ring-4 ring-warning/20' : s.done ? 'bg-primary' : 'bg-slate-200'}`}>
                        {s.done && !s.active ? <CheckCircle size={12} className="text-white" /> : s.active ? <div className="w-2 h-2 bg-white rounded-full animate-pulse" /> : <div className="w-2 h-2 bg-slate-400 rounded-full" />}
                      </div>
                      {i < statusSteps.length - 1 && <div className={`w-0.5 h-6 mt-1 ${s.done ? 'bg-primary' : 'bg-slate-200'}`} />}
                    </div>
                    <div className="pb-4">
                      <p className={`text-xs font-medium ${s.active ? 'text-warning' : s.done ? 'text-navy' : 'text-slate-400'}`}>{s.label}</p>
                      <p className="text-xs text-slate-400">{s.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
