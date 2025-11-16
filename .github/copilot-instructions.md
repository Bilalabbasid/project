# Vue 3 Developer Training Platform - Copilot Instructions

## Project Overview
This is a Vue 3 developer training platform similar to greatfrontend.com with two main product lines:
- **Interviews**: Practice questions and playbooks for technical interviews
- **Projects**: Coding challenges and project-based learning

## Technology Stack
- **Frontend**: Vue 3 with Composition API (`<script setup>`)
- **Routing**: Vue Router 4 with nested routes
- **Authentication & Payments**: Memberstack integration
- **Styling**: Modern CSS with component-scoped styles

## Key Architecture Decisions
1. All Vue components use Composition API with `<script setup>`
2. Memberstack handles authentication, payments, and content gating
3. Route protection implemented via Vue Router guards
4. Content gating using `data-ms-content` attributes
5. Dual-product structure with /interviews and /projects sections

## Development Guidelines
- Use `ref` and `reactive` for reactive data
- Implement proper TypeScript-style prop definitions
- Follow Vue 3 best practices for component composition
- Ensure all protected routes check authentication status
- Use Memberstack attributes for payment and content gating