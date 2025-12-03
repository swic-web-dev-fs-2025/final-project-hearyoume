import { useState } from "react";

export default function useExpense() {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState("all");
  const [amount, setAmount] = useState("");
  const [place, setPlace] = useState("");
  const [category, setCategory] = useState("Food");
  const [recurring, setRecurring] = useState("one-time");

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
  };
}
