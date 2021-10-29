import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(localizedFormat);
dayjs.extend(dayOfYear);

import 'dayjs/locale/ru';
import 'dayjs/locale/en';

export const WEEK = 604800000;

export const dayInYear = dayjs().dayOfYear();
export const currentYear = Number(dayjs().format('YYYY'));

export const getFullDate = (date?: number | string) => {
  if (date !== undefined) {
    return dayjs(date).format('LL');
  }

  return dayjs().format('LL');
};

export const getDayInMonth = () => {
  return dayjs().format('D');
};

export const getDayInYear = (date: number | string) => {
  return dayjs(date).dayOfYear();
};

export const getYear = (date: number) => {
  return Number(dayjs(date).format('YYYY'));
};

export const getFullDateString = (date?: number) => {
  if (date !== undefined) {
    return dayjs(date).format('DD.MM.YYYY');
  }

  return dayjs().format('DD.MM.YYYY');
};

export const getFullDateWithMinutes = () => {
  return dayjs().format('LLL');
};

export const getItemStandartDate = (date?: number) => {
  if (date === undefined) {
    return dayjs(getMilliseconds()).format('D MMMM');
  }

  return dayjs(date).format('D MMMM');
};

export const getMilliseconds = () => {
  return dayjs().valueOf();
};
