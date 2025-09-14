// app/page.jsx
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl md:text-6xl font-bold text-center text-blue-800 mb-4">
        MozTechTips
      </h1>
      <p className="text-lg md:text-xl text-center text-gray-700 mb-8">
        Ganhe Dinheiro com o Seu Celular em Moçambique
      </p>
      <a
        href="/pro"
        className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition"
      >
        Quero o Guia PRO →
      </a>

      {/* AdSense Header */}
      <div className="mt-12 w-full max-w-md">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-2569329537599023"
          data-ad-slot="7890123456"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    </div>
  );
}
