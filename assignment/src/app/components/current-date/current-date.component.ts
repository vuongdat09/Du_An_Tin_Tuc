import { Component } from '@angular/core';

@Component({
  selector: 'app-current-date',
  templateUrl: './current-date.component.html',
})
export class CurrentDateComponent {
  day: number;
  weekday: string;
  month: string;
  year: number;

  constructor() {
    const currentDate = new Date();
    this.day = currentDate.getDate();
    this.weekday = this.getWeekday(currentDate.getDay());
    this.month = this.getMonth(currentDate.getMonth());
    this.year = currentDate.getFullYear();
  }

  getWeekday(day: number): string {
    const weekdays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Tuesday',
      'Friday',
      'Saturday',
    ];
    return weekdays[day];
  }

  getMonth(month: number): string {
    const months = [
      'January',
      'Febuary',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'Octorber',
      'November',
      'December',
    ];
    return months[month];
  }
}
