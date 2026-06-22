# Product Images Setup

The app is configured to use local images from the `public/images/` folder. Here's how to add your product images from the Claude Design project:

## Image Mapping

Save your images from the Brideful design with these exact filenames:

### Bridesmaid Boxes
- `full-bridal-package.jpeg` - Full Bridal Package
- `bride-maid-bundle-2.jpeg` - L'amour Bridesmaid Box
- `bride-maid-bundle-3.jpeg` - Soft Bridesmaid Box
- `bride-maid-bundle-4.jpeg` - Premium Bridesmaid Box
- `bride-maid-bundle-5.jpeg` - Golidicious Bridesmaid Box
- `bride-maid-bundle-6.jpeg` - Essential Bridal Box
- `bridemaid-bundle-1.jpeg` - Boho Bridesmaid Box

### Bridal
- `full-bridal-package.jpeg` - Full Bridal Package
- `bride-maid-bundle-6.jpeg` - Essential Bridal Box

### Accessories
- `bouquet.jpg` - Bridal Bouquet
- `katb-napkins.jpg` - Katb Ketab Napkins
- `mabkhara.jpg` - Mabkhara (Incense Burner)
- `mirror.png` - Pearl & Lace Mirrors
- `tambourine.jpg` - Tambourines
- `wooden-fans.jpg` - Wooden Fans

## How to Get Images

### Option 1: Download from Claude Design (Recommended)
1. Go to https://claude.ai/design/p/842b3754-c469-47d5-97df-047b3df74470
2. Find each product image in the uploads folder
3. Download and save to `public/images/` with the filenames above

### Option 2: Use Admin Dashboard
1. Go to http://localhost:5173/admin (password: `admin123`)
2. Click "Add Product" or "Edit Product"
3. Paste direct image URLs (from Cloudinary, Imgur, or your hosting)
4. The app will display them immediately

### Option 3: Use GitHub/CDN URLs
Update the product image URLs in `src/context/ProductContext.tsx` to point to your hosted images.

## File Size Guidelines
- Keep images under 500KB for optimal performance
- Recommended dimensions: 400x500px (products) or 1200x600px (hero)
- Formats: JPEG, PNG, WebP

## Testing Locally
Once images are added to `public/images/`:
1. Run `npm run dev`
2. Navigate to http://localhost:5173
3. Images will load from `/images/filename`

## Production Deployment
When deploying:
1. Images in `public/images/` are automatically copied to `dist/images/`
2. Update image URLs in `src/context/ProductContext.tsx` if using external hosting
3. Commit images to GitHub or use a CDN like Cloudinary

## Admin Dashboard
You can also manage images entirely through the admin dashboard:
- Edit products and change image URLs
- Export product data as JSON
- Changes persist in browser localStorage
