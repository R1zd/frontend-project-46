import _ from 'lodash';

const stringify = (data) => {
  if (!_.isPlainObject(data)) return `${data}`;

  const lines = Object.entries(data).map(([key, value]) => `${key}: ${stringify(value)}`);
  return `{ ${lines.join(', ')} }`;
};

const getStylish = (tree, depth = 1) => {
  const indent = ' '.repeat(depth * 4);
  const lines = tree.flatMap((node) => {
    const {
      key, children, status, value1, value2,
    } = node;

    switch (status) {
      case 'nested':
        return `${indent}${key}: ${getStylish(children, depth + 1)}`;
      case 'deleted':
        return `${indent}- ${key}: ${stringify(value1)}`;
      case 'added':
        return `${indent}+ ${key}: ${stringify(value2)}`;
      case 'unchanged':
        return `${indent}  ${key}: ${stringify(value1)}`;
      case 'changed':
        return [
          `${indent}- ${key}: ${stringify(value1)}`,
          `${indent}+ ${key}: ${stringify(value2)}`,
        ];
      default:
        throw new Error(`Unknown type ${status}.`);
    }
  });

  return `{\n${lines.join('\n')}\n${' '.repeat((depth - 1) * 4)}}`;
};

export default getStylish;
