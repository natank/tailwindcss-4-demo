# Cascade’s Task Plan for Recipe Catalog App

This plan is cross-referenced with `docs/plan.md` and ensures every step meets your specifications for the Recipe Catalog app.

---

## 1. Scaffold Component Structure
- Create folders: `src/components/layout/` and `src/components/ui/` as specified in `plan.md`.
- Create empty files for each atomic/composite component:
  - `LayoutContainer.tsx` (layout wrapper)
  - `Header.tsx` (app title/logo, nav)
  - `FilterBar.tsx` (renders a row of tags)
  - `FilterTag.tsx` (toggleable tag button, prop: `label`, `active`)
  - `RecipeCard.tsx` (summary card, props: `title`, `description`, `tags`)
  - `RecipeDetail.tsx` (full recipe, props: `title`, `ingredients[]`, `steps[]`, `tags[]`)
  - `BackButton.tsx` (returns to list view)
- Follow folder and naming conventions for maintainability and reusability.

## 2. Implement Layout and Header
- Implement `LayoutContainer` for consistent page padding and max width, as described in the design system.
- Implement `Header` with app name/logo and placeholder nav.
- Use only Tailwind utility classes and design tokens (see Step 6 in plan.md).

## 3. Implement Filtering UI
- Implement `FilterTag` as a stateless, prop-driven component (props: `label`, `active`).
- Implement `FilterBar` to render a row of `FilterTag` components with static tag options (e.g., "Vegan", "Quick", "Dessert").
- Ensure accessibility and keyboard navigation where feasible.

## 4. Implement Recipe Card and Detail
- Implement `RecipeCard` (displays recipe summary: title, description, tags; supports hover state for visual lift).
- Implement `RecipeDetail` (shows full recipe: title, ingredients, steps, tags).
- Implement `BackButton` (for returning to the list view).
- All components use only mock data and are stateless (state lives in parent/app).
- Style with Tailwind utility classes and the tokenized design system from plan.md.

## 5. Integrate Components in App
- Set up mock recipe data and tag list (no async/backend logic, per plan.md).
- Add state logic in `App.tsx` for:
  - Selected tag(s) for filtering (user can filter recipes by tag).
  - Selected recipe for detail view (user can view details and navigate back).
- Compose all components in the main app layout, following user flows:
  - Browse recipes
  - Filter recipes by tag
  - View recipe details
  - Navigate back to list
- Ensure all flows match the user stories in plan.md.

## 6. Polish, Test, and Document
- Ensure all components use only Tailwind utility classes and design tokens.
- Test filtering, navigation, and responsive layout.
- Polish styles for visual consistency, accessibility, and tech feel.
- Maintain documentation in `plan.md` and update as needed.

---

**All steps above are strictly aligned with your project’s design principles, folder structure, and user stories as specified in `docs/plan.md`.**

  - Selected tag(s) for filtering.
  - Selected recipe for detail view.
- Compose all components in the main app layout.

## 6. Polish and Test
- Ensure all components use only Tailwind utility classes and design tokens.
- Test filtering, navigation, and responsive layout.
- Polish styles for visual consistency and tech feel.
