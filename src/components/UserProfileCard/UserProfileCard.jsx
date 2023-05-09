import PropTypes from "prop-types";
import css from './UserProfileCard.module.css'

export const UserProfileCard = ({ avatar, username, tag, location, stats }) => {
    return (
        <div className={css.profile}>
  <div className="description">
    <img
      src={avatar}
      alt={username}
      className="avatar"
    />
                <p className={css.fullName}>{username }</p>
                <p className={css.tagLocation}>@{tag}</p>
                <p className={css.tagLocation}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.statsItem}>
      <span className={css.label}>Followers</span>
                    <span className={css.quantity}>{stats.followers }</span>
    </li>
    <li className={css.statsItem}>
      <span className={css.label}>Views</span>
                    <span className={css.quantity}>{stats.views }</span>
    </li>
    <li className={css.statsItem}>
      <span className={css.label}>Likes</span>
                    <span className={css.quantity}>{ stats.likes}</span>
    </li>
  </ul>
</div>)
}

UserProfileCard.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
        views:PropTypes.number.isRequired
    }).isRequired
}