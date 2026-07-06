# EMR Integration Layer Matrix

Which **layers** of each EMR PhysicianLabs needs to connect to, and via which standard. Fill one
row per (EMR × layer) as discovery on each target EMR completes. The point: different EMRs expose
different layers through different standards, so we design connectors per capability, not one-size-fits-all.

## Layers we care about

| Layer | Why we need it | Typical standards |
|---|---|---|
| Auth / SSO | Provider login, secure API access | SMART on FHIR, OAuth2, SAML |
| Patient / Demographics | Identify practices & patients (no PHI stored here) | FHIR `Patient`, HL7 v2 ADT |
| Scheduling | Appointment/visit volume signals | FHIR `Appointment`, HL7 v2 SIU |
| Billing / Claims | Revenue-leak detection (core value prop) | X12 837/835, FHIR `Claim`/`ClaimResponse` |
| Clinical / Orders | Context for coding/charge capture | FHIR `Encounter`/`Observation`, HL7 v2 ORM/ORU |
| Documents | Notes, attachments | FHIR `DocumentReference`, CDA |

## Matrix (fill as we learn each EMR)

| EMR | Auth | Patient | Scheduling | Billing/Claims | Clinical | Documents | Notes |
|---|---|---|---|---|---|---|---|
| Epic | SMART on FHIR | FHIR R4 | FHIR | ? | FHIR | FHIR | App Orchard / vendor onboarding required |
| Accuro (QHR) | ? | ? | ? | ? | ? | ? | Canadian EMR — confirm API program |
| Cerner (Oracle Health) | SMART on FHIR | FHIR R4 | FHIR | ? | FHIR | FHIR | Millennium code console |
| _add target_ | | | | | | | |

Legend: fill each cell with the standard used, `n/a` if not exposed, or `?` if unknown.
Connector code for each EMR lives in `../emr-connectors/<emr>/`; protocol clients in `../interop-standards/`.
