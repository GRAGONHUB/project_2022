import ConnectForm from './ConnectForm'

const TextInput = ({ name, label, type = 'text' }) => (
  <ConnectForm>
    {({ register }) => (
      <div className="form-control">
        {label && (
          <label for={name} class="label">
            <span class="label-text">{label}</span>
          </label>
        )}

        <input className="input input-bordered" {...register(name)} type={type} />
        {/* <span className=""></span> */}
      </div>
    )}
  </ConnectForm>
)

export default TextInput
