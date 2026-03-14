
import { FooterLink } from "../types/portfolio";

interface FooterProps {
  links: FooterLink[];
}

export default function Footer({ links }: FooterProps) {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold text-white mb-2">Ignacio Gareca</h3>
            <p className="text-gray-400 text-center md:text-left">
              Fullstack Developer con pasión por crear interfaces modernas y eficientes.
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <span className="sr-only">{link.label}</span>
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ignacio Gareca. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
