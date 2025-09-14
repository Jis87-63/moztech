// app/privacy/page.jsx
export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidade</h1>
      <p className="mb-4">Nós respeitamos sua privacidade. Neste site:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Não armazenamos números de telefone ou dados bancários.</li>
        <li>Usamos Firebase para autenticação — apenas email e UID.</li>
        <li>Os anúncios do Google AdSense usam cookies padrão da indústria.</li>
        <li>Nunca vendemos seus dados a terceiros.</li>
      </ul>
      <p className="mt-8">Contato: <a href="mailto:info@moztech.com" className="underline">info@moztech.com</a></p>
    </div>
  );
}
