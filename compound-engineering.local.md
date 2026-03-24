---
review_agents:
  - compound-engineering:review:kieran-typescript-reviewer
  - compound-engineering:review:architecture-strategist
  - compound-engineering:review:security-sentinel
  - compound-engineering:review:performance-oracle
---

# Compound Engineering Local Settings

This is a Next.js 16 App Router portfolio site built with TypeScript, Tailwind CSS 4, and React 19. No database, no backend API — purely frontend.

## Review Context

- All interactive components require `'use client'` directive
- Pages use mount-based visibility animation (`useEffect(() => setIsVisible(true), [])`)
- Routing is Next.js App Router file-based — no react-router-dom
- No migrations, no database schema changes
