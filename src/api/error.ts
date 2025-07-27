export const errorCatch = (error: any) => {
    const message = error?.response?.data?.message || error.message || "An unexpected error occurred";
    return message ? typeof error.response?.data?.message === "string"
        ? message[0]
        : message
        : error.message
}