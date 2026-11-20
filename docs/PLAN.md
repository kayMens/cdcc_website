# CDC Group Website Execution Plan

## 1. Delivery Approach

Build a new, mobile-first corporate website from a bespoke design system—not from a prebuilt corporate demo. Use the supplied homepage prototype in `site/` as the visual starting point, then replace all temporary copy and images with CDC-approved material.

Deliver in five controlled stages. CDC approves the scope and visual direction before full development, and approves content and acceptance tests before launch.

## 2. Recommended Technology Decision

### Preferred: WordPress with a custom block theme

This is the best fit because CDC already uses WordPress and needs non-technical staff to update projects, insights, people, programmes, logos, and images after training.

Recommended build stack:

- A lightweight custom block theme based on the approved design system.
- Advanced Custom Fields Pro (ACF Pro) for structured, editor-friendly content fields.
- Custom post types for Case Studies, Insights, People, Partners, Ventures/Programmes, and Vacancies.
- Taxonomies for sectors, capabilities, insight types, and application status.
- A vetted forms plugin with secure file uploads, spam prevention, and email routing.
- A search/filter solution that supports the project and insight archives without custom database work.

### Best non-WordPress option: Craft CMS 5

If CDC decides not to use WordPress, build with Craft CMS 5 and server-rendered Twig templates. It is suited to an editorial corporate website with tailored content types, permissions, assets, previews, relationships, secure forms, SEO, and redirects.

Use Craft only when the selected developer has demonstrated Craft expertise and CDC accepts the additional licensing and specialist-support dependency. Do not make the first release headless; it adds operational complexity without a meaningful benefit for this website.

Suggested Craft add-ons:

- Formie for contact, Careers, and Fellows forms.
- SEOmatic or an equivalent SEO/metadata tool.
- Retour or an equivalent redirect-management tool.

## 3. Theme Recommendation

### Recommended WordPress route

Use a **custom block theme**, not a marketplace theme. It will preserve the distinctive CDC visual identity and make the reusable layouts stable, fast, and maintainable.

### Practical accelerator

If budget or delivery time requires a commercial base, use **Kadence Theme + Kadence Blocks Pro + ACF Pro**. It supports responsive layout controls, header/mega-menu building, global styles, and dynamic content while keeping staff editing within the standard WordPress editor.

### Developer-led alternative

Use **Bricks + ACF Pro** only if the delivery agency will own the technical build and provide strong post-launch support. It is excellent for bespoke templates and filtered content archives, but it is more developer-oriented and should not become CDC staff's primary layout-design tool.

Avoid importing a prebuilt "consulting" starter template. It will introduce visual compromise and unnecessary components; only the approved CDC designs should be implemented.

## 4. Implementation Phases

### Phase 0: Discovery and foundation

1. Audit the current WordPress installation, hosting, domain access, theme/plugins, URLs, content, and analytics.
2. Confirm whether the existing installation can be safely reused; otherwise create a fresh staging environment.
3. Confirm final navigation labels, primary contact recipients, application status, legal entity names, and content owners.
4. Produce the final sitemap, layout inventory, redirect inventory, content checklist, fixed-scope quote, and recurring-cost register.

**Exit criteria:** CDC approves the final scope, platform, budget, and content responsibilities.

### Phase 1: Design system and visual approval

1. Turn the prototype direction into a design system: typography, CDC colours, spacing, grid, buttons, cards, forms, tags, and accessible interaction states.
2. Produce desktop and mobile designs for the homepage, open desktop navigation, mobile navigation, capability page, and case-study page.
3. Run up to two reasonable revision rounds.
4. Confirm approved photography direction and obtain rights-cleared CDC assets.

**Exit criteria:** CDC signs off the visual direction before full development starts.

### Phase 2: Content model and build

1. Implement the global header, footer, search, responsive navigation, and cookie/privacy essentials.
2. Configure these content types and fields:
   - Case Study: client, year, sector, capability, summary, challenge, response, approved outcomes, media, and related content.
   - Insight: type, author, date, sector, PDF, featured media, body, and related content.
   - Person, Partner, Venture, Programme, Member Firm, Vacancy, and Fellows intake.
3. Build 8–10 reusable page layouts: homepage, capability overview/detail, programme/venture, impact listing/detail, insights listing/article, about/people/partners, Fellows/Careers, and contact/legal.
4. Build simple filters for sector, capability, and insight type.
5. Configure forms, mailbox notifications, secure private CV uploads, spam protection, and application-open states.

**Exit criteria:** A staging site supports all agreed content types, layouts, navigation, filters, and forms.

### Phase 3: Content migration and population

1. Identify missing copy, images, bios, claims, client permissions, partner approvals, PDFs, and venture links.
2. Upload the base-scope content: homepage; six main sections; three capability pages; three member firms; eight case studies; eight insights; twelve people; fifteen partners; three ventures; three programmes; Fellows; Careers; contact; and legal pages.
3. Add alt text, captions, SEO titles, descriptions, and social-sharing metadata.
4. Obtain written CDC approval for every client logo and outcome/impact claim before publication.

**Exit criteria:** All included content is complete, reviewed, and approved in staging.

### Phase 4: Quality assurance and handover

1. Test current desktop/mobile browsers, keyboard navigation, focus states, colour contrast, headings, image alt text, forms, links, search, filters, file uploads, email delivery, and 404 handling.
2. Test redirects from important current URLs and verify SEO/indexing configuration.
3. Verify backups, protected administration, HTTPS, update procedures, and recovery access.
4. Run two practical training sessions. CDC staff must independently publish one article and one case study.
5. Provide the administrator credentials, content guide, component guide, hosting/domain access, licence record, and backup/maintenance instructions.

**Exit criteria:** CDC completes the acceptance checklist and authorises launch.

### Phase 5: Launch and support

1. Take a production backup, enable redirects, publish the approved site, and run immediate smoke tests.
2. Monitor forms, server errors, indexability, and key pages during the first week.
3. Correct defects in the agreed scope for at least 30 days at no additional charge.
4. Treat ongoing maintenance as an optional, separately priced service with defined update, backup, support, and response-time terms.

## 5. Roles and Decisions

| Area | CDC responsibility | Delivery team responsibility |
| --- | --- | --- |
| Content | Supply and approve copy, images, claims, logos, and URLs | Identify gaps, structure, upload, and optimise assets |
| Design | Approve direction and revisions | Create the system and responsive page designs |
| Platform | Retain hosting, domain, and admin ownership | Build, secure, document, and hand over the website |
| Launch | Approve final content and tests | Migrate, redirect, test, and monitor launch |

## 6. Definition of Done

- The site follows the approved CDC-branded, BCG-inspired direction without copying BCG assets or layouts.
- It works responsively and accessibly across common devices.
- Staff can independently maintain projects, insights, people, partners, and core pages.
- Search, filters, forms, private CV uploads, email notifications, SEO metadata, and redirects work as agreed.
- CDC retains control of the domain, hosting, source files, content, administrator access, and owned licences.
- The complete handover package and 30-day defect period are in place.
