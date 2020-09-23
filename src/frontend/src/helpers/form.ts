import { validateSync, ValidationError } from 'class-validator'
import { ChangeEvent, SyntheticEvent } from 'react'

export interface FormInput {
  value: string
  error?: string
  blurred?: boolean
}

export interface FormInputs {
  [key: string]: FormInput
}

export const updateFormFromChange = (
  event: ChangeEvent<HTMLInputElement>,
  form: FormInputs,
  FormInputClass: any,
): FormInputs => {
  event.persist()

  const updatedForm: FormInputs = {
    ...form,
    [event.target.name]: {
      value: event.target.value,
    },
  }

  let formInputs: any = new FormInputClass() as any

  for (var key in updatedForm) {
    if (updatedForm.hasOwnProperty(key)) {
      formInputs[key] = updatedForm[key].value
    }
  }

  validateSync(formInputs).forEach((error: ValidationError) => {
    const firstConstraint = error && error.constraints
    if (firstConstraint && updatedForm[error.property])
      updatedForm[error.property].error = firstConstraint[Object.keys(firstConstraint)[0]]
  })

  return updatedForm
}

export const updateFormFromBlur = (event: ChangeEvent<HTMLInputElement>, form: FormInputs) => {
  const updatedForm = {
    ...form,
    [event.target.name]: {
      ...form[event.target.name],
      blurred: true,
    },
  }
  return updatedForm
}

export const updateFormFromSubmit = (
  event: SyntheticEvent,
  form: FormInputs,
  FormInputClass: any,
): FormInputs => {
  event.preventDefault()

  const updatedForm: FormInputs = JSON.parse(JSON.stringify(form))

  let formInputs: any = new FormInputClass() as any

  for (var key in updatedForm) {
    updatedForm[key].blurred = true
    if (updatedForm.hasOwnProperty(key)) {
      formInputs[key] = updatedForm[key].value
    }
  }

  validateSync(formInputs).forEach((error: ValidationError) => {
    const firstConstraint = error && error.constraints
    if (firstConstraint && updatedForm[error.property])
      updatedForm[error.property].error = firstConstraint[Object.keys(firstConstraint)[0]]
  })

  return updatedForm
}

export const getInputStatus = (inputObject: FormInput): 'error' | 'success' | undefined => {
  if (!inputObject.blurred) return undefined
  else return inputObject.error ? 'error' : 'success'
}

export const getErrorMessage = (inputObject: FormInput): string | undefined => {
  return inputObject.blurred ? inputObject.error : undefined
}
