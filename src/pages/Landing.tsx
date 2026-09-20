import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Recycle, Truck, Factory, ChevronRight, CheckCircle, BarChart3, Shield, Globe, Menu, X, Star } from 'lucide-react'
import Logo from '../components/Logo'

const stats = [
  { value: '1.250+', label: 'Empresas conectadas' },
  { value: '8.500+', label: 'Toneladas encaminhadas' },
  { value: '320+', label: 'Operadores de recolha' },
  { value: '180+', label: 'Parceiros de reciclagem' },
]

const howItWorks = [
  { step: '01', title: 'Publique', desc: 'Informe o tipo e quantidade de resíduos da sua empresa.', icon: Factory },
  { step: '02', title: 'Conectamos', desc: 'O algoritmo encontra operadores verificados e adequados ao seu perfil.', icon: Globe },
  { step: '03', title: 'Recolhemos', desc: 'O material é recolhido, pesado e rastreado em tempo real.', icon: Truck },
  { step: '04', title: 'Valorizamos', desc: 'O material chega a um reciclador e entra novamente na economia circular.', icon: Recycle },
]

const forWho = [
  {
    role: 'Geradores',
    color: 'bg-primary-light',
    accent: 'text-primary-dark',
    border: 'border-primary/20',
    icon: Factory,
    desc: 'Tenha controlo sobre todos os seus resíduos.',
    benefits: ['Recolha organizada e rastreável', 'Relatórios de impacto ambiental', 'Menos burocracia e processos manuais', 'Indicadores ambientais certificados'],
    cta: '/generator/dashboard',
  },
  {
    role: 'Operadores',
    color: 'bg-accent-blue-light',
    accent: 'text-accent-blue',
    border: 'border-accent-blue/20',
    icon: Truck,
    desc: 'Encontre novas oportunidades de recolha.',
    benefits: ['Novos clientes sem custo de prospeção', 'Melhor utilização da frota', 'Gestão de rotas e motoristas', 'Pagamentos seguros e pontuais'],
    cta: '/operator/dashboard',
  },
  {
    role: 'Recicladores',
    color: 'bg-primary-light',
    accent: 'text-primary-dark',
    border: 'border-primary/20',
    icon: Recycle,
    desc: 'Transforme resíduos em matéria-prima.',
    benefits: ['Acesso a materiais triados e verificados', 'Fornecedores confiáveis e avaliados', 'Rastreabilidade completa dos lotes', 'Gestão eficiente de capacidade'],
    cta: '/recycler/dashboard',
  },
]

