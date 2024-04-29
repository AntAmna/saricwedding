import moment from 'moment';

export const calculateDuration = (eventTime: number) => moment.duration(Math.max(eventTime - (Math.floor(Date.now() / 1000)), 0), 'seconds');

export default null;
