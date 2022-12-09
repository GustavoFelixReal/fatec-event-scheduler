import * as yup from 'yup'

export const createEventValidator = yup.object().shape({
  title: yup.string().required('Título do evento é obrigatório'),
  description: yup.string().required('Descrição do evento é obrigatório'),
  objective: yup.string().required('Objetivo é obrigatório'),
  contactDetails: yup.string().max(300),
  startDate: yup.string().required('Data e hora de início são obrigatórias'),
  endDate: yup
    .string()
    .required('Data e hora de encerramento são obrigatórias'),
  location: yup.string().required('Localização do evento é obrigatória')
})
