const getSleepHours = (day) => {
  switch (day) {
    case 'Monday':
      return 8;
      break;
    case 'Tuesday':
      return 8;
      break;
    case 'Wednesday':
      return 8;
      break;
    case 'Thursday':
      return 9;
      break;
    case 'Friday':
      return 11;
      break;
    case 'Saturday':
      return 12;
      break;
    case 'Sunday':
      return 8;
      break;
             }
};

const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('You got just the right amount of sleep. Nice!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got an extra ' + (actualSleepHours - idealSleepHours) + ' hours of sleep. Nice!');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You were ' + (idealSleepHours - actualSleepHours) + ' hours under your goal. Get more sleep!');
  }
};

calculateSleepDebt();
