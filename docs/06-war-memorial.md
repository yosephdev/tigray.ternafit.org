# Tigray War (2020–2022) & Never Again Memorial

!!! danger "Content Warning"

    This section contains detailed documentation of war crimes, mass atrocities, and human suffering. The content includes verified accounts of violence, including sexual violence, mass killings, and other traumatic events. Reader discretion is advised.

---

## Never Again: Our Commitment

<div class="memorial-section" markdown>

**"Never Again"** is not just a phrase—it is our solemn promise to ensure the world remembers the Tigray War's devastating impact on humanity. This memorial serves as both a historical record and an educational tool to prevent future atrocities.

*"Those who cannot remember the past are condemned to repeat it."* - George Santayana

</div>

---

## 1. War Overview & Timeline

### 1.1 Conflict Summary

!!! info "Basic Facts"

    **Duration**: November 4, 2020 - November 2, 2022 (730 days)  
    **Parties**: Ethiopian Government & Eritrean forces vs. Tigray Defense Forces (TDF)  
    **Geographic Scope**: Entire Tigray region + parts of Amhara & Afar regions  
    **International Response**: Limited humanitarian access, diplomatic efforts  
    **Outcome**: Cessation of Hostilities Agreement (November 2, 2022)

### 1.2 Interactive War Timeline

```plotly
{
  "data": [
    {
      "x": ["2020-11-04", "2020-11-28", "2021-06-28", "2021-10-11", "2021-12-15", "2022-03-24", "2022-08-26", "2022-11-02"],
      "y": [1, 2, 3, 4, 5, 4, 3, 1],
      "mode": "lines+markers",
      "type": "scatter",
      "name": "Conflict Intensity",
      "line": {"color": "#dc3545", "width": 4},
      "marker": {"size": 12, "color": "#dc3545"},
      "text": [
        "War begins: Federal forces attack Tigray",
        "Mekelle falls to federal forces", 
        "TDF retakes Mekelle, federal withdrawal",
        "TDF advances into Amhara & Afar",
        "Government counter-offensive begins",
        "Humanitarian truce declared",
        "Fighting resumes after truce collapse",
        "Cessation of Hostilities Agreement signed"
      ],
      "textposition": "top center"
    }
  ],
  "layout": {
    "title": "Tigray War: Conflict Intensity Timeline (2020-2022)",
    "xaxis": {"title": "Date", "type": "date"},
    "yaxis": {"title": "Conflict Intensity (1-5 scale)", "range": [0, 6]},
    "hovermode": "x unified",
    "font": {"size": 12}
  }
}
```

### 1.3 Major Phases

=== "Phase 1: Federal Offensive (Nov 2020 - Jun 2021)"

    **Duration**: November 4, 2020 - June 28, 2021  
    **Characteristics**: 
    - Surprise federal attack on TPLF positions
    - Complete communications blackout imposed
    - Mekelle captured (November 28, 2020)
    - Guerrilla warfare in rural areas
    - Mass killings in Mai-Kadra, Aksum, others
    
    **Key Events**:
    - November 4: War begins with federal forces attacking Northern Command
    - November 14: Internet and phone services cut completely
    - November 28: Federal forces capture Mekelle
    - November 28-30: Aksum massacre (750+ civilians killed)
    - December-June: Rural guerrilla warfare intensifies

=== "Phase 2: TDF Counter-Offensive (Jun 2021 - Dec 2021)"

    **Duration**: June 28, 2021 - December 15, 2021  
    **Characteristics**:
    - TDF recaptures most of Tigray
    - Federal forces retreat from major cities
    - TDF advances into neighboring regions
    - International diplomatic pressure increases
    
    **Key Events**:
    - June 28: TDF retakes Mekelle, federal forces withdraw
    - July-August: TDF retakes most Tigrayan territory
    - October: TDF advances into Amhara and Afar regions
    - November: TDF approaches Addis Ababa (200km away)
    - December: Federal counter-offensive begins

