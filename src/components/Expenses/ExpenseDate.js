import "./ExpenseDate.css";

function ExpenseDate(props) {
  const expenseDate = props.date;
  const month = expenseDate.toLocaleString("es-CO", { month: "long" });
  const day = expenseDate.toLocaleString("es-CO", { day: "2-digit" });
  const year = expenseDate.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
