import { Leaf, Recycle, Droplets, Zap, Globe, Info } from 'lucide-react'
import DashboardLayout from '../../components/DashboardLayout'
import { generatorNavItems } from './Dashboard'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const lineData = [
  { month: 'Jan', co2: 280 }, { month: 'Fev', co2: 420 }, { month: 'Mar', co2: 380 },
  { month: 'Abr', co2: 520 }, { month: 'Mai', co2: 460 }, { month: 'Jun', co2: 680 },
  { month: 'Jul', co2: 560 }, { month: 'Ago', co2: 720 }, { month: 'Set', co2: 420 },
]

export default function GeneratorImpact() {
  return (
    <DashboardLayout navItems={generatorNavItems} role="generator" title="Impacto" company="Nova Vida Supermercados">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-display font-800 text-navy">O seu impacto ambiental</h1>
          <p className="text-sm text-slate-500">Estimativas baseadas nas suas operações de recolha. Valores demonstrativos.</p>
        </div>

        {/* Disclaimer */}
        <div className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
          <Info size={16} className="text-slate-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-600 leading-relaxed">
            Os indicadores ambientais apresentados são <strong>estimativas calculadas</strong> com base em fatores de emissão de referência (IPCC, EPA) e nos dados registados na plataforma. Estes valores não constituem uma certificação ambiental formal. Para fins de relatório de sustentabilidade corporativa, recomendamos uma auditoria independente.
          </p>
        </div>

        {/* Hero metric */}
        <div className="bg-gradient-to-r from-navy to-primary-dark rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Globe size={32} className="text-white" />
          </div>
          <p className="text-6xl font-display font-800 text-white mb-2">82%</p>
          <p className="text-primary-light text-lg font-semibold">dos seus resíduos foram encaminhados para valorização este ano.</p>
          <p className="text-slate-400 text-sm mt-2">1.980 kg de 2.450 kg gerados foram desviados de aterros</p>
        </div>

        {/* Impact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Recycle, value: '1.980 kg', label: 'Resíduos desviados de aterros', color: 'text-primary', bg: 'bg-primary-light', note: 'total acumulado 2026' },
            { icon: Leaf, value: '3.420 kg CO₂e', label: 'Emissões estimadas evitadas', color: 'text-primary-dark', bg: 'bg-primary-light', note: 'estimativa calculada*' },
            { icon: Droplets, value: '2.840 L', label: 'Água potencialmente poupada', color: 'text-accent-blue', bg: 'bg-accent-blue-light', note: 'estimativa calculada*' },
            { icon: Zap, value: '4.120 kWh', label: 'Energia potencialmente poupada', color: 'text-warning', bg: 'bg-warning-light', note: 'estimativa calculada*' },
          ].map(item => (
            <div key={item.label} className={`${item.bg} rounded-2xl p-5`}>
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                <item.icon size={20} className={item.color} />
              </div>
              <p className={`text-2xl font-display font-800 text-navy`}>{item.value}</p>
              <p className="text-xs text-slate-700 mt-1">{item.label}</p>
              <p className="text-xs text-slate-400 mt-0.5">{item.note}</p>
            </div>
          ))}
        </div>

        {/* Equivalences */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6">
          <h3 className="font-display font-700 text-navy mb-5">Equivalências ilustrativas*</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { emoji: '🌳', value: '12 árvores', desc: 'equivalentes em carbono absorvido por um ano' },
              { emoji: '🚗', value: '14.250 km', desc: 'de viagem de carro evitados em emissões' },
              { emoji: '💡', value: '4.120 horas', desc: 'de iluminação LED poupadas em energia' },
            ].map(e => (
              <div key={e.value} className="text-center p-4 bg-slate-50 rounded-xl">
                <span className="text-4xl">{e.emoji}</span>
                <p className="text-xl font-display font-800 text-navy mt-2">{e.value}</p>
                <p className="text-xs text-slate-500 mt-1">{e.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-4">* Equivalências são ilustrativas e baseadas em fatores médios de referência. Não representam medições diretas.</p>
        </div>

        {/* CO2 evolution */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6">
          <h3 className="font-display font-700 text-navy mb-5">Evolução do CO₂e estimado evitado (kg/mês)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: 10, border: '1px solid #E2E8F0', fontSize: 12 }} />
              <Line type="monotone" dataKey="co2" stroke="#16A34A" strokeWidth={2.5} dot={{ fill: '#16A34A', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Material breakdown */}
        <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100">
            <h3 className="font-display font-700 text-navy">Impacto por material</h3>
          </div>
          <div className="divide-y divide-slate-50">
            {[
              { mat: 'Plástico PET', kg: 820, co2: '1.640', water: '820 L', icon: '🧴' },
              { mat: 'Papel/Cartão', kg: 680, co2: '952', water: '680 L', icon: '📦' },
              { mat: 'Metal', kg: 390, co2: '624', water: '1.170 L', icon: '🔩' },
              { mat: 'Vidro', kg: 220, co2: '88', water: '88 L', icon: '🍶' },
              { mat: 'Eletrónicos', kg: 140, co2: '560', water: '280 L', icon: '💻' },
            ].map(row => (
              <div key={row.mat} className="flex items-center gap-4 px-6 py-4">
                <span className="text-2xl w-8 shrink-0">{row.icon}</span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-navy">{row.mat}</p>
                  <p className="text-xs text-slate-500">{row.kg} kg valorizados</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-primary">{row.co2} kg CO₂e</p>
                  <p className="text-xs text-slate-400">evitados*</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
