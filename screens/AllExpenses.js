import { StyleSheet, Text, View } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

import { useSelector } from 'react-redux';

const AllExpenses = () => {
  const expenses = useSelector((state) => state.expenses.dummyExpenses);
  return <ExpensesOutput expenses={expenses} expensesPeriod="Total" />;
};

export default AllExpenses;

const styles = StyleSheet.create({});
