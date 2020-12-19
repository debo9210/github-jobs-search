import moment from 'moment';

export const differentInDays = (date) => {
  // const today = new Date();
  // const createdOn = new Date(date);
  // const timeDiff = today.getTime() - createdOn.getTime();
  // const diffInDays = timeDiff / (1000 * 3600 * 24);
  // return Math.round(diffInDays);

  const createdOn = new Date(date);
  return moment(createdOn).fromNow();
};
