/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import { gendiff } from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getString = (data) => String(data).trim();

const getFixturePath = (filepath) => path.join(__dirname, '..', '__fixtures__', filepath);
const readFile = (filepath) => readFileSync(getFixturePath(filepath), 'utf-8');

const files = [['file1.json', 'file2.json']];

test.each(files)('gendiff for stylish format', (file1, file2) => {
  const filepath1 = getFixturePath(file1);
  const filepath2 = getFixturePath(file2);

  const result = readFile('resultjson.txt');
  expect(gendiff(filepath1, filepath2, 'stylish')).toEqual(result);
});
