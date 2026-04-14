import fs from 'node:fs/promises';
import path from 'node:path';

const VAULT_PATH = process.env.VAULT_CONTENT_PATH || '/Users/jamalwilliams/Vault/Websites/anarrativelens.com';
const CONFIG_PATH = path.join(VAULT_PATH, 'config', 'site.json');

export async function getSiteConfig() {
  const content = await fs.readFile(CONFIG_PATH, 'utf-8');
  return JSON.parse(content);
}
