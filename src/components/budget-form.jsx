import useExpense from "../hook/use-expense";

export default function BudgetForm({ onAddExpense }) {
  const {
    amount,
    setAmount,
    place,
    setPlace,
    category,
    setCategory,
    recurring,
    setRecurring,
  } = useExpense();

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
      amount,
      place,
      category,
      recurring,
    };
    onAddExpense(expense);
    setAmount("");
    setPlace("");
    setCategory("Food");
    setRecurring("one-time");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="amount-input">Amount:</label>
        <input
          id="amount-input"
          type="number"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="place-input">Where it was spent:</label>
        <input
          id="place-input"
          type="text"
          name="place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="category-select">Category:</label>
        <select
          id="category-select"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Groceries">Groceries</option>
          <option value="Eating Out">Eating Out</option>
          <option value="Transportation">Transportation</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Utilities">Utilities</option>
          <option value="Health">Health</option>
          <option value="Amazon">Amazon</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>Recurrence</legend>
        <div>
          <input
            id="recurring-monthly"
            type="radio"
            name="recurring"
            value="monthly"
            checked={recurring === "monthly"}
            onChange={(e) => setRecurring(e.target.value)}
          />
          <label htmlFor="recurring-monthly">Monthly</label>
        </div>
        <div>
          <input
            id="recurring-one-time"
            type="radio"
            name="recurring"
            value="one-time"
            checked={recurring === "one-time"}
            onChange={(e) => setRecurring(e.target.value)}
          />
          <label htmlFor="recurring-one-time">One-time</label>
        </div>
      </fieldset>
      <button type="submit">Add Expense</button>
    </form>
  );
}
