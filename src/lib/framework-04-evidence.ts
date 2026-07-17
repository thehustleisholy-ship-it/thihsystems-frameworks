import type { EvidenceRecord } from "./evidence-record";

const reviewed = "2026-07-16";
const reviewer = "Codex primary-source metadata review (not clinical or legal expert review)";

export const framework04Claims: EvidenceRecord[] = [
  {
    claim_id: "FW-04-A-001", framework_number: "04", claim_class: "A",
    exact_public_claim: "In 2024, the U.S. maternal mortality rate was 17.9 deaths per 100,000 live births (649 maternal deaths).",
    source_title: "Maternal Mortality Rates in the United States, 2024", publisher: "CDC National Center for Health Statistics",
    url_or_doi: "https://blogs.cdc.gov/nchs/2026/03/04/7885/", publication_date: "2026-03-04", data_year: "2024", access_date: reviewed,
    geography: "United States", population: "Women whose deaths met the NVSS maternal-death definition", measurement_definition: "Maternal deaths assigned ICD-10 underlying-cause codes A34, O00-O95, and O98-O99 per 100,000 live births", measurement_window: "During pregnancy or within 42 days after pregnancy ends", denominator: "Live births in the 2024 NVSS natality file", value: 17.9, unit: "deaths per 100,000 live births",
    limitations: ["NVSS maternal mortality is not interchangeable with PMSS pregnancy-related mortality through one year.", "Year-to-year rates can fluctuate because deaths are uncommon and death-certificate reporting has limitations."], verification_status: "source-reviewed", reviewer, review_date: reviewed, next_review_date: "2027-03-04", public_use_approval: true, review_disposition: "verified", source_type: "primary",
  },
  {
    claim_id: "FW-04-A-002", framework_number: "04", claim_class: "A",
    exact_public_claim: "In 2024, the NVSS maternal mortality rate for non-Hispanic Black women was 44.8 deaths per 100,000 live births, compared with 14.2 for non-Hispanic White women; the Black rate was about three times the White rate.",
    source_title: "Maternal Mortality Rates in the United States, 2024", publisher: "CDC National Center for Health Statistics", url_or_doi: "https://blogs.cdc.gov/nchs/2026/03/04/7885/", publication_date: "2026-03-04", data_year: "2024", access_date: reviewed,
    geography: "United States", population: "Non-Hispanic Black and non-Hispanic White women meeting the NVSS maternal-death definition", measurement_definition: "Race-specific maternal deaths per 100,000 live births", measurement_window: "During pregnancy or within 42 days after pregnancy ends", denominator: "Race-specific live births in the 2024 NVSS natality file", value: "44.8 Black; 14.2 White", unit: "deaths per 100,000 live births",
    limitations: ["The observed 2023-to-2024 changes for Black and White women were not statistically significant.", "These are NVSS maternal-death rates, not one-year PMSS ratios."], verification_status: "source-reviewed", reviewer, review_date: reviewed, next_review_date: "2027-03-04", public_use_approval: true, review_disposition: "verified", source_type: "primary",
  },
  {
    claim_id: "FW-04-A-003", framework_number: "04", claim_class: "A",
    exact_public_claim: "CDC reports that more than 80% of pregnancy-related deaths reviewed by Maternal Mortality Review Committees were determined preventable.",
    source_title: "Pregnancy-Related Deaths: Data from Maternal Mortality Review Committees in 36 U.S. States, 2017-2019", publisher: "CDC", url_or_doi: "https://www.cdc.gov/maternal-mortality/media/pdfs/Pregnancy-Related-Deaths-Data-MMRCs-2017-2019-H_1.pdf", publication_date: "2022-09-19", data_year: "2017-2019", access_date: reviewed,
    geography: "36 U.S. states", population: "Pregnancy-related deaths reviewed by participating MMRCs", measurement_definition: "Committee determination that there was at least some chance the death could have been averted by one or more reasonable changes", measurement_window: "Death during pregnancy or within one year after pregnancy ends", denominator: "Pregnancy-related deaths with a preventability determination in participating MMRCs", value: ">80", unit: "percent",
    limitations: ["Committee determinations are not a national maternal-mortality rate.", "The finding applies to reviewed pregnancy-related deaths in participating jurisdictions and years."], verification_status: "source-reviewed", reviewer, review_date: reviewed, next_review_date: "2027-07-16", public_use_approval: true, review_disposition: "verified", source_type: "primary",
  },
  {
    claim_id: "FW-04-A-004", framework_number: "04", claim_class: "A",
    exact_public_claim: "CDC cautions that NVSS maternal mortality, PMSS pregnancy-related mortality, and MMRC findings cannot be directly compared because their definitions, windows, and methods differ.",
    source_title: "PMSS: Frequently Asked Questions", publisher: "CDC", url_or_doi: "https://www.cdc.gov/maternal-mortality/php/pregnancy-mortality-surveillance-data/faqs.html", publication_date: "2024-11-21", data_year: null, access_date: reviewed,
    geography: "United States", population: "Deaths during pregnancy and postpartum captured by NVSS, PMSS, or MMRC processes", measurement_definition: "NVSS generally uses 42 days; PMSS and MMRC review extend through one year with different case-review methods", measurement_window: "42 days versus one year, depending on system", denominator: null, value: null, unit: null,
    limitations: ["Each system has distinct ascertainment and review methods."], verification_status: "source-reviewed", reviewer, review_date: reviewed, next_review_date: "2027-07-16", public_use_approval: true, review_disposition: "verified", source_type: "primary",
  },
  {
    claim_id: "FW-04-A-005", framework_number: "04", claim_class: "A",
    exact_public_claim: "CDC's Hear Her campaign publishes urgent maternal warning signs for pregnancy and the year after delivery and advises immediate medical care for listed signs or symptoms.",
    source_title: "Urgent Maternal Warning Signs and Symptoms", publisher: "CDC Hear Her Campaign", url_or_doi: "https://www.cdc.gov/hearher/maternal-warning-signs/index.html", publication_date: "2024-05-15", data_year: null, access_date: reviewed,
    geography: "United States", population: "People who are pregnant or within one year after delivery", measurement_definition: "Public warning-sign education, not patient-specific diagnosis", measurement_window: "Pregnancy through one year after delivery", denominator: null, value: null, unit: null,
    limitations: ["The list is not exhaustive and does not diagnose a condition.", "The page directs users to medical care rather than replacing clinical assessment."], verification_status: "source-reviewed", reviewer, review_date: reviewed, next_review_date: "2027-07-16", public_use_approval: true, review_disposition: "verified", source_type: "primary",
  },
  {
    claim_id: "FW-04-A-006", framework_number: "04", claim_class: "A",
    exact_public_claim: "HIPAA applicability to a maternal-health app depends on the app's relationship to a covered entity or business associate; a direct-to-consumer app is not automatically covered by HIPAA.",
    source_title: "The access right, health apps, and APIs", publisher: "HHS Office for Civil Rights", url_or_doi: "https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/access-right-health-apps-apis/index.html", publication_date: "2025-05-30", data_year: null, access_date: reviewed,
    geography: "United States federal law", population: "Health-app developers, covered entities, business associates, and app users", measurement_definition: "Fact-specific HIPAA covered-entity and business-associate analysis", measurement_window: "Current guidance reviewed 2025-05-30", denominator: null, value: null, unit: null,
    limitations: ["This is a qualified compliance statement, not legal advice.", "Contracts, data flows, state law, and product operation require counsel review."], verification_status: "source-reviewed", reviewer, review_date: reviewed, next_review_date: "2027-07-16", public_use_approval: true, review_disposition: "qualified", source_type: "primary",
  },
  {
    claim_id: "FW-04-A-007", framework_number: "04", claim_class: "A",
    exact_public_claim: "The FTC Health Breach Notification Rule can apply to vendors of personal health records and related entities not covered by HIPAA, including some health apps, when unsecured identifiable health information is breached.",
    source_title: "Health Breach Notification Rule", publisher: "Federal Trade Commission", url_or_doi: "https://www.ftc.gov/legal-library/browse/rules/health-breach-notification-rule", publication_date: "2024-05-30", data_year: null, access_date: reviewed,
    geography: "United States federal law", population: "Covered PHR vendors, PHR-related entities, service providers, and consumers", measurement_definition: "16 CFR Part 318 breach-notification obligations", measurement_window: "Final rule published 2024-05-30", denominator: null, value: null, unit: null,
    limitations: ["Applicability is fact-specific and requires qualified legal review.", "State privacy and breach laws may independently apply."], verification_status: "source-reviewed", reviewer, review_date: reviewed, next_review_date: "2027-07-16", public_use_approval: true, review_disposition: "qualified", source_type: "primary",
  },
  {
    claim_id: "FW-04-A-008", framework_number: "04", claim_class: "A",
    exact_public_claim: "FDA oversight of software is function-specific; software functions that meet the device definition and could pose patient-safety risk if they fail may receive regulatory oversight.",
    source_title: "Policy for Device Software Functions and Mobile Medical Applications", publisher: "U.S. Food and Drug Administration", url_or_doi: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/policy-device-software-functions-and-mobile-medical-applications", publication_date: "2022-09-27", data_year: null, access_date: reviewed,
    geography: "United States federal law and FDA policy", population: "Software developers and device software functions", measurement_definition: "Function-specific device definition and enforcement policy", measurement_window: "Final guidance, September 2022", denominator: null, value: null, unit: null,
    limitations: ["A specific intended use and feature set must be reviewed by FDA regulatory counsel.", "This record does not classify the proposed product."], verification_status: "source-reviewed", reviewer, review_date: reviewed, next_review_date: "2027-07-16", public_use_approval: true, review_disposition: "qualified", source_type: "primary",
  },
  {
    claim_id: "FW-04-A-009", framework_number: "04", claim_class: "A",
    exact_public_claim: "Under Federal Rule of Evidence 901, a proponent must produce evidence sufficient to support a finding that an item is what the proponent claims it is; a product cannot promise admissibility merely by storing a record.",
    source_title: "Federal Rule of Evidence 901: Authenticating or Identifying Evidence", publisher: "Legal Information Institute, reproducing the Federal Rules of Evidence", url_or_doi: "https://www.law.cornell.edu/rules/fre/rule_901", publication_date: null, data_year: null, access_date: reviewed,
    geography: "United States federal courts", population: "Proponents of evidence in federal proceedings", measurement_definition: "Authentication threshold under FRE 901", measurement_window: "Rule accessed 2026-07-16", denominator: null, value: null, unit: null,
    limitations: ["Admissibility also depends on other evidence rules, procedure, jurisdiction, and case-specific rulings.", "This is not a legal conclusion about any generated record."], verification_status: "source-reviewed", reviewer, review_date: reviewed, next_review_date: "2027-07-16", public_use_approval: true, review_disposition: "qualified", source_type: "primary",
  },
  ...[
    ["FW-04-B-010", "Published evidence on clinical dismissal and pain bias must be reviewed for population, setting, and outcome before a public quantitative claim is made."],
    ["FW-04-B-011", "Evidence for obstetric early-warning systems and patient-activated rapid response requires an intervention-specific systematic review before effectiveness claims are public."],
    ["FW-04-B-012", "Claims about doula outcomes require claim-level review separating association from causal effects and specifying population and outcome."],
    ["FW-04-B-013", "Competitor capability comparisons require a dated product audit and must not infer clinical validation from marketing materials."],
    ["FW-04-B-014", "Individual maternal-health cases require primary records and careful separation of family statements, reporting, allegations, settlements, adjudicated findings, and medical-record evidence."],
  ].map(([claim_id, exact_public_claim]) => ({
    claim_id, framework_number: "04", exact_public_claim, claim_class: "B" as const, source_title: null, publisher: null, url_or_doi: null, publication_date: null, data_year: null, access_date: null, geography: null, population: null, measurement_definition: null, measurement_window: null, denominator: null, value: null, unit: null,
    limitations: ["Research queue item; not approved for public factual use."], verification_status: "source-identified" as const, reviewer: null, review_date: null, next_review_date: null, public_use_approval: false, review_disposition: claim_id === "FW-04-B-014" ? "unsuitable-for-public-use" as const : "awaiting-review" as const, source_type: null,
  })),
];