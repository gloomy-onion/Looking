export const getLabelColor = (buttonType: string) =>
  buttonType === 'filled' || buttonType === 'withIcon' ? 'white' : 'purple';

export const getDateTimestamp = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();

