export default function CategorySummary({ category, expenses }) {
  // use reduce method to sum up total expenses in the category
  const categoryTotal = expenses.reduce(
    (currentExpense, nextExpense) => currentExpense + nextExpense.amount,
    0
  );

  return (
    <section
      aria-labelledby="category-summary-heading"
      className="bg-white p-4 rounded-md"
    >
      <h3 id="category-summary-heading" className="text-lg font-semibold">
        {category ?? "All Categories"}
      </h3>
      <p className="text-sm text-gray-600">
        Total Spent: ${categoryTotal.toFixed(2)}
      </p>
    </section>
  );
}
