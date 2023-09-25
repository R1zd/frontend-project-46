/* eslint-disable consistent-return */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import getPlain from './plain.js';
import getStylish from './stylish.js';

export const choiceFormat = (file, format) => {
  switch (format) {
    case 'stylish':
      return getStylish(file);
    case 'plain':
      return getPlain(file);
    case 'json':
      return JSON.stringify(file);
    default:
      throw new Error(`Unknown ${format}`);
  }
};