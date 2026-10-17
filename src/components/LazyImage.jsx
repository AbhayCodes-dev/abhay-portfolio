import { useEffect, useRef, useState } from 'react'

/**
 * Image that is only requested when it is about to scroll into view.
 *  - IntersectionObserver sets `src` once the image is within 300px of the viewport
 *    (same result in every browser, and easy to verify in DevTools > Network).
 *  - `loading="lazy"` stays on as a native fallback, `decoding="async"` keeps scrolling smooth.
 *  - width/height reserve space so the page doesn't jump while images load.
 * Pass `eager` for above-the-fold images (the hero photo) so they load immediately with high priority.
 */
const LazyImage = ({ src, alt, className = '', eager = false, width, height }) => {
  const ref = useRef(null)
  const [inView, setInView] = useState(eager)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (eager || inView) return
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { rootMargin: '300px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [eager, inView])

  return (
    <img
      ref={ref}
      src={inView ? src : undefined}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={eager ? 'high' : 'auto'}
      onLoad={() => setLoaded(true)}
      className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
    />
  )
}

export default LazyImage
