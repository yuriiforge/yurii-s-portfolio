import { useState } from 'react'
import { profile } from '../data/content'

/** Profile photo inside the rotating gradient border.
 *  /public/profile.JPG is already square (a portrait headshot padded out with
 *  a blurred copy of its own backdrop), so `object-cover` fills the frame
 *  without cropping anything off the subject. Swapping in a non-square photo
 *  will crop again — pad it to 1:1 first.
 *  Falls back to initials if the image is missing, so the site never
 *  renders a broken-image box before you drop in /public/profile.jpg. */
export default function Avatar({ size = 'size-56' }) {
  const [failed, setFailed] = useState(!profile.photo)

  const initials = profile.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .replace(/[^A-Za-z]/g, '')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className="animated-border rounded-2xl">
      <div
        className={`${size} flex items-center justify-center overflow-hidden rounded-2xl`}
        style={{
          background:
            'linear-gradient(135deg, var(--avatar-from) 0%, var(--avatar-to) 100%)',
        }}
      >
        {failed ? (
          <span className="font-mono text-4xl font-bold text-accent">
            {initials}
          </span>
        ) : (
          <img
            src={profile.photo}
            alt={profile.name}
            onError={() => setFailed(true)}
            className="size-full object-cover"
            loading="lazy"
          />
        )}
      </div>
    </div>
  )
}
