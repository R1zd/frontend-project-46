import { cwd } from 'node:process';
import fs from 'fs';
import _ from 'lodash'
import path from 'path'

const readFile = (filepath) => filepath.readFileSync(filepath, 'utf-8');

const writeFile = (filepath, content) => filepath.writeFileSync(filepath, content, 'utf-8');

const diff = (pathfile1, pathfile2) => {
    const keys = _.union(Object.keys(pathfile1), Object.keys(pathfile2)).sort();
    const diff = keys.map((key) => {
        if (!_.has(pathfile1, key)) {
            return `  + ${key}: ${pathfile2[key]}`;
        }
        if (!_.has(pathfile2, key)) {
            return `  - ${key}: ${pathfile1[key]}`;
        }
        if (pathfile1[key] === pathfile2[key]) {
            return `    ${key}: ${pathfile1[key]}`;
        }
        return `  - ${key}: ${pathfile1[key]}\n + ${key}: ${pathfile2[key]}`;

    });
    return `{\n ${diff.join('\n')}\n}`;
};

const gendiff = ()
