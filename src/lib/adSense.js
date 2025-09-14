export function loadAdSense() {
  if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2569329537599023';
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);

    // Meta tag para AdSense
    const meta = document.createElement('meta');
    meta.name = 'google-adsense-account';
    meta.content = 'ca-pub-2569329537599023';
    document.head.appendChild(meta);
  }
}
