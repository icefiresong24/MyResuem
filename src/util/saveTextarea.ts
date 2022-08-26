export function text2textarea(str: string) {
  let arr: string[] = [];
  str.split("\n").forEach((item) => arr.push(`<div>${item.trim()}</div>`));

  let result = arr.join("<br>");

  return result;
}
