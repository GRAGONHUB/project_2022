import PropTypes from 'prop-types'

const SubmitButton = ({ children }) => (
  <div className="form-control mt-6">
    <button className="btn">{children}</button>
  </div>
)

SubmitButton.propTypes = {
  children: PropTypes.string,
}

SubmitButton.defaultProps = {
  children: 'save',
}

export default SubmitButton
