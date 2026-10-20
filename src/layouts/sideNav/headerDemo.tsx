import { useEffect, useState } from "react"
import { Header, type HeaderLoginType } from "@/components/ui/Header"
import eraNewImage from "@/components/ui/Header/eraNew.png"

const userTypeKey = "header-demo-user-type"

function readUserType(): HeaderLoginType | null {
  try {
    const value = localStorage.getItem(userTypeKey)
    return value === "cph" || value === "non-cph" ? value : null
  } catch {
    return null
  }
}

export default function HeaderDemo({ page = "header" }: { page?: "header" | "new-era" }) {
  const [message, setMessage] = useState("")
  const [userType, setUserType] = useState(readUserType)

  useEffect(() => {
    const syncUserType = (event: StorageEvent) => {
      if (event.key === userTypeKey || event.key === null) setUserType(readUserType())
    }
    window.addEventListener("storage", syncUserType)
    return () => window.removeEventListener("storage", syncUserType)
  }, [])

  function selectUserType(nextUserType: HeaderLoginType) {
    setUserType(nextUserType)
    try {
      localStorage.setItem(userTypeKey, nextUserType)
    } catch {
      setMessage("Profile updated for this tab. Browser storage is unavailable.")
      return
    }
    setMessage(nextUserType === "cph" ? "CPH user login selected." : "Non-CPH user login selected.")
  }

  return (
    <div className="min-w-0 w-full">
      <Header
        homeHref="/?preview=header"
        userType={userType}
        onLogin={selectUserType}
        onSearch={(query, catalog) => setMessage(`Search submitted: ${query} (${catalog}).`)}
      />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-3xl font-semibold text-foreground">
          {page === "new-era" ? "Welcome to New Era landing page" : "Welcome to Connect Portal"}
        </h1>
        {page === "new-era" && (
          <img
            src={eraNewImage}
            alt="Purchasing Insights dashboard with net purchase, service level, returned purchases, RX spend, gross purchase, and net quantity metrics"
            className="mt-8 block h-auto w-full"
          />
        )}
      </section>
      {message && <p role="status" className="px-4 py-3 text-sm text-foreground">{message}</p>}
    </div>
  )
}