import fs from 'fs';
import path from 'path';

function walk(dir) {
    try {
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const fullPath = path.join(dir, file);
            try {
                const stats = fs.statSync(fullPath);
                if (stats.isFile()) {
                    if (file.toLowerCase().endsWith('.png') || file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
                        console.log('IMAGE_MATCH:', fullPath, stats.size);
                    }
                } else if (stats.isDirectory()) {
                    if (!fullPath.includes('node_modules') && !fullPath.includes('.git') && !fullPath.includes('/proc') && !fullPath.includes('/sys') && !fullPath.includes('/dev')) {
                        walk(fullPath);
                    }
                }
            } catch (e) {}
        }
    } catch (e) {}
}

console.log('Starting global image search...');
walk('/');
console.log('Search finished.');
