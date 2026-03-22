# Sanjivrajah Portfolio

Personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- `next-themes` for dark/light mode
- `react-icons` for iconography

## Prerequisites

- Node.js 18.17+ (or 20+ recommended)
- npm 9+

## Setup Instructions

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser:

- [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start local development server
- `npm run build` - Build production bundle
- `npm run start` - Run production server
- `npm run lint` - Run lint checks

## Project Structure

```text
app/               # App Router pages, layout, global styles
components/        # Reusable UI components and sections
data/              # Static content for projects, skills, experience
public/assets/     # Images, resume, and static media
```

## SEO Notes

- Metadata and Open Graph tags are configured in `app/layout.tsx`
- JSON-LD `SoftwareEngineer` schema is included in the root layout
- Update `metadataBase` and `og:image` when deploying with final domain/assets

## Assets To Replace

- `public/assets/og-image.png` (social sharing image)
- Project image placeholders in `public/assets/`
- `public/assets/resume.pdf`

## Deployment

Deploy on Vercel (recommended) or any Node-compatible hosting:

1. Build:

```bash
npm run build
```

2. Start:

```bash
npm run start
```
