# Ethereal - Parallax Scrolling Website

A stunning parallax scrolling website featuring cinematic scroll effects, dynamic image transitions, and smooth animations. Each section reveals itself through a dramatic grow-and-fade effect as you scroll.

![Project Preview](https://dividedbyzero8060.github.io/parallax-scrolling-ll/)

## ✨ Features

- **Hero Section** with animated floating elements and mouse-tracking parallax
- **9 Full-Screen Sections** with parallax background images
- **Dynamic Image Effects**:
  - Images scale from 1.2× to 1× as sections enter viewport
  - Dark overlay fades from 70% to 30% opacity
  - Smooth fade-out as sections exit
- **Responsive Design** that works on all devices
- **Smooth Scroll Animations** with intersection observers
- **Color-Coded Sections** with unique gradient overlays
- **Performance Optimized** with requestAnimationFrame

## 📁 File Structure
```
project-folder/
│
├── index.html          # Main HTML file (or task2.html)
├── task2.css          # All styling and animations
├── task2.js           # Parallax effects and scroll logic
└── README.md          # This file
```

## 🚀 Installation

1. **Download/Clone the project files**
```bash
   git clone [your-repo-url]
   cd ethereal-parallax
```

2. **Ensure all three files are in the same folder**:
   - `index.html` (or `task2.html`)
   - `task2.css`
   - `task2.js`

3. **Open the HTML file in your browser**
   - Double-click the HTML file, or
   - Right-click → Open with → Your Browser

That's it! No build process or dependencies required.

## 🎨 Customization

### Changing Images

**Background Images (Sections 1-9):**

Find these lines in your HTML and replace the `src` URLs:
```html
<!-- Section 1: Discovery -->
<img src="YOUR_IMAGE_URL_HERE" alt="Discovery Background">

<!-- Section 2: Innovation -->
<img src="YOUR_IMAGE_URL_HERE" alt="Innovation Background">

<!-- Continue for all 9 sections... -->
```

**Recommended Image Specifications:**
- Format: JPG or PNG
- Resolution: 1920px width minimum
- Aspect Ratio: 16:9 or wider
- File Size: Keep under 500KB for optimal performance

### Changing Text Content

Edit the text in each section:
```html
<div class="section-content">
    <h2 class="section-title observe">Your Title Here</h2>
    <p class="section-text observe">
        Your description text here...
    </p>
</div>
```

### Changing Colors

**Section Color Overlays** (in `task2.css`):
```css
/* Example: Change Section 1 overlay color */
.section-1 .section-bg::after {
    background: linear-gradient(135deg, 
        rgba(YOUR_R, YOUR_G, YOUR_B, 0.3) 0%, 
        rgba(YOUR_R2, YOUR_G2, YOUR_B2, 0.3) 100%);
}
```

### Adjusting Scroll Speed

In `task2.js`, modify these values:
```javascript
// Hero parallax speed (0.2 = slower, 0.8 = faster)
<div class="parallax-layer" data-speed="0.5"></div>

// Section zoom speed (change 0.3 and 0.7 thresholds)
if (scrollProgress < 0.3) { // Entry phase
    scale = 1.2 - (scrollProgress / 0.3) * 0.2;
}
```

## 🛠️ Technologies Used

- **HTML5** - Structure and semantic markup
- **CSS3** - Styling, animations, and gradients
- **Vanilla JavaScript** - Parallax effects and scroll animations
- **Intersection Observer API** - Efficient scroll-triggered animations
- **RequestAnimationFrame** - Smooth 60fps animations

## 📱 Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | 90+     | ✅ Full Support |
| Firefox | 88+     | ✅ Full Support |
| Safari  | 14+     | ✅ Full Support |
| Edge    | 90+     | ✅ Full Support |
| Opera   | 76+     | ✅ Full Support |

**Note:** Older browsers may not support all features (backdrop-filter, CSS custom properties).

## 🎯 Performance Tips

1. **Optimize Images**:
   - Use WebP format for modern browsers
   - Compress images with tools like TinyPNG
   - Use progressive JPEGs for faster loading

2. **Lazy Loading** (optional enhancement):
```html
   <img src="image.jpg" loading="lazy" alt="Description">
```

3. **Hosting Recommendations**:
   - Use a CDN for images (Cloudinary, Imgix, etc.)
   - Enable gzip compression on your server
   - Implement browser caching

## 📐 Section Structure

The website contains:

1. **Hero Section** - Animated title with parallax layers
2. **Section 1-3** - Main content sections
3. **Section 4-9** - Gallery/showcase sections
4. **Footer** - Closing section

Each section follows this structure:
```html
<section class="section" data-section="X">
    <div class="section-bg">
        <img src="..." alt="...">
    </div>
    <div class="section-content">
        <h2 class="section-title observe">Title</h2>
        <p class="section-text observe">Description</p>
    </div>
</section>
```

## 🐛 Troubleshooting

**Problem: Content not visible, only images showing**
- **Solution**: Move `<script src="task2.js"></script>` to the bottom of `<body>`, right before `</body>`

**Problem: Parallax effect not working**
- **Solution**: Check browser console (F12) for JavaScript errors
- Ensure all file paths are correct

**Problem: Images not loading**
- **Solution**: Verify image URLs are accessible
- Check for CORS issues with external image hosts

**Problem: Slow performance**
- **Solution**: Reduce image file sizes
- Consider reducing the number of parallax layers

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📧 Contact

For questions or support, please open an issue in the repository.

---

**Made with ❤️ and lots of parallax magic**

© 2024 Ethereal Experiences