'use client';

export default function AdBanner({ position }) {
  if (typeof window === 'undefined') return null;

  const adStyle = {
    header: 'flex justify-center mb-4',
    mid: 'flex justify-center my-8',
    footer: 'flex justify-center mt-8'
  };

  return (
    <div className={adStyle[position]}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2569329537599023"
        data-ad-slot="7890123456"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
