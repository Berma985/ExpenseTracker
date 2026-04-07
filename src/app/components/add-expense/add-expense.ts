import { Component, inject, signal } from '@angular/core';
import { ExpenseService } from '../../services/expense-service';
import { FormsModule } from '@angular/forms';
import { ExpenseCategory } from '../../models/expense';

@Component({
  selector: 'app-add-expense',
  imports: [FormsModule],
  templateUrl: './add-expense.html',
  styleUrl: './add-expense.css',
})
export class AddExpense {
  expenseTitle = signal('');
  expenseAmount = signal(0);
  expenseCategory = signal<ExpenseCategory>('Personal');
  message = signal('');

  messageColor = signal('green');
  addExpense() {
    if (!this.expenseTitle() || this.expenseAmount() <= 0) {
      this.message.set('Please enter a valid title and amount.');
      this.messageColor.set('red');
      return;
    }
    this.expenseService.addExpense(
      this.expenseTitle(),
      this.expenseAmount(),
      this.expenseCategory(),
    );
    this.expenseTitle.set('');
    this.expenseAmount.set(0);
    this.expenseCategory.set('Personal');
    this.message.set('Expense added successfully!');
    this.messageColor.set('green');
  }

  expenseService = inject(ExpenseService);
}
