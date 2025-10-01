import Button from "./Button";
export default function Friend({ data, selected, onSelected }) {
  return (
    <li className={selected === data.id ? "selected" : ""}>
      <img src={data.image} alt={data.name} />
      <h3>{data.name}</h3>
      <p className={!data.balance ? "" : data.balance > 0 ? "red" : "green"}>
        {!data.balance
          ? `You and ${data.name} are even`
          : data.balance > 0
          ? `You owe ${data.name} ${data.balance}€`
          : `${data.name} owes you ${Math.abs(data.balance)}€`}
      </p>
      <Button
        onClick={() => {
          if (selected === data.id) {
            onSelected(null);
          } else onSelected(data.id);
        }}
      >
        {selected === data.id ? "close" : "select"}
      </Button>
    </li>
  );
}
