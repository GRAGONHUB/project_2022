import PropTypes from 'prop-types'
import ConnectForm from './ConnectForm'

const TextInput = ({ name, label, type = 'text' }) => (
  <ConnectForm>
    {({ register }) => (
      <div className="form-control">
        {label && (
          <label htmlFor={name} className="label">
            <span className="label-text">{label}</span>
          </label>
        )}

        <input className="input input-bordered" {...register(name)} type={type} />
        {/* <span className=""></span> */}
      </div>
    )}
  </ConnectForm>
)

const props = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password']),
}

TextInput.propTypes = props

TextInput.defaultProps = {
  type: 'text',
}

export default TextInput
