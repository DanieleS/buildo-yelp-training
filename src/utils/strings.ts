import { some, none } from "fp-ts/lib/Option";

export const safeRegexExec = (regex: RegExp) => (str: string) =>
  regex.test(str) ? some(regex.exec(str) as RegExpExecArray) : none;
