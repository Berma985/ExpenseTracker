import { Component, inject, input, signal, computed } from '@angular/core';
import { ExpenseService } from '../../services/expense-service';
import { FormsModule } from '@angular/forms';
import { Expense, ExpenseCategory } from '../../models/expense';
import { RouterLinkWithHref, Router } from '@angular/router';

@Component({
  selector: 'app-edit-expense',
  imports: [FormsModule, RouterLinkWithHref],
  templateUrl: './edit-expense.html',
  styleUrl: './edit-expense.css',
})
export class EditExpense {
  expenseService = inject(ExpenseService);

  router = inject(Router);

  expense = signal<Expense | null>(null);

  Id = input.required<string>();
  ngOnInit() {
    const expense: Expense | null = this.expenseService.getExpenseById(this.Id());
    this.title.set(expense?.title || null);
    this.amount.set(expense?.amount || null);
    this.category.set(expense?.category || null);
  }

  // id = signal(this.expense()!.id);
  title = signal<string | null>(null);

  amount = signal<number | null>(null);

  category = signal<ExpenseCategory | null>(null);

  message = signal<string>('');

  editExpense() {
    if (!this.title() || this.amount() === null || this.amount()! <= 0) {
      this.message.set('Please enter a valid title and amount.');
      return;
    }
    this.expenseService.editExpense(this.Id(), this.title()!, this.amount()!, this.category()!);
    this.router.navigate(['/expenses']);
  }
}
