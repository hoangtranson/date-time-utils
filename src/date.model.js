
class DateModel {

  constructor(date) {
    this.date = date;
  }

  getDate(format = '') {
    return {
      time: 1,
      date: this.date,
      week: 1,
      month: 1,
      year: 1,
      timezone: 1
    }
  }
}
