const regEx = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
// /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
const errors: string[] = []
export const IsEmail = (data: string): string[] => {
  if (!regEx.test(data)) {
    !errors.some((name) => (name = 'err_email_invalid'))
      ? errors.push('err_email_invalid')
      : null
  } else {
    errors.pop()
  }
  return errors
}
//   errors.push(regEx.test(data) ? 'err_email_invalid' : undefined)
