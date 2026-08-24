export default function pastOneMonthCalc() {
  const today = new Date();
  const todaysDay = today.getDate();
  const todaysMonth = today.getMonth();
  const todaysYear = today.getFullYear();

  const oneMonthPast: { day: number; month: number; year: number } = {
    day: 0,
    month: 0,
    year: 0,
  };

  if (todaysDay - 30 < 0) {
    if (
      todaysMonth - 1 == 3 ||
      todaysMonth - 1 == 5 ||
      todaysMonth - 1 == 8 ||
      todaysMonth - 1 == 10
    ) {
      oneMonthPast.day = todaysDay;
    } else if (todaysMonth == 2) {
      oneMonthPast.day = (todaysYear % 4 != 0 ? 28 : 29) - -(todaysDay - 30);
    } else {
      oneMonthPast.day = 31 - -(todaysDay - 30);
    }

    if (todaysMonth == 0) {
      oneMonthPast.month = 11;
      oneMonthPast.year = todaysYear - 1;
    } else {
      oneMonthPast.month = todaysMonth - 1;
      oneMonthPast.year = todaysYear;
    }
  } else {
    oneMonthPast.day = todaysDay - 30;
    oneMonthPast.month = todaysMonth;
    oneMonthPast.year = todaysYear;
    console.log('teste 4');
  }

  const oneMonthPastDate = new Date(
    oneMonthPast.year,
    oneMonthPast.month,
    oneMonthPast.day,
  );
  //   oneMonthPastDate.setDate(oneMonthPast.day);
  //   oneMonthPastDate.setMonth(oneMonthPast.month);
  //   oneMonthPastDate.setFullYear(oneMonthPast.year);

  return oneMonthPastDate;
}
