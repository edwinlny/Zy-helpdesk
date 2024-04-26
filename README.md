#ZY-Help Desk

#Introduction

This is Edwin Leong's submission for the Z Engineering Take Home Coding Activity.

##Table of Contents

- Environment Setup
- App Set-up
- Optimizations

### Environment Setup

- Required:
  - Git (https://git-scm.com)
  - npm (https://www.npmjs.com)
  - Node https://nodejs.org/en/download/ (Use Version 18.16.0!)
  - For Window Users (https://learn.microsoft.com/en-us/windows/wsl/install#manual-installation-steps)
  - For Mac Users (https://brew.sh/)
  - Postgres https://www.postgresql.org/download/

## App Set-up

- 1. Copy github link https://github.com/edwinlny/Zy-helpdesk.git
- 2. Navigate to directory of your choice and run ' git clone 'https://github.com/edwinlny/Zy-helpdesk.git '
- 3. Navigate to directoy it was installed in. 'npm install' to install dependencies
- 4. Create .env file and add the two following lines -
     PG_URI = postgres://tickets_g74e_user:8mtN5oLobzFgZz5nKUESgvEsgF5UUUYi@dpg-coe2hk8l6cac73bst830-a.ohio-postgres.render.com/tickets_g74e?ssl=true
     DATABASE_URL= "postgres://tickets_g74e_user:8mtN5oLobzFgZz5nKUESgvEsgF5UUUYi@dpg-coe2hk8l6cac73bst830-a.ohio-postgres.render.com/tickets_g74e?ssl=true"
     (included only for ease of use, PG_URI can be removed once all db calls are converted to prisma)
- 5. 'npm run start' to start backend server
- 6. 'npm run build' to build
- 7. 'npm run dev' - open your localhost to view

## To-Do/Optimizations

- 1. Fix Search Functionality
  2. Convert all controllers to use Prisma.
 
## Version 1.1
1. a880162 refactor: tickets will be pulled by newest tickets first
2. d966c1f feat: added ability to close modal when clicked outside of it. styling: minor change to min height of our table component
3. 736dac3 bugfix: Clear form when submitting ticket on main index page
4. a6dcca0 feat: added toast notifications for successful ticket submission, and invalid email addresses. added react-toastify to npm package
5. f702a4e bugfix: fixed mobile view of modal inside of Table component. Text is appearing out of boxes - needs a fix.

## Version 1.2
1. e6721a6 feat: added prisma ORM. Updated the initial get query using prisma. To-do: convert remaining controllers
2. 726bbcb style: Added table row striping, cursor on hover of table data, re-worked TableModal, Status changed from dropdown to radio
3. 5bc0fa5 fix: removed exported post ticket function
