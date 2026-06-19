import type { Metadata } from "next";

import { ProductPage } from "@/components/product-page";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Datacenter Proxies | GHOSTATLAS IP",
  description: products.datacenter.oneLiner,
  openGraph: {
    title: "Datacenter Proxies | GHOSTATLAS IP",
    description: products.datacenter.oneLiner,
    images: ["https://ghostatlas.com/og/datacenter.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Datacenter Proxies | GHOSTATLAS IP",
    description: products.datacenter.oneLiner,
    images: ["https://ghostatlas.com/og/datacenter.png"]
  }
};

export default function DatacenterProductPage() {
  return <ProductPage product={products.datacenter} />;
}
