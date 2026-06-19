import { NextResponse } from "next/server";

import { createProxyOrder, type ProxyOrderInput } from "@/lib/proxycheap/client";

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<ProxyOrderInput>;
  const order = await createProxyOrder({
    product: body.product ?? "residential",
    quantity: Number(body.quantity ?? 1),
    region: body.region
  });

  return NextResponse.json(order);
}
