import { HeartPulse, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1 - About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <HeartPulse className="h-6 w-6 text-teal-500" />
              <span className="text-lg font-semibold text-white">
                Harmony Family Health
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Providing comprehensive, compassionate family healthcare to the
              Austin community since 2018.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-sm hover:text-teal-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm hover:text-teal-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-sm hover:text-teal-400 transition-colors"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#patient-portal"
                  className="text-sm hover:text-teal-400 transition-colors"
                >
                  Patient Portal
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm hover:text-teal-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-sm hover:text-teal-400 transition-colors"
                >
                  Primary Care
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm hover:text-teal-400 transition-colors"
                >
                  Pediatric Care
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm hover:text-teal-400 transition-colors"
                >
                  Women's Health
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm hover:text-teal-400 transition-colors"
                >
                  Chronic Disease Management
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm hover:text-teal-400 transition-colors"
                >
                  Telehealth
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:5125550184"
                  className="text-sm hover:text-teal-400 transition-colors"
                >
                  (512) 555-0184
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@harmonyfamilyhealth.com"
                  className="text-sm hover:text-teal-400 transition-colors break-all"
                >
                  info@harmonyfamilyhealth.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  4200 Oakwood Blvd, Suite 110
                  <br />
                  Austin, TX 78745
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400">
              © 2026 Harmony Family Health. All rights reserved.
            </p>
            <a
              href="https://autocrew.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
            >
              Powered by AutoCrew
            </a>
          </div>
          <p className="text-xs text-slate-500 text-center mt-4">
            This is a demonstration website. Harmony Family Health is a
            fictitious medical practice created for demo purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
