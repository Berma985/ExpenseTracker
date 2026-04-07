import { Component, signal, computed, inject } from '@angular/core';
import { ExpenseService } from '../../services/expense-service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  expenseService = inject(ExpenseService);
}
