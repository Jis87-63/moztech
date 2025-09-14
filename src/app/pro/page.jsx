'use client';

import Link from 'next/link';
import Image from 'next/image';
import PaymentButton from '@/components/PaymentButton';

export default function ProPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">🚀 MozTechTips PRO</h1>
        <p className="text-xl text-center text-gray-700 mb-12">O Guia Definitivo para Ganhar R$50.000+/mês com o Seu Celular em Moçambique</p>

        <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-6">O Que Você Recebe:</h2>
          <ul className="space-y-3 text-gray-700">
            <li>📄 Guia PDF (120 páginas)</li>
            <li>📹 10 Vídeos Exclusivos</li>
            <li>📋 Templates Prontos (WhatsApp, Excel)</li>
            <li>💬 Suporte Direto por WhatsApp (14 dias)</li>
            <li>🔄 Atualizações Mensais</li>
            <li>🏆 Certificado Digital</li>
          </ul>
        </div>

        <div className="text-center mb-8">
          <span className="text-5xl font-bold text-red-600">MZN 250</span>
          <p className="text-gray-600">Único pagamento — NÃO ASSINATURA</p>
        </div>

        <div className="text-center mb-8">
          <p className="text-red-600 font-bold">⚠️ APENAS 50 VAGAS POR MÊS — ÚLTIMAS 8 DISPONÍVEIS!</p>
        </div>

        <PaymentButton amount={250} product="MozTechTips PRO" />

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Após o pagamento, você receberá o guia via email e acesso ao WhatsApp de suporte.
          </p>
          <p className="text-blue-600 mt-2">
            Suporte: <a href="https://t.me/moztechmoney" className="underline">@moztechmoney</a>
          </p>
        </div>
      </div>
    </div>
  );
}