const testimonials = [
  { name: 'Nova Vida Supermercados', person: 'Carlos Mendes', role: 'Director de Operações', text: 'A EKOLOLA transformou a forma como gerimos os resíduos. Temos visibilidade total e relatórios automáticos para os nossos clientes.' },
  { name: 'EcoTrans Angola', person: 'Maria Santos', role: 'CEO', text: 'Triplicámos o número de clientes em 6 meses. A plataforma faz toda a gestão logística por nós.' },
]

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white font-body">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center h-16 gap-8">
          <Logo />
          <div className="hidden md:flex items-center gap-6 flex-1">
            {['Início', 'Como funciona', 'Para empresas', 'Impacto', 'Sobre nós'].map(item => (
              <a key={item} href="#" className="text-sm text-slate-600 hover:text-primary font-medium transition-colors">{item}</a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3 ml-auto">
            <Link to="/login" className="text-sm font-semibold text-navy px-4 py-2 rounded-lg hover:bg-slate-100 transition">Entrar</Link>
            <Link to="/register" className="text-sm font-semibold bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition shadow-sm">Criar conta</Link>
          </div>
          <button className="md:hidden ml-auto p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 flex flex-col gap-3">
            {['Início', 'Como funciona', 'Para empresas', 'Impacto', 'Sobre nós'].map(item => (
              <a key={item} href="#" className="text-sm font-medium text-slate-700 py-1">{item}</a>
            ))}
            <hr className="border-slate-100" />
            <Link to="/login" className="text-sm font-semibold text-navy py-2 text-center border border-slate-200 rounded-lg">Entrar</Link>
            <Link to="/register" className="text-sm font-semibold bg-primary text-white py-2 text-center rounded-lg">Criar conta</Link>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-navy via-navy-800 to-[#0D2B1E] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-primary blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent-blue blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-light border border-primary/30 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <Recycle size={14} />
              Plataforma B2B de Economia Circular em Angola
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-800 text-white leading-tight mb-6">
              Transformamos<br />
              <span className="text-primary">resíduos em valor.</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
              Conectamos empresas, operadores de recolha e recicladores para tornar a gestão de resíduos mais simples, eficiente e sustentável em Angola.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/register" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3.5 rounded-xl transition shadow-lg shadow-primary/25">
                Começar agora <ArrowRight size={18} />
              </Link>
              <a href="#how" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-6 py-3.5 rounded-xl transition backdrop-blur-sm">
                Como funciona <ChevronRight size={18} />
              </a>
            </div>
          </div>

          {/* Flow visual */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-12">
            {[
              { icon: Factory, label: 'Empresa', color: 'bg-slate-700' },
              null,
              { icon: Globe, label: 'EKOLOLA', color: 'bg-primary', featured: true },
              null,
              { icon: Truck, label: 'Recolha', color: 'bg-slate-700' },
              null,
              { icon: Recycle, label: 'Reciclagem', color: 'bg-slate-700' },
            ].map((item, i) =>
              item === null ? (
                <ArrowRight key={i} size={16} className="text-slate-500" />
              ) : (
                <div key={i} className={`flex flex-col items-center gap-2 ${item.featured ? 'scale-110' : ''}`}>
                  <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center ${item.featured ? 'ring-2 ring-primary shadow-lg shadow-primary/30' : ''}`}>
                    <item.icon size={24} className="text-white" />
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{item.label}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.value} className="text-center">
                <p className="text-3xl sm:text-4xl font-display font-800 text-primary">{s.value}</p>
                <p className="text-sm text-slate-600 mt-1">{s.label}</p>
                <p className="text-xs text-slate-400 mt-0.5">dados demonstrativos</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Como funciona</p>
            <h2 className="text-3xl sm:text-4xl font-display font-800 text-navy">Um processo simples e rastreável</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item) => (
              <div key={item.step} className="relative p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:border-primary/30 hover:bg-primary-light/30 transition-all group">
                <span className="text-5xl font-display font-800 text-slate-100 group-hover:text-primary/10 transition-colors absolute top-4 right-5">{item.step}</span>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display font-700 text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For who */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Para quem é</p>
            <h2 className="text-3xl sm:text-4xl font-display font-800 text-navy">Uma plataforma. Três perfis.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {forWho.map((item) => (
              <div key={item.role} className={`p-8 rounded-2xl border ${item.border} ${item.color} flex flex-col`}>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm">
                  <item.icon size={22} className={item.accent} />
                </div>
                <h3 className={`font-display font-800 text-xl ${item.accent} mb-1`}>{item.role}</h3>
                <p className="text-slate-700 text-sm mb-5">{item.desc}</p>
                <ul className="space-y-2.5 flex-1">
                  {item.benefits.map(b => (
                    <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link to={item.cta} className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition">
                  Ver demo <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Empresas verificadas', desc: 'Todas as empresas passam por um processo de verificação documental antes de operar na plataforma.' },
              { icon: BarChart3, title: 'Rastreabilidade total', desc: 'Cada operação tem um ID único e histórico completo, do gerador ao reciclador.' },
              { icon: Recycle, title: 'Impacto mensurável', desc: 'Relatórios de impacto ambiental baseados em metodologias reconhecidas, com valores estimados transparentes.' },
            ].map(item => (
              <div key={item.title} className="flex gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-700 text-navy mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-800 text-navy">O que dizem os nossos parceiros</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="bg-white rounded-2xl border border-slate-100 p-8">
                <div className="flex gap-1 mb-4">
                  {Array(5).fill(0).map((_, i) => <Star key={i} size={16} className="fill-warning text-warning" />)}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {t.person[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">{t.person}</p>
                    <p className="text-xs text-slate-500">{t.role} · {t.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-navy to-primary-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-800 text-white mb-4">Pronto para transformar os seus resíduos em valor?</h2>
          <p className="text-slate-300 text-lg mb-8">Junte-se a mais de 1.250 empresas que já usam a EKOLOLA.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/register" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-xl transition shadow-xl">
              Começar gratuitamente <ArrowRight size={18} />
            </Link>
            <Link to="/login" className="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition">
              Já tenho conta
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <Logo white />
              <p className="text-sm text-slate-400 mt-3 max-w-xs">Transformamos resíduos em valor. Plataforma B2B de economia circular em Angola.</p>
            </div>
            <div className="flex gap-12">
              <div>
                <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">Plataforma</p>
                <div className="flex flex-col gap-2">
                  {['Como funciona', 'Para geradores', 'Para operadores', 'Para recicladores'].map(l => (
                    <a key={l} href="#" className="text-sm text-slate-400 hover:text-white transition">{l}</a>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">Empresa</p>
                <div className="flex flex-col gap-2">
                  {['Sobre nós', 'Impacto', 'Contacto', 'Termos'].map(l => (
                    <a key={l} href="#" className="text-sm text-slate-400 hover:text-white transition">{l}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3">
            <p className="text-xs text-slate-500">© 2026 EKOLOLA. Todos os direitos reservados. Luanda, Angola.</p>
            <p className="text-xs text-slate-500">Dados apresentados são demonstrativos de protótipo.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
