import PropTypes from 'prop-types'

export const FriendsListItem = ({ avatar,name,isOnline,id}) => {
    return (
        <li className="item">
            <span className="status">{ isOnline}</span>
            <img className="avatar" src={avatar } alt="User avatar" width="48" />
            <p className="name">{ name}</p>
</li>
    )
}

FriendsListItem.propType = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id:PropTypes.number.isRequired,
}