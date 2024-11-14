"use strict";

function names(arg) {
  const flag = arg;
  const addPrefix = (value) => (flag ? `"${value}"` : `"my_prefix.${value}"`);
  const result = `
      ${addPrefix('NAME_0')}
      ${addPrefix('NAME_1')}
      ${addPrefix('NAME_2')}
      ${addPrefix('NAME_3')}
    `;
  return result;
}

console.log(names(false))