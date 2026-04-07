import { Injectable, signal, computed } from '@angular/core';
import { Expense, ExpenseCategory } from '../models/expense';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  expenses = signal<Expense[]>([]);

  categories = signal<string[]>([
    'Work',
    'Personal',
    'Grocery',
    'Utilities',
    'Shopping',
    'Travel',
    'Food',
  ]);

  totalExpense = computed(() => {
    var t = 0;
    for (const e of this.expenses()) {
      t += e.amount;
    }
    return t;
  });

  highestExpense = computed(() => {
    var h = 0;
    for (const e of this.expenses()) {
      if (e.amount > h) h = e.amount;
    }
    return h;
  });

  averageExpense = computed(() =>
    this.expenses().length != 0 ? this.totalExpense() / this.expenses().length : 0,
  );

  transactionCount = computed(() => this.expenses().length);

  addExpense(title: string, amount: number, category: ExpenseCategory): void {
    const newE: Expense = {
      id: Date.now().toString(),
      title: title,
      category: category,
      amount: amount,
    };
    this.expenses.update((e) => [...e, newE]);
  }

  removeExpense(id: string): void {
    this.expenses.update((e) => e.filter((i) => i.id != id));
  }

  editExpense(id: string, newTitle: string, newAmount: number, newCategory: ExpenseCategory): void {
    const editE: Expense = {
      id: id,
      title: newTitle,
      category: newCategory,
      amount: newAmount,
    };
    this.expenses.update((e) => e.map((i) => (i.id === id ? editE : i)));
  }

  getExpenseById(id: string): Expense | null {
    for (const e of this.expenses()) {
      if (e.id === id) return e;
    }
    return null;
  }
}
