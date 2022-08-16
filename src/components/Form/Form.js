import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import PropTypes from 'prop-types'
// import { useDeepCompareEffect } from 'react-use'

const Form = ({ validationSchema, defaultValues, onSubmit, children }) => {
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
  const handleSubmit = (data) => {
    onSubmit(data)
  }
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>{children}</form>
    </FormProvider>
  )
}

Form.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  onSubmit: PropTypes.func.isRequired,
  defaultValues: PropTypes.object,
  validationSchema: PropTypes.object,
}

Form.defaultProps = {
  validationSchema: yup.object({}),
  defaultValues: {},
}

export default Form
