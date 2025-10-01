import Friend from "./Friend.js";
export default function Friends({ friends, selected, onSelected }) {
  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friend data={friend} selected={selected} onSelected={onSelected} />
        ))}
      </ul>
    </div>
  );
}
