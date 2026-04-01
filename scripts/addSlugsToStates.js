#!/usr/bin/env node

/**
 * Script to add slug fields to all states in statesData.js
 * Generates proper URL-friendly slugs for each state
 * Run with: node scripts/addSlugsToStates.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const createSlug = (name) => {
  if (!name) return '';
  return name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const statesDataPath = path.join(__dirname, '..', 'src', 'data', 'statesData.js');

// Read the file
let content = fs.readFileSync(statesDataPath, 'utf8');

// Parse states using regex to find each state object
// We'll add slug field after the id field
const statePattern = /(\{[\s\n]*id:\s*"[^"]+",[\s\n]*state:\s*"([^"]+)")/g;

content = content.replace(statePattern, (match, opening, stateName) => {
  const slug = createSlug(stateName);
  return `${opening},\n  slug: "${slug}"`;
});

// Write back to file
fs.writeFileSync(statesDataPath, content, 'utf8');

console.log('✓ Successfully added slug fields to all states!');
console.log('✓ Remember to update StatePage.jsx to use getStateBySlug()');
console.log('✓ Update routing to use /state/:slug instead of /state/:stateName');

