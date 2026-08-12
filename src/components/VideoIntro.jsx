import { useState } from 'react'
import { Play } from 'lucide-react'
import { video } from '../data/content'

/**
 * Click-to-play YouTube card. Shows the poster frame until the user hits play,
 * so the page never pulls the YouTube player on load.
 */
export default function VideoIntro({ className = '' }) {
  const [playing, setPlaying] = useState(false)
  // Not every upload has a maxres thumbnail — fall back to hq on error.
  const [poster, setPoster] = useState(
    `https://i.ytimg.com/vi/${video?.youtubeId}/maxresdefault.jpg`
  )

  if (!video?.youtubeId) return null

  return (
    <div
      className={`overflow-hidden rounded-xl border border-line bg-card ${className}`}
    >
      <div className="relative aspect-video bg-bg-secondary">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play: ${video.title}`}
            className="focus-ring group absolute inset-0 h-full w-full cursor-pointer"
          >
            <img
              src={poster}
              alt=""
              loading="lazy"
              onError={() =>
                setPoster(
                  `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`
                )
              }
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/10" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex size-16 items-center justify-center rounded-full bg-accent text-bg shadow-lg transition-transform group-hover:scale-110">
                <Play size={26} className="ml-1 fill-current" />
              </span>
            </span>
          </button>
        )}
      </div>

      {(video.title || video.caption) && (
        <div className="border-t border-line px-4 py-3">
          {video.title && (
            <div className="text-sm font-semibold text-primary">
              {video.title}
            </div>
          )}
          {video.caption && (
            <div className="mt-0.5 text-xs text-secondary">{video.caption}</div>
          )}
        </div>
      )}
    </div>
  )
}
