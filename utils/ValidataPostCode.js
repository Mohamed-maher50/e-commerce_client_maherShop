export const isValidEgyptPostalCode = (postalCode) => {
  // Customize the regular expression based on the expected format
  const postalCodePattern = /^\d{5}$/; // Example: 12345

  return postalCodePattern.test(postalCode);
};
