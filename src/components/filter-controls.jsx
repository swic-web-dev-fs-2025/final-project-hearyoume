export default function FilterControls({ filter, setFilter }) {
  // Renders radio buttons to filter expenses by recurrence type
  return (
    <nav aria-label="Filter controls">
      <fieldset>
        <legend>Filter by Recurrence</legend>
        <div>
          <input
            id="filter-all"
            type="radio"
            name="filter"
            value="all"
            checked={filter === "all"}
            onChange={(e) => setFilter(e.target.value)}
          />
          <label htmlFor="filter-all">All</label>
        </div>
        <div>
          <input
            id="filter-one-time"
            type="radio"
            name="filter"
            value="one-time"
            checked={filter === "one-time"}
            onChange={(e) => setFilter(e.target.value)}
          />
          <label htmlFor="filter-one-time">One-time</label>
        </div>
        <div>
          <input
            id="filter-monthly"
            type="radio"
            name="filter"
            value="monthly"
            checked={filter === "monthly"}
            onChange={(e) => setFilter(e.target.value)}
          />
          <label htmlFor="filter-monthly">Monthly</label>
        </div>
      </fieldset>
    </nav>
  );
}
