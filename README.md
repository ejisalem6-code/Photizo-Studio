# Photizo Studio — Website (Frontend Build)

This is a static, fully-linked website built from your Google Stitch UI/UX export.
Every page links to every other page correctly — you can open `index.html` in a
browser right now and click through the entire product.

## What's in here

| File | Page |
|---|---|
| `index.html` | Marketing / funnel landing page |
| `login.html` | Login |
| `signup.html` | Sign-up / onboarding (4-step wizard) |
| `dashboard.html` | Main dedicated user dashboard |
| `editor.html` | Photo / Video / **Logo Design** editor with Pleroma AI review panel |
| `templates.html` | Templates browser |
| `storage.html` | Photizo Space (storage manager + Trash) |
| `pcdl-hub.html` | PCDL Hub (gated to Radiant/Lambent Diamond) |
| `reels.html` | Reels feed |
| `community.html` | Community / Associates hub |
| `notifications.html` | Notifications center |
| `settings.html` | Settings, tier & billing |
| `upgrade.html` | In-app upgrade / pricing tiers |
| `payment.html` | Payment / checkout |
| `profile.html` | Your own profile |
| `creator.html` | Another creator's public profile |
| `admin-console.html` | Super Admin console (send/track Admin invites) |
| `admin-invite.html` | The screen an invited Admin lands on (12h countdown, accept/decline) |
| `terms.html`, `privacy.html`, `licensing.html` | Legal pages, written to match your stated policies |
| `blog.html`, `careers.html` | Placeholder pages so footer links aren't dead ends |
| `assets/site.js` | Shared JS: active-nav highlighting, a couple of button wiring helpers |
| `assets/favicon.svg`, `assets/logo.svg`, `assets/pcdl-icon.svg` | Brand assets pulled from your Stitch export |

## Important: this is frontend only, right now

Nothing here talks to a real database yet. Specifically:
- **Login/Signup** just redirect to the dashboard — they don't create real accounts.
- **Payment** doesn't charge anyone.
- **Admin invites** are simulated in the browser, not actually sent or stored anywhere.
- **Pleroma AI** buttons don't call any AI yet.

Search this folder for `TODO(supabase)` — every one of those comments marks a spot
that needs to be connected to your Supabase backend. That's exactly what we're
doing next.

## How to preview it right now

You don't need to install anything to look at it:
1. Unzip this folder anywhere on your computer.
2. Double-click `index.html` — it'll open in your browser.
3. Click around. Every nav link, sidebar item, and most buttons already go to
   the right page.

(Some visuals — the logo image and a couple of icon fonts — load from the
internet, so make sure you're online when you preview it.)