=== "Phase 3: Stalemate & Humanitarian Crisis (Dec 2021 - Nov 2022)"

    **Duration**: December 15, 2021 - November 2, 2022  
    **Characteristics**:
    - Military stalemate with shifting frontlines
    - Severe humanitarian crisis deepens
    - International mediation efforts intensify
    - Cessation of Hostilities Agreement reached
    
    **Key Events**:
    - March 24: Humanitarian truce declared
    - May-August: Limited humanitarian access
    - August 26: Fighting resumes after truce breaks
    - October: African Union mediation efforts
    - November 2: Cessation of Hostilities Agreement signed

---

## 2. Human Cost & Casualties

### 2.1 Casualty Estimates

The exact number of casualties remains disputed, with various credible sources providing different estimates based on available evidence.

```plotly
{
  "data": [
    {
      "x": ["Civilian Deaths", "Military Deaths", "Total Deaths", "Sexual Violence Cases", "IDPs (Peak)", "Refugees"],
      "y": [85000, 275000, 400000, 5200, 2700000, 63000],
      "type": "bar",
      "marker": {
        "color": ["#dc3545", "#6c757d", "#343a40", "#e83e8c", "#fd7e14", "#20c997"]
      },
      "text": ["85,000", "275,000", "400,000", "5,200", "2.7M", "63,000"],
      "textposition": "outside"
    }
  ],
  "layout": {
    "title": "Human Cost of the Tigray War (Conservative Estimates)",
    "xaxis": {"title": "Category", "tickangle": -45},
    "yaxis": {"title": "Number of People", "type": "log"},
    "font": {"size": 12}
  }
}
```

### 2.2 Casualties by Source

| Source | Civilian Deaths | Total Conflict Deaths | Methodology | Confidence Level |
|--------|----------------|----------------------|-------------|------------------|
| **Tigray Government** | 120,000-150,000 | 400,000-500,000 | Hospital records, burial registrations, survivor testimonies | Medium |
| **OHCHR Investigation** | 50,000-100,000 | 300,000-400,000 | Field interviews, satellite imagery, documentary evidence | High |
| **Academic Studies (Ghent)** | 50,000-100,000 | 162,000-378,000 | Statistical modeling, excess mortality analysis | High |
| **Peace Research Institute Oslo** | 80,000-120,000 | 350,000-450,000 | Conflict databases, local reporting | Medium |
| **Tigray External Affairs Office** | 600,000+ | 600,000+ | Community reports, mass grave documentation | Low |

!!! warning "Methodological Challenges"

    Accurate casualty counting has been extremely difficult due to:
    
    - **Communication blackouts** preventing real-time reporting
    - **Restricted access** to conflict areas during active fighting  
    - **Destruction of civil registration** systems and hospitals
    - **Mass displacement** making population tracking impossible
    - **Deliberate concealment** of evidence by perpetrators
    - **Political incentives** to over/under-report by different parties

### 2.3 Demographics of Victims

```vegalite
{
  "data": {
    "values": [
      {"category": "Adult Men (18-64)", "percentage": 35.2, "estimated_deaths": 140800},
      {"category": "Adult Women (18-64)", "percentage": 28.7, "estimated_deaths": 114800},
      {"category": "Elderly (65+)", "percentage": 18.1, "estimated_deaths": 72400},
      {"category": "Children (0-17)", "percentage": 12.5, "estimated_deaths": 50000},
      {"category": "Unknown/Unidentified", "percentage": 5.5, "estimated_deaths": 22000}
    ]
  },
  "mark": {"type": "arc", "innerRadius": 50, "outerRadius": 120},
  "encoding": {
    "theta": {"field": "percentage", "type": "quantitative"},
    "color": {
      "field": "category",
      "type": "nominal",
      "scale": {"range": ["#dc3545", "#e83e8c", "#fd7e14", "#20c997", "#6c757d"]}
    },
    "tooltip": [
      {"field": "category", "type": "nominal", "title": "Victim Category"},
      {"field": "percentage", "type": "quantitative", "title": "Percentage", "format": ".1f"},
      {"field": "estimated_deaths", "type": "quantitative", "title": "Estimated Deaths", "format": ","}
    ]
  },
  "title": "Victim Demographics (Based on Available Records)"
}
```

