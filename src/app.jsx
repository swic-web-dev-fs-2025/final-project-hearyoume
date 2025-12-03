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
    <>
      <header>
        <h1>Budget Tracker</h1>
      </header>
      <main>
        <section aria-labelledby="add-expense-heading">
          <h2 id="add-expense-heading" className="sr-only">
            Add Expense
          </h2>
          <BudgetForm onAddExpense={handleAddExpense} />
        </section>

        <nav aria-label="Filters">
          <FilterControls filter={filter} setFilter={setFilter} />
        </nav>

        <section aria-labelledby="expenses-heading">
          <h2 id="expenses-heading">Expenses</h2>
          <ExpenseList expenses={filteredExpenses} />
        </section>

        <aside aria-labelledby="summary-heading">
          <h2 id="summary-heading">Category Summary</h2>
          <CategorySummary expenses={expenses} />
        </aside>
      </main>
    </>
  );
}
