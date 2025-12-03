export default function FilterControls({ filter, setFilter }) {
  // Renders radio buttons to filter expenses by recurrence type
  return (
    <nav
      aria-label="Filter controls"
      className="bg-white p-3 rounded-md shadow"
    >
      <fieldset>
        <legend className="text-sm font-medium mb-2">
          Filter by Recurrence
        </legend>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <input
              id="filter-all"
              type="radio"
              name="filter"
              value="all"
              checked={filter === "all"}
              onChange={(e) => setFilter(e.target.value)}
              className="h-4 w-4"
            />
            <label htmlFor="filter-all" className="ml-2 text-sm">
              All
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-one-time"
              type="radio"
              name="filter"
              value="one-time"
              checked={filter === "one-time"}
              onChange={(e) => setFilter(e.target.value)}
              className="h-4 w-4"
            />
            <label htmlFor="filter-one-time" className="ml-2 text-sm">
              One-time
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="filter-monthly"
              type="radio"
              name="filter"
              value="monthly"
              checked={filter === "monthly"}
              onChange={(e) => setFilter(e.target.value)}
              className="h-4 w-4"
            />
            <label htmlFor="filter-monthly" className="ml-2 text-sm">
              Monthly
            </label>
          </div>
        </div>
      </fieldset>
    </nav>
  );
}
