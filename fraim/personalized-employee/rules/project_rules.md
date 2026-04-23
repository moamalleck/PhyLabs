# PhysicianLabs — Project Rules

These rules apply to every AI agent working in this repository. Read and follow them before taking any action.

---

## 1. HIPAA-Awareness by Default
Never log, expose, or persist Protected Health Information (PHI) — including patient names, dates of birth, diagnoses, treatment records, or insurance details. Any feature that touches patient data must be flagged for compliance review before implementation begins.

## 2. Stack Discipline
The approved stack is **Next.js (App Router) + Node.js + Tailwind CSS**. Do not introduce additional UI frameworks, component libraries, or alternative styling systems without explicit approval from the project owner.

## 3. API-First Architecture
All business logic must live in Node.js API routes or Next.js server actions. Client components must stay thin and presentational. Do not put business rules, data access, or validation logic inside React components.

## 4. Auth on Every Endpoint
Every API route and server action must be authenticated. Implement role-based access control (RBAC) with at minimum three roles: `provider`, `admin`, and `patient`. No endpoint may be publicly accessible unless explicitly approved.

## 5. Accessibility (WCAG 2.1 AA)
All UI components must meet WCAG 2.1 Level AA standards: sufficient colour contrast, full keyboard navigation, correct ARIA labels, and screen-reader compatibility. Healthcare UIs serve users with disabilities — this is both a legal requirement and an ethical obligation.

## 6. Test Before Merge
Every feature or bug fix requires at least one unit test and one integration test before a pull request is considered complete. Do not submit or approve work that lacks test coverage.
