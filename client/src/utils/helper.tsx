export const sanitizeInput = (input: any): string => {
  return String(input).replace(/[<>"'`;()]/g, '').trim();
};