import type { Metadata } from "next";

import { ProductPage } from "@/components/product-page";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Residential Proxies | GHOSTATLAS IP",
  description: products.residential.oneLiner,
  openGraph: {
    title: "Residential Proxies | GHOSTATLAS IP",
    description: products.residential.oneLiner,
    images: ["https://ghostatlas.com/og/residential.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential Proxies | GHOSTATLAS IP",
    description: products.residential.oneLiner,
    images: ["https://ghostatlas.com/og/residential.png"]
  }
};

export default function ResidentialProductPage() {
  return <ProductPage product={products.residential} />;
}
