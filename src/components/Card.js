import PropTypes from 'prop-types'
import Avatar from './Avatar'

const Card = ({ content }) => (
  <div className="card shadow-xl mb-4">
    <div>
      <img src={content.image} alt="content-images" className="w-full" />
    </div>
    <div className="card-body p-2 sm:p-4">
      <p>{content.title}</p>
      <Avatar profile={content.profile} isShowName />
    </div>
  </div>
)

Card.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    profile: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default Card
