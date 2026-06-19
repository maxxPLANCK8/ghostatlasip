export type UseCaseData = {
  slug: string;
  title: string;
  description: string;
  benefits: string[];
  relatedProxyType: string;
  cta: string;
};

export const useCases: Record<string, UseCaseData> = {
  "ad-verification": {
    slug: "ad-verification",
    title: "Ad Verification",
    description: "Verify campaigns, placements, and landing pages from the markets where they run.",
    benefits: ["Audit localized ad delivery", "Catch cloaking and redirect issues", "Validate landing pages by region"],
    relatedProxyType: "Mobile and Residential",
    cta: "Verify ads globally"
  },
  "market-research": {
    slug: "market-research",
    title: "Market Research",
    description: "Collect regional market signals through location-aware residential and mobile routes.",
    benefits: ["Reduce location bias", "Compare regional availability", "Gather cleaner competitive signals"],
    relatedProxyType: "Residential",
    cta: "Start researching markets"
  },
  "price-tracking": {
    slug: "price-tracking",
    title: "Price Tracking",
    description: "Monitor price changes across stores, geographies, and device contexts.",
    benefits: ["Track localized pricing", "Monitor stock and promos", "Keep recurring jobs stable"],
    relatedProxyType: "Datacenter and Residential",
    cta: "Track prices at scale"
  },
  "seo-monitoring": {
    slug: "seo-monitoring",
    title: "SEO Monitoring",
    description: "Inspect localized search results without relying on a single region.",
    benefits: ["Check SERPs by country", "Validate rank changes", "Monitor competitors locally"],
    relatedProxyType: "Residential",
    cta: "Monitor search globally"
  },
  "sneaker-bots": {
    slug: "sneaker-bots",
    title: "Sneaker Bots",
    description: "Route high-speed checkout automation through stable proxy pools.",
    benefits: ["Lower checkout friction", "Rotate sessions cleanly", "Scale concurrent tasks"],
    relatedProxyType: "Datacenter and Static Residential",
    cta: "Route checkout traffic"
  },
  "social-media": {
    slug: "social-media",
    title: "Social Media",
    description: "Validate social media experiences across regions and network types.",
    benefits: ["Inspect localized feeds", "Test account workflows", "Validate mobile-first experiences"],
    relatedProxyType: "Mobile and Residential",
    cta: "Test social workflows"
  }
};

export function getUseCase(slug: string) {
  return useCases[slug];
}

export function getUseCaseSlugs() {
  return Object.keys(useCases);
}
