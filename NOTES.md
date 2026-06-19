# Design log

We grade the *thinking*, not the length. Short, honest answers beat padding.
Write these as you build, not at the end.

---

## 1. The role check: which option did you pick?

In step 4 you chose between checking the role inside the admin page (Option A) or
teaching `ProtectedRoute` a `requiredRole` prop (Option B). Which one did you
pick, and why? What would make you switch to the other one?

_your answer_: I chose the option B. Because it is the best practice for future improvements and scalability. If we have more than 2 roles in the site, checking them one by one makes us lose time, but with "requiredRole" prop, we just tell the code what roles can access to this page and thats it. And imagine if we have multiple pages that we need to protect, instead of checking the role of the use in each page, we just give it a prop and the access will be restricted.

## 2. The flash problem

There is a moment when the page first loads where the user *looks* logged out
even though they have a valid session cookie. Where does that moment come from, and what
in your `ProtectedRoute` prevents the user from seeing the wrong thing during it?
(Mention both the spinner and the `return null`.)

_your answer_: I think its about useAuth that causes that blink. Because it needs a little amount of time to send the information like isAuthenticated or not. Thats why it loads as unauthenticated at first, and then when useAuth brings the auth status, it shows us the logged in state. And we have spinner inside ProtectedRoute that prevents that blink by putting a loading spinner in that gap.

## 3. Gating the delete button

How did you decide whether to show the delete button? Where does that decision
live, and what does a normal `USER` actually see in the markup?

_your answer_: Inside the card elements, as default i show the card normally untill the the place where delete button should be, and i check the role of user just right here, if its an ADMIN, i show delete button, if not i just show nothing else than the post itself

## 4. The navbar in each state

Describe what the navbar renders in each of these cases: logged out, logged in as
a `USER`, logged in as an `ADMIN`. What single value drives the difference?

_your answer_: First, no matter state of the user, i show Posts and Admin links. Even though they are restricted while logged out. While logged out, i show Log in button as well. While logged in as USER or ADMIN, i show the name of user (Demo User / Ada Admin), their role (USER / ADMIN), and a red sign out button. The main difference between these 2 is their role.

## 5. If I had another hour

What would you add or clean up next? (Redirect after login, active link
highlighting, real delete against a backend, nicer access-denied page...)

_your answer_: If i had more time, i would like to do redirect logic, communicate with a real backend, Sign IN page so new users can join. And a post creation logic.
