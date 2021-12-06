export const getErrorMsg = (err, defaultMsg = 'Something went wrong!') => {
    if (err.response.data) {
        return err.response.data.message;
    }

    return defaultMsg;
}