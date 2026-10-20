# Header

Two-row header based on `header.png`: navigation and utility links on the blue
top row, account and catalog search on the dark-blue second row, and a
keyboard-accessible profile menu. Scoped CSS is imported
by the component. The mobile layout responds to its container width.

```tsx
import { Header } from "@/components/ui/Header"

<Header
  cphLoginHref="/auth/cph"
  nonCphLoginHref="/auth/non-cph"
  onSearch={(query, catalog) => searchProducts(query, catalog)}
/>
```

Alternatively, use `onLogin={(userType) => startLogin(userType)}` for client-side
authentication, where `userType` is `"cph"` or `"non-cph"`. No authentication
provider or credentials are built into this presentation component. Supply
login URLs or a callback in the consuming application.

Override `navigation`, `homeHref`, `alertsHref`, `contactHref`, and `helpHref`
with application routes. Override `catalogOptions`, `alertCount`, or `logo` as
needed. Navigation items with `children` render dropdown menus.

Use `accountLabel` to set the active account and `accountOptions` (label/href
pairs) to enable its dropdown. Without options the account is display-only.
`profileInitials` defaults to `EV`, and `appsHref` sets the Apps destination.

The gallery includes a Header entry. `/?preview=header` displays it full width.
Selecting CPH updates the profile badge to `CPH` and adds Reporting > New Era
Page, opening `/new-era` in a new tab. The destination displays the same header
and "Welcome to New Era landing page". Selecting non-CPH changes the badge to
`N-CPH` and replaces the CPH-specific entry with Reporting > ERA Classic, opening
`https://dev-era.mckesson.com` in a new tab.

Use `userType` to control the header from application state and `newEraHref`
to override the destination URL. A standalone header keeps selection in memory;
the demo saves it in local storage and syncs changes across same-origin tabs.
This is UI simulation, not authentication or authorization. A different origin
requires its own authentication/session integration; local storage is not shared.

Production hosting must route `/new-era` requests to the app's `index.html`,
as the Vite development server does. Search in the preview shows feedback only.