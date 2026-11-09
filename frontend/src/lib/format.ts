/** Format a number as Nepalese Rupees for the storefront. */
export function formatPrice(amount: number): string {
  return `Rs ${amount.toLocaleString("en-IN")}`;
}
