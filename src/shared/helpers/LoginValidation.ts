export const validations = (email: string, password: string) => {
  const regex = /^[\w-\\.]+@([\w-]+.)+[\w-]{2,4}$/g;
  const MIN_CARACTERES = 5;
  return !(regex.test(email) && password.length > MIN_CARACTERES);
};

export const nada = 'nada';
