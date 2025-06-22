# 🧩 Tailwind 4.0 Demo Project Plan

This project is used to **learn and apply Tailwind CSS 4.0** by building a flexible, scalable design system using utility classes, tokens, and custom styles. It uses a **React + Vite + TypeScript** demo app with only **mock data (no async logic)** for simplicity.

We follow a **production-grade process** including planning, design, componentization, theming, and documentation.

---

## 📌 Planning & Scoping

### Step 1: ✅ Done — App Idea Selected

#### App Name

Recipe Catalog

#### Concept

A simple app to browse a list of recipes with details like title, ingredients, steps, and tags. Includes basic filtering (e.g., by tags like "vegan", "quick", etc.) with mock data only.

### Step 2: ✅ Done — Project Goals & Scope Defined

#### Project Goals

- Demonstrate Tailwind CSS 4.0 capabilities using utility classes, tokens, and custom styling.
- Serve as a learning tool for:
  - Responsive design
  - Accessible UI
  - Scalable component architecture
- Be mock-data only, no async or backend logic.
- Focus on reusability and maintainability using well-structured components and design tokens.

#### Project Scope

- **Core Features**
  - Recipe List Page: Displays a grid or list of recipe cards (title, short description, tags)
  - Recipe Detail View: Full recipe view with ingredients and steps
  - Filter Bar: Static tag-based filter (e.g., vegan, gluten-free), updates visible recipes via mock filtering
  - Basic Navigation: Simple header/nav bar with branding and links
- **Key Use Cases & User Flows**
  - User opens the app and sees a list of recipes
  - User clicks a tag to filter recipes
  - User clicks a recipe to view its details
  - User returns to the list view
- **Out of Scope**
  - User authentication or personalization
  - Real-time updates or form submissions
  - Backend, API calls, or persistent storage

### Step 3: ✅ Done — Success Criteria & Design Principles

#### Success Criteria

1. App uses only mock data — no backend or async logic.
2. All UI is built with Tailwind CSS 4.0 utility classes and custom tokens.
3. A consistent design system is implemented — colors, spacing, typography, and components follow a shared token-based structure.
4. All components are modular and reusable — clearly organized in folders (e.g., `components/ui`).
5. Theming is applied — support for light and dark mode using Tailwind configuration.

#### Design Principles (Simplified)

- **Visual Consistency:** Use a tokenized design system for spacing, color, typography, etc.
- **Component Reusability:** Build atomic and composite components with clear utility patterns (e.g., `.btn`, `.card`, `.tag`).
- **Maintainability:** Organize code and styles with clear structure and naming, using TypeScript and Tailwind conventions.
- **Simplicity:** Focus on static UI only — no need for responsive breakpoints, keyboard navigation, or full accessibility.

---

## 🎨 Specification

### Step 4: ✅ Done — Feature Specifications

#### UI Components (with states)

1. `RecipeCard`
   - Props: `title`, `description`, `tags`
   - States: default, hover (optional visual lift)
2. `RecipeDetail`
   - Shows full info: `title`, `ingredients[]`, `steps[]`, `tags[]`
3. `FilterTag`
   - Props: `label`, `active`
   - States: selected, unselected
4. `FilterBar`
   - Renders list of `FilterTag` components
   - Static tag options: e.g., `"Vegan"`, `"Quick"`, `"Dessert"`
5. `Header`
   - Includes app name/logo and nav link(s)
6. `LayoutContainer`
   - Wraps main content, handles consistent spacing

#### User Stories & Flows

1. **Browse Recipes**
   - As a user, I open the app and see a list of recipe cards.
2. **View Details**
   - As a user, I click a recipe card and see a full recipe view.
3. **Filter Recipes**
   - As a user, I click a tag in the filter bar to see only recipes with that tag.
4. **Navigate Back**
   - As a user, I return to the main list from the recipe detail view.

---

## 📐 Wireframing & Information Architecture

### Step 5: ✅ Done — Wireframing (ASCII)

#### Information Architecture (IA)

```
/              → Recipe List View (Home)
/recipe/:id    → Recipe Detail View
```

- Simulated via top-level UI state — no real routing needed.
- Clicking a card opens its detail view.
- Clicking "← Back" returns to the recipe list.

#### Navigation Logic

| Action                | State Change                | Resulting View         |
| --------------------- | --------------------------- | ---------------------- |
| Click on `RecipeCard` | `setSelectedRecipeId(id)`   | Shows `RecipeDetail`   |
| Click "← Back"        | `setSelectedRecipeId(null)` | Returns to Recipe List |

#### Main Components

- **Global**
  - `Header` — Displays app title and optional nav
  - `LayoutContainer` — Provides consistent spacing and alignment
