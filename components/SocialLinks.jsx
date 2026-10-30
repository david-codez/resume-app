import { iconFor } from './iconMap'

export default function SocialLinks({ links, size = '1.75rem' }) {
  return (
    <ul className="list-inline mb-0">
      {links.map((link) => {
        const Icon = iconFor(link.icon)
        return (
          <li key={link.url} className="list-inline-item">
            <a href={link.url} aria-label={link.label} target="_blank" rel="noopener noreferrer" className="social-link">
              <Icon size={size} aria-hidden="true" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
