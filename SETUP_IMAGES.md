# Adding Images from Claude Design to Your App

Your Brideful app is ready! Now you just need to add the product images. Here's the quickest way:

## Quick Setup (3 steps)

### Step 1: Access Your Design Project
Visit: https://claude.ai/design/p/842b3754-c469-47d5-97df-047b3df74470

### Step 2: Download Each Image
In the design project, go to the **uploads** folder and download these images:

**Bridesmaid Boxes:**
- Bride Maid Bundle 3.jpeg → save as `public/images/bride-maid-bundle-3.jpeg`
- Bride Maid Bundle 5.jpeg → save as `public/images/bride-maid-bundle-5.jpeg`
- Bride Maid Bundle 2.jpeg → save as `public/images/bride-maid-bundle-2.jpeg`
- Bride Maid Bundle 4.jpeg → save as `public/images/bride-maid-bundle-4.jpeg`
- Bride Maid Bundle 6.jpeg → save as `public/images/bride-maid-bundle-6.jpeg`
- Bridemaid Bundle 1.jpeg → save as `public/images/bridemaid-bundle-1.jpeg`

**Bridal:**
- Full Bridal Package.jpeg → save as `public/images/full-bridal-package.jpeg`

**Accessories:**
- Boquet.jpg → save as `public/images/bouquet.jpg`
- Katb Ketab Napkins/IMG_1421.jpg → save as `public/images/katb-napkins.jpg`
- Mabkhara for bokhur.jpg → save as `public/images/mabkhara.jpg`
- Mirrors/IMG_1409.PNG → save as `public/images/mirror.png`
- Tambourines/IMG_1428.jpg → save as `public/images/tambourine.jpg`
- Wooden Fans/IMG_1416.jpg → save as `public/images/wooden-fans.jpg`

### Step 3: Restart Dev Server
```bash
npm run dev
```

Then visit: http://localhost:5173

All images will now display on the storefront! ✨

## Alternative: Use Admin Dashboard

If you don't want to download images locally:

1. Go to http://localhost:5173/admin (password: `admin123`)
2. Click "Edit Product" on any product
3. Paste the full URL to each image (from Claude Design, Cloudinary, or Imgur)
4. Save - the app will display them immediately!

## For Production

When you're ready to deploy:

```bash
# Commit everything to GitHub
git add .
git commit -m "Add Brideful storefront with product images"
git push

# Deploy to Vercel (recommended)
# Just connect your repo at vercel.com - it will auto-build and deploy!
```

## File Structure
```
/Brideful
├── public/
│   └── images/              ← Add all product images here
│       ├── bride-maid-bundle-2.jpeg
│       ├── bride-maid-bundle-3.jpeg
│       ├── full-bridal-package.jpeg
│       └── ... (other images)
├── src/
└── dist/                    ← Production build (auto-generated)
```

## Need Help?

- **Images not showing?** Make sure filenames exactly match the ones in `ProductContext.tsx`
- **Want to change prices/names?** Edit in Admin Dashboard or `src/context/ProductContext.tsx`
- **Ready to go live?** Commit to GitHub and deploy to Vercel/Netlify in minutes!

---

Your app is 100% ready. Just add images and you're live! 🎉