- **Recipe List View**
  - `FilterBar` — Renders `FilterTag[]`
  - `FilterTag` — Tag toggle button (selected/unselected)
  - `RecipeCard` — Card showing `title`, `description`, `tags`
- **Recipe Detail View**
  - `BackButton` — Navigation control
  - `RecipeDetail` — Full recipe info: `title`, `ingredients`, `steps`, `tags`

#### Wireframes (ASCII)

- **Recipe List View**
  ```
  +----------------------------------------------------+
  | 🍳  Recipe Catalog                        [Filter] |
  +----------------------------------------------------+
  | # Vegan  # Quick  # Dessert                        |
  +----------------------------------------------------+
  | [ 🥗 Avocado Salad         ]  [ 🍝 Pasta Primavera ] |
  | [ Light, healthy lunch     ]  [ Quick Italian dish ] |
  | [Tags: Vegan, Quick]       |  [Tags: Quick]         |
  |----------------------------------------------------|
  | [ 🍰 Chocolate Cake         ]  [ 🍜 Miso Ramen      ] |
  | [ Rich dessert treat       ]  [ Warm, cozy soup    ] |
  | [Tags: Dessert]            |  [Tags: Vegan]        |
  +----------------------------------------------------+
  ```
- **Recipe Detail View**
  ```
  +----------------------------------------------------+
  | ← Back              🍝 Pasta Primavera              |
  +----------------------------------------------------+
  | Tags: #Quick                                        |
  +----------------------------------------------------+
  | 📝 Ingredients:                                     |
  | - 200g pasta                                        |
  | - 1 bell pepper                                     |
  | - Olive oil                                         |
  |                                                    |
  | 🧑‍🍳 Steps:                                          |
  | 1. Boil pasta                                       |
  | 2. Sauté veggies                                    |
  | 3. Mix & serve                                      |
  +----------------------------------------------------+
  ```

#### Component-View Map

| Component      | Recipe List View | Recipe Detail View |
| -------------- | ---------------- | ------------------ |
| `Header`       | ✅               | ✅                 |
| `FilterBar`    | ✅               |                    |
| `RecipeCard[]` | ✅               |                    |
| `BackButton`   |                  | ✅                 |
| `RecipeDetail` |                  | ✅                 |

---

### Step 6: ✅ Done — Design System & Tokens

To support consistency and scalability, the app uses a tokenized design system powered by Tailwind CSS 4.0. All styles are defined using utility classes and extended via the `tailwind.config.ts` file.

#### 🧩 Token Categories

| Token Type        | Example Name                                 | Example Value            | Usage                            |
| ----------------- | -------------------------------------------- | ------------------------ | -------------------------------- |
| **Spacing**       | `space-2`, `space-4`                         | `0.5rem`, `1rem`         | Padding, margin, layout gaps     |
| **Font Size**     | `text-sm`, `text-lg`                         | `0.875rem`, `1.125rem`   | Headings, body, tag text         |
| **Font Family**   | `font-sans`                                  | `Inter`, `ui-sans-serif` | Default typography               |
| **Color Palette** | `primary`, `surface`, `accent`, `text-muted` | Hex/HSL                  | Backgrounds, buttons, text, tags |
| **Border Radius** | `rounded-md`, `rounded-2xl`                  | `6px`, `16px`            | Cards, buttons, tags             |
| **Shadow**        | `shadow-sm`, `shadow-card`                   | Subtle elevation         | Cards, overlays                  |

#### ⚙️ Tailwind Config Extension

```ts
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: "#6D28D9",
        surface: "#F9FAFB",
        accent: "#FDE68A",
        "text-muted": "#6B7280",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      borderRadius: {
        md: "6px",
        "2xl": "1rem",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      boxShadow: {
        card: "0 2px 8px rgba(0, 0, 0, 0.05)",
      },
    },
  },
};
```

#### ♻️ Utility Patterns

Reusable style patterns applied via utility classes:

- `.btn`
  `bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80`

- `.card`
  `bg-surface rounded-2xl p-4 shadow-card`

- `.tag`
  `inline-block bg-accent text-sm px-2 py-0.5 rounded-md text-black`

These patterns will be used across all components to ensure visual and structural consistency.

---

### Step 7: UI Mockup (ASCII)

#### 🏠 Home: Recipe List View

```
+------------------------------------------------------------+
| 🍳  Recipe Catalog                               [Filters] |
+------------------------------------------------------------+
| # Vegan   # Quick   # Dessert                              |
+------------------------------------------------------------+
| +------------------------------------------------------+  |
| | 🥗  Avocado Salad                                     |  |
| | Light, healthy lunch                                  |  |
| | [Vegan] [Quick]                                       |  |
| |------------------------------------------------------|  |
| | bg-surface, p-4, rounded-2xl, shadow-card            |  |
| +------------------------------------------------------+  |
|                                                          |
| +------------------------------------------------------+  |
| | 🍝  Pasta Primavera                                   |  |
| | Quick Italian dish                                    |  |
| | [Quick]                                               |  |
| +------------------------------------------------------+  |
+------------------------------------------------------------+
```

#### 📖 Recipe Detail View

```
+------------------------------------------------------------+
| ← Back                                       Pasta Primavera |
+------------------------------------------------------------+
| Tags: [Quick]                                              |
|                                                            |
| 📝 Ingredients:                                            |
| - 200g pasta                                               |
| - 1 bell pepper                                            |
| - Olive oil                                                |
|                                                            |
| 🧑‍🍳 Steps:                                                 |
| 1. Boil pasta                                              |
| 2. Sauté veggies                                           |
| 3. Mix & serve                                             |
|                                                            |
| Components: RecipeDetail, Tag, BackButton                  |
| Tokens: bg-surface, text-lg, px-4, py-2, rounded-md        |
+------------------------------------------------------------+
```

---

#### 🧱 Mockup Design Tokens Applied

| Element | Tokens / Classes                                      |
| ------- | ----------------------------------------------------- |
| Cards   | `bg-surface p-4 rounded-2xl shadow-card`              |
| Buttons | `bg-primary text-white px-4 py-2 rounded-md`          |
| Tags    | `bg-accent text-black text-sm px-2 py-0.5 rounded-md` |
| Layout  | `font-sans text-base space-y-4`                       |

---

### Step 8: Component Development

#### 🧱 Component Folder Structure

```
src/
├── components/
│   ├── layout/
│   │   └── LayoutContainer.tsx
│   ├── ui/
│   │   ├── Header.tsx
│   │   ├── RecipeCard.tsx
│   │   ├── RecipeDetail.tsx
│   │   ├── FilterTag.tsx
│   │   ├── FilterBar.tsx
│   │   └── BackButton.tsx
├── design-system/
│   └── tokens.ts      # Shared tokens (optional if needed in JS)
```

---

#### 🧩 Component Breakdown

| Component         | Purpose                                 | Key Classes & Tokens                     |
| ----------------- | --------------------------------------- | ---------------------------------------- |
| `LayoutContainer` | Consistent padding and max-width layout | `px-4 md:px-8 max-w-4xl mx-auto`         |
| `Header`          | Displays app title/logo                 | `text-xl font-bold py-4`                 |
| `RecipeCard`      | Summary of a recipe                     | `bg-surface p-4 rounded-2xl shadow-card` |
| `RecipeDetail`    | Full recipe with ingredients and steps  | `text-lg space-y-4`                      |
| `FilterTag`       | Toggleable tag button                   | `bg-accent px-2 py-0.5 rounded-md`       |
| `FilterBar`       | Row of `FilterTag` components           | `flex gap-2 py-2`                        |
| `BackButton`      | Returns to the list view                | `text-sm text-primary underline`         |

---

#### ✅ Development Goals

- All components:

  - Written in **TypeScript**
  - Styled with **Tailwind utility classes only**
  - Follow prop-driven, **stateless** design (state lives in parent)

- No third-party libraries or real data — mock-only
- Initial render handles both list and detail via `selectedRecipeId`

---

Would you like me to start scaffolding these components (e.g. `RecipeCard.tsx`) or generate the full `components/ui/` file tree with placeholder content?

---

### Step 9: ✅ Done — Theming (Dark Mode Support)

#### ✅ Objective

Extend the existing token-based light theme (defined in Step 6) with support for **dark mode**, using Tailwind’s `darkMode: 'class'` feature.

#### 📦 Strategy

- Keep existing design tokens (`primary`, `surface`, etc.) as the **light theme base**
- Add **dark mode overrides** using Tailwind's `dark:` modifier

#### ⚙️ Tailwind Config Update

```ts
export default {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#6D28D9",
        surface: "#F9FAFB", // light
        accent: "#FDE68A",
        "text-muted": "#6B7280",
      },
    },
  },
};
```

#### 🌓 Applying Dark Mode in UI

```html
<div class="bg-surface text-black dark:bg-gray-900 dark:text-white">
  Content
</div>
```

To toggle:

```tsx
document.documentElement.classList.toggle("dark");
```

#### ✅ Outcome

The theme system now supports:

- Central token-driven light theme (already done)
- Optional dark theme via `dark:` classes

This keeps the theming system lean and focused, while supporting visual flexibility.

---

### Step 10: Documentation

- Maintain `plan.md` with:
  - Project goals
  - Design decisions
  - Tasks and milestones
  - Issues and iterations
- (Optional) Add:
  - `README.md` for project setup and dev workflow
  - `CONTRIBUTING.md` if open for collaboration

---
