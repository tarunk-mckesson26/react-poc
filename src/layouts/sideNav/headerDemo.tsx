import { useEffect, useState } from "react"
import { Header, type HeaderLoginType } from "@/components/ui/Header"
import eraNewImage from "@/components/ui/Header/eraNew.png"
import connectDashboardImage from "@/components/ui/Header/connectDashboard.png"
import LoginPage from "./loginPage"

const userTypeKey = "header-demo-user-type"

function readUserType(): HeaderLoginType | null {
  try {
    const value = localStorage.getItem(userTypeKey) ?? sessionStorage.getItem(userTypeKey)
    return value === "cph" || value === "non-cph" ? value : null
  } catch {
    return null
  }
}

export default function HeaderDemo({ page = "header" }: { page?: "header" | "new-era" | "login" }) {
  const [message, setMessage] = useState("")
  const [userType, setUserType] = useState(readUserType)
  const [showLogin, setShowLogin] = useState(page === "login")

  useEffect(() => {
    const syncUserType = (event: StorageEvent) => {
      if (event.key === userTypeKey || event.key === null) setUserType(readUserType())
    }
    window.addEventListener("storage", syncUserType)
    return () => window.removeEventListener("storage", syncUserType)
  }, [])

  function selectUserType(nextUserType: HeaderLoginType, remember: boolean) {
    setUserType(nextUserType)
    setShowLogin(false)
    if (page === "login") window.history.replaceState(null, "", "/?preview=header")
    try {
      localStorage.removeItem(userTypeKey)
      sessionStorage.removeItem(userTypeKey)
      const storage = remember ? localStorage : sessionStorage
      storage.setItem(userTypeKey, nextUserType)
    } catch {
      setMessage("Profile updated for this tab. Browser storage is unavailable.")
      return
    }
    setMessage("")
  }

  if (showLogin || !userType) return <LoginPage onLogin={selectUserType} />

  return (
    <div className="min-w-0 w-full">
      <Header
        homeHref="/?preview=header"
        userType={userType}
        reportingOnly={page === "new-era"}
        locationOptions={page === "new-era" ? ["Street 1", "Street 2"] : undefined}
        onSearch={(query, catalog) => setMessage(`Search submitted: ${query} (${catalog}).`)}
      />
      <section className="mx-auto max-w-7xl px-6 py-12">
        {page !== "new-era" && (
          <img src={connectDashboardImage} alt="Connect Portal dashboard" className="block h-auto w-full" />
        )}
        {page === "new-era" && (
          <img
            src={eraNewImage}
            alt="Purchasing Insights dashboard with net purchase, service level, returned purchases, RX spend, gross purchase, and net quantity metrics"
            className="block h-auto w-full"
          />
        )}
      </section>
      {message && <p role="status" className="px-4 py-3 text-sm text-foreground">{message}</p>}
    </div>
  )
}