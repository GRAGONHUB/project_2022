import PropTypes from 'prop-types'

const Card = ({ content }) => (
  <div className="card shadow-xl">
    <figure>
      <img src={content.image} alt="content-images" />
    </figure>
  </div>
)

Card.propTypes = {
  content: PropTypes.shape({
    image: PropTypes.string.isRequired,
  }).isRequired,
}

export default Card