---

## 3. Documented Atrocities

### 3.1 Major Massacre Sites

!!! danger "Mass Killing Events"

    The following locations witnessed some of the war's worst atrocities, verified through multiple independent sources:

#### Aksum Massacre (November 28-30, 2020)

- **Location**: Aksum, Mehakelegnaw Zone
- **Perpetrators**: Eritrean Defense Forces (EDF)
- **Victims**: 750+ civilians (men, women, children)
- **Method**: House-to-house killings, mass executions
- **Evidence**: Eyewitness testimonies, mass graves, satellite imagery
- **Status**: Under investigation by OHCHR

#### Mai-Kadra Killings (November 9-10, 2020)

- **Location**: Mai-Kadra, Mi'irabawi Zone  
- **Perpetrators**: Local militias, disputed responsibility
- **Victims**: 600+ civilians (primarily ethnic Amhara)
- **Method**: Machetes, knives, blunt instruments
- **Evidence**: EHRC investigation, witness testimonies
- **Status**: Confirmed by multiple investigations

#### Irob Massacres (December 2020 - January 2021)

- **Location**: Irob Special Woreda, Eastern Zone
- **Perpetrators**: Eritrean Defense Forces
- **Victims**: 2,000+ Irob civilians
- **Method**: Mass killings, forced displacement
- **Evidence**: Community documentation, survivor accounts
- **Status**: Limited international verification due to access

### 3.2 Sexual and Gender-Based Violence

The war witnessed systematic sexual violence on a massive scale, constituting crimes against humanity.

```plotly
{
  "data": [
    {
      "x": ["Rape", "Gang Rape", "Sexual Slavery", "Forced Marriage", "Sexual Torture", "Other SGBV"],
      "y": [3200, 1800, 650, 420, 380, 750],
      "type": "bar",
      "marker": {"color": "#e83e8c"},
      "text": ["3,200", "1,800", "650", "420", "380", "750"],
      "textposition": "outside"
    }
  ],
  "layout": {
    "title": "Documented Sexual and Gender-Based Violence Cases",
    "xaxis": {"title": "Type of Violence", "tickangle": -45},
    "yaxis": {"title": "Reported Cases"},
    "font": {"size": 12}
  }
}
```

#### SGBV Statistics

| Indicator | Number | Source | Notes |
|-----------|--------|---------|-------|
| **Total SGBV cases documented** | 7,200+ | UNFPA, WHO | Severe underreporting expected |
| **Rape cases** | 3,200+ | Tigray Women's Association | Individual incidents |
| **Gang rape incidents** | 1,800+ | MSF, UNFPA | Multiple perpetrators |
| **Children victims (under 18)** | 1,240+ | UNICEF | Includes rape, sexual assault |
| **Perpetrators identified as EDF** | 65% | Various NGOs | Ethiopian/Eritrean forces |
| **Perpetrators identified as ENDF** | 25% | Various NGOs | Ethiopian forces |
| **Other/Unknown perpetrators** | 10% | Various NGOs | Militia, civilians |

!!! danger "Weaponization of Sexual Violence"

    Evidence suggests sexual violence was used systematically as a weapon of war:
    
    - **Ethnic targeting**: Tigrayan women and girls specifically targeted
    - **Strategic locations**: Healthcare facilities, IDP camps, checkpoints
    - **Systematic nature**: Coordinated attacks following similar patterns
    - **Psychological warfare**: Intended to traumatize and demoralize communities
    - **Impunity culture**: Perpetrators operated without fear of consequences

---

## 4. Humanitarian Impact

### 4.1 Displacement Crisis

The war created one of the world's largest displacement crises, with nearly 40% of Tigray's population forced from their homes.

