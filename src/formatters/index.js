

export const choiceFormat = (file, format) => {
  switch(format) {
    case 'stylish':
      return ;
    case 'plain':
      return ;
    case 'json':
      return ;
    default:
      throw new Error(`Unknown ${format}`);
  }
};