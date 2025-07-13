# CrawlVaani Frontend

Next.js frontend for the CrawlVaani SEO Website Crawler.

## Features

- Modern React with TypeScript
- SEO audit form and results display
- AI-powered analysis visualization
- Responsive design with Tailwind CSS
- Protected reports access

## Environment Variables

Create a `.env.local` file in the frontend directory:

```env
NEXT_PUBLIC_REPORTS_TOKEN=your-reports-access-token
BACKEND_URL=http://localhost:4000
```

For production (Vercel), set these environment variables in the Vercel dashboard:

- `NEXT_PUBLIC_REPORTS_TOKEN`
- `BACKEND_URL` (your Render backend URL)

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Production Build

```bash
npm run build
npm start
```

## Deployment

This frontend is designed to be deployed on Vercel:

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## Security

- Reports page is protected with token-based access
- API calls are proxied through Next.js rewrites
- Environment variables are properly configured for production
