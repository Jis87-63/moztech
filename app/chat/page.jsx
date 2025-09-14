// app/chat/page.jsx
'use client';

import { useState, useEffect } from 'react';
import { getDatabase, ref, push, onValue } from 'firebase/database';
import app from '@/lib/firebaseConfig';

const db = getDatabase(app);

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [waiting, setWaiting] = useState(false);

  useEffect(() => {
    const messagesRef = ref(db, 'chat/messages');
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const msgs = Object.keys(data).map(key => ({ id: key, ...data[key] }));
        setMessages(msgs);
      }
    });
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMsg = {
      sender: 'user',
      text: input,
      timestamp: Date.now(),
      responded: false
    };

    push(ref(db, 'chat/messages'), newMsg);
    setInput('');
    setWaiting(true);
  };

  const botResponses = [
    "⏳ Aguarde, estamos processando sua solicitação... (Resposta em até 30 segundos)",
    "✅ Pronto! Aqui está a resposta: Para ganhar dinheiro com celular em Moçambique, comece com o nosso Guia PRO. Acesse: https://moztec.vercel.app/pro",
    "✅ Pronto! Aqui está a resposta: Não precisa de cartão internacional. Use M-Pesa + WhatsApp Business. Veja o passo a passo: https://moztec.vercel.app/ganhar-dinheiro",
    "✅ Pronto! Aqui está a resposta: Para pagar pelo PRO, clique no botão vermelho na página principal. É rápido e seguro."
  ];

  useEffect(() => {
    if (waiting) {
      const timer = setTimeout(() => {
        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
        push(ref(db, 'chat/messages'), {
          sender: 'bot',
          text: randomResponse,
          timestamp: Date.now(),
          responded: true
        });
        setWaiting(false);
      }, 15000); // 15 segundos
      return () => clearTimeout(timer);
    }
  }, [waiting]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="h-80 overflow-y-auto p-4 space-y-4">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {waiting && (
            <div className="flex justify-start">
              <div className="bg-gray-200 px-4 py-2 rounded-lg text-gray-600">
                ⏳ Aguarde...
              </div>
            </div>
          )}
        </div>
        <div className="p-4 border-t flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Pergunte algo..."
            className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
