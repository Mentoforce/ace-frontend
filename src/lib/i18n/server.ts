import fs from "fs";
import path from "path";

export function getMessages(locale: string) {
  const filePath = path.join(process.cwd(), "src/messages", `${locale}.json`);
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}
