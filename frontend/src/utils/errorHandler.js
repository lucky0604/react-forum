export const apiErrorHandler = error => {
  try {
    if (!error.response) {
      return 'Error: Network error'
    } else if (error.response.data) {
      const errorResData = error.response.data
      if (errorResData.detail) {
        if (errorResData.detail === 'Invalid Token') {
          return 'Invalid Token. Please re-login.'
        }
        return errorResData.detail
      }
      if (errorResData[0]) return errorResData[0]
      const key = Object.keys(errorResData)[0]
      const errorString = errorResData[key][0]
      if (['non_field_errors', 'detail'].indexOf(key) >= 0) {
        return errorString
      }
      const errorField = String(key).replace('_', ' ')
      return (
        errorField.charAt(0).toUpperCase() +
        errorField.substring(1) +
        ': ' + errorString
      )
    }
  } catch (error) {
    console.log(error)
    return 'Something wrong happended. Please report this.'
  }
}