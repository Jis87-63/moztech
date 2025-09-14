'use client';

import { useEffect, useState } from 'react';

export default function CookieConsent() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('cookie-consent');
    if (saved === 'true') setAccepted(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50 shadow-lg">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">
          Este site usa cookies para melhorar sua experiência. Ao continuar, você aceita nossa política.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={accept}
            className="bg-green-600 px-6 py-2 rounded-full text-sm font-medium hover:bg-green-700"
          >
            Aceitar
          </button>
          <a
            href="/privacy"
            className="text-blue-300 underline text-sm"
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </div>
  );
}
