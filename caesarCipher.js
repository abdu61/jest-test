function shiftChar(c, s) {
  if (!/[a-zA-Z]/.test(c)) return c;
  const base = c === c.toUpperCase() ? 65 : 97;
  return String.fromCharCode(((c.charCodeAt(0) - base + s) % 26) + base);
}

export default function caesarCipher(str, shift) {
  return str
    .split("")
    .map((c) => shiftChar(c, shift))
    .join("");
}
