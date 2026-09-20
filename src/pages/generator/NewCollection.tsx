import { useState } from 'react'
import { ArrowLeft, ArrowRight, MapPin, Package, Scale, CalendarDays, FileText, CheckCircle, Truck, Star } from 'lucide-react'
import DashboardLayout from '../../components/DashboardLayout'
import { generatorNavItems } from './Dashboard'
import { Link, useNavigate } from 'react-router-dom'

const materials = [
  { id: 'plastic', label: 'Plástico PET', emoji: '🧴', color: 'border-blue-300 bg-blue-50' },
  { id: 'paper', label: 'Papel/Cartão', emoji: '📦', color: 'border-yellow-300 bg-yellow-50' },
  { id: 'glass', label: 'Vidro', emoji: '🍶', color: 'border-cyan-300 bg-cyan-50' },
  { id: 'metal', label: 'Metal', emoji: '🔩', color: 'border-slate-300 bg-slate-50' },
  { id: 'electronics', label: 'Eletrónicos', emoji: '💻', color: 'border-purple-300 bg-purple-50' },
  { id: 'organic', label: 'Orgânico', emoji: '🌿', color: 'border-green-300 bg-green-50' },
  { id: 'industrial', label: 'Industrial', emoji: '🏭', color: 'border-orange-300 bg-orange-50' },
  { id: 'other', label: 'Outro', emoji: '♻️', color: 'border-slate-200 bg-slate-50' },
]

const operators = [
  { name: 'EcoTrans Angola', verified: true, distance: '4.2 km', capacity: '5 ton', vehicle: 'Camião 5t', rating: 4.9, reviews: 142, price: '65.000 Kz', eta: '35 min' },
  { name: 'Luanda Circular Lda', verified: true, distance: '7.1 km', capacity: '3 ton', vehicle: 'Furgão 3t', rating: 4.7, reviews: 89, price: '48.000 Kz', eta: '52 min' },
  { name: 'Verde Angola Transport', verified: true, distance: '11 km', capacity: '8 ton', vehicle: 'Camião 8t', rating: 4.5, reviews: 64, price: '72.000 Kz', eta: '1h 10min' },
]

const steps = [
  { id: 1, label: 'Local', icon: MapPin },
  { id: 2, label: 'Resíduo', icon: Package },
  { id: 3, label: 'Quantidade', icon: Scale },
  { id: 4, label: 'Data', icon: CalendarDays },
  { id: 5, label: 'Notas', icon: FileText },
  { id: 6, label: 'Confirmar', icon: CheckCircle },
]

