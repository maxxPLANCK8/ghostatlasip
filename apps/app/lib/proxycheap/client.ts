export type ProxyOrderInput = {
  product: "residential" | "datacenter" | "static-residential" | "mobile";
  quantity: number;
  region?: string;
};

export function getProxycheapConfig() {
  return {
    apiKey: process.env.PROXYCHEAP_API_KEY,
    baseUrl: process.env.PROXYCHEAP_API_URL ?? "https://api.proxycheap.com"
  };
}

export async function createProxyOrder(input: ProxyOrderInput) {
  return {
    id: "proxy_order_placeholder",
    status: "queued",
    ...input
  };
}
