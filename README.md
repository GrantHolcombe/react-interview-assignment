React Interview Assignment
==========================

The purpose of this assignment is for us to gauge your competence with JavaScript, CSS, and React. You will build a very simple API-driven single-page app. This assignment should take less than two hours to complete.

The app should do the following (see screenshots folder for examples):
1. Show an index of posts (screenshot 1). Write this code in the Posts/All component.
2. Display some kind of 'Loading' indicator while the app is waiting for data to be fetched (screenshot 2).
3. Display each post in detail when clicked from the index (screenshot 3). Write this code in the Posts/View component.
4. Display user names instead of user IDs. Use the user names in `src/users.js`.

Note that the examples are (mostly) unstyled. We will also be evaluating your design and CSS skills with this assignment, so try to make your app look good. However, keep in mind that we don't expect you to put more than a couple hours of work into this assignment, so it doesn't have to look amazing.

**API:** Use the JSONPlaceholder API: https://jsonplaceholder.typicode.com/guide.html. This API is free and doesn't require registration.


Code guidelines
---------------
- Use React functional components only. No class components.
- Use `fetch` for network requests. Do not use a library for this.
- Do not use `.then` for any of your asynchronous code. Use `async/await` instead.
- Use React's `useState` hook to maintain state.
- The app only needs to run in evergreen browsers (latest versions of Chrome, Firefox, Safari).
