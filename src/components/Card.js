import PropTypes from 'prop-types'

const Card = ({ children }) => (
  <div className="p-4 max-w-sm max-w-md md bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
    {children}
  </div>
)

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}

export default Card
