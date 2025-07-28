// export const errorCatch = (error: unknown): string => {
//   const defaultMessage = "An unexpected error occurred";

//   if (!error || typeof error !== "object") return defaultMessage;

//   const err = error as any;

//   const serverMessage = err?.response?.data?.message;

//   if (Array.isArray(serverMessage)) {
//     return serverMessage[0]; // ['Email is invalid', 'Password too short']
//   }

//   return err.message || defaultMessage;
// };
export const errorCatch = (error: any): string => {
  const message = error?.response?.data?.message || error.message || "An unexpected error occurred";
  return message ? typeof error.response?.data?.message === "string"
    ? message[0]
    : message
    : error.message
}