export function text2textarea(str: string) {
  let arr: string[] = [];
  str.split("\n").forEach((item) => arr.push(`${item.trim()}`));

  let result = arr.join("\n");

  return result;
}
