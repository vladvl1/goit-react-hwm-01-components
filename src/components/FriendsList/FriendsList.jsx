import PropTypes from 'prop-types'
import { FriendsListItem } from './FriendsListItems'

export const FriendsList = ({ friends }) => {
    return (
        <ul className="friend-list">
           {friends.map(({ id, name, avatar, isOnline }) => (
                    <FriendsListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}   
                    />
                ))} 
 </ul>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired
        })
    ),
}