# Claude Code Prompt: Rebuild Whitstable Dog Care as a Static Website

## Overview

Rebuild whitstabledogcare.co.uk as a self-hosted static website (HTML + CSS + minimal JS). The site must faithfully replicate the design and content of the existing Squarespace site, while applying the specific improvements listed below.

---

## Design System

### Colours
- **Primary background / header:** `#ECBB56` (warm mustard gold)
- **Dark section background:** `#3D3D3D` (dark charcoal — used on Woof Shed page)
- **Body text:** `#4B494A` (near-black warm grey)
- **White text** (on dark sections): `#FBF7F6`
- **Accent / button:** `#B295D9` (soft purple — matches the botanical motif)
- **Table borders / dividers:** `#000000`

### Typography
- **Heading font:** `Merienda` (Google Font) — used for page titles and section headings
- **Subheading / nav font:** `Oswald` (Google Font) — used for section labels and nav
- **Body font:** `Open Sans` (Google Font) — used for all paragraph text
- Import all three from Google Fonts in the `<head>`

### Logo & Images
All images are hosted on Squarespace's CDN and can be referenced directly. Use these URLs:

| Asset | URL |
|---|---|
| Logo (circular, 500×500px) | `https://images.squarespace-cdn.com/content/v1/685da19fde0f770ee90dd9cb/330aa0f1-5a6a-43ec-896e-e2d8486c8988/WDC+Email+Logo+500x500px+.png` |
| Grass strip image | `https://images.squarespace-cdn.com/content/v1/685da19fde0f770ee90dd9cb/50a5a864-c642-4b56-832c-6c4f57f3967e/Blue+Grass.png` |
| Tagline image | `https://images.squarespace-cdn.com/content/v1/685da19fde0f770ee90dd9cb/74b3a90e-d7e1-4c0a-9654-864d37a7e21c/WDC+Tagline.png` |
| Purple flower illustration | `https://images.squarespace-cdn.com/content/v1/685da19fde0f770ee90dd9cb/0f1307ac-1c46-41d3-b759-415f57aabcc5/1.png` |
| Leaf illustration | `https://images.squarespace-cdn.com/content/v1/685da19fde0f770ee90dd9cb/4df83c2e-31c9-4fb1-b518-676a6e1fb5e9/3.png` |
| Paw print illustration | `https://images.squarespace-cdn.com/content/v1/685da19fde0f770ee90dd9cb/57414e2e-1fe5-4e90-adc5-5e8e36a5de5a/4.png` |
| Blue in garden | `https://images.squarespace-cdn.com/content/v1/685da19fde0f770ee90dd9cb/8a5b2477-020b-48ef-b0c6-d95b3fe39853/Blue+garden.jpg` |
| Dog with purple collar (brindle) | `https://images.squarespace-cdn.com/content/v1/685da19fde0f770ee90dd9cb/1752327974417-N790SVRFJEMMUAHVCOY5/IMG_4720.jpg` |
| Woof Shed exterior | `https://images.squarespace-cdn.com/content/v1/685da19fde0f770ee90dd9cb/55bed022-d638-4457-a8d8-fea5ed2e3100/IMG_4736.jpeg` |
| Dog on outdoor area (black fluffy) | `https://images.squarespace-cdn.com/content/v1/685da19fde0f770ee90dd9cb/86581996-b652-4bed-a51f-ff2fc32c23e9/IMG_4715.jpeg` |
| Jack & Blue photo | `https://images.squarespace-cdn.com/content/v1/685da19fde0f770ee90dd9cb/c117f980-64e5-4e91-ab9b-b0af02e79fbf/IMG_1210.jpeg` |
| Kim & Ivy photo | `https://images.squarespace-cdn.com/content/v1/685da19fde0f770ee90dd9cb/dbc4860d-4882-4b32-b13c-db17838fd617/IMG_7435.jpeg` |
| Cat (Snooki) | `https://images.squarespace-cdn.com/content/v1/685da19fde0f770ee90dd9cb/7ca59c35-ad11-479e-aa19-c23d08cb3ae4/Nook+Nook+Daisies.jpg` |
| Dog sleeping on sofa | `https://images.squarespace-cdn.com/content/v1/685da19fde0f770ee90dd9cb/74b3a90e-d7e1-4c0a-9654-864d37a7e21c/WDC+Tagline.png` |

---

## Site Structure

