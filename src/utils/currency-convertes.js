export function rupiahConverter(cur, value) {
  if (cur === "SGD") {
    let price = value * 10459;
    return price.toLocaleString();
  } else if (cur === "USD") {
    let price = value * 14155;
    return price.toLocaleString();
  } else if (cur === "EUR") {
    let price = value * 10459;
    return price.toLocaleString();
  }
}