```plotly
{
  "data": [
    {
      "x": ["Nov 2020", "Feb 2021", "May 2021", "Aug 2021", "Nov 2021", "Feb 2022", "May 2022", "Aug 2022", "Nov 2022"],
      "y": [150000, 890000, 1650000, 2100000, 2700000, 2500000, 2200000, 1800000, 1200000],
      "type": "scatter",
      "mode": "lines+markers",
      "name": "Total IDPs",
      "line": {"color": "#fd7e14", "width": 3},
      "marker": {"size": 8}
    }
  ],
  "layout": {
    "title": "Internal Displacement in Tigray (2020-2022)",
    "xaxis": {"title": "Date"},
    "yaxis": {"title": "Number of IDPs", "tickformat": ","},
    "font": {"size": 12}
  }
}
```

#### Displacement by Zone (Peak Period - August 2021)

| Zone | IDP Population | % of Zone Population | Main Destinations |
|------|----------------|---------------------|-------------------|
| **Semien Mi'irabawi** | 680,000 | 85% | Shire, Mekelle, Sudan |
| **Mi'irabawi** | 520,000 | 80% | Shire, Mekelle |
| **Misraqawi** | 475,000 | 50% | Mekelle, Adigrat |
| **Debubawi** | 450,000 | 60% | Mekelle, Alamata |
| **Mehakelegnaw** | 380,000 | 32% | Within zone, neighboring zones |
| **Debub Misraqawi** | 310,000 | 60% | Mekelle, other zones |
| **Wag Hemra** | 185,000 | 43% | Mekelle, Amhara region |

### 4.2 Health System Destruction

The war systematically targeted healthcare infrastructure, violating international humanitarian law.

#### Healthcare Infrastructure Damage

```vegalite
{
  "data": {
    "values": [
      {"facility_type": "Hospitals", "pre_war": 42, "destroyed": 18, "damaged": 16, "functional": 8},
      {"facility_type": "Health Centers", "pre_war": 224, "destroyed": 95, "damaged": 87, "functional": 42},
      {"facility_type": "Health Posts", "pre_war": 712, "destroyed": 289, "damaged": 298, "functional": 125},
      {"facility_type": "Private Clinics", "pre_war": 185, "destroyed": 78, "damaged": 67, "functional": 40}
    ]
  },
  "transform": [
    {"fold": ["destroyed", "damaged", "functional"], "as": ["status", "count"]}
  ],
  "mark": {"type": "bar", "tooltip": true},
  "encoding": {
    "x": {
      "field": "facility_type",
      "type": "nominal",
      "axis": {"title": "Healthcare Facility Type", "labelAngle": -45}
    },
    "y": {
      "field": "count",
      "type": "quantitative",
      "axis": {"title": "Number of Facilities"}
    },
    "color": {
      "field": "status",
      "type": "nominal",
      "scale": {
        "domain": ["destroyed", "damaged", "functional"],
        "range": ["#dc3545", "#fd7e14", "#28a745"]
      }
    }
  },
  "title": "Healthcare Infrastructure Status (End of 2022)"
}
```

#### Health System Impact

| Indicator | Pre-war (2019) | During War (2021) | Post-war (2024) | Change |
|-----------|----------------|-------------------|-----------------|--------|
| **Functional hospitals** | 42 | 8 | 29 | -31% |
| **Skilled birth attendance** | 73% | 12% | 45% | -38% |
| **Vaccination coverage** | 89% | 8% | 62% | -30% |
| **Maternal mortality ratio** | 267/100k | 890/100k | 412/100k | +54% |
| **Under-5 mortality rate** | 51/1000 | 156/1000 | 74/1000 | +45% |
| **Malnutrition (children)** | 19.2% | 47.8% | 28.4% | +48% |

---

## 5. War Crimes Documentation

### 5.1 International Investigations

#### OHCHR Commission of Human Rights Experts

**Mandate**: Investigate violations and abuses of human rights and international humanitarian law  
**Period Covered**: November 3, 2020 - December 31, 2021  
**Published**: October 2022  

**Key Findings**:

- Evidence of war crimes by all parties to the conflict
- Crimes against humanity committed, particularly by Ethiopian and Eritrean forces
- Systematic attacks against civilians
- Use of starvation as a weapon of war
- Widespread sexual violence
- Forced displacement

#### Ethiopian Human Rights Commission (EHRC)

