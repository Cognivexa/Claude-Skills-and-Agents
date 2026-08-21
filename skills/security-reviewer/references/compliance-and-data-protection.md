# Regulatory Compliance & Data Protection

This scan flags code that handles data covered by a regulatory framework without the controls that framework expects — it flags candidates for legal/compliance review, it does not make a legal determination.

## Frameworks to check for

| Framework | What it covers | What to look for in code |
|---|---|---|
| **HIPAA** | Protected Health Information (PHI) | PHI fields (diagnosis, treatment, health plan) stored or logged without encryption or access controls |
| **HITECH** | HIPAA breach-notification & security extensions | Missing audit logging on PHI access or modification |
| **HITRUST** | Security control framework built on HIPAA/ISO | No documented access controls around health-data code paths |
| **42 CFR Part 2** | Substance use disorder treatment records | Missing extra-strict consent/re-disclosure handling on SUD-related records |
| **PHIPA** | Ontario personal health information | Same PHI patterns as HIPAA, scoped to Ontario data subjects |
| **FERPA** | Student education records | Grades, discipline, or enrollment data exposed without the access checks FERPA requires |
| **GDPR** | EU personal data | No consent tracking, no data-deletion path, personal data sent to third parties with no documented legal basis |
| **SOC 2** | Service-organization trust controls | Missing audit trails, access logging, or change-control evidence a control would require |
| **OSHA** | Workplace injury/illness recordkeeping | Injury/incident records handled without the same access restrictions as other regulated PII |

## What to actually grep for

- Field/column/variable names suggesting regulated data: `diagnosis`, `ssn`, `dob`, `health_plan`, `treatment`, `grade`, `disciplinary`, `injury_report`
- That data flowing into a logger, an analytics event, or a third-party API call without redaction
- Database columns or file storage for the above with no encryption-at-rest configuration nearby
- Endpoints returning the above fields with no visible authorization check on the requester's relationship to the data subject

## Reporting

Report each match as a finding: file:line, the framework it relates to, and what control appears to be missing — worded as an observation ("this PHI field is logged in plaintext at auth.ts:42"), not a compliance verdict. Route anything ambiguous to a human for an actual legal/compliance judgment.
