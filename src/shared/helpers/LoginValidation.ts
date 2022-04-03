export const validations = (email: string, password: string) => {
  const regex = /^[\w-\\.]+@([\w-]+.)+[\w-]{2,4}$/g; // eslint-disable-line security/detect-unsafe-regex
  const MIN_CARACTERES = 5;
  return !(regex.test(email) && password.length > MIN_CARACTERES);
};
