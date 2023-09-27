/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import process from 'process';
import path from 'path';
import { readFileSync } from 'fs';
import YAML from 'yaml';
import { compareFiles } from './filesCompare.js';
import { choiceFormat } from './formatters/index.js';

const parsing = {
  json: JSON.parse,
  yaml: YAML.parse,
  yml: YAML.parse,
};

const getFileType = (filepath) => path.extname(filepath).slice(1);
const getFilePath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filepath) => readFileSync(getFilePath(filepath), 'utf-8');

const parse = (data, ext) => {
  const parseFunction = parsing[ext];
  if (!parseFunction) {
    throw new Error(`Unknown format ${ext}!`);
  }
  return parsing[ext](data);
};

const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const ext1 = getFileType(filepath1);
  const ext2 = getFileType(filepath2);

  const path1 = getFilePath(filepath1);
  const path2 = getFilePath(filepath2);

  const data1 = readFile(path1);
  const data2 = readFile(path2);

  const parsedData1 = parse(data1, ext1);
  const parsedData2 = parse(data2, ext2);

  const diff = compareFiles(parsedData1, parsedData2);
  return choiceFormat(diff, format);
};

export default gendiff;
