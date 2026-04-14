# Whitstable Dog Care — Website Documentation

**Live site:** https://whitstabledogcare.co.uk  
**GitHub repo:** https://github.com/WhitstableDogCare/wdc-static-site  
**Hosting:** Netlify (auto-deploys whenever changes are pushed to GitHub)

---

## Table of Contents

1. [How the website works](#how-the-website-works)
2. [File structure](#file-structure)
3. [How to make changes](#how-to-make-changes)
   - [Option A — Editing on GitHub (easiest, no software needed)](#option-a--editing-on-github-easiest-no-software-needed)
   - [Option B — Editing locally on your Mac](#option-b--editing-locally-on-your-mac)
4. [Common edits](#common-edits)
   - [Changing text](#changing-text)
   - [Updating pricing](#updating-pricing)
   - [Updating the timetable](#updating-the-timetable)
   - [Adding or replacing a photo](#adding-or-replacing-a-photo)
   - [Adding a new bullet point to the homepage](#adding-a-new-bullet-point-to-the-homepage)
5. [Style guide](#style-guide)
6. [Troubleshooting](#troubleshooting)

---

## How the website works

The site is made up of plain HTML files (one per page) and a single CSS stylesheet that controls how everything looks. There is no database, no login system, and no backend — it's just files.

**The publish workflow is:**

```
You edit a file → Save it → Push to GitHub → Netlify automatically publishes it
```

Changes are usually live within **1–2 minutes** of being pushed.

---

## File structure

```
wdc-static-site/
│
├── index.html          ← Homepage
├── services.html       ← Services & Pricing page
├── how-we-work.html    ← How We Work page
├── woof-shed.html      ← The Woof Shed page
├── availability.html   ← Availability page
├── about.html          ← About Us page
│
├── css/
│   └── style.css       ← All the styling (colours, fonts, layout)
│
└── images/
    ├── logo.png                ← WDC circular logo (used in nav header)
    ├── footer-logo.png         ← Purple logo (used in footer)
    ├── blue-grass.png          ← Grass strip that appears below the nav
    ├── og-image.png            ← Image shown when sharing a link on WhatsApp etc.
    ├── blue-garden.jpg         ← Blue in the garden (homepage)
    ├── IMG_1210.jpeg           ← Jack & Blue photo (About page)
    ├── IMG_7435.jpeg           ← Kim & Ivy photo (About page)
    ├── nook-nook-daisies.jpg   ← Snooki photo (About page)
    ├── IMG_4720.jpg            ← Dog with purple collar (How We Work)
    ├── IMG_4715.jpeg           ← Dog on outdoor area (How We Work)
    └── IMG_4736.jpeg           ← (+ 11 more Woof Shed gallery photos)
```

---

## How to make changes

There are two ways to edit the site. **Option A is recommended for Kim** as it requires no software — just a web browser.

---

### Option A — Editing on GitHub (easiest, no software needed)

This is the simplest way to make text changes. You edit the file directly in your browser on GitHub, and the site updates automatically.

**Step 1 — Go to the repo**  
Visit https://github.com/WhitstableDogCare/wdc-static-site and sign in to GitHub.

**Step 2 — Open the file you want to edit**  
Click on the file name (e.g. `about.html`) to open it.

**Step 3 — Click the pencil icon**  
In the top right of the file view, click the ✏️ edit (pencil) button.

**Step 4 — Make your changes**  
The file will open in a text editor. Find the text you want to change and edit it. Don't worry about the HTML tags (the things in `< >`) — just change the words between them.

> **Example:** To change "Jack & Blue" to something else, find:
> ```html
> <h2>Jack &amp; Blue</h2>
> ```
> and change just the words, leaving the `<h2>` and `</h2>` tags in place.

**Step 5 — Save (commit) your changes**  
Scroll to the bottom of the page. You'll see a "Commit changes" section. Add a short description of what you changed (e.g. "Update Jack's bio"), then click **Commit changes**.

**Step 6 — Wait 1–2 minutes**  
Netlify detects the change and rebuilds the site. Refresh the live site to see your changes.

---

### Option B — Editing locally on your Mac

This is how Jack edits the site using Claude Code or a code editor. After making changes:

```bash
git add <filename>
git commit -m "Description of what you changed"
git push
```

---

## Common edits

### Changing text

Open the relevant HTML file and find the text you want to change. You can use **Cmd+F** in GitHub's editor to search for the exact words.

Change only the visible text — not the HTML tags around it.

| ✅ Safe to change | ❌ Don't touch |
|---|---|
| Words and sentences | Anything inside `< >` brackets |
| Numbers and prices | `class=`, `href=`, `src=` attributes |
| Punctuation | The `<head>` section at the top |

---

### Updating pricing

Open **`services.html`** and find the pricing table. It looks like this:

```html
<tr>
  <td>Half day care — max 4 hours</td>
  <td>£20 per session</td>
  <td>£25 per session</td>
</tr>
```

Change the price values between the `<td>` and `</td>` tags. Don't change anything else on those lines.

---

### Updating the timetable

Open **`how-we-work.html`** and search for the time you want to change (e.g. "8:00 AM"). The timetable rows look like this:

```html
<tr>
  <td>8:00 AM – 10:00 AM</td>
  <td>Owners drop-off</td>
</tr>
```

Change the time or the activity text between the `<td>` tags.

---

### Adding or replacing a photo

**Step 1 — Prepare your photo**  
- Save it as a `.jpg` or `.jpeg` file
- Give it a clear filename with no spaces (e.g. `blue-autumn-2025.jpg`)
- Recommended size: no wider than 2000px (to keep the site fast)

**Step 2 — Upload the photo to GitHub**  
1. Go to https://github.com/WhitstableDogCare/wdc-static-site
2. Click on the **`images`** folder
3. Click **Add file → Upload files**
4. Drag your photo in and click **Commit changes**

**Step 3 — Reference it in the HTML**  
Open the relevant HTML file and find the `<img>` tag you want to update. Change the `src=` value to point to your new image:

```html
<!-- Before -->
<img src="images/blue-garden.jpg" alt="Blue in the garden" ...>

<!-- After -->
<img src="images/blue-autumn-2025.jpg" alt="Blue in the autumn garden" ...>
```

Also update the `alt=` description to describe the new photo — this is important for accessibility and SEO.

---

### Adding a new bullet point to the homepage

Open **`index.html`** and find the bullet list in the hero section. It looks like this:

```html
<ul class="hero-bullets">
  <li>Half &amp; full day care</li>
  <li>Boarding</li>
  ...
</ul>
```

To add a new bullet, copy an existing `<li>...</li>` line and paste it in the list with your new text:

```html
<li>Your new bullet point here</li>
```

---

---

## Style guide

If you ever need to add new content and want it to match the existing design:

### Colours
| Use | Colour | Value |
|---|---|---|
| Page background / header | Mustard gold | `#ECBB56` |
| Dark sections (Woof Shed) | Charcoal | `#3D3D3D` |
| Body text | Warm near-black | `#4B494A` |
| Buttons & accents | Soft purple | `#B295D9` |
| Alternate sections | Cream | `#F5E9C8` |

### Fonts
| Use | Font |
|---|---|
| Page titles & headings | Merienda |
| Navigation & labels | Oswald |
| Body text & paragraphs | Open Sans |

### Buttons
The purple CTA button style is applied with `class="btn-cta"`:
```html
<a href="mailto:jack@whitstabledogcare.co.uk" class="btn-cta">Button text here</a>
```

---

## Troubleshooting

**My change isn't showing on the live site**  
Wait 2–3 minutes and do a hard refresh (Cmd+Shift+R on Mac). If it's still not showing, check the Netlify dashboard at https://app.netlify.com for any deploy errors.

**I accidentally broke something**  
Don't panic. Every version of the site is saved in GitHub. Go to https://github.com/WhitstableDogCare/wdc-static-site/commits/main to see the history, or ask Jack to revert to a previous version.

**I'm not sure what file to edit**  
| Page on the site | File to edit |
|---|---|
| Homepage | `index.html` |
| Services & Pricing | `services.html` |
| How We Work | `how-we-work.html` |
| The Woof Shed | `woof-shed.html` |
| Availability | `availability.html` |
| About Us | `about.html` |
| Design / colours / fonts | `css/style.css` |

**I want to add a completely new page**  
Ask Jack — this is slightly more involved as it requires creating a new HTML file and adding a link to the navigation on every page.

---

*Last updated: April 2026*
