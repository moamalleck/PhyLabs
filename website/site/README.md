# PhysicianLabs Website

Modern, responsive website built following FRAIM website creation workflow.

## Features

- 🌓 Dark/Light mode toggle with system preference detection
- 📱 Fully responsive design
- ⚡ Performance optimized
- ♿ Accessibility focused
- 🎨 Modern design with CSS variables
- 🚀 Ready for deployment

## Development

### Local Development
1. Open `index.html` in your browser
2. Or use a local server:
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx serve .
   
   # VS Code Live Server extension
   ```

### File Structure
```
PhysicianLabs/
├── index.html          # Main page
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── script.js       # JavaScript functionality
├── assets/
│   ├── images/         # Image assets
│   └── icons/          # Icon assets
└── docs/
    └── README.md       # This file
```

## Customization

### Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --bg-primary: #ffffff;
    --bg-secondary: #f8fafc;
    --text-primary: #1a1a1a;
    --text-secondary: #666666;
    --accent-color: #6366f1;
    --border-color: #e5e5e5;
}
```

### Content
- Update text content in `index.html`
- Add images to `assets/images/`
- Modify styles in `css/styles.css`
- Add functionality in `js/script.js`

## Deployment

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select "GitHub Actions" as source

### Netlify
1. Connect GitHub repository
2. Set build command: (none for static site)
3. Set publish directory: `.`

### Vercel
1. Import GitHub repository
2. Deploy with default settings

## Performance

- Optimized CSS with minimal dependencies
- Vanilla JavaScript (no heavy frameworks)
- Responsive images
- Efficient animations

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers

## License

[Add your license here]
