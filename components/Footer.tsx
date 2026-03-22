import { FiGithub, FiLinkedin } from "react-icons/fi";
import packageJson from "../package.json";

const footerSocials = [
  {
    name: "GitHub",
    url: "https://github.com/sanjivrajah",
    icon: FiGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sanjivrajah-m-3b285b209/",
    icon: FiLinkedin,
  },
];

export function Footer() {
  const appVersion = `v${packageJson.version}`;

  return (
    <footer className="border-t border-light-surface dark:border-dark-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-3">
          <p className="text-sm text-light-muted dark:text-dark-muted">
            &copy; {new Date().getFullYear()} Sanjivrajah Murali. All rights
            reserved.
          </p>
          <span className="rounded-full border border-dark-accent/30 bg-dark-accent/10 px-2.5 py-1 font-mono text-xs text-dark-accent">
            {appVersion}
          </span>
        </div>

        <div className="flex items-center gap-4">
          {footerSocials.map(({ name, url, icon: Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-light-muted dark:text-dark-muted transition-colors hover:text-dark-accent hover:bg-dark-accent/10"
              aria-label={name}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
