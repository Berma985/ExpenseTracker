import { Component, input, inject } from '@angular/core';
import { Expense } from '../../models/expense';
import { ExpenseService } from '../../services/expense-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-expense-item',
  imports: [RouterLink],
  templateUrl: './expense-item.html',
  styleUrl: './expense-item.css',
})
export class ExpenseItem {
  expense = input.required<Expense>();
  expenseService = inject(ExpenseService);

  getCategoryColor() {
    switch (this.expense().category) {
      case 'Work':
        return 'blue';
      case 'Personal':
        return 'orange';
      case 'Grocery':
        return 'green';
      case 'Utilities':
        return 'gold';
      case 'Shopping':
        return 'purple';
      case 'Travel':
        return 'cyan';
      case 'Food':
        return 'brown';
    }
  }

  editExpense() {}
  deleteExpense() {
    this.expenseService.removeExpense(this.expense().id);
  }
}
