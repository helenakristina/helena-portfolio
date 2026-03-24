---
status: pending
priority: p3
issue_id: "008"
tags: [code-review, architecture, organization]
---

# `careerEvents` Data Co-located with Component Logic in `work/page.tsx`

## Problem Statement

`work/page.tsx` contains a 50-line `careerEvents` array defined at the top of the component file. Data and component logic are mixed in one file, making content edits require opening a component file, and making it impossible to reuse or type-check the data independently.

## Findings

**File:** `src/app/work/page.tsx:5–54`

50 lines of structured data (6 career events with year, company, role, color, highlight, detail fields) sit at the top of a page component file. No explicit TypeScript interface enforces the shape.

Architecture reviewer recommended extracting to `src/data/careerEvents.ts`.

## Proposed Solution

1. Create `src/data/careerEvents.ts`:

```ts
export interface CareerEvent {
  readonly year: string;
  readonly company: string;
  readonly role: string;
  readonly color: string;
  readonly highlight: string;
  readonly detail: string;
}

export const careerEvents: CareerEvent[] = [
  // ... move the array here
];
```

2. In `work/page.tsx`:
```tsx
import { careerEvents } from '@/data/careerEvents';
```

**Effort:** Small | **Risk:** None

## Acceptance Criteria

- [ ] `src/data/careerEvents.ts` created with explicit `CareerEvent` interface
- [ ] `work/page.tsx` imports from `@/data/careerEvents`
- [ ] Work page renders correctly
- [ ] `npm run build` passes

## Work Log

- 2026-03-24: Identified by Architecture reviewer (section 4) and TypeScript reviewer (#5)
