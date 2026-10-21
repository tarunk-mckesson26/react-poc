# Header

Two-row header based on `header.png`: navigation and utility links on the blue
top row, account and catalog search on the dark-blue second row, and a
keyboard-accessible profile menu. Scoped CSS is imported
by the component. The mobile layout responds to its container width.

```tsx
import { Header } from "@/components/ui/Header"

<Header
  loginHref="/login"
  userType="cph"
  onSearch={(query, catalog) => searchProducts(query, catalog)}
/>
```

The profile menu links to `loginHref`, which defaults to `/login`. Supply
`userType` as `"cph"` or `"non-cph"` from application session state. No
authentication provider or credentials are built into this presentation component.

Override `navigation`, `homeHref`, `alertsHref`, `contactHref`, and `helpHref`
with application routes. Override `catalogOptions`, `alertCount`, or `logo` as
needed. Navigation items with `children` render dropdown menus.

Use `accountLabel` to set the active account and `accountOptions` (label/href
pairs) to enable its dropdown. Without options the account is display-only.
`profileInitials` defaults to `EV`, and `appsHref` sets the Apps destination.

The gallery includes a Header entry. `/?preview=header` displays it full width.
Without a session, the demo displays a username-only login form matching
`login.png`. `/login` always displays that form. Submitting `cphUser` selects
CPH; any other non-empty username selects N-CPH. Successful login displays the
Connect Portal dashboard. Keep me signed in uses local storage; otherwise the
selection is saved in session storage for the current tab.
Reporting includes Enterprise Reporting & Analytics (opening
`https://dev-era.mckesson.com` in a new tab), My Reports (`/reporting/my-reports`),
and Team Reports (`/reporting/team-reports`). Signing in as CPH updates the profile
badge to `CPH` and adds KPI Dashboard with a highlighted New badge, opening
`/new-era` in a new tab. The destination displays the same header and
the Purchasing Insights dashboard image. Signing in as non-CPH changes the profile badge
to `N-CPH` and removes KPI Dashboard.

Use `userType` to control the header from application state and `newEraHref`
to override the destination URL. The demo syncs remembered sessions across
same-origin tabs.
This is UI simulation, not authentication or authorization. A different origin
requires its own authentication/session integration; local storage is not shared.

Production hosting must route `/login` and `/new-era` requests to the app's `index.html`,
as the Vite development server does. Search in the preview shows feedback only.