exports.errorMsg = (status, message) => {
  return {
    code: status,
    message,
  }
}
