import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginPrettier from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extensões da compatibilidade (Next.js + TS)
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // Adiciona o plugin do Prettier
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },

  // Desativa regras do ESLint que conflitam com Prettier
  ...compat.extends('prettier'),
];

export default eslintConfig;
