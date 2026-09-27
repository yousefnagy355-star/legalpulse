import { Scale } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-primary bg-ink text-ink-foreground">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#" className="flex items-center gap-3" aria-label="LegalPulse AI home">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Scale className="size-5" aria-hidden="true" />
          </span>
          <span className="font-serif text-xl font-bold tracking-tight">
            Legal<span className="text-primary">Pulse</span> AI
          </span>
        </a>
        <span className="hidden rounded-full border border-ink-foreground/15 bg-ink-foreground/5 px-3 py-1 text-xs tracking-wide text-ink-foreground/70 sm:inline">
          LexHack 2026 · Legal Automation Track
        </span>
      </div>
    </header>
  )
}
