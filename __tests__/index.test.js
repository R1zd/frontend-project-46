/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getString = (data) => String(data).trim();

const getFixturePath = (filepath) => path.join(__dirname, '..', '__fixtures__', filepath);
const readFile = (filepath) => readFileSync(getFixturePath(filepath), 'utf-8');

const files = [['file1.json', 'file2.json'], ['file1.yml', 'file2.yml']];

test.each(files)('gendiff for stylish format', (file1, file2) => {
  const filepath1 = getFixturePath(file1);
  const filepath2 = getFixturePath(file2);

  const result = readFile('result_stylish.txt');
  expect(gendiff(filepath1, filepath2, 'stylish')).toEqual(result);
});

test.each(files)('gendiff for plain format', (file1, file2) => {
  const filepath1 = getFixturePath(file1);
  const filepath2 = getFixturePath(file2);

  const result = readFile('result_plain.txt');
  expect(gendiff(filepath1, filepath2, 'plain')).toEqual(result);
});

test.each(files)('gendiff for json format', (file1, file2) => {
  const filepath1 = getFixturePath(file1);
  const filepath2 = getFixturePath(file2);

  const result = readFile('result_json.txt');
  expect(gendiff(filepath1, filepath2, 'json')).toEqual(result);
});
