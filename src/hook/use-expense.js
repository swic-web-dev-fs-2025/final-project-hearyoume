import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";

export default function useExpense() {
  const [expenses, setExpenses] = useLocalStorage("expenses", []);
  const [filter, setFilter] = useState("all");
  const [amount, setAmount] = useState("");
  const [place, setPlace] = useState("");
  const [category, setCategory] = useState("Food");
  const [recurring, setRecurring] = useState("one-time");

  // Persistent counter for unique IDs
  const [counter, setCounter] = useLocalStorage("expenseCounter", 0);

  const addExpense = (expense) => {
    const newId = counter + 1;
    const newExpense = { id: newId, ...expense };
    setExpenses([...expenses, newExpense]);
    setCounter(newId); // update counter in localStorage
  };

  return {
    expenses,
    setExpenses,
    filter,
    setFilter,
    amount,
    setAmount,
    place,
    setPlace,
    category,
    setCategory,
    recurring,
    setRecurring,
    addExpense,
  };
}
