'use client';

import { useState } from 'react';
import { ALERT_SMS_CONFIG, API_KEY, WALLET_ID } from '@/lib/gibrapay';

export default function PaymentButton({ amount, product }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handlePayment = async () => {
    setLoading(true);
    setMessage('⏳ Aguarde, processando pagamento...');

    try {
      const response = await fetch('https://gibrapay.online/v1/transfer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'API-Key': API_KEY,
        },
        body: JSON.stringify({
          wallet_id: WALLET_ID,
          amount: amount,
          number_phone: '853984699', // substitua pelo número real do cliente depois
          alert_sms: ALERT_SMS_CONFIG,
        }),
      });

      const result = await response.json();

      if (result.status === 'success') {
        setMessage('✅ Pagamento confirmado! Verifique seu WhatsApp.');
        setTimeout(() => {
          alert('Seu acesso ao produto será liberado em até 1 minuto. Contate-nos no Telegram se não receber.');
        }, 1000);
      } else {
        setMessage('❌ Erro no pagamento. Tente novamente ou entre em contato.');
      }
    } catch (error) {
      setMessage('❌ Falha na conexão. Verifique sua internet.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center">
      <button
        onClick={handlePayment}
        disabled={loading}
        className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 disabled:opacity-50 transition w-full max-w-md mx-auto"
      >
        {loading ? 'Processando...' : `PAGAR MZN ${amount} AGORA`}
      </button>
      {message && <p className="mt-4 text-red-600 font-medium">{message}</p>}
    </div>
  );
}
