import LazyImage from './LazyImage'
import profileImg from '../assets/images/profile.webp'

const Hero = () => (
  <section id="home" className="mx-auto max-w-5xl px-5 pb-20 pt-14 sm:px-8 md:pb-28 md:pt-24">
    <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
      <div>
        <p className="rise mb-5 text-sm font-medium tracking-widest text-accent uppercase">Full-stack developer</p>
        <h1 className="rise text-4xl leading-[1.08] sm:text-5xl md:text-6xl" style={{ animationDelay: '80ms' }}>
          Hi, I&rsquo;m Abhay.
          <span className="block text-muted">I build web apps with React and Node.js.</span>
        </h1>
        <p className="rise mt-6 max-w-xl text-lg leading-relaxed text-muted" style={{ animationDelay: '160ms' }}>
          I like turning ideas into clean, working software, with code that is simple to read and an interface that is
          simple to use.
        </p>
        <div className="rise mt-9 flex flex-wrap gap-4" style={{ animationDelay: '240ms' }}>
          <a
            href="#projects"
            className="rounded-md bg-accent px-6 py-3 font-medium text-accent-ink transition-opacity hover:opacity-90"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="rounded-md border border-ink px-6 py-3 font-medium transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="rise mx-auto w-full max-w-xs md:ml-auto md:mr-0" style={{ animationDelay: '200ms' }}>
        <div className="relative">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-full border-2 border-accent" aria-hidden="true" />
          <LazyImage
            eager
            src={profileImg}
            alt="Portrait of Abhay"
            width={640}
            height={646}
            className="relative aspect-square w-full rounded-full bg-panel object-cover object-top"
          />
        </div>
      </div>
    </div>
  </section>
)

export default Hero
