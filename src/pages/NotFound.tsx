import { Link } from 'react-router-dom'
import { ArrowLeft, MapPin } from 'lucide-react'
import Logo from '../components/Logo'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy flex flex-col items-center justify-center p-6 text-center">
      <div className="mb-8">
        <Logo white size="md" />
      </div>
      <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
        <MapPin size={40} className="text-primary" />
      </div>
      <h1 className="text-4xl font-display font-800 text-white mb-3">404</h1>
      <h2 className="text-xl font-display font-700 text-slate-300 mb-2">Este caminho não leva a lado nenhum.</h2>
      <p className="text-slate-400 text-sm mb-8 max-w-xs">Vamos voltar para uma rota melhor e continuar a transformar resíduos em valor.</p>
      <Link to="/" className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition">
        <ArrowLeft size={18} /> Voltar ao início
      </Link>
    </div>
  )
}
