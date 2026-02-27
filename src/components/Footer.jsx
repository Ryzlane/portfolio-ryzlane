// Footer avec liens sociaux
import { FOOTER } from '../utils/constants';

const Footer = () => {
  return (
    <footer className="bg-noir text-blanc dark:bg-blanc dark:text-noir py-12">
      <div className="max-w-container mx-auto px-6 md:px-12 text-center">
        {/* Copyright & Tech */}
        <div className="mb-6 opacity-80 text-sm space-y-1">
          <p>{FOOTER.copyright}</p>
          <p>{FOOTER.tech}</p>
        </div>

        {/* Liens sociaux */}
        <div className="flex justify-center gap-6">
          {FOOTER.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity text-sm"
              aria-label={social.name}
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
