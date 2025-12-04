import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";

export default function useExpense() {
  const [expenses, setExpenses] = useLocalStorage("expenses", []);
  const [filter, setFilter] = useState("all");
  const [amount, setAmount] = useState("");
  const [place, setPlace] = useState("");
  const [category, setCategory] = useState("Food");
  const [recurring, setRecurring] = useState("one-time");

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return {
    expenses,
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
