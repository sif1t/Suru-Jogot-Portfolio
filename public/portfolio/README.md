# Portfolio Images Directory

Add your portfolio project images here!

## Image Guidelines

### Recommended Sizes:
- **Portfolio Items**: 1200x800px (3:2 ratio)
- **File Format**: JPG or PNG
- **File Size**: Optimize to under 500KB each for best performance

### Naming Convention:
```
project1.jpg
project2.jpg
project3.jpg
...etc
```

### Example Structure:
```
public/
  portfolio/
    project1.jpg    <- E-Commerce Platform screenshot
    project2.jpg    <- Social Media Dashboard screenshot
    project3.jpg    <- Portfolio Website screenshot
    project4.jpg    <- Task Management App screenshot
    project5.jpg    <- Weather App screenshot
    project6.jpg    <- Blog Platform screenshot
```

### Where to Update:
After adding images here, update the `portfolioItems` array in:
`components/PortfolioSection.tsx`

Change:
```tsx
image: '/portfolio/project1.jpg'
```

### Image Optimization Tips:
1. Use tools like TinyPNG or Squoosh to compress images
2. Convert to WebP format for better compression (Next.js supports this)
3. Use descriptive file names for SEO
4. Ensure images are high quality but optimized

### Placeholder Images:
Until you add your own images, the portfolio will show gradient backgrounds with your project colors.

---

**Note:** Don't forget to add a `favicon.ico` file in the `public/` directory for your browser tab icon!
