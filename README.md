# Karan Singh - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## Features

✨ **Modern Design** - Clean and professional layout with smooth animations  
📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices  
⚡ **Fast Loading** - Optimized static site with no dependencies  
🎨 **Customizable** - Easy to personalize with your own content and colors  
📝 **Contact Form** - Built-in contact form for visitor messages  
🔗 **Social Links** - Quick links to social media and email  

## Project Structure

```
karan-website/
├── index.html           # Main HTML file
├── css/
│   └── styles.css      # All styling and responsive design
├── js/
│   └── script.js       # JavaScript functionality
├── assets/
│   └── images/         # Place your images here
└── README.md           # This file
```

## Sections

1. **Navigation** - Sticky header with smooth scrolling
2. **Hero** - Eye-catching introduction section
3. **About** - Personal introduction with stats
4. **Skills** - Display your technical skills
5. **Projects** - Showcase your work
6. **Contact** - Contact form and social links
7. **Footer** - Copyright information

## Getting Started

### Quick Start

1. Open `index.html` in your browser
2. Customize content in the HTML file:
   - Replace "Karan Singh" with your name
   - Update project information
   - Add your social media links
   - Modify the about text

### Customization

#### Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f5576c;
    /* ... other colors ... */
}
```

#### Adding Projects
In `index.html`, duplicate the `.project-card` div and update:
- Project title
- Project description
- Technology tags
- Project link

#### Adding Images
Place your images in the `assets/images/` folder and reference them in HTML:
```html
<img src="assets/images/your-image.jpg" alt="Description">
```

## Features Explained

### Responsive Design
- Breakpoints at 768px and 480px for mobile optimization
- Flexible grid layouts that adapt to screen size
- Touch-friendly navigation

### Smooth Animations
- Fade-in animations on page load
- Hover effects on interactive elements
- Scroll-based animations for sections

### Interactive Elements
- Smooth scrolling navigation
- Mobile hamburger menu
- Active link highlighting
- Form validation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Deployment

### Option 1: GitHub Pages
1. Create a GitHub repository
2. Push your files to the `main` branch
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify
1. Sign up at [netlify.com](https://www.netlify.com)
2. Drag and drop your project folder
3. Your site goes live instantly

### Option 3: Vercel
1. Sign up at [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Deploy with one click

## Performance Tips

- Optimize images to reduce file size
- Minimize CSS and JavaScript in production
- Use a CDN for fast content delivery
- Add proper meta tags for SEO

## SEO Optimization

Update these meta tags in `index.html`:
```html
<meta name="description" content="Your description here">
<meta name="keywords" content="your, keywords">
<meta name="author" content="Your Name">
```

## License

This project is open source and available for personal use.

## Support

For questions or issues, feel free to reach out through the contact form on the website.

---

**Last Updated:** April 2026  
**Version:** 1.0.0
