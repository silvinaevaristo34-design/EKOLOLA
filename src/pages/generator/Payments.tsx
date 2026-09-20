import { CreditCard, TrendingDown, TrendingUp, Clock, CheckCircle, AlertCircle, Download } from 'lucide-react'
import DashboardLayout from '../../components/DashboardLayout'
import { generatorNavItems } from './Dashboard'

const transactions = [
  { date: '20 Set 2026', desc: 'Recolha #KSC-001251 — Papel/Cartão', value: -48000, status: 'Pendente' },
  { date: '18 Set 2026', desc: 'Recolha #KSC-001284 — Plástico PET', value: -65000, status: 'Pago' },
  { date: '10 Set 2026', desc: 'Recolha #KSC-001198 — Plástico PET', value: -74000, status: 'Pago' },
  { date: '05 Set 2026', desc: 'Recolha #KSC-001175 — Eletrónicos', value: -95000, status: 'Pago' },
  { date: '28 Ago 2026', desc: 'Recolha #KSC-001142 — Metal', value: -32000, status: 'Pago' },
  { date: '20 Ago 2026', desc: 'Crédito — Alumínio vendido ao Mercado Circular', value: 15000, status: 'Recebido' },
]

const statusConfig: Record<string, { color: string; icon: any }> = {
  'Pago': { color: 'text-primary bg-primary-light', icon: CheckCircle },
  'Pendente': { color: 'text-warning bg-warning-light', icon: Clock },
  'Recebido': { color: 'text-accent-blue bg-accent-blue-light', icon: TrendingUp },
  'Processando': { color: 'text-slate-600 bg-slate-100', icon: Clock },
}

export default function GeneratorPayments() {
  return (
    <DashboardLayout navItems={generatorNavItems} role="generator" title="Pagamentos" company="Nova Vida Supermercados">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-display font-800 text-navy">Pagamentos</h1>
          <p className="text-sm text-slate-500">Histórico financeiro das suas operações de recolha.</p>
        </div>

        {/* Balance cards */}
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-navy to-navy-800 rounded-2xl p-6 text-white">
            <div className="flex items-center gap-2 mb-3">
              <CreditCard size={18} className="text-slate-400" />
              <p className="text-sm text-slate-400">Saldo disponível</p>
            </div>
            <p className="text-3xl font-display font-800">125.000 Kz</p>
            <p className="text-xs text-slate-400 mt-1">Última atualização: hoje</p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-100 p-6">
            <div className="flex items-center gap-2 mb-3">
              <TrendingDown size={18} className="text-danger" />
              <p className="text-sm text-slate-500">Despesas este mês</p>
            </div>
            <p className="text-3xl font-display font-800 text-navy">282.000 Kz</p>
            <p className="text-xs text-slate-400 mt-1">5 operações pagas</p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-100 p-6">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle size={18} className="text-warning" />
              <p className="text-sm text-slate-500">Pagamentos pendentes</p>
            </div>
            <p className="text-3xl font-display font-800 text-navy">48.000 Kz</p>
            <p className="text-xs text-slate-400 mt-1">1 fatura em aberto</p>
          </div>
        </div>

        {/* Transactions */}
        <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
            <h3 className="font-display font-700 text-navy">Histórico de transações</h3>
            <button className="flex items-center gap-1.5 text-sm text-slate-600 border border-slate-200 px-3 py-2 rounded-lg hover:bg-slate-50 transition">
              <Download size={14} /> Exportar
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  {['Data', 'Descrição', 'Valor', 'Estado'].map(h => (
                    <th key={h} className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wide px-6 py-3">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {transactions.map((t, i) => {
                  const cfg = statusConfig[t.status]
                  const Icon = cfg.icon
                  return (
                    <tr key={i} className="hover:bg-slate-50 transition">
                      <td className="px-6 py-4 text-slate-500 text-xs whitespace-nowrap">{t.date}</td>
                      <td className="px-6 py-4 text-navy font-medium max-w-xs">{t.desc}</td>
                      <td className={`px-6 py-4 font-bold font-display ${t.value < 0 ? 'text-danger' : 'text-primary'}`}>
                        {t.value < 0 ? '-' : '+'}{Math.abs(t.value).toLocaleString()} Kz
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${cfg.color}`}>
                          <Icon size={11} />
                          {t.status}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pending invoice */}
        <div className="bg-warning-light border border-warning/30 rounded-2xl p-5 flex items-start gap-4">
          <AlertCircle size={20} className="text-warning shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-semibold text-navy text-sm">Fatura pendente</p>
            <p className="text-xs text-slate-600 mt-0.5">Recolha #KSC-001251 — 48.000 Kz · Vence em 25/09/2026</p>
          </div>
          <button className="shrink-0 bg-warning text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
            Pagar agora
          </button>
        </div>
      </div>
    </DashboardLayout>
  )
}
