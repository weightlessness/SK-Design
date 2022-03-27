import { IFields } from '../../types/Intefaces'

const Validation = (fields: IFields) => {
  const ValidName = () => {
    return fields.name.length > 1
  }

  const ValidNumber = () => {
    // eslint-disable-next-line prefer-regex-literals
    const reg = new RegExp('\\([0-9][0-9][0-9]\\)[0-9]{3}-[0-9]{2}-[0-9]{2}')
    return reg.test(fields.telephone)
  }

  const ValidEmail = () => {
    // eslint-disable-next-line prefer-regex-literals
    const reg = new RegExp('.+@.+..+')
    return reg.test(fields.email)
  }

  const ValidProfile = () => {
    return fields.profile.length > 2
  }

  const ValidCity = () => {
    return fields.city.length > 1
  }

  const Validate = () => {
    return (
      ValidName() &&
      ValidNumber() &&
      ValidEmail() &&
      ValidProfile() &&
      ValidCity()
    )
  }

  const Validation = {
    name: ValidName,
    telephone: ValidNumber,
    email: ValidEmail,
    profile: ValidProfile,
    city: ValidCity,
    all: Validate
  }

  return Validation
}

export default Validation
