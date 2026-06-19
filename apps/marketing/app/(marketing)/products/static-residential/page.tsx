import type { Metadata } from "next";

import { ProductPage } from "@/components/product-page";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Static Residential Proxies | GHOSTATLAS IP",
  description: products["static-residential"].oneLiner,
  openGraph: {
    title: "Static Residential Proxies | GHOSTATLAS IP",
    description: products["static-residential"].oneLiner,
    images: ["https://ghostatlas.com/og/static-residential.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Static Residential Proxies | GHOSTATLAS IP",
    description: products["static-residential"].oneLiner,
    images: ["https://ghostatlas.com/og/static-residential.png"]
  }
};

export default function StaticResidentialProductPage() {
  return <ProductPage product={products["static-residential"]} />;
}
