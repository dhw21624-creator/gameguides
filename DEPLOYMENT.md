# GameGuides - Deployment Guide

## Quick Start
1. **Push to GitHub**:
   ```bash
   cd /path/to/gameguides
   git init
   git add .
   git commit -m "Initial game guides website"
   git branch -M main
   git remote add origin https://github.com/dhw21624-creator/gameguides.git
   git push -u origin main
   ```

2. **Cloudflare Pages Setup** (after logging in):
   - Go to https://dash.cloudflare.com
   - Click "Pages" → "Create a project"
   - Connect GitHub account
   - Select `dhw21624-creator/gameguides` repository
   - Build settings: Framework preset = "None"
   - Build command: (leave empty)
   - Build output directory: `/`
   - Click "Save and Deploy"

3. **Custom Domain** (optional):
   - After deployment, go to project settings → "Custom domains"
   - Add your domain (e.g., `gameguides.yourdomain.com`)
   - Update DNS records as instructed

4. **Google AdSense**:
   - Site already linked: `routepass-guide.pages.dev`
   - **Critical**: Update AdSense with new domain after Cloudflare Pages deployment
   - Add new site in AdSense: `gameguides.pages.dev`

## Content Structure
```
gameguides/
├── index.html              # Homepage
├── css/style.css          # Main styles
├── js/
│   ├── data.js           # Game database
│   └── main.js           # Interactive features
├── games/                # Per-game directories
│   ├── genshin-impact/
│   │   ├── index.html    # Game page
│   │   └── *.html        # Guide articles
│   ├── minecraft/
│   │   └── ...
│   └── ...
├── privacy-policy.html   # Required for AdSense
├── terms.html           # Required for AdSense
├── contact.html         # Contact page
├── sitemap.xml          # SEO sitemap
└── robots.txt           # SEO robots
```

## SEO Optimization
- **Meta tags**: Every page has proper title/description
- **Canonical URLs**: All pages include canonical links
- **Sitemap**: Auto-generated with priority levels
- **Mobile responsive**: Works on all devices
- **Fast loading**: Optimized CSS/JS, no heavy images

## AdSense Requirements Checklist
✅ **Original content**: 44 guide articles (700-1500 words each)  
✅ **Legal pages**: Privacy Policy, Terms of Service, Contact  
✅ **Navigation**: Clear menu, breadcrumbs, search functionality  
✅ **Mobile friendly**: Responsive design  
✅ **No broken links**: All internal links tested  
✅ **Ad placement**: AdSense code in `<head>` of all pages  
✅ **No prohibited content**: Only game guides, no cheats/hacks  

## Content Update Process
1. **Add new game**:
   - Add to `js/data.js` GAMES array
   - Create directory in `games/`
   - Generate guide articles (use Python script)

2. **Update existing guides**:
   - Edit guide HTML files in `games/[game]/`
   - Update date in meta tags

3. **Regenerate sitemap**:
   ```bash
   python update_sitemap.py
   ```

## Monetization Strategy
1. **Google AdSense**: Primary revenue (already configured)
2. **Affiliate links**: Add Amazon/Steam game purchase links
3. **Premium guides**: Future paid content section
4. **Sponsorships**: Game developer partnerships

## Maintenance Tasks
- **Daily**: Check Google Search Console for indexing issues
- **Weekly**: Add 2-3 new guide articles
- **Monthly**: Update tier lists for meta changes
- **Quarterly**: Review SEO performance, update sitemap

## Next Steps
1. ✅ Create website code (56 files)
2. ⏳ **You login to Cloudflare** (critical blocker)
3. Deploy to Cloudflare Pages
4. Update AdSense with new domain
5. Submit sitemap to Google Search Console
6. Start content promotion (social media, forums)

## Contact for Support
- **Email**: contact@gameguides.pages.dev
- **GitHub Issues**: https://github.com/dhw21624-creator/gameguides/issues
- **Your contact**: G---457 (WeChat)