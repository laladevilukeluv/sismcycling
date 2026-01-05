"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-white border-t border-light py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 heading-primary">{t("footer.company")}</h3>
            <p className="footer-text text-sm">{t("footer.description")}</p>
          </div>
          <div>
            <h4 className="footer-heading mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tours" className="footer-link">
                  {t("nav.tours")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading mb-4">{t("footer.company_info")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="footer-link">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading mb-4">{t("footer.follow")}</h4>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/raianraian44/" className="text-light hover:text-secondary">
                <span className="sr-only">Instagram</span>📷
              </Link>
              <Link href="#" className="text-light hover:text-secondary">
                <span className="sr-only">Facebook</span>📘
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-light mt-8 pt-8 text-center text-sm text-secondary">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
