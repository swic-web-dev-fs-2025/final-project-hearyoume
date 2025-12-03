import BudgetForm from "./components/budget-form";
import CategorySummary from "./components/category-summary";
import ExpenseList from "./components/expenses/expense-list";
import FilterControls from "./components/filter-controls";
import useExpense from "./hook/use-expense";

export default function App() {
  // Main application component
  const { expenses, setExpenses, filter, setFilter } = useExpense();

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };
  // Filter expenses based on recurrence type
  const filteredExpenses = expenses.filter((expense) => {
    if (filter === "all") return true;
    return expense.recurring === filter;
  });

  return (
    <div>
      <h1>Budget Tracker</h1>
      <BudgetForm onAddExpense={handleAddExpense} />
      <FilterControls filter={filter} setFilter={setFilter} />
      <ExpenseList expenses={filteredExpenses} />
      <CategorySummary expenses={expenses} />
    </div>
  );
}
