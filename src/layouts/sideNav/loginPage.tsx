import { useState } from "react"
import type { HeaderLoginType } from "@/components/ui/Header"
import "./loginPage.css"

export default function LoginPage({ onLogin }: { onLogin: (userType: HeaderLoginType, remember: boolean) => void }) {
  const [username, setUsername] = useState("")
  const [remember, setRemember] = useState(false)

  return (
    <main className="portal-login">
      <section className="portal-login-panel" aria-labelledby="portal-login-title">
        <div className="portal-login-brand" aria-label="McKesson">M<span>c</span>KESSON</div>
        <form className="portal-login-form" onSubmit={(event) => {
          event.preventDefault()
          if (username.trim()) onLogin(username.trim() === "cphUser" ? "cph" : "non-cph", remember)
        }}>
          <h1 id="portal-login-title">Sign In</h1>
          <label htmlFor="portal-username">Username</label>
          <input id="portal-username" name="username" autoComplete="username" required value={username} onChange={(event) => setUsername(event.target.value)} />
          <label className="portal-login-remember">
            <input type="checkbox" checked={remember} onChange={(event) => setRemember(event.target.checked)} />
            Keep me signed in
          </label>
          <button type="submit">Next</button>
          <a href="/unlock-account">Unlock account?</a>
          <a href="/help">Help</a>
        </form>
      </section>
    </main>
  )
}