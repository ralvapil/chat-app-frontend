

import { format, formatISO, sub } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

export const getFormattedTimestamp = (timestamp) => {
  //get current time for comparison
  const yesterdayDate = new Date();
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
  }

  const time = new Date(timestamp);
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return utcToZonedTime(time, tz);
}