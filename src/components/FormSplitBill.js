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
  function handleSplitBill() {
    const amount = bill - myExpense;
    onFriends(
      friends.map((friend) => {
        if (friend.id === selected) {
          return {
            ...friend,
            balance: willPay
              ? friend.balance - amount
              : friend.balance + amount,
          };
        }
        return friend;
      })
    );
    onSelected(null);
  }

  return selected ? (
    <form className="form-split-bill">
      <h2>Split a bill with Clark</h2>
      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />
      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={myExpense}
        onChange={(e) => setMyExpense(+e.target.value)}
      />
      <label>👫 {selectedFriend.name}'s expense</label>
      <input
        type="text"
        disabled
        value={bill && myExpense ? bill - myExpense : ""}
      />
      <label>🤑 Who is paying the bill</label>
      <select value={willPay} onChange={(e) => setWillPay(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button onClick={handleSplitBill}>Split bill</Button>
    </form>
  ) : null;
}
