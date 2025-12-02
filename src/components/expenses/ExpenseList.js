import ExpenseItem from "./expenses/ExpenseItem";

export default function ExpenseList({ expenses }) {
  if (expenses.length === 0) return <p>No expenses to display.</p>;

  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          <ExpenseItem expense={expense} />
        </li>
      ))}
    </ul>
  );
}