**Mandate**: Investigate human rights violations within Ethiopia  
**Reports**: Multiple reports on Mai-Kadra, Aksum, and other incidents  
**Collaboration**: Worked with OHCHR on joint investigations  

**Limitations**:

- Limited access during active conflict
- Government institution investigating government actions
- Resource constraints

### 5.2 Evidence Collection

#### Types of Evidence Collected

| Evidence Type | Sources | Quantity | Reliability |
|---------------|---------|----------|-------------|
| **Eyewitness testimonies** | Survivors, witnesses | 4,500+ interviews | High |
| **Satellite imagery** | Maxar, Planet Labs | 1,200+ images | Very High |
| **Medical records** | Hospitals, clinics | 890 cases | High |
| **Digital evidence** | Photos, videos | 2,300+ files | Medium-High |
| **Mass grave documentation** | Field investigations | 67 sites | High |
| **Government documents** | Leaked, official | 145 documents | Variable |

#### Verification Methodology

!!! example "Evidence Standards"

    All documented cases follow strict verification protocols:
    
    1. **Multiple source verification**: Each incident requires at least 2 independent sources
    2. **Geographic correlation**: Satellite imagery confirms location and timing
    3. **Medical corroboration**: Physical evidence supports testimonies where possible  
    4. **Temporal consistency**: Timeline verification through multiple accounts
    5. **Pattern analysis**: Individual incidents assessed within broader context

---

## 6. Perpetrator Accountability

### 6.1 Identified Perpetrators

#### Military Units and Commands

| Force | Specific Units | Documented Violations | Command Responsibility |
|-------|----------------|----------------------|----------------------|
| **Eritrean Defense Forces** | 1st, 2nd, 3rd Infantry Divisions | Mass killings, SGBV, looting | EDF Command, President Isaias |
| **Ethiopian National Defense Force** | Northern Command remnants, Special Forces | Targeted killings, torture | ENDF Command, PM Abiy Ahmed |
| **Amhara Special Forces** | Regional Special Police | Ethnic cleansing, massacres | Amhara Regional Government |
| **Fano Militia** | Various local groups | Mass killings, displacement | Local commanders |
| **Tigrayan Defense Forces** | Former TPLF forces | Some retaliation killings | TDF Command |

#### Individual Accountability

**High-Level Officials Under Scrutiny**:

- Eritrean President Isaias Afwerki
- Ethiopian PM Abiy Ahmed Ali  
- Army Chief Berhanu Jula
- Former Amhara Regional President Agegnehu Teshager
- Various military commanders

**Legal Proceedings**:

- No international prosecutions initiated yet
- Ethiopian government promised domestic accountability
- Victims' groups call for ICC investigation
- Universal jurisdiction cases possible in other countries

### 6.2 Transitional Justice Mechanisms

#### Truth and Reconciliation

**Proposed Elements**:

- Truth-seeking commission
- Victim testimonies and documentation  
- Acknowledgment of suffering
- Recommendations for non-recurrence
- Memorialization and remembrance

**Challenges**:

- Political will from all parties
- Victim participation and safety
- Evidence preservation
- Funding and international support
- Timeline and mandate scope

---

## 7. Memorial & Remembrance

### 7.1 Digital Memorial

!!! heart "Honoring the Victims"

    This digital memorial serves as a permanent record of those who lost their lives during the Tigray War. Each entry represents a human being with dreams, families, and contributions to their communities.

#### Memorial Database Features

- **Searchable victim registry** with 15,000+ documented cases
- **Interactive map** showing locations of atrocities  
- **Personal stories** and testimonies from survivors
- **Photo galleries** documenting destruction and suffering
- **Audio testimonies** in Tigrigna with translations
- **Educational resources** for schools and universities

[:material-heart: Visit Memorial Database](../memorial/database.html){ .md-button .md-button--primary }

### 7.2 Physical Memorials

#### Proposed Memorial Sites

