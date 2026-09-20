import { Search, Filter, Building2, FileText, CheckCircle, XCircle, AlertCircle, Eye } from 'lucide-react'
import DashboardLayout from '../../components/DashboardLayout'
import { adminNavItems } from './Dashboard'

const companies = [
  { name: 'EcoSul Reciclagem Lda', nif: '5417823001', type: 'Reciclador', province: 'Huíla', date: '19 Set 2026', docs: ['Alvará', 'NIF', 'Licença ambiental'], status: 'Pendente' },
  { name: 'Benfica Collect', nif: '5418234002', type: 'Operador', province: 'Luanda', date: '18 Set 2026', docs: ['Alvará', 'NIF'], status: 'Pendente' },
  { name: 'Hotel Marina Palace', nif: '5416745003', type: 'Gerador', province: 'Benguela', date: '18 Set 2026', docs: ['Alvará', 'NIF'], status: 'Pendente' },
  { name: 'Kwanza Metal SA', nif: '5415892004', type: 'Gerador', province: 'Luanda', date: '17 Set 2026', docs: ['Alvará', 'NIF', 'Licença industrial'], status: 'Em análise' },
  { name: 'Lobito Transport Lda', nif: '5414321005', type: 'Operador', province: 'Benguela', date: '16 Set 2026', docs: ['Alvará', 'NIF'], status: 'Correção solicitada' },
]

const statusConfig: Record<string, { color: string; icon: any }> = {
  'Pendente': { color: 'text-warning bg-warning-light', icon: AlertCircle },
  'Em análise': { color: 'text-accent-blue bg-accent-blue-light', icon: FileText },
  'Correção solicitada': { color: 'text-danger bg-danger-light', icon: XCircle },
  'Aprovada': { color: 'text-primary bg-primary-light', icon: CheckCircle },
}

const typeColor: Record<string, string> = {
  'Gerador': 'bg-slate-100 text-slate-700',
  'Operador': 'bg-accent-blue-light text-accent-blue',
  'Reciclador': 'bg-primary-light text-primary',
}

export default function AdminVerify() {
  return (
    <DashboardLayout navItems={adminNavItems} role="admin" title="Verificação" company="EKOLOLA Admin">
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-display font-800 text-navy">Verificação de empresas</h1>
            <p className="text-sm text-slate-500">Empresas pendentes de aprovação na plataforma.</p>
          </div>
          <span className="bg-warning text-navy text-sm font-bold px-3 py-1.5 rounded-lg">12 pendentes</span>
        </div>

        {/* Status tabs */}
        <div className="flex gap-2 flex-wrap">
          {[
            { label: 'Todas', count: 12 },
            { label: 'Pendentes', count: 7 },
            { label: 'Em análise', count: 3 },
            { label: 'Correção', count: 2 },
          ].map((tab, i) => (
            <button key={tab.label} className={`flex items-center gap-2 text-sm px-4 py-2.5 rounded-xl border transition ${i === 0 ? 'bg-navy text-white border-navy' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'}`}>
              {tab.label}
              <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${i === 0 ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'}`}>{tab.count}</span>
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="flex gap-3">
          <div className="relative flex-1 max-w-sm">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input placeholder="Pesquisar empresa ou NIF..." className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
          </div>
          <select className="text-sm border border-slate-200 rounded-xl px-3 py-2.5 bg-white text-slate-600 focus:outline-none">
            <option>Todos os tipos</option>
            <option>Gerador</option>
            <option>Operador</option>
            <option>Reciclador</option>
          </select>
        </div>

        {/* Company list */}
        <div className="space-y-3">
          {companies.map(c => {
            const cfg = statusConfig[c.status]
            const Icon = cfg.icon
            return (
              <div key={c.nif} className="bg-white rounded-2xl border border-slate-100 p-5">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
                    <Building2 size={22} className="text-slate-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h4 className="font-display font-700 text-navy">{c.name}</h4>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${typeColor[c.type]}`}>{c.type}</span>
                      <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-0.5 rounded-full ${cfg.color}`}>
                        <Icon size={11} /> {c.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-xs text-slate-500 mb-3">
                      <span>NIF: {c.nif}</span>
                      <span>Província: {c.province}</span>
                      <span>Registada em: {c.date}</span>
                    </div>
                    {/* Documents */}
                    <div className="flex flex-wrap gap-2">
                      {c.docs.map(doc => (
                        <span key={doc} className="inline-flex items-center gap-1 text-xs bg-slate-50 border border-slate-200 text-slate-600 px-2.5 py-1 rounded-lg">
                          <FileText size={11} className="text-primary" /> {doc}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 shrink-0">
                    <button className="flex items-center gap-1.5 text-sm border border-slate-200 text-slate-600 px-3 py-2 rounded-xl hover:bg-slate-50 transition">
                      <Eye size={14} /> Ver documentos
                    </button>
                    <button className="flex items-center gap-1.5 text-sm bg-primary hover:bg-primary-dark text-white px-3 py-2 rounded-xl transition font-medium">
                      <CheckCircle size={14} /> Aprovar
                    </button>
                    <button className="flex items-center gap-1.5 text-sm border border-warning/40 text-warning px-3 py-2 rounded-xl hover:bg-warning-light transition">
                      <AlertCircle size={14} /> Pedir correção
                    </button>
                    <button className="flex items-center gap-1.5 text-sm border border-danger/30 text-danger px-3 py-2 rounded-xl hover:bg-danger-light transition">
                      <XCircle size={14} /> Rejeitar
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </DashboardLayout>
  )
}
