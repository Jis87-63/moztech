// app/pro/page.jsx
'use client';

import Link from 'next/link';
import PaymentButton from '@/components/PaymentButton';

export default function ProPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
          MozTechTips PRO
        </h1>
        <p className="text-center text-gray-700 mb-8">
          O Guia Definitivo para Ganhar MZ50.000+/mês com o Seu Celular em Moçambique
        </p>

        <div className="bg-green-50 p-6 rounded-lg mb-8">
          <h2 className="font-bold text-green-800 mb-3">Você Recebe:</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
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

        <div className="mt-12 text-center text-sm text-gray-600">
          <p>Após o pagamento, você receberá acesso via WhatsApp.</p>
          <p>Suporte: <a href="https://t.me/moztechmoney" className="text-blue-600 underline">@moztechmoney</a></p>
        </div>
      </div>
    </div>
  );
}
