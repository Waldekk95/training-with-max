import "./ExpenseDate.css";

function ExpenseDate(props) {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("en-GB", { month: "long" });
  const day = props.date.toLocaleString("en-GB", { day: "numeric" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
