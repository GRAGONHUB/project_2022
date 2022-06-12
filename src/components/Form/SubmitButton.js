import ConnectForm from './ConnectForm'

const SubmitButton = ({ children }) => (
  <ConnectForm>
    <input type="submit">{children}</input>
  </ConnectForm>
)

export default SubmitButton