export default function NewCollection() {
  const [step, setStep] = useState(1)
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null)
  const [selectedOperator, setSelectedOperator] = useState<string | null>(null)
  const [matching, setMatching] = useState(false)
  const [showOperators, setShowOperators] = useState(false)
  const [weight, setWeight] = useState('')
  const [date, setDate] = useState('2026-09-23')
  const [time, setTime] = useState('09:00')
  const navigate = useNavigate()

  const handleNext = () => {
    if (step === 5) {
      setMatching(true)
      setTimeout(() => { setMatching(false); setShowOperators(true); }, 2000)
    } else if (showOperators && selectedOperator) {
      setStep(6)
      setShowOperators(false)
    } else {
      setStep(s => s + 1)
    }
  }

  const submit = () => navigate('/generator/tracking')

  return (
    <DashboardLayout navItems={generatorNavItems} role="generator" title="Nova recolha" company="Nova Vida Supermercados">
      <div className="max-w-2xl mx-auto">
        {/* Step indicator */}
        <div className="flex items-center gap-1 mb-8 overflow-x-auto pb-2">
          {steps.map((s, i) => {
            const Icon = s.icon
            const done = step > s.id || (step === 6)
            const active = step === s.id
            return (
              <div key={s.id} className="flex items-center gap-1 shrink-0">
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition ${done ? 'bg-primary text-white' : active ? 'bg-primary-light text-primary border border-primary/30' : 'bg-white border border-slate-200 text-slate-400'}`}>
                  <Icon size={13} />
                  <span className="hidden sm:block">{s.label}</span>
                </div>
                {i < steps.length - 1 && <div className="w-4 h-px bg-slate-200" />}
              </div>
            )
          })}
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
          {/* Matching animation */}
          {matching && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-5 animate-pulse">
                <Truck size={36} className="text-primary" />
              </div>
              <h3 className="text-xl font-display font-700 text-navy mb-2">A procurar operadores disponíveis...</h3>
              <p className="text-slate-500 text-sm">Analisando distância, capacidade e avaliação.</p>
              <div className="flex gap-2 justify-center mt-6">
                {['Distância', 'Capacidade', 'Avaliação', 'Disponibilidade'].map(f => (
                  <span key={f} className="text-xs bg-primary-light text-primary px-3 py-1 rounded-full animate-pulse">{f}</span>
                ))}
              </div>
            </div>
          )}

          {/* Operator matching */}
          {showOperators && !matching && (
            <div>
              <h3 className="text-xl font-display font-700 text-navy mb-1">Operadores compatíveis</h3>
              <p className="text-slate-500 text-sm mb-6">3 operadores verificados encontrados para o seu pedido.</p>
              <div className="space-y-3">
                {operators.map(op => (
                  <button
                    key={op.name}
                    onClick={() => setSelectedOperator(op.name)}
                    className={`w-full text-left p-5 rounded-xl border-2 transition ${selectedOperator === op.name ? 'border-primary bg-primary-light' : 'border-slate-200 hover:border-slate-300'}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-semibold text-navy text-sm">{op.name}</p>
                          {op.verified && <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full">✓ Verificada</span>}
                        </div>
                        <div className="flex flex-wrap gap-3 text-xs text-slate-500">
                          <span>📍 {op.distance}</span>
                          <span>🚛 {op.vehicle}</span>
                          <span>📦 {op.capacity}</span>
                          <span>⏱ ETA: {op.eta}</span>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-bold text-navy text-sm">{op.price}</p>
                        <div className="flex items-center gap-1 justify-end mt-1">
                          <Star size={12} className="fill-warning text-warning" />
                          <span className="text-xs text-slate-600">{op.rating} ({op.reviews})</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              <button
                disabled={!selectedOperator}
                onClick={() => { setStep(6); setShowOperators(false) }}
                className="mt-6 w-full bg-primary hover:bg-primary-dark disabled:bg-slate-200 disabled:text-slate-400 text-white font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2"
              >
                Selecionar operador <ArrowRight size={16} />
              </button>
            </div>
          )}

          {!matching && !showOperators && (
            <>
              {/* Step 1 — Location */}
              {step === 1 && (
                <div>
                  <h3 className="text-xl font-display font-700 text-navy mb-1">Local de recolha</h3>
                  <p className="text-slate-500 text-sm mb-6">Indique onde os resíduos devem ser recolhidos.</p>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-1.5 block">Empresa</label>
                      <select className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
                        <option>Nova Vida Supermercados</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-1.5 block">Local de recolha</label>
                      <select className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
                        <option>Loja Central — Talatona</option>
                        <option>Armazém — Viana</option>
                        <option>Loja Norte — Cacuaco</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-slate-700 mb-1.5 block">Município</label>
                        <input defaultValue="Talatona" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-700 mb-1.5 block">Província</label>
                        <input defaultValue="Luanda" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-1.5 block">Endereço</label>
                      <input defaultValue="Rua da Missão, 142, Talatona" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2 — Material */}
              {step === 2 && (
                <div>
                  <h3 className="text-xl font-display font-700 text-navy mb-1">Tipo de resíduo</h3>
                  <p className="text-slate-500 text-sm mb-6">Selecione o material principal desta recolha.</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {materials.map(m => (
                      <button
                        key={m.id}
                        onClick={() => setSelectedMaterial(m.id)}
                        className={`p-4 rounded-xl border-2 text-center transition ${selectedMaterial === m.id ? 'border-primary bg-primary-light' : `${m.color} hover:border-slate-300`}`}
                      >
                        <span className="text-2xl block mb-1">{m.emoji}</span>
                        <span className="text-xs font-medium text-slate-700">{m.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3 — Quantity */}
              {step === 3 && (
                <div>
                  <h3 className="text-xl font-display font-700 text-navy mb-1">Quantidade</h3>
                  <p className="text-slate-500 text-sm mb-6">Estime o peso e volume dos resíduos a recolher.</p>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-slate-700 mb-1.5 block">Peso estimado</label>
                        <input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="450" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-slate-700 mb-1.5 block">Unidade</label>
                        <select className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary">
                          <option>kg</option>
                          <option>toneladas</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-1.5 block">Nº de sacos / contentores</label>
                      <input type="number" placeholder="Ex: 8" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                    </div>
                    <div className="p-4 bg-primary-light rounded-xl text-sm text-primary-dark">
                      <p className="font-medium">💡 Dica de pesagem</p>
                      <p className="text-xs mt-1 text-slate-600">Pese antes de solicitar para um preço mais preciso. O operador confirmará o peso final na recolha.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4 — Date */}
              {step === 4 && (
                <div>
                  <h3 className="text-xl font-display font-700 text-navy mb-1">Data e horário</h3>
                  <p className="text-slate-500 text-sm mb-6">Indique a data preferencial para a recolha.</p>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-1.5 block">Data preferencial</label>
                      <input type="date" value={date} onChange={e => setDate(e.target.value)} min="2026-09-21" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">Horário preferencial</label>
                      <div className="grid grid-cols-3 gap-2">
                        {['08:00', '09:00', '10:00', '14:00', '15:00', '16:00'].map(t => (
                          <button key={t} onClick={() => setTime(t)} className={`py-2 rounded-lg border text-sm font-medium transition ${time === t ? 'bg-primary text-white border-primary' : 'border-slate-200 hover:border-slate-300 text-slate-600'}`}>{t}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5 — Notes */}
              {step === 5 && (
                <div>
                  <h3 className="text-xl font-display font-700 text-navy mb-1">Informações adicionais</h3>
                  <p className="text-slate-500 text-sm mb-6">Alguma informação adicional para o operador?</p>
                  <textarea
                    rows={5}
                    placeholder="Ex: Os contentores estão no armazém traseiro. O portão principal fica aberto das 8h às 17h. Ligar antes de chegar."
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
                  />
                </div>
              )}

              {/* Step 6 — Summary */}
              {step === 6 && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center">
                      <CheckCircle size={22} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-700 text-navy">Confirmar pedido</h3>
                      <p className="text-slate-500 text-sm">Reveja os detalhes antes de confirmar.</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {[
                      { label: 'Material', value: 'Plástico PET' },
                      { label: 'Quantidade estimada', value: `${weight || '450'} kg` },
                      { label: 'Local', value: 'Loja Central, Talatona, Luanda' },
                      { label: 'Data', value: '23/09/2026 às 09:00' },
                      { label: 'Operador', value: selectedOperator || 'EcoTrans Angola' },
                      { label: 'Preço estimado', value: '65.000 Kz' },
                    ].map(item => (
                      <div key={item.label} className="flex justify-between items-center py-2.5 border-b border-slate-100">
                        <span className="text-sm text-slate-500">{item.label}</span>
                        <span className="text-sm font-semibold text-navy">{item.value}</span>
                      </div>
                    ))}
                  </div>

                  <button onClick={submit} className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 rounded-xl transition flex items-center justify-center gap-2">
                    Solicitar recolha <ArrowRight size={18} />
                  </button>
                </div>
              )}

              {/* Navigation */}
              {step < 6 && (
                <div className="flex justify-between mt-8 pt-6 border-t border-slate-100">
                  {step > 1 ? (
                    <button onClick={() => setStep(s => s - 1)} className="flex items-center gap-2 text-sm text-slate-500 hover:text-navy font-medium">
                      <ArrowLeft size={16} /> Anterior
                    </button>
                  ) : (
                    <Link to="/generator/dashboard" className="text-sm text-slate-500 hover:text-slate-700">Cancelar</Link>
                  )}
                  <button
                    onClick={handleNext}
                    disabled={step === 2 && !selectedMaterial}
                    className="flex items-center gap-2 bg-primary hover:bg-primary-dark disabled:bg-slate-200 disabled:text-slate-400 text-white font-semibold px-6 py-2.5 rounded-xl transition text-sm"
                  >
                    {step === 5 ? 'Procurar operadores' : 'Continuar'} <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
