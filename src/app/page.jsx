'use client';

import Link from 'next/link';
import Image from 'next/image';
import AdBanner from '@/components/AdBanner';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Ganhe Dinheiro com o Seu Celular em Moçambique</h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">Sem cartão. Sem banco. Sem internet rápida. Só o que funciona.</p>
        <Link href="/pro" className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition">
          Quero o Guia PRO →
        </Link>
      </section>

      {/* Ad Banner Header */}
      <div className="p-4">
        <AdBanner position="header" />
      </div>

      {/* Features */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Como Funciona?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold mb-3">Gratuito</h3>
            <p>Acesse dicas reais para ganhar dinheiro com WhatsApp, M-Pesa e apps.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold mb-3">Premium</h3>
            <p>Guia completo com vídeos, templates e suporte direto por WhatsApp.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold mb-3">Automático</h3>
            <p>Pague com M-Pesa e receba tudo automaticamente — sem intervenção.</p>
          </div>
        </div>
      </section>

      {/* Ad Banner Mid Content */}
      <div className="p-4">
        <AdBanner position="mid" />
      </div>

      {/* CTA */}
      <section className="bg-gray-100 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
        <p className="text-lg mb-6">Mais de 2.000 moçambicanos já estão ganhando com este método.</p>
        <Link href="/pro" className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition">
          Acesse o Guia PRO Agora
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-8 px-6 mt-16">
        <p>© 2025 MozTechTips.vercel.app — Feito com ética em Moçambique.</p>
        <p className="mt-2 text-sm">
          Email: <a href="mailto:info@moztech.com" className="underline">info@moztech.com</a> | 
          Telegram: <a href="https://t.me/moztechmoney" className="underline">@moztechmoney</a>
        </p>
      </footer>

      {/* Ad Banner Footer */}
      <div className="p-4">
        <AdBanner position="footer" />
      </div>
    </div>
  );
}
