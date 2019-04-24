import { createBrowserHistory } from 'history';

export const createHistory = () => {
  const history = window.browserHistory || createBrowserHistory();
  if (process.env.NODE_ENV === 'development' && !window.browserHistory) {
    window.browserHistory = history;
  }
  return history;
};

export default createHistory;
