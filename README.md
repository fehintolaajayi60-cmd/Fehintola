# Folashade Elegbede — Portfolio Site

A simple static site (HTML/CSS/JS, no build tools needed) for your professional
portfolio.

## Files
```
index.html     — page content
css/style.css  — all styling
js/script.js   — scroll animations + footer year
README.md      — this file
```

## Before you publish
- Replace the phone number placeholder in `index.html` (search for
  `[add your number]`).
- Add your professional photo if you want one — see the note at the bottom of
  this file for how to drop it into the hero section.

## Publish it for free with GitHub Pages

1. Go to [github.com](https://github.com) and create a new repository, e.g.
   `folashade-portfolio`. Keep it **public**.
2. On your computer (or directly on GitHub's website), add these three files
   (`index.html`, the `css` folder, the `js` folder) to the repository.
   - Easiest no-install method: on the repo page, click **Add file → Upload
     files**, then drag in `index.html`, and separately create `css/style.css`
     and `js/script.js` (GitHub lets you type the folder name into the file
     name box, e.g. `css/style.css`, and it creates the folder automatically).
3. Once the files are uploaded, go to **Settings → Pages** (left sidebar).
4. Under "Build and deployment", set **Source** to `Deploy from a branch`,
   choose branch `main` and folder `/ (root)`, then click **Save**.
5. GitHub will give you a live link, usually:
   `https://<your-username>.github.io/<repo-name>/`
   It can take a minute or two to go live the first time.

That's it — no build step, no npm, nothing to install. Any time you edit a
file on GitHub and commit, the live site updates automatically within a
minute or so.

## Adding your photo (optional)
If you'd like your photo somewhere on the page, add an `images/` folder with
your photo file (e.g. `images/folashade.jpg`), then in `index.html` add this
inside the `.hero-ticket` div, right after the opening `<div class="ticket-card hero-ticket">` line:

```html
<img src="images/folashade.jpg" alt="Folashade Elegbede" class="hero-photo">
```

And add this to `css/style.css`:

```css
.hero-photo {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 2px solid var(--paper);
  box-shadow: 0 0 0 1px var(--line);
}
```
