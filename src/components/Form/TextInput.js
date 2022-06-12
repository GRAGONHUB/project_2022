import ConnectForm from './ConnectForm'

const TextInput = ({ name }) => (
  <ConnectForm>{({ register }) => <input {...register(name)} type={'text'} />}</ConnectForm>
)

export default TextInput