Create the following files:
```
index.html
services.html
how-we-work.html
woof-shed.html
availability.html
about.html
css/style.css
```

---

## Improvements to Apply (vs the Squarespace original)

### 1. Horizontal navigation bar (REPLACES the hamburger menu)
- On **desktop**: show a full horizontal nav bar — logo left, nav links right
- On **mobile**: collapse to a hamburger menu (standard JS toggle)
- Nav links: **Services & Pricing** | **How We Work** | **The Woof Shed** | **Availability** | **About Us**
- Nav bar background: `#ECBB56` (same as site)
- Nav link font: `Oswald`, uppercase, `#4B494A`
- Active page link should be visually indicated (e.g. underline)
- The header should be compact — logo ~60px tall, total header ~80px — not the oversized Squarespace version

### 2. Grass image strip (FIXED)
- The grass strip image (`Blue+Grass.png`) appears as a decorative divider below the header on every page
- Make it a proper full-width strip, **80–100px tall**, `object-fit: cover`, `object-position: center bottom`
- It should look intentional, not like a broken layout artefact

### 3. CTA button on homepage hero (NEW)
- Add a prominent button in the homepage hero section: **"Book a Free Meet & Greet"**
- Link: `mailto:jack@whitstabledogcare.co.uk?subject=Meet%20%26%20Greet%20Enquiry`
- Style: background `#B295D9`, text white, `Oswald` font, rounded pill shape, generous padding
- Place it below the bullet point list and above the intro paragraph

---

## Page Content

### index.html — Home

**Hero section** (gold background):
- Large circular logo centred (or left on desktop)
- Tagline: *"Home-from-home, family-run day care & boarding in Whitstable"* — Merienda font, large
- Address: *Walmer Road, Whitstable, Kent* — Open Sans
- Bullet list:
  - Half & full day care
  - Boarding
  - Calm, supervised environment
  - Owners drop-off and pick up
  - Secure purpose-built dog area
  - Walks, play, enrichment and rest
  - Certified, qualified, fully insured, DBS checked
  - 4 Star Licence to Jack Rojas Powell ABOARD/25/01133
  - 24hr vet assistance
  - Daily updates for owners
- **[NEW] CTA button:** "Book a Free Meet & Greet" (see improvements above)

**Contact / intro section** (gold background, below grass strip):
- Heading: *"Available Spaces"* linking to availability.html
- Contact info:
  - Tel: 07840 469 646
  - Email: jack@whitstabledogcare.co.uk
- Intro text: *"We are a husband and wife, run, home-from-home dog day care and boarding business, based in Whitstable, Kent. Find out more about [us](about.html). Our family home includes our two daughters of 7 and 10 who we co-parent, our two whippets Blue and Ivy, and our cat Snooki. We love and look after your dog as though they are our own. In order to do this we make sure that we are the best environment for your dog and that they are best suited for us. Find out more about [how we work](how-we-work.html)."*
- Include a photo of Blue in the garden alongside this text (two-column layout on desktop)

---

### services.html — Services & Pricing

**Services section** — carousel/cards layout with three services:

**Day & Half-Day Care**
> We can't wait to welcome your dog to The Woof Shed — a doggy designated, fully temperature controlled indoor space, with access to its own gated, purpose built outside dog area. We provide a fun, safe and relaxing environment for dogs, fully accessible in our fenced and secure family garden.
> A half-day stay includes a 30 minute-minimum walk (2 for full days). As we do not operate with a dog van, local walks are on foot to the Gorrell Valley Nature Reserve (incorporating Duncan Down and Benacre Wood), West Beach and Seasalter, as well as the Crab & Winkle Way to Church Fields. Length and location of walks will be tailored each time to the dogs we are looking after.
> As well as walks, we provide enrichment and stimulation through individually tailored playtime, games, toys, and basic training.
> Rest times are equally important and we provide beds and restful areas, whether it be cosy in the winter, or cool in the summer. If appropriate, we can provide natural treats and chews to soothe and relax your dog.
> All owners receive regular updates of each day through photos and videos and a full report of the day upon collection.
> *Please note that we do not offer collect or drop-off services in order to provide all dogs with maximum care and enrichment.*
> [Read more about How We Work](how-we-work.html)

