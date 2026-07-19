import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const ignoredDirectories = new Set([".git", "node_modules", "dist", "coverage", ".local"]);
const textExtensions = new Set([".md", ".json", ".yml", ".yaml", ".js", ".mjs", ".ts", ".tsx", ".jsx", ".env"]);
const files = [];

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(file);
    else if (textExtensions.has(path.extname(entry.name)) || entry.name.startsWith(".env")) files.push(file);
  }
}

walk(root);

const failures = [];
const relative = (file) => path.relative(root, file);

function checkMarkdownLinks(file, text) {
  for (const match of text.matchAll(/!?\[[^\]]*\]\(([^)#]+)(?:#[^)]*)?\)/g)) {
    const target = match[1].trim();
    if (!target || /^(https?:|mailto:|<|\.\.\.$)/.test(target)) continue;
    if (!fs.existsSync(path.resolve(path.dirname(file), target))) {
      failures.push(`${relative(file)}: broken Markdown link -> ${target}`);
    }
  }
}

const sensitivePatterns = [
  ["private key", /-----BEGIN(?: [A-Z]+)? PRIVATE KEY-----/],
  ["OpenAI-style API key", /\bsk-[A-Za-z0-9_-]{20,}\b/],
  ["GitHub personal access token", /\bgh[pousr]_[A-Za-z0-9]{20,}\b/],
  ["AWS access key", /\bAKIA[0-9A-Z]{16}\b/],
  ["Chinese mobile number", /(?<!\d)1[3-9]\d{9}(?!\d)/],
  ["Chinese identity number", /(?<!\d)\d{17}[\dXx](?!\d)/],
  ["non-example email address", /\b[A-Z0-9._%+-]+@(?!example\.com\b|localhost\b)[A-Z0-9.-]+\.[A-Z]{2,}\b/i],
];

for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  if (file.endsWith(".md")) checkMarkdownLinks(file, text);
  for (const [label, pattern] of sensitivePatterns) {
    if (pattern.test(text)) failures.push(`${relative(file)}: possible ${label}`);
  }
}

if (failures.length > 0) {
  console.error("Repository verification failed:\n");
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  console.error("\nRemove or redact the content. This automated scan is not a substitute for human review.");
  process.exit(1);
}

console.log(`Repository verification passed (${files.length} text files checked).`);
