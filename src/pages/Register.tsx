import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft, Factory, Truck, Recycle, CheckCircle, Upload } from 'lucide-react'
import Logo from '../components/Logo'

const provinces = ['Luanda', 'Benguela', 'Huíla', 'Huambo', 'Cabinda', 'Namibe', 'Malanje', 'Lunda Norte', 'Lunda Sul', 'Moxico']

type Role = 'generator' | 'operator' | 'recycler' | null

export default function Register() {
  const [step, setStep] = useState(1)
  const [role, setRole] = useState<Role>(null)
  const [form, setForm] = useState({ company: '', nif: '', email: '', phone: '', province: '', municipality: '', address: '' })
  const navigate = useNavigate()

  const roles = [
    { id: 'generator', icon: Factory, title: 'Gerador de resíduos', desc: 'A minha empresa gera resíduos e precisa de uma solução de recolha organizada.' },
    { id: 'operator', icon: Truck, title: 'Empresa de recolha', desc: 'Sou uma empresa especializada em recolha e transporte de resíduos.' },
    { id: 'recycler', icon: Recycle, title: 'Reciclador', desc: 'Recebo e processo materiais recicláveis para valorização.' },
  ]

  const progress = (step / 5) * 100

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between">
        <Logo />
        <Link to="/login" className="text-sm text-slate-600 hover:text-navy">Já tenho conta</Link>
      </div>

      <div className="flex-1 flex flex-col items-center px-4 py-10">
        <div className="w-full max-w-2xl">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-xs text-slate-500 mb-2">
              <span>Etapa {step} de 5</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
            {/* Step 1 — Role selection */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-display font-800 text-navy mb-1">Qual é o seu perfil?</h2>
                <p className="text-slate-500 text-sm mb-8">Selecione o tipo de empresa que melhor descreve a sua organização.</p>
                <div className="space-y-3">
                  {roles.map(r => (
                    <button
                      key={r.id}
                      onClick={() => setRole(r.id as Role)}
                      className={`w-full flex items-start gap-4 p-5 rounded-xl border-2 text-left transition-all ${
                        role === r.id ? 'border-primary bg-primary-light' : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${role === r.id ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}>
                        <r.icon size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-navy text-sm">{r.title}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{r.desc}</p>
                      </div>
                      {role === r.id && <CheckCircle size={20} className="text-primary ml-auto shrink-0 mt-0.5" />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2 — Company data */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-display font-800 text-navy mb-1">Dados da empresa</h2>
                <p className="text-slate-500 text-sm mb-8">Preencha os dados da sua organização.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Nome da empresa *</label>
                    <input type="text" value={form.company} onChange={e => setForm({...form, company: e.target.value})} placeholder="Ex: Nova Vida Supermercados" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">NIF *</label>
                    <input type="text" value={form.nif} onChange={e => setForm({...form, nif: e.target.value})} placeholder="000000000" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Email *</label>
                    <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="geral@empresa.ao" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Telefone *</label>
                    <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+244 9XX XXX XXX" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Província *</label>
                    <select value={form.province} onChange={e => setForm({...form, province: e.target.value})} className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white">
                      <option value="">Selecionar...</option>
                      {provinces.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Município *</label>
                    <input type="text" value={form.municipality} onChange={e => setForm({...form, municipality: e.target.value})} placeholder="Ex: Talatona" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Endereço *</label>
                    <input type="text" value={form.address} onChange={e => setForm({...form, address: e.target.value})} placeholder="Rua, número, bairro" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3 — Specific data */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-display font-800 text-navy mb-1">Dados específicos</h2>
                <p className="text-slate-500 text-sm mb-8">Informações específicas para o seu perfil de {role === 'generator' ? 'gerador' : role === 'operator' ? 'operador' : 'reciclador'}.</p>
                {role === 'generator' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Tipos de resíduos que gera</label>
                      <div className="flex flex-wrap gap-2">
                        {['Plástico', 'Papel/Cartão', 'Vidro', 'Metal', 'Eletrónicos', 'Orgânico', 'Industrial', 'Construção'].map(t => (
                          <button key={t} className="px-3 py-1.5 text-sm border border-slate-200 rounded-lg hover:border-primary hover:text-primary hover:bg-primary-light transition">{t}</button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Volume médio mensal estimado (kg)</label>
                      <input type="number" placeholder="Ex: 1500" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Número de locais de produção de resíduos</label>
                      <input type="number" placeholder="Ex: 3" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                    </div>
                  </div>
                )}
                {role === 'operator' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Número de veículos</label>
                      <input type="number" placeholder="Ex: 5" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Tipos de resíduos que recolhe</label>
                      <div className="flex flex-wrap gap-2">
                        {['Plástico', 'Papel/Cartão', 'Vidro', 'Metal', 'Eletrónicos', 'Orgânico', 'Industrial'].map(t => (
                          <button key={t} className="px-3 py-1.5 text-sm border border-slate-200 rounded-lg hover:border-primary hover:text-primary hover:bg-primary-light transition">{t}</button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Áreas de atuação</label>
                      <div className="flex flex-wrap gap-2">
                        {['Luanda', 'Benguela', 'Huíla', 'Huambo'].map(t => (
                          <button key={t} className="px-3 py-1.5 text-sm border border-slate-200 rounded-lg hover:border-primary hover:text-primary hover:bg-primary-light transition">{t}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {role === 'recycler' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Capacidade mensal de processamento (toneladas)</label>
                      <input type="number" placeholder="Ex: 50" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Materiais que processa</label>
                      <div className="flex flex-wrap gap-2">
                        {['Plástico PET', 'PEAD', 'Papel', 'Cartão', 'Vidro', 'Alumínio', 'Aço', 'REEE'].map(t => (
                          <button key={t} className="px-3 py-1.5 text-sm border border-slate-200 rounded-lg hover:border-primary hover:text-primary hover:bg-primary-light transition">{t}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 4 — Documents */}
            {step === 4 && (
              <div>
                <h2 className="text-2xl font-display font-800 text-navy mb-1">Documentos</h2>
                <p className="text-slate-500 text-sm mb-8">Envie os documentos necessários para verificação da sua empresa.</p>
                <div className="space-y-4">
                  {[
                    { label: 'Alvará / Licença comercial', required: true },
                    { label: 'Cartão de contribuinte (NIF)', required: true },
                    { label: 'Licença ambiental', required: role !== 'generator' },
                    { label: 'Outros documentos', required: false },
                  ].map(doc => (
                    <div key={doc.label} className="border-2 border-dashed border-slate-200 rounded-xl p-5 hover:border-primary/40 transition cursor-pointer group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-100 group-hover:bg-primary-light rounded-lg flex items-center justify-center transition">
                          <Upload size={18} className="text-slate-400 group-hover:text-primary transition" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-700">{doc.label} {doc.required && <span className="text-danger">*</span>}</p>
                          <p className="text-xs text-slate-400">PDF, JPG ou PNG até 10MB</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5 — Success */}
            {step === 5 && (
              <div className="text-center py-6">
                <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-primary" />
                </div>
                <h2 className="text-2xl font-display font-800 text-navy mb-2">Conta em análise</h2>
                <p className="text-slate-600 mb-8 text-sm max-w-sm mx-auto">Os seus documentos foram enviados e estão a ser analisados pela nossa equipa.</p>

                <div className="flex items-center gap-3 justify-center mb-8">
                  {[
                    { label: 'Documentos enviados', done: true },
                    { label: 'Em análise', active: true },
                    { label: 'Verificada', done: false },
                  ].map((s, i) => (
                    <div key={s.label} className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${s.done ? 'bg-primary text-white' : s.active ? 'bg-warning text-navy' : 'bg-slate-200 text-slate-400'}`}>
                        {s.done ? '✓' : i + 1}
                      </div>
                      <span className="text-xs text-slate-600 hidden sm:block">{s.label}</span>
                      {i < 2 && <div className="w-6 h-px bg-slate-200 hidden sm:block" />}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-500 mb-6">Receberá uma notificação por email em 1-2 dias úteis.</p>
                <Link to="/login" className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-dark transition">
                  Ir para o login <ArrowRight size={16} />
                </Link>
              </div>
            )}

            {/* Navigation */}
            {step < 5 && (
              <div className="flex justify-between mt-8 pt-6 border-t border-slate-100">
                {step > 1 ? (
                  <button onClick={() => setStep(step - 1)} className="flex items-center gap-2 text-sm text-slate-600 hover:text-navy font-medium">
                    <ArrowLeft size={16} /> Anterior
                  </button>
                ) : (
                  <Link to="/login" className="text-sm text-slate-500 hover:text-slate-700">Cancelar</Link>
                )}
                <button
                  onClick={() => step === 4 ? setStep(5) : setStep(step + 1)}
                  disabled={step === 1 && !role}
                  className="flex items-center gap-2 bg-primary hover:bg-primary-dark disabled:bg-slate-200 disabled:text-slate-400 text-white font-semibold px-6 py-2.5 rounded-xl transition text-sm"
                >
                  {step === 4 ? 'Enviar documentos' : 'Continuar'} <ArrowRight size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