**Boarding**
> We provide a home-from-home stay for your dog — packed with activity, fun, enrichment and relaxation in a caring and structured way. We make it a priority to ensure that every dog staying with us feels settled and happy so they can enjoy their time with us to the maximum.
> Each 24-hour period includes a minimum of 2 x 30 minute walks, games and play, rest and relaxation. We are a dog-loving family and will ensure that your dog is loved and looked after — whether they need a cuddle, a brushing or just a quiet companion to sit next to.
> When boarding, dogs will sleep in our house, downstairs with our own canine family members Blue and Ivy. We do not have dogs upstairs or in bedrooms but will ensure they are fully comfortable. We have dog gates so we can ensure separation if needed and sleeping arrangements will always be agreed in advance. All owners receive regular updates of each stay through photos and videos and a full report upon collection.
> *Please note boarding is primarily available to our regular day care customers.*
> [Read more about How We Work](how-we-work.html)

**Walking**
> Our walks are all about fun, variety and stimulation for your four-legged family member. They must also be safe! We will never allow your dog off-lead unless it has been discussed and agreed. We ensure to give your dog our full attention during their walk.
> Walks are a vital part of our day care and boarding services and are tailored to your dog. Once discussed fully, they can incorporate:
> - Group walks (maximum of 4 dogs)
> - Basic training with natural dog treats to practice focus, recall and loose lead walking
> - Ball or stick chasing
> - Meeting other dogs
> - Exploring woodland spaces
> - Photos & videos of your dog in action on the walk
>
> *Please note that we do not have the capacity to undertake walks for dogs not in day care.*
> [Read more about How We Work](how-we-work.html)

**Pricing section** (below services):

Section heading: *"Pricing"*

Table:

| Service | Standard Rate | Peak Rate* |
|---|---|---|
| Half day care — max 4 hours | £20 per session | £25 per session |
| Full day care — max 8 hours | £30 per session | £40 per session |
| Long day care — max 12 hours | £40 per session | £50 per session |
| Overnight care — 12 to 24 hours | £50 per session | £60 per session |

**[IMPROVED] Discount callout — make this prominent:**
Display the discount as a highlighted callout box (not a footnote), styled in `#B295D9` background with white text, appearing ABOVE or immediately BELOW the table header:
> 🏷️ **10% discount on bookings of 7 days or more**

Then as a smaller note below the table:
> *\* Peak rates apply to weekend bookings, school and public holidays*

---

### how-we-work.html — How We Work

