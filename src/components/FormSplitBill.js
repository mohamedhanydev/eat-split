import { useState } from "react";
import Button from "./Button.js";
export default function FormSplitBill({
  selected,
  onSelected,
  friends,
  onFriends,
}) {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [willPay, setWillPay] = useState("user");
  if (!selected) return null;
  const selectedFriend = friends.find((cur) => cur.id === selected);
  function handleSplitBill() {
    const amount = bill - myExpense;
    onFriends(
      friends.map((friend) => {
        if (friend.id === selected) {
          return {
            ...friend,
            balance:
              willPay === "user"
                ? friend.balance - amount
                : friend.balance + amount,
          };
        }
        return friend;
      })
    );
    onSelected(null);
    setWillPay("user");
    setBill("");
    setMyExpense("");
  }

  return selected ? (
    <form className="form-split-bill" onSubmit={handleSplitBill}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰 Bill value</label>
      <input
        type="number"
        value={bill}
        required
        onChange={(e) => setBill(+e.target.value)}
      />
      <label>🧍‍♀️ Your expense</label>
      <input
        type="number"
        value={myExpense}
        onChange={(e) => setMyExpense(+e.target.value)}
        max={bill}
      />
      <label>👫 {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={!bill ? "" : bill - myExpense} />
      <label>🤑 Who is paying the bill</label>
      <select value={willPay} onChange={(e) => setWillPay(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  ) : null;
}
