const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function optimize() {
  const inPath = path.join(__dirname, '..', 'static', 'img', 'banner.jpg');
  const outWebp = path.join(__dirname, '..', 'static', 'img', 'banner.webp');
  const outSmallJpg = path.join(__dirname, '..', 'static', 'img', 'banner-small.jpg');
  const outSmallWebp = path.join(__dirname, '..', 'static', 'img', 'banner-small.webp');

  if (!fs.existsSync(inPath)) {
    console.error('Source image not found:', inPath);
    process.exit(1);
  }

  console.log('Generating webp...');
  await sharp(inPath).webp({ quality: 80 }).toFile(outWebp);
  console.log('Generated', outWebp);

  console.log('Generating small JPG (width 800)...');
  await sharp(inPath).resize({ width: 800 }).jpeg({ quality: 80 }).toFile(outSmallJpg);
  console.log('Generated', outSmallJpg);

  console.log('Generating small WebP (width 800)...');
  await sharp(inPath).resize({ width: 800 }).webp({ quality: 80 }).toFile(outSmallWebp);
  console.log('Generated', outSmallWebp);

  console.log('Optimization complete.');
}

optimize().catch((err) => {
  console.error(err);
  process.exit(1);
});