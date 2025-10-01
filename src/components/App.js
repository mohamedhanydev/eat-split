import { useState } from "react";
import Friends from "./Friends";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
    isSelected: false,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
    isSelected: false,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
    isSelected: false,
  },
];
export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [selected, setSelected] = useState(null);

  return (
    <div className="app">
      <Friends
        onFriends={setFriends}
        friends={friends}
        selected={selected}
        onSelected={setSelected}
      />
    </div>
  );
}
