import { validateContentCorpus } from "../src/lib/content/validate-corpus";

try {
  validateContentCorpus();
  console.log("[validate-content] corpus OK");
} catch (error) {
  console.error(error);
  process.exit(1);
}
