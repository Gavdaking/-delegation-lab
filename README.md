# Lab 4 – Event Delegation

This lab demonstrates how to use event delegation in JavaScript to manage dynamic and interactive UI components efficiently using a single parent event listener.

## Exercises

### Exercise 1 – Accordion Menu
Uses a single delegated click listener on the accordion parent element.
- Utilizes `closest()` to identify clicked triggers.
- Ensures only one panel is open at a time.

### Exercise 2 – Live Tag Builder
Dynamically creates and removes tags.
- Uses `keydown` for adding tags.
- Uses delegated click handling with `matches()` to remove tags.

### Exercise 3 – Filterable Card Grid
Implements filtering using a delegated click listener.
- Uses `dataset` attributes for filtering.
- Toggles `.hidden` class to control visibility.

### Exercise 4 – Inline Edit List
Allows inline editing of list items.
- Delegated `dblclick` handler.
- Supports Enter to save, Escape to cancel, and blur to commit changes.

## Key Concepts Practiced
- Event bubbling
- Event delegation
- `closest()`
- `matches()`
- Dynamic DOM manipulation
- Class toggling