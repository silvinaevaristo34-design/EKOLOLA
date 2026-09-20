import { Download, FileText, BarChart3, Leaf, CreditCard, Filter } from 'lucide-react'
import DashboardLayout from '../../components/DashboardLayout'
import { generatorNavItems } from './Dashboard'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'

const monthData = [
  { month: 'Jan', encaminhado: 1200, gerado: 1500 },
  { month: 'Fev', encaminhado: 1800, gerado: 2100 },
  { month: 'Mar', encaminhado: 1600, gerado: 1900 },
  { month: 'Abr', encaminhado: 2200, gerado: 2600 },
  { month: 'Mai', encaminhado: 1950, gerado: 2200 },
  { month: 'Jun', encaminhado: 2800, gerado: 3100 },
  { month: 'Jul', encaminhado: 2400, gerado: 2700 },
  { month: 'Ago', encaminhado: 3100, gerado: 3400 },
  { month: 'Set', encaminhado: 1980, gerado: 2450 },
]

const reports = [
  { title: 'Relatório de resíduos', icon: BarChart3, color: 'text-accent-blue bg-accent-blue-light', desc: 'Volumes por material, local e período.' },
  { title: 'Relatório de reciclagem', icon: Recycle2, color: 'text-primary bg-primary-light', desc: 'Materiais encaminhados e destinos.' },
  { title: 'Relatório de impacto ambiental', icon: Leaf, color: 'text-primary-dark bg-primary-light', desc: 'Estimativas de CO₂ evitado e recursos poupados.' },
  { title: 'Relatório financeiro', icon: CreditCard, color: 'text-warning bg-warning-light', desc: 'Custos de recolha e pagamentos realizados.' },
  { title: 'Relatório de conformidade', icon: FileText, color: 'text-slate-600 bg-slate-100', desc: 'Documentação e certificados para auditoria.' },
]

function Recycle2({ size, className }: { size: number; className: string }) {
  return <BarChart3 size={size} className={className} />
}

export default function GeneratorReports() {
  return (
    <DashboardLayout navItems={generatorNavItems} role="generator" title="Relatórios" company="Nova Vida Supermercados">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-display font-800 text-navy">Relatórios</h1>
            <p className="text-sm text-slate-500">Análise completa das suas operações e impacto.</p>
          </div>
          <div className="flex gap-2">
            <select className="text-sm border border-slate-200 rounded-xl px-3 py-2.5 bg-white text-slate-600 focus:outline-none">
              <option>Setembro 2026</option>
              <option>Agosto 2026</option>
              <option>Julho 2026</option>
            </select>
            <button className="flex items-center gap-1.5 text-sm border border-slate-200 rounded-xl px-3 py-2.5 hover:bg-slate-50 transition text-slate-600">
              <Filter size={14} /> Filtros
            </button>
          </div>
        </div>

        {/* Report cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reports.map(r => (
            <div key={r.title} className="bg-white rounded-2xl border border-slate-100 p-5 hover:shadow-sm transition group cursor-pointer">
              <div className={`w-10 h-10 ${r.color} rounded-xl flex items-center justify-center mb-4`}>
                <r.icon size={20} className={r.color.split(' ')[0]} />
              </div>
              <h4 className="font-display font-700 text-navy mb-1 text-sm">{r.title}</h4>
              <p className="text-xs text-slate-500 mb-4">{r.desc}</p>
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-1.5 text-xs font-medium bg-navy text-white py-2 rounded-lg hover:bg-navy-800 transition">
                  <Download size={12} /> PDF
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 text-xs font-medium border border-slate-200 text-slate-600 py-2 rounded-lg hover:bg-slate-50 transition">
                  <Download size={12} /> Excel
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="bg-white rounded-2xl border border-slate-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-display font-700 text-navy">Evolução mensal — Resíduos gerados vs. encaminhados (kg)</h3>
              <p className="text-xs text-slate-400 mt-0.5">Janeiro a Setembro 2026</p>
            </div>
            <div className="flex gap-4 text-xs">
              <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-primary" />Encaminhado</div>
              <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-slate-200" />Gerado</div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={monthData} barSize={14} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: '#94A3B8' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: 10, border: '1px solid #E2E8F0', fontSize: 12 }} />
              <Bar dataKey="gerado" fill="#E2E8F0" radius={[4, 4, 0, 0]} />
              <Bar dataKey="encaminhado" fill="#16A34A" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Summary table */}
        <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100">
            <h3 className="font-display font-700 text-navy">Resumo por material — Setembro 2026</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  {['Material', 'Gerado (kg)', 'Encaminhado (kg)', 'Taxa', 'Valor pago', 'Destino'].map(h => (
                    <th key={h} className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wide px-6 py-3">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {[
                  { mat: 'Plástico PET', gerado: 860, enc: 820, taxa: '95%', valor: '118.000 Kz', dest: 'Verde Angola Reciclagem' },
                  { mat: 'Papel/Cartão', gerado: 720, enc: 680, taxa: '94%', valor: '48.000 Kz', dest: 'Luanda Papel SA' },
                  { mat: 'Metal', gerado: 450, enc: 390, taxa: '87%', valor: '32.000 Kz', dest: 'MetalRecicla Angola' },
                  { mat: 'Vidro', gerado: 280, enc: 220, taxa: '79%', valor: '15.000 Kz', dest: 'Vidro & Futuro Lda' },
                  { mat: 'Eletrónicos', gerado: 140, enc: 140, taxa: '100%', valor: '95.000 Kz', dest: 'EcoRec Electro' },
                ].map(row => (
                  <tr key={row.mat} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-navy">{row.mat}</td>
                    <td className="px-6 py-4 text-slate-700">{row.gerado}</td>
                    <td className="px-6 py-4 text-slate-700">{row.enc}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${parseInt(row.taxa) >= 90 ? 'bg-primary-light text-primary' : parseInt(row.taxa) >= 80 ? 'bg-warning-light text-warning' : 'bg-danger-light text-danger'}`}>
                        {row.taxa}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium text-navy">{row.valor}</td>
                    <td className="px-6 py-4 text-slate-600 text-xs">{row.dest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
