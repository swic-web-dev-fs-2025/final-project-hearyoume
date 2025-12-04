/**
 * Check if amount is a valid positive number.
 * @param {number|string} amount - The expense amount entered by the user.
 * @returns {boolean} True if valid, false otherwise.
 */
export function isValidAmount(amount) {
  const num = Number(amount);
  return !isNaN(num) && num > 0;
}

/**
 * Check if place is between 3 and 50 characters.
 * @param {string} place - The location where the expense was made.
 * @returns {boolean} True if valid, false otherwise.
 */
export function isValidPlace(place) {
  if (!place) return false;
  const trimmed = place.trim();
  return trimmed.length >= 3 && trimmed.length <= 50;
}
