<<<<<<< HEAD
import { format, formatISO, sub } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
=======


import { format, formatISO, sub } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0

export const getFormattedTimestamp = (timestamp) => {
  //get current time for comparison
  const yesterdayDate = new Date();
<<<<<<< HEAD
  sub(yesterdayDate, { days: 1 });

  if (yesterdayDate.getTime() < timestamp.getTime()) {
    // return month format
    return formatISO(timestamp);
  }

  return format(timestamp, "H:mm");
};

export const getTimestampInstance = (timestamp) => {
  if (!timestamp || !timestamp?.length > 0) {
    return "";
=======
  sub(yesterdayDate, { days: 1});

  if(yesterdayDate.getTime() < timestamp.getTime()) {
    // return month format
    return formatISO(timestamp)
  }

  return format(timestamp, 'H:mm')
}

export const getTimestampInstance = (timestamp) => {
  if(!timestamp || !timestamp?.length > 0) {
    return '';
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
  }

  const time = new Date(timestamp);
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return utcToZonedTime(time, tz);
<<<<<<< HEAD
};
=======
}
>>>>>>> 69d9e975d8c5cad03c1b2af696cf4c4cb8b0b0b0