**Section 1 — Free Meet & Greet** (gold background, photo left / text right on desktop):
Heading: *"Free Meet & Greet"*
> Please read our [Policy & Procedures](#).
> We'll begin the process with a free Meet & Greet in our indoor/outdoor dog area, using dog gates and leads if needed, giving the dogs plenty of space to suss each other out. While your dog makes new friends, we'll chat over a cup of tea about your requirements and answer any questions you may have. It's the perfect opportunity for us to get to know each other and discuss how we can best support your dog's comfort, wellbeing and happiness.

**Section 2 — Paid Trial(s)** (alternate background, e.g. slightly lighter or white):
Heading: *"Paid Trial(s)"*
> After a successful Meet & Greet, the next step is our paid trial period. This crucial stage allows your dog to experience time in our care without you with them. We start with a short pre-agreed amount of time and build up to a typical day with us, ensuring they're completely comfortable and happy in our environment.
> To begin a trial period we will email you our booking and consent form. Once this is returned, we book a date and collect payment for the session. Trial periods are not fixed in length as it depends entirely on your dog's adjustment and comfort with their surroundings and new friends. This flexible approach ensures we get it just right for every dog in our care.
> *Please note we are not set up to take last minute bookings for dogs we do not know.*

**Section 3 — Daily Timetable** (gold background):
Heading: *"Our Daycare and Boarding Daily Timetable"*

Table:

| Time | Activity |
|---|---|
| 8:00 AM – 10:00 AM | Owners drop-off |
| 10:00 AM | Morning Dog Walk |
| 11:00 AM | Rest and relaxation |
| 12:00 PM | Mid-day playtime / Enrichment activities |
| 2:00 PM | Afternoon dog walk |
| 3:00 PM | Rest and relaxation |
| 4:00 PM | Afternoon playtime / Enrichment activities |
| 4:00 PM – 8:00 PM | Owners pick-ups |
| 6:00 PM – 9:00 PM | Dog boarders relaxation time |
| 9:00 PM | Dog boarders bed time |

---

### woof-shed.html — The Woof Shed

**Hero section** (dark charcoal `#3D3D3D` background, white text):
Heading: *"THE WOOF SHED"* — Merienda font, large, centred
Subheading: *"A doggy designated, fully temperature controlled indoor space, with access to its own gated, purpose built outside dog area."* — centred

**Photo gallery** (below hero, 2-column grid):
Use these images:
- Woof Shed exterior (`IMG_4736.jpeg`)
- Dog on the outdoor area (`IMG_4715.jpeg`)
- Any additional Woof Shed photos if available

---

### availability.html — Availability

**Heading section** (gold background):
Heading: *"Availability"*
Subtext: *"Our availability calendar shows current boarding capacity. Green = spaces available. Please get in touch to book."*

**Embedded Google Calendar:**
```html
<iframe src="https://calendar.google.com/calendar/embed?src=c_4d80f180f301ddb8c681fedffda3b8d68306fdf77db0388debc7cf456036a260%40group.calendar.google.com&ctz=Europe%2FLondon&mode=MONTH" 
  style="border: 0" width="100%" height="600" frameborder="0" scrolling="no"></iframe>
```

---

### about.html — About Us

**Jack & Blue section** (gold background, text left / photo right on desktop):
Heading: *"Jack & Blue"* — Merienda
Photo: Jack & Blue photo (`IMG_1210.jpeg`)
> Jack is a fully grown 6ft 4 human and Blue is a 5 year old whippet. They make a great team as Blue loves nothing more than being by Jack's side all day, and Jack loves the company of dogs. Jack has spent the last 4 years working as a social prescriber in Whitstable, Herne Bay and Canterbury and has a passion for politics and football (Arsenal to be specific!) Jack now runs Whitstable Dog Care full time and in his spare time can be found reading, gaming, watching football and spending time with Kim and the kids.
>
> **Qualifications:**
> - DBS checked & fully insured
> - OFQUAL SEG Awards Level 4 Certificate in Professional Pet Sitting, Dog Walking, Dog Day Care and Home Boarding
> - Canine First Aid (to be completed October 2025)

**Kim & Ivy section** (alternate background, e.g. slightly lighter gold or cream, text right / photo left on desktop):
Heading: *"Kim & Ivy"* — Merienda
Photo: Kim & Ivy photo (`IMG_7435.jpeg`)
> Kim grew up with dogs but Ivy is her first puppy. Kim has been learning about dog behaviour and training and loves training practice with Ivy on walks and at home. Ivy is a whippet puppy/baby giraffe with a seemingly ever-growing nose and heart melting side eye. Her favourite things are running, eating things she shouldn't, and enjoying a long-lasting natural chew in the garden. She would choose a furry goat leg each time and can't understand why her people find them too stinky.
>
> Kim runs a local non-profit and is passionate about flowers and gardening. Kim loves time at home with family and friends and particularly enjoys cuddles with the family cat Snooki. Snooki is getting over the fact he was not consulted about the family dog business!
>
> **Qualifications:**
> - DBS checked & fully insured

Optionally include Snooki photo (`Nook+Nook+Daisies.jpg`) as a decorative element.

---

## Footer (all pages)

Dark background (`#3D3D3D`), white text, centred:
- Small logo
- 07840 469 646
- jack@whitstabledogcare.co.uk
- Canterbury City Council Home Boarding for Dogs
- 4 Star Licence | Jack Rojas Powell ABOARD/25/01133
- © Whitstable Dog Care [current year]

---

## Technical Requirements

- Pure HTML + CSS + minimal vanilla JS (hamburger toggle only)
- No frameworks, no build tools — must work by opening `index.html` in a browser or serving from any static host (Netlify, GitHub Pages, etc.)
- Fully responsive — mobile first, breakpoint at 768px
- All external images loaded from Squarespace CDN URLs (no download needed)
- Google Fonts loaded via `<link>` in `<head>`
- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`)
- Each page should have a sensible `<title>` and `<meta name="description">`
- Smooth hover states on nav links and buttons
- The grass strip image should appear at the top of `<main>` on every page (below the nav), as a proper styled image strip

---

## Decorative Elements

The original site uses botanical illustrations scattered as accents. Include the purple flower (`1.png`) and/or leaf (`3.png`) illustrations as subtle decorative elements on relevant pages (e.g. homepage, about page). Keep them small (80–120px) and positioned as CSS `position: absolute` accents within sections rather than inline content.
