import React from 'react';
import { Link } from 'react-router-dom';

// destructure the props
const ExpenseListItem = ({id, description, amount, createdAt}) => {
  return (
    <div>
      <p>Description: {description}</p>
      <p>Amount: {amount}</p>
      <p>Created At: {createdAt}</p>
      <Link to={`/edit/${id}`}>Edit</Link>
    </div>
  );
};
export default ExpenseListItem;

