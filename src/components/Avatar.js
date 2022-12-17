import React from 'react'
import PropTypes from 'prop-types'

function Avatar({ profile, isShowName }) {
  return (
    <div className="flex">
      <div className="btn btn-ghost avatar px-0">
        <div className="w-7 sm:w-8 lg:w-10 rounded-full">
          <img src={profile.image} alt="profile-logo" />
        </div>
      </div>
      {isShowName && <h2 className="card-title pl-2">{profile.name}</h2>}
    </div>
  )
}

Avatar.propTypes = {
  profile: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  isShowName: PropTypes.bool,
}

Avatar.defaultProps = {
  isShowName: false,
}

export default Avatar
