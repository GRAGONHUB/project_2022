import { useFormContext } from 'react-hook-form'

export const ConnectForm = ({ children }) => {
  const methods = useFormContext()
  console.log('🚀 ~ file: ConnectForm.js ~ line 5 ~ ConnectForm ~ methods', methods)

  return children({ ...methods })
}

export default ConnectForm
