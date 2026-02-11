'use client';

export default function SpotifyEmbed() {
  return (
    <section className="mt-12">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        🎧 Listening to
      </h3>
      <div className="relative overflow-hidden rounded-xl">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/artist/3mIj9lX2MWuHmhNCA7LSCW?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-xl shadow-lg dark:shadow-gray-800/50"
        />
      </div>
      <p className="text-xs text-gray-400 mt-2 text-center">
        🎵 The 1975 – preview 30 detik. Login Spotify untuk full lagu.
      </p>
    </section>
  );
}