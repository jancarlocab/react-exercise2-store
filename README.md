# React Exercise 2 - Store App

Jan Carlo L. Cabrera UPLB

## Code Description
----------
This is a React-based product listing application that fetches product data from an external API and displays it in a responsive, Material-UI styled grid. It includes features such as search, category filtering, loading indicators, error handling, and a product detail modal.

## How to Use?
----------
1. Wait for products to **load** on app start.
2. Use the **search** bar to **filter** products by *title* or *category*.
3. Use the category **dropdown** to filter by specific product categories.
4. **Click** a product to view more details in a modal.
5. Use the "Clear Filters" button to **reset** search and filters.

## 🧠 Key Learnings and Takeaways
----------
- Learned how to efficiently manage API data and render it with performance in mind using `useMemo()` to avoid unnecessary re-renders.
- Understood the importance of UI state synchronization (e.g., search input, category filters, modal visibility) and how controlled components help maintain consistency.
- A significant challenge was ensuring that filtering by both search and category didn’t cause performance issues or desynchronized UI. I overcame this by memoizing the filtered product list with `useMemo()` and ensuring filters were controlled. The result was a responsive and smooth user experience even with dynamic filter changes.
