export function checkPassword(password) {
  let score = 0;

  if (password.length > 8) score++;
  if (/\d/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score === 3) return "strong";
  if (score === 2) return "medium";
  return "weak";
}