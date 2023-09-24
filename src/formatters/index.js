/* eslint-disable consistent-return */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import getStylish from './stylish.js';

export const choiceFormat = (file, format) => {
  switch (format) {
    case 'stylish':
      return getStylish(file);
    case 'plain':
      return;
    case 'json':
      return;
    default:
      throw new Error(`Unknown ${format}`);
  }
};