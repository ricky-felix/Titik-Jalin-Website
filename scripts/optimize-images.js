/**
 * Image Optimization Script
 * Converts PNG images to WebP format with optimization
 *
 * Usage:
 * 1. Install sharp: npm install --save-dev sharp
 * 2. Run script: node scripts/optimize-images.js
 */

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, parse } from 'path';

const INPUT_DIR = './public';
const OUTPUT_DIR = './public';
const QUALITY = 85; // WebP quality (0-100)

async function optimizeImage(inputPath, outputPath) {
  try {
    const info = await sharp(inputPath)
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(outputPath);

    const inputStats = await stat(inputPath);
    const savings = ((1 - info.size / inputStats.size) * 100).toFixed(1);

    console.log(`✓ ${parse(inputPath).base}`);
    console.log(`  ${(inputStats.size / 1024 / 1024).toFixed(2)}MB → ${(info.size / 1024 / 1024).toFixed(2)}MB (${savings}% smaller)`);

    return { input: inputStats.size, output: info.size };
  } catch (error) {
    console.error(`✗ Failed to optimize ${inputPath}:`, error.message);
    return null;
  }
}

async function processDirectory(directory) {
  const files = await readdir(directory);
  const pngFiles = files.filter(file => file.toLowerCase().endsWith('.png'));

  if (pngFiles.length === 0) {
    console.log('No PNG files found in', directory);
    return;
  }

  console.log(`Found ${pngFiles.length} PNG files to optimize...\n`);

  let totalInput = 0;
  let totalOutput = 0;

  for (const file of pngFiles) {
    const inputPath = join(directory, file);
    const outputPath = join(OUTPUT_DIR, file.replace(/\.png$/i, '.webp'));

    const result = await optimizeImage(inputPath, outputPath);
    if (result) {
      totalInput += result.input;
      totalOutput += result.output;
    }
    console.log('');
  }

  const totalSavings = ((1 - totalOutput / totalInput) * 100).toFixed(1);
  console.log('═'.repeat(50));
  console.log(`Total: ${(totalInput / 1024 / 1024).toFixed(2)}MB → ${(totalOutput / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Saved: ${(totalSavings)}% (${((totalInput - totalOutput) / 1024 / 1024).toFixed(2)}MB)`);
  console.log('═'.repeat(50));
  console.log('\n⚠️  Next steps:');
  console.log('1. Update image paths in components from .png to .webp');
  console.log('2. Test the website to ensure images load correctly');
  console.log('3. Consider deleting original PNG files once confirmed');
}

processDirectory(INPUT_DIR).catch(console.error);
