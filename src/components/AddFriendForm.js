import { useState } from "react";
import Button from "./Button";

export default function AddFriendForm({ onFriends, friends }) {
  const [addFriend, setAddFriend] = useState(false);
  const [newFriend, setNewFriend] = useState({
    name: "",
    url: "https://i.pravatar.cc/48",
  });
  function handleOnFriends(e) {
    e.preventDefault();
    const toAddFriend = {
      id: Date.now(),
      ...newFriend,
    };
    onFriends([...friends, toAddFriend]);
    setAddFriend(!addFriend);
  }
  return !addFriend ? (
    <Button onClick={() => setAddFriend(!addFriend)}>Add Friend</Button>
  ) : (
    <>
      <form className="form-add-friend" onSubmit={handleOnFriends}>
        <label for="name">👫 Friend name</label>
        <input
          type="text"
          id="name"
          required
          value={newFriend.name}
          onChange={(e) => setNewFriend({ ...newFriend, name: e.target.value })}
        />
        <label for="image-url">🌄 Image URL</label>
        <input
          type="text"
          id="image-url"
          value={newFriend.url}
          onChange={(e) => setNewFriend({ ...newFriend, url: e.target.value })}
        />
        <Button>Add New Friend</Button>
      </form>
      <Button onClick={() => setAddFriend(!addFriend)}>close</Button>
    </>
  );
}
