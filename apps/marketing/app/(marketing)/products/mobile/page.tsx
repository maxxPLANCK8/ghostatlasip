import type { Metadata } from "next";

import { ProductPage } from "@/components/product-page";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Mobile Proxies | GHOSTATLAS IP",
  description: products.mobile.oneLiner,
  openGraph: {
    title: "Mobile Proxies | GHOSTATLAS IP",
    description: products.mobile.oneLiner,
    images: ["https://ghostatlas.com/og/mobile.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Proxies | GHOSTATLAS IP",
    description: products.mobile.oneLiner,
    images: ["https://ghostatlas.com/og/mobile.png"]
  }
};

export default function MobileProductPage() {
  return <ProductPage product={products.mobile} />;
}