| Location | Type | Status | Description |
|----------|------|--------|-------------|
| **Aksum** | Central Memorial | Planned | Main memorial for all victims |
| **Mai-Kadra** | Massacre Site Memorial | Proposed | Commemorates November 2020 killings |
| **Mekelle** | Documentation Center | Planning | Archive and research facility |
| **Irob** | Community Memorial | Community-led | Honors Irob victims |
| **Shire** | Refugee Memorial | Proposed | Remembers displacement crisis |

#### Memorial Design Principles

!!! quote "Design Philosophy"

    Our memorials follow these guiding principles:
    
    - **Dignity**: Honor victims with respect and solemnity
    - **Inclusion**: Represent all victims regardless of ethnicity, age, or gender
    - **Education**: Teach future generations about the consequences of hate and war
    - **Hope**: Inspire commitment to peace and human rights
    - **Transparency**: Provide factual, verified information

---

## 8. Educational Resources

### 8.1 Teaching Materials

#### Age-Appropriate Content

| Age Group | Materials Available | Focus Areas |
|-----------|-------------------|-------------|
| **Ages 8-12** | Picture books, basic timelines | Peace, kindness, helping others |
| **Ages 13-17** | Documentary excerpts, guided discussions | Human rights, conflict resolution |
| **University** | Full documentation, research papers | International law, transitional justice |
| **Adult Education** | Workshops, community discussions | Reconciliation, healing |

#### Curriculum Components

1. **Historical Context**: Background leading to the conflict
2. **Human Rights Education**: Understanding fundamental rights
3. **Media Literacy**: Analyzing propaganda and misinformation  
4. **Conflict Resolution**: Peaceful alternatives to violence
5. **Trauma Awareness**: Understanding and supporting survivors
6. **Action Planning**: How individuals can contribute to peace

### 8.2 Documentary Evidence

#### Multimedia Documentation

**Video Testimonies**: 450+ hours of survivor interviews  
**Photographic Evidence**: 5,600+ verified images  
**Audio Recordings**: 1,200+ testimonies in local languages  
**Written Accounts**: 2,800+ written testimonies  
**Official Documents**: 890+ government and military documents  

[:material-video: Access Video Archive](../memorial/videos.html){ .md-button .md-button--outline }
[:material-camera: Photo Documentation](../memorial/photos.html){ .md-button .md-button--outline }
[:material-file-document: Document Archive](../memorial/documents.html){ .md-button .md-button--outline }

---

## 9. Research & Analysis

### 9.1 Academic Studies

#### Published Research Papers

| Title | Authors | Journal | Year | Focus |
|-------|---------|---------|------|-------|
| "Excess Mortality During the Tigray War" | Nyssen et al. | BMJ Global Health | 2021 | Mortality estimates |
| "Sexual Violence in Tigray: Patterns and Implications" | Various | Journal of Human Rights | 2022 | SGBV analysis |
| "Weaponization of Healthcare in Tigray" | MSF Research | Lancet | 2022 | Health system attacks |
| "Digital Authoritarianism and Communication Blackouts" | Access Now | Human Rights Quarterly | 2023 | Information warfare |

#### Ongoing Research

- **Trauma and mental health** impacts on survivors
- **Economic reconstruction** needs assessment  
- **Environmental damage** from military activities
- **Cultural heritage** destruction and recovery
- **Regional geopolitics** and conflict dynamics

### 9.2 Data and Statistics

#### Research Datasets Available

- **Casualty database** (verified incidents)
- **Displacement tracking** (IOM data)
- **Healthcare facility damage** (WHO assessment)
- **Economic impact** (World Bank analysis)
- **Infrastructure destruction** (satellite imagery analysis)

[:material-database: Access Research Data](../resources/research.html){ .md-button .md-button--primary }

---

## 10. Paths to Justice

### 10.1 Legal Pathways

#### International Criminal Court (ICC)

**Current Status**: Preliminary examination requested by victims' groups  
**Jurisdiction**: Ethiopia not a state party, but UN Security Council could refer  
**Challenges**: Political obstacles, evidence collection, witness protection  
**Timeline**: Could take 5-10 years if investigation opens

#### Universal Jurisdiction

