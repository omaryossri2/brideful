# Brideful - Bridal Wear Storefront

A modern, responsive React-based bridal wear storefront with an integrated admin dashboard for content management.

## Features

- **Public Storefront**: Beautiful, mobile-responsive product display
- **Admin Dashboard**: Manage products (add, edit, delete), images, descriptions, and prices
- **Data Persistence**: Products saved to localStorage with JSON export capability
- **Simple Authentication**: Password-protected admin panel
- **Mobile-First Design**: Built with Tailwind CSS for responsive UI

## Tech Stack

- React 18+ with TypeScript
- Vite (fast build tool)
- Tailwind CSS (utility-first styling)
- React Router v6 (client-side routing)
- React Context API (state management)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

## Admin Dashboard

Access the admin panel at `/admin`

**Demo Credentials:**
- Password: `admin123`

### Admin Features

- Add new products with images, descriptions, and prices
- Edit existing products
- Delete products
- Export products as JSON file
- Data automatically saved to browser localStorage

## Project Structure

```
src/
├── components/
│   ├── public/          # Public-facing components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ProductCard.tsx
│   │   └── Footer.tsx
│   └── admin/           # Admin components
│       ├── AdminLogin.tsx
│       └── ProductEditor.tsx
├── pages/
│   ├── PublicApp.tsx    # Main storefront
│   └── AdminDashboard.tsx
├── context/
│   └── ProductContext.tsx  # Global state management
├── hooks/
│   └── useAuth.ts       # Authentication logic
├── App.tsx              # Main router
├── main.tsx             # Entry point
└── index.css            # Tailwind styles
```

## Customization

### Change Admin Password

Edit `src/hooks/useAuth.ts` line 6:
```typescript
const ADMIN_PASSWORD = 'your-password'; // Change this
```

In production, use environment variables:
```typescript
const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD || 'admin123';
```

### Customize Branding

Edit `tailwind.config.js` to change colors, fonts, and theme settings.

## Deployment

### GitHub Pages

1. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/brideful"
   ```

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add deploy scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Custom Domain

Deploy the `dist/` folder to your hosting provider and point your custom domain to it.

## Future Enhancements

- Backend API integration for product management
- Payment processing (Stripe/PayPal)
- Shopping cart and checkout
- User accounts and order history
- Email notifications
- Image upload to CDN (Cloudinary, AWS S3)
- Advanced filtering and search
- Customer reviews and ratings

## License

MIT
