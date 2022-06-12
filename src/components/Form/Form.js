import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useDeepCompareEffect } from 'react-use'

const Form = ({ validationSchema = yup.object({}), defaultValues = {}, onSubmit, children }) => {
  // useDeepCompareEffect(() => {
  //   const formValue = methods.getValues()
  //   Object.keys(formValue).forEach((key) => {
  //     try {
  //       methods.setValue(key, defaultValues[key])
  //     } catch (error) {
  //       throw error
  //     }
  //   })
  //   return () => {}
  // }, defaultValues)
  const methods = useForm({ defaultValues, resolver: yupResolver(validationSchema) })
  const handleSubmit = (data, e) => {
    onSubmit(data)
  }
  return (
    <FormProvider>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>{children}</form>
    </FormProvider>
  )
}
export default Form
