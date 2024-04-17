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
- 4. Create .env file and add the following line - PG_URI = postgres://tickets_g74e_user:8mtN5oLobzFgZz5nKUESgvEsgF5UUUYi@dpg-coe2hk8l6cac73bst830-a.ohio-postgres.render.com/tickets_g74e?ssl=true (included only for ease of use)
- 5. 'npm run start' to start backend server
- 6. 'npm run build' to build
- 7. 'npm run dev' - open your localhost to view

## To-Do/Optimizations

- 1. "Home Page" 
  - Add Toasts for Invalid data input
  - Add Toasts for Valid data input
  - Styling/Formatting with themed colors
- 2. "Admin Page"
  - Complete search functionality - was unable to properly pass filtered state to Table component and update results dynamically. Search function itself was working. Add debounce (500ms) to avoid constant re-rendering
  - Add filters for each column of the table, allow back-end staff to easily sort by Status, Name.
  - Add additional columns, time/date was fetched but unused
  - Add categories - group certain keywords together to form categories
  - Add Pagination (list first 15 results only)
  - Limiting char size on table - currently will stretch entire screen if long response or summary
  - Add conditional rendering for Status - change color based on status
  - Add Toasts for successful and unsucessful modifications
  - Add functionality to delete tickets
- 3. Unit Testing for components
