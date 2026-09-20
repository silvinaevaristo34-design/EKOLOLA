import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, ArrowRight } from 'lucide-react'
import Logo from '../components/Logo'

export default function Login() {
  const [showPwd, setShowPwd] = useState(false)
  const [form, setForm] = useState({ email: '', password: '', remember: false })
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/generator/dashboard')
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Left panel */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-navy to-primary-dark flex-col justify-between p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full bg-primary blur-3xl" />
        </div>
        <Logo white size="md" />
        <div>
          <h2 className="text-3xl font-display font-800 text-white mb-4">A plataforma de economia circular para Angola.</h2>
          <p className="text-slate-300 text-sm leading-relaxed">Conectamos empresas geradoras de resíduos, operadores de recolha e recicladores numa única plataforma digital.</p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { v: '1.250+', l: 'Empresas' },
              { v: '8.500+', l: 'Ton. encaminhadas' },
              { v: '320+', l: 'Operadores' },
              { v: '81%', l: 'Taxa de valorização' },
            ].map(s => (
              <div key={s.l} className="bg-white/10 rounded-xl p-4">
                <p className="text-2xl font-display font-800 text-primary">{s.v}</p>
                <p className="text-xs text-slate-400 mt-0.5">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs text-slate-500">Dados demonstrativos de protótipo.</p>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8">
            <Logo />
          </div>
          <div className="bg-white rounded-2xl border border-slate-100 shadow-xl p-8">
            <h1 className="text-2xl font-display font-800 text-navy mb-1">Bem-vindo de volta</h1>
            <p className="text-sm text-slate-500 mb-8">Aceda à sua conta EKOLOLA.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="empresa@exemplo.ao"
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Palavra-passe</label>
                <div className="relative">
                  <input
                    type={showPwd ? 'text' : 'password'}
                    value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 pr-11 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
                  <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                    {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={form.remember} onChange={e => setForm({ ...form, remember: e.target.checked })} className="rounded text-primary" />
                  <span className="text-sm text-slate-600">Lembrar-me</span>
                </label>
                <a href="#" className="text-sm text-primary font-medium hover:text-primary-dark">Esqueci a palavra-passe</a>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 rounded-xl transition flex items-center justify-center gap-2"
              >
                Entrar <ArrowRight size={18} />
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-slate-100 text-center">
              <p className="text-sm text-slate-600">
                Ainda não possui uma conta?{' '}
                <Link to="/register" className="font-semibold text-primary hover:text-primary-dark">Criar conta</Link>
              </p>
            </div>

            {/* Demo shortcuts */}
            <div className="mt-4 p-3 bg-slate-50 rounded-xl">
              <p className="text-xs text-slate-500 mb-2 font-medium">Acesso rápido (demo)</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'Gerador', path: '/generator/dashboard' },
                  { label: 'Operador', path: '/operator/dashboard' },
                  { label: 'Reciclador', path: '/recycler/dashboard' },
                  { label: 'Admin', path: '/admin/dashboard' },
                ].map(d => (
                  <Link key={d.path} to={d.path} className="text-xs bg-white border border-slate-200 text-slate-600 hover:border-primary hover:text-primary px-3 py-1.5 rounded-lg transition">
                    {d.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
