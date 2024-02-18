export default function isValidEgyptianNumber(number) {
  // Regular expression for validating Egyptian phone numbers without +20
  const egyptianNumberRegex = /^(01[0-2])\d{8}$/;

  return egyptianNumberRegex.test(number);
}
