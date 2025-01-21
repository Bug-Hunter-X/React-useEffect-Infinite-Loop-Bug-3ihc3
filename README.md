# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug: an infinite loop caused by an incorrectly used `useEffect` hook.  The `useEffect` hook, designed for performing side effects, can easily create an infinite loop if not handled carefully.

## Bug Description

The provided `MyComponent` uses `useEffect` to increment a counter every second until it reaches 10. However, the counter variable ('count') is included in the dependency array.  This causes the `useEffect` to re-run every time the counter updates, creating a continuous loop.

## Bug Solution

The solution is to adjust the dependency array to avoid triggering the `useEffect` on every count update. If there is nothing to be updated after the condition is met then remove the dependency, else modify the dependencies to solve the problem. In this case, removing 'count' from the dependency array will fix the infinite loop. The interval will start only once, and clearInterval will stop the loop after the specified time.

## How to reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.

Observe the continuously incrementing counter. This is the infinite loop.

Refer to `bug.js` for the buggy code, and `bugSolution.js` for a corrected version.