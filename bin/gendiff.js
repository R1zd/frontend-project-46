#!/usr/bin/env node
import { Command } from 'commander';
import { gendiff } from '../src/index.js'

const programm = new Command;
programm
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-h, --help', 'output usage information')
  .argument('filepath1')
  .argument('filepath2')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2) => {
    const option = programm.opts();
    console.log(gendiff(filepath1, filepath2, option.format));
  });

if (programm.help) {
  programm.outputHelp();
};

programm.parse();