# 🔧 Troubleshooting Guide

Common issues and their solutions for the Suru-Jogot Portfolio.

---

## 🚨 Installation Issues

### Problem: `npm install` fails

**Solution 1**: Clear npm cache
```powershell
npm cache clean --force
npm install
```

**Solution 2**: Delete and reinstall
```powershell
Remove-Item node_modules -Recurse -Force
Remove-Item package-lock.json
npm install
```

**Solution 3**: Use specific Node version
- Ensure Node.js 16.x or higher is installed
- Check version: `node --version`
- Update from: https://nodejs.org/

---

### Problem: Permission errors during installation

**Solution**: Run PowerShell as Administrator
1. Right-click PowerShell
2. Select "Run as Administrator"
3. Navigate to project folder
4. Run `npm install`

---

## 🖥️ Development Server Issues

### Problem: Port 3000 is already in use

**Solution 1**: Use different port
```powershell
npm run dev -- -p 3001
```

**Solution 2**: Kill process using port 3000
```powershell
# Find process using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID with actual process ID)
taskkill /PID [PID] /F
```

---

### Problem: Server won't start

**Solution**: Clean and restart
```powershell
Remove-Item .next -Recurse -Force
npm run dev
```

---

### Problem: "Cannot find module" errors

**Solution**: Ensure all dependencies are installed
```powershell
npm install
```

Check that these are in `node_modules/`:
- next
- react
- react-dom
- framer-motion
- react-icons
- tailwindcss

---

## 🎨 Styling Issues

### Problem: Tailwind classes not working

**Solution 1**: Restart dev server
```powershell
# Press Ctrl+C to stop
npm run dev
```

**Solution 2**: Clear Next.js cache
```powershell
Remove-Item .next -Recurse -Force
npm run dev
```

**Solution 3**: Check tailwind.config.js
Ensure content paths are correct:
```javascript
content: [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
],
```

---

### Problem: Animations not working

**Solution**: Check Framer Motion installation
```powershell
npm list framer-motion
```

If not found:
```powershell
npm install framer-motion
```

---

### Problem: Custom fonts not loading

**Solution**: Check internet connection
- Google Fonts requires internet
- Check `pages/_document.tsx` for font link
- Clear browser cache

---

## 🖼️ Image Issues

### Problem: Portfolio images not showing

**Solution 1**: Check file path
- Images must be in `public/portfolio/`
- Reference as `/portfolio/image-name.jpg`
- File names are case-sensitive

**Solution 2**: Check file format
- Supported: .jpg, .jpeg, .png, .webp, .svg
- Avoid spaces in filenames
- Use lowercase names

**Solution 3**: Restart server after adding images
```powershell
# Press Ctrl+C
npm run dev
```

---

### Problem: Images are too large/slow loading

**Solution**: Optimize images
1. Use online tools:
   - TinyPNG.com
   - Squoosh.app
   - ImageOptim
2. Target file size: < 500KB per image
3. Recommended size: 1200x800px

---

## 📱 Mobile/Responsive Issues

### Problem: Mobile menu not working

**Solution**: Check browser console (F12)
- Look for JavaScript errors
- Ensure Framer Motion is installed
- Clear browser cache

---

### Problem: Layout broken on mobile

**Solution**: Check viewport meta tag
In `pages/index.tsx`, ensure:
```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

---

### Problem: Animations laggy on mobile

**Solution**: Reduce animation complexity
1. Decrease particle count in `ParticleBackground.tsx`
2. Reduce star count in `StarsBackground.tsx`
3. Lower animation refresh rates

---

## 🔗 Link/Navigation Issues

### Problem: Smooth scroll not working

**Solution**: Check section IDs
Ensure all sections have correct IDs:
- `id="home"`
- `id="about"`
- `id="experience"`
- `id="services"`
- `id="portfolio"`
- `id="contact"`

---

### Problem: Navigation doesn't go to correct section

**Solution**: Check ID matches in:
1. Section components (e.g., `<section id="about">`)
2. Navigation components (e.g., `scrollToSection('about')`)
3. IDs must match exactly (case-sensitive)

---

## 📝 Form Issues

### Problem: Contact form doesn't submit

**Solution**: Check browser console
- The form currently logs to console
- To add real functionality:
  1. Set up email service (EmailJS, SendGrid)
  2. Or create API route in `pages/api/contact.ts`
  3. Update `handleSubmit` in ContactSection.tsx

---

### Problem: Form validation not working

**Solution**: Check HTML5 validation
- Ensure `required` attribute is present
- Check input types (email, text, etc.)
- Test in different browsers

---

## 🚀 Build Issues

### Problem: `npm run build` fails

**Solution 1**: Check for TypeScript errors
```powershell
npm run build
```
Read error messages and fix TypeScript issues

**Solution 2**: Clear cache and rebuild
```powershell
Remove-Item .next -Recurse -Force
Remove-Item node_modules -Recurse -Force
npm install
npm run build
```

---

### Problem: Build succeeds but deployment fails

**Solution**: Check deployment platform
- Vercel: Ensure build command is `next build`
- Netlify: Set build command to `npm run build`
- Check environment variables
- Ensure Node.js version matches (16+)

---

## 🌐 Browser Issues

### Problem: Website looks different in different browsers

**Solution**: Test in multiple browsers
- Chrome: Usually best support
- Firefox: Good standards support
- Safari: May need prefixes
- Edge: Similar to Chrome

Add browser prefixes if needed:
```css
-webkit-backdrop-filter: blur(10px);
backdrop-filter: blur(10px);
```

---

### Problem: Animations don't work in older browsers

**Solution**: 
1. Check browser version
2. Update browser to latest version
3. Consider adding polyfills for older browsers
4. Test in target browsers

---

## 💻 Performance Issues

### Problem: Website loads slowly

**Solution 1**: Optimize images
- Compress all images
- Use WebP format
- Lazy load images

**Solution 2**: Reduce animations
- Lower particle count
- Reduce star count
- Simplify complex animations

**Solution 3**: Check network
- Test on good internet connection
- Check dev tools Network tab
- Ensure no large file downloads

---

### Problem: High CPU usage

**Solution**: Reduce animation complexity
1. In `ParticleBackground.tsx`: Lower particle count (line 14)
   ```tsx
   Array.from({ length: 15 }, ...) // Instead of 30
   ```

2. In `StarsBackground.tsx`: Lower star count (line 14)
   ```tsx
   Array.from({ length: 75 }, ...) // Instead of 150
   ```

3. Increase animation durations (slower = less CPU)

---

## 🔍 TypeScript Issues

### Problem: TypeScript errors in IDE

**Solution 1**: Install dependencies
```powershell
npm install
```

**Solution 2**: Restart IDE
- Close and reopen VS Code
- Reload window: Ctrl+Shift+P → "Reload Window"

**Solution 3**: Check tsconfig.json
Ensure it exists and is properly configured

---

### Problem: "Cannot find module" errors in TypeScript

**Solution**: Check import paths
- Use `@/components/...` for absolute imports
- Or use relative imports: `../components/...`
- Ensure file extensions match (.tsx)

---

## 🎯 Customization Issues

### Problem: Changes not showing up

**Solution 1**: Hard refresh browser
- Windows: Ctrl+Shift+R
- Mac: Cmd+Shift+R

**Solution 2**: Clear browser cache
- Open DevTools (F12)
- Right-click refresh button
- Select "Empty Cache and Hard Reload"

**Solution 3**: Restart dev server
```powershell
# Press Ctrl+C
npm run dev
```

---

### Problem: Can't find where to edit content

**Solution**: Use component mapping
- **Name/Hero**: `components/HeroSection.tsx`
- **Bio**: `components/AboutSection.tsx`
- **Skills**: `components/AboutSection.tsx`
- **Experience**: `components/ExperienceSection.tsx`
- **Services**: `components/ServicesSection.tsx`
- **Projects**: `components/PortfolioSection.tsx`
- **Contact**: `components/ContactSection.tsx`

---

## 🆘 Still Need Help?

### Debugging Steps
1. **Check browser console** (F12) for errors
2. **Check terminal** for server errors
3. **Read error messages** carefully
4. **Search error** on Google/Stack Overflow
5. **Check file paths** and names
6. **Verify all imports** are correct
7. **Restart everything** (server, browser, IDE)

### Common Error Patterns

**"Cannot find module"**
→ Run `npm install`

**"Port already in use"**
→ Use different port or kill process

**"Module build failed"**
→ Clear .next folder and restart

**"Unexpected token"**
→ Check for syntax errors in code

**"Component not found"**
→ Check import path and file name

---

## 📞 Getting Help

### Before Asking for Help
✅ Check this troubleshooting guide
✅ Check README.md
✅ Check QUICKSTART.md
✅ Read error messages carefully
✅ Search error on Google
✅ Check browser console
✅ Check terminal output

### Information to Provide
When seeking help, include:
1. What you were trying to do
2. What happened instead
3. Error messages (full text)
4. Browser and version
5. Node.js version (`node --version`)
6. What you've already tried

---

## 🎓 Pro Tips

1. **Always read error messages** - They usually tell you exactly what's wrong
2. **Use browser DevTools** - F12 is your friend
3. **Check the console** - Errors appear there first
4. **Restart when in doubt** - Server, browser, IDE
5. **One change at a time** - Easier to identify issues
6. **Keep backups** - Git commit before major changes
7. **Test incrementally** - Don't wait until the end

---

## ✅ Prevention

### Best Practices
- ✅ Commit working code frequently
- ✅ Test after each major change
- ✅ Keep dependencies updated
- ✅ Use TypeScript for safety
- ✅ Follow naming conventions
- ✅ Document custom changes
- ✅ Test on multiple devices
- ✅ Optimize before deploying

---

**Remember**: Most issues have simple solutions. Stay calm, read error messages, and work through them systematically! 🚀

**Happy coding!** ✨
