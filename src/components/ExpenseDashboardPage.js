import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

// const ExpenseDashboardPage = () => (
//   <div>
//     This is from my dashboard component.
//   </div>
// );

// export default ExpenseDashboardPage;


const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;