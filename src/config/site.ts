export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "Next.js 14 Boilerplate",
    description: "A starter template for Next.js 14 with TypeScript, ESLint, Prettier, Radix UI and Tailwind CSS",
    siteNav: [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "About",
            href: "/about"
        },
        {
            title: "Contact",
            href: "/contact"
        }
    ],
    socialNav: {
        facebook: "https://www.facebook.com/ideebico",
        twitter: "https://twitter.com/ideebico"
    }
}