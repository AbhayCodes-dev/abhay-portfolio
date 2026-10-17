import socialData from '../assets/data/social'

const Footer = () => (
  <footer className="border-t border-line">
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
      <p className="text-sm text-muted">&copy; {new Date().getFullYear()} Abhay. All rights reserved.</p>
      <ul className="flex gap-3">
        {socialData.map((social) => (
          <li key={social.name}>
            <a
              href={social.url}
              target={social.url.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={social.name}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-line transition-colors hover:border-accent hover:text-accent"
            >
              <social.Icon aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
)

export default Footer
