import { NextResponse } from "next/server";

import { createPayPalOrder } from "@/lib/paypal/client";

export async function POST(request: Request) {
  const body = await request.json();
  const order = await createPayPalOrder({
    amount: String(body.amount ?? "0.00"),
    currency: String(body.currency ?? "USD"),
    description: String(body.description ?? "GHOSTATLAS IP credit purchase")
  });

  return NextResponse.json(order);
}
