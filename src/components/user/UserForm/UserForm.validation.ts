import * as yup from 'yup'

export const userFormValidator = yup.object().shape({
  name: yup.string().required()
})
