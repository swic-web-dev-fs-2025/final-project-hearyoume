export default function CategorySummary({ category, expenses }) {
  // use reduce method to sum up total expenses in the category
  const categoryTotal = expenses.reduce(
    (currentExpense, nextExpense) => currentExpense + nextExpense.amount,
    0
  );

  return (
    <section aria-labelledby="category-summary-heading">
      <h3 id="category-summary-heading">{category ?? "All Categories"}</h3>
      <p>Total Spent: ${categoryTotal.toFixed(2)}</p>
    </section>
  );
}
