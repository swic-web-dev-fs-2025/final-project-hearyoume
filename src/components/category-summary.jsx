import { formatCurrency } from "../utils/format-currency";

export default function CategorySummary({ expenses = [] }) {
  // Group expenses by category
  const grouped = expenses.reduce((acc, expense) => {
    const cat = expense.category ?? "Uncategorized";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(expense);
    return acc;
  }, {});

  return (
    <section className="bg-white p-4 rounded-md mt-6 space-y-4">
      {Object.entries(grouped).map(([category, categoryExpenses]) => {
        const categoryTotal = categoryExpenses.reduce(
          (sum, expense) => sum + Number(expense.amount || 0),
          0
        );

        return (
          <div key={category} className="border-t pt-2">
            <h3 className="text-md font-medium">{category}</h3>
            <p className="text-sm text-gray-600">
              Total Spent: {formatCurrency(categoryTotal)}
            </p>
            <p className="text-xs text-gray-500">
              {categoryExpenses.length}{" "}
              {categoryExpenses.length === 1 ? "expense" : "expenses"}
            </p>
          </div>
        );
      })}
    </section>
  );
}
