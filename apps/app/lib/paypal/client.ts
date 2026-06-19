export type PayPalCheckoutInput = {
  amount: string;
  currency: string;
  description: string;
};

export function getPayPalConfig() {
  return {
    clientId: process.env.PAYPAL_CLIENT_ID,
    clientSecret: process.env.PAYPAL_CLIENT_SECRET,
    environment: process.env.PAYPAL_ENVIRONMENT ?? "sandbox"
  };
}

export async function createPayPalOrder(input: PayPalCheckoutInput) {
  return {
    id: "paypal_order_placeholder",
    status: "created",
    ...input
  };
}
