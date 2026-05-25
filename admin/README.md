# GameGuides Admin Panel

Complete backend management system for gameguides-4t7.pages.dev.

## Features

### 1. Dashboard (`admin/index.html`)
- **Site Overview**: Total articles, games covered, daily visits, AdSense status
- **Recent Articles**: Latest published articles with status and views
- **Quick Actions**: Direct links to key admin sections

### 2. Content Management (`admin/content.html`)
- **Full Article List**: All 44 articles with filtering and sorting
- **Search & Filter**: By title, game, status, and date
- **Live Actions**: Toggle status (published/draft), delete articles
- **Real-time Updates**: No page reload needed

### 3. Analytics (`admin/analytics.html`)
- **Page Views**: Top pages with visual bar charts
- **Search Keywords**: Top search terms with CTR data
- **Geography**: Visitor distribution by country
- **Simulated Data**: Realistic analytics for demonstration

### 4. Feedback System (`admin/feedback.html`)
- **User Feedback**: View all submitted feedback
- **Status Management**: Mark as pending/resolved
- **Reply Interface**: Built-in reply modal
- **JSON Storage**: All feedback saved to `data/feedback-data.json`

### 5. Frontend Integration
- **Floating Feedback Button**: Appears on all frontend pages
- **Modal Form**: Users can submit feedback directly
- **Unified Styling**: Consistent admin UI across all pages

## Data Files

- `data/articles.json` - All 44 game guide articles
- `data/analytics.json` - Simulated analytics data
- `data/feedback-data.json` - User feedback storage (starts empty)

## Desktop Access

**Mac Desktop Shortcut**: `GameGuides Admin.command` on Desktop
- Double-click to open admin dashboard
- Executes: `open /path/to/admin/index.html`

## Technology Stack

- **Pure HTML/CSS/JS** - No backend required
- **JSON for Data** - All data stored in JSON files
- **Modern CSS** - CSS Grid, Flexbox, CSS Variables
- **Responsive Design** - Works on desktop and mobile

## Usage Instructions

1. **Open Admin**: Navigate to `/admin/` or use desktop shortcut
2. **Dashboard**: View site stats and recent activity
3. **Content**: Manage articles (search, filter, edit)
4. **Analytics**: Check site performance metrics
5. **Feedback**: Review and respond to user feedback

## Frontend Integration

The floating feedback button appears on all frontend pages:
- Click the envelope icon in bottom-right corner
- Submit feedback with name, email, and message
- Feedback is stored in `admin/data/feedback-data.json`

## Security Note

This is a frontend-only admin system for demonstration. In production:
- Add authentication (password protection)
- Use a real backend API for data persistence
- Implement CSRF protection
- Use HTTPS for all connections

## File Structure

```
admin/
├── index.html          # Dashboard
├── content.html        # Content management
├── analytics.html      # Analytics dashboard
├── feedback.html       # Feedback system
├── css/
│   └── admin.css      # Admin panel styles
├── js/
│   └── admin.js       # Shared admin JavaScript
└── data/
    ├── articles.json      # Article data
    ├── analytics.json     # Analytics data
    └── feedback-data.json # User feedback
```