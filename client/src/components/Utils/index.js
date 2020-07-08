export default function formatCurrency(num) {
  return innerHTML('&euro;') + Number(num).toLocaleString();
}
