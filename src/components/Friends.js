import Friend from "./Friend.js";
import AddFriendForm from "./AddFriendForm.js";
export default function Friends({ onFriends, friends, selected, onSelected }) {
  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friend
            key={friend.id}
            data={friend}
            selected={selected}
            onSelected={onSelected}
          />
        ))}
      </ul>
      <AddFriendForm onFriends={onFriends} friends={friends} />
    </div>
  );
}
