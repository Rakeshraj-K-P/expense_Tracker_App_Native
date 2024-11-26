import { StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import IconButton from '../UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../UI/Button';
import { useDispatch } from 'react-redux';
import {
  addExpenses,
  deleteExpenses,
  updateExpenses,
} from '../store/redux/slices/expensesSlice';

const ManageExpense = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    dispatch(deleteExpenses(editedExpenseId));
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if (isEditing) {
      dispatch(
        updateExpenses({
          id: editedExpenseId,
          updateExpenses: {
            description: 'Updated description',
            amount: 99.99,
            date: 'dummy',
          },
        })
      );
    } else {
      dispatch(
        addExpenses({
          id: `e${Math.random().toString(36).substr(2, 9)}`,
          description: 'New Expense',
          amount: 50.0,
          date: 'dummy',
        })
      );
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});
