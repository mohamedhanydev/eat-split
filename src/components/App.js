import { useState } from "react";
import Friends from "./Friends";
import FormSplitBill from "./FormSplitBill.js";
const initialFriends = [
  {
    id: 118836,
    name: "Abdo",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
    isSelected: false,
  },
  {
    id: 933372,
    name: "smtyon",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
    isSelected: false,
  },
  {
    id: 499476,
    name: "seoudi",
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
      <FormSplitBill
        selected={selected}
        friends={friends}
        onFriends={setFriends}
        onSelected={setSelected}
      />
    </div>
  );
}
