import Link from "next/link";
import { navigation } from "@/lib/mock-data";

export function Footer() {
  return (
    <footer className="border-t border-white/70 bg-white/70 py-10 backdrop-blur-xl sm:py-12">
      <div className="container-page grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-start">
        <div>
          <div className="font-serif text-4xl text-charcoal-900">DRM Beauty</div>
          <p className="mt-3 max-w-xl text-sm leading-7 text-charcoal-800/70">
            Premium beauty and cosmetics storefront prototype with a soft luxury aesthetic,
            conversion-led structure, and an editorial shopping experience.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-charcoal-700/55">
              Explore
            </p>
            <div className="mt-4 grid gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-charcoal-800/75 transition-colors hover:text-charcoal-900"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-charcoal-700/55">
              Contact
            </p>
            <div className="mt-4 grid gap-3 text-sm text-charcoal-800/75">
              <a href="mailto:hello@drmbeauty.com">hello@drmbeauty.com</a>
              <span>Mumbai, India</span>
              <span>Instagram / TikTok / Pinterest</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