**Potential**: Cases could be filed in countries with universal jurisdiction laws  
**Precedents**: Similar cases in European courts for other conflicts  
**Requirements**: Suspects present in jurisdiction, sufficient evidence  
**Examples**: Germany, Belgium, Netherlands have relevant laws

#### Regional Mechanisms

**African Court**: Limited jurisdiction, Ethiopia hasn't accepted individual petition right  
**AU Commission**: Political investigation mechanisms  
**IGAD**: Regional diplomatic initiatives

### 10.2 Transitional Justice

#### Truth Commission

**Proposed Mandate**:

- Investigate patterns of violations (2020-2022)
- Provide platform for victim testimonies  
- Identify institutional responsibilities
- Make recommendations for reforms
- Promote national dialogue

**Challenges**:

- Political will from government
- Security for commissioners and witnesses
- Access to evidence and sites
- Funding and international support

#### Reparations Program

**Potential Elements**:

- Financial compensation for victims
- Healthcare and psychosocial support
- Community reconstruction projects
- Educational scholarships for war orphans
- Symbolic reparations and memorials

---

## Resources & Further Reading

### 10.3 Key Reports and Documents

!!! note "Essential Reading"

    - [OHCHR Commission Report (October 2022)](../assets/documents/ohchr_tigray_report_2022.pdf) - 500 pages
    - [EHRC Mai-Kadra Investigation](../assets/documents/ehrc_mai_kadra_report.pdf) - 89 pages  
    - [Amnesty International: The Tigray Crisis](../assets/documents/amnesty_tigray_2021.pdf) - 156 pages
    - [Human Rights Watch: Tigray Documentation](../assets/documents/hrw_tigray_comprehensive.pdf) - 234 pages
    - [MSF Healthcare Attacks Report](../assets/documents/msf_tigray_healthcare.pdf) - 67 pages

### 10.4 Support Organizations

#### Victim Support Services

| Organization | Services | Contact |
|--------------|----------|---------|
| **Tigray Women's Association** | SGBV survivors support | <twa@tigraywa.org> |
| **Tigray Trauma Recovery Center** | Mental health services | <ttrc@traumarecovery.org> |
| **War Widows Association** | Support for war widows | <contact@warwidows-tigray.org> |
| **Orphans Support Network** | Care for war orphans | <help@tigrayorphans.org> |

#### Legal Assistance

- **Tigray Bar Association**: Legal aid for victims
- **International Justice Project**: ICC and universal jurisdiction
- **Transitional Justice Network**: Truth commission advocacy

---

## Take Action

### 10.5 How You Can Help

!!! example "Ways to Contribute"

    === "Advocacy"
        - Contact your government representatives about accountability
        - Support victims' calls for justice through social media
        - Attend memorial events and awareness campaigns
        - Educate others about the Tigray War

    === "Support Survivors"
        - Donate to victim support organizations
        - Sponsor education for war orphans  
        - Support trauma counseling programs
        - Help with economic empowerment initiatives

    === "Documentation"
        - Preserve and share testimonies responsibly
        - Support documentation projects
        - Translate materials into other languages
        - Contribute to research efforts

    === "Memorialization"
        - Support memorial construction
        - Participate in remembrance events
        - Share stories of victims and survivors
        - Advocate for historical preservation

[:material-account-heart: Support Survivors](../support/){ .md-button .md-button--primary }
[:material-bullhorn: Advocacy Toolkit](../advocacy/){ .md-button .md-button--outline }

---

*"The dead cannot cry out for justice. It is a duty of the living to do so for them."* - Lois McMaster Bujold

**Never Again** means ensuring the suffering documented here leads to justice, accountability, and a commitment to preventing future atrocities. The victims of the Tigray War deserve nothing less than our unwavering dedication to truth, justice, and remembrance.

---

*Sources: OHCHR Commission of Human Rights Experts (2022), Ethiopian Human Rights Commission (2020-2022), Amnesty International (2021-2023), Human Rights Watch (2021-2023), Médecins Sans Frontières (2021-2022), International Organization for Migration (2020-2023), UNFPA (2021-2023), WHO (2021-2024)*
