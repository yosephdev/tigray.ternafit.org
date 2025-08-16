# AI-Assisted Content Generation Workflow

This document provides a systematic approach for using AI to generate high-quality articles for the Tigray Knowledge Base while maintaining academic standards and accuracy.

## The Master Prompt Template

Use this prompt with GitHub Copilot or other AI tools to generate content that matches our quality standards:

---

**COPY AND PASTE THIS PROMPT:**

```
Act as an expert historian and content writer for a digital knowledge base called the "Tigray Knowledge Base." The tone is scholarly, neutral, and informative, similar to a high-quality encyclopedia entry. All articles must be well-structured with Markdown headings, be factually dense, and end with "Sources" and "Further Reading" sections.

Here is a perfect example of a completed article for "King Ezana of Axum":

[INSERT THE COMPLETE KING EZANA ARTICLE HERE FROM figures/king-ezana.md]

Now, using that exact same structure, tone, and depth of research, please write a comprehensive article for the following historical figure from our list:

"[INSERT TARGET FIGURE NAME HERE]"

Ensure you cover the following aspects:
[INSERT SPECIFIC RESEARCH POINTS FOR THIS FIGURE]

Follow this exact structure:
1. Opening paragraph with name in local script, dates, and significance
2. Early Life/Background section
3. Major achievements/events (2-3 sections)
4. Legacy section with numbered points
5. Sources section (5+ academic references)
6. Further Reading section linking to related topics

Conclude with a status note indicating this article provides comprehensive coverage and suggesting areas for potential expansion.
```

---

## Priority Article Generation Queue

### Historical Figures (High Priority)

#### 1. Dejazmach Sabagadis - COMPLETED ✅

**Specific Research Points:**

- 19th-century ruler of Tigray before Yohannes IV
- Political relationships with other Ethiopian regional rulers
- Military campaigns and territorial control
- Economic policies and trade relationships
- Death and succession by other Tigrayan leaders

#### 2. Abreha and Atsbeha - COMPLETED ✅

**Specific Research Points:**

- Twin brothers who ruled Axum in the 4th century
- Their conversion to Christianity and relationship with King Ezana
- Role in establishing early Christian traditions
- Archaeological evidence and church foundations
- Their veneration as saints in Ethiopian Orthodox tradition

#### 3. Queen of Sheba (Makeda) - COMPLETED ✅

**Specific Research Points:**

- Historical and legendary accounts of her rule in ancient Ethiopia/Axum
- Biblical and Quranic references and their scholarly interpretation
- Archaeological evidence from Axumite period related to Sabean connections
- Her legendary relationship with King Solomon and cultural significance
- Role in Ethiopian Orthodox tradition and the Kebra Nagast narrative
- Scholarly debate between historical evidence and mythological accounts

### Contemporary Figures (Medium Priority)

#### 5. Dr. Tedros Adhanom Ghebreyesus

**Specific Research Points:**

- Early life and education in Tigray
- Career in Ethiopian public health system
- Role as Minister of Health and Minister of Foreign Affairs
- Election as WHO Director-General
- Leadership during COVID-19 pandemic and global health initiatives

#### 6. Meles Zenawi

**Specific Research Points:**

- Early life and involvement in TPLF
- Role in overthrowing the Derg regime
- Leadership as Prime Minister (1995-2012)
- Economic development policies and achievements
- International relationships and African leadership
- Death and legacy assessment

#### 7. Seyum Mesfin

**Specific Research Points:**

- Early diplomatic career and education
- Role as Ethiopia's Foreign Minister (1991-2010)
- Key diplomatic achievements and international relations
- Leadership in African Union and regional organizations
- Contributions to Ethiopian foreign policy during transformation period
- Legacy in Ethiopian and African diplomacy

#### 8. Gebrehiwot Baykedagn

**Specific Research Points:**

- Early 20th-century intellectual and economist
- Educational background and influences
- Pioneering work in Ethiopian economic thought
- Contributions to modernization and development theory
- Writings on Ethiopian society and economics
- Influence on later Ethiopian intellectual development

### Historical Tigrayan Leaders (High Priority)

#### 9. Ras Seyum Mengesha - COMPLETED ✅

**Specific Research Points:**

- Grandson of Emperor Yohannes IV, son of Ras Mengesha Yohannes
- Early 20th-century ruler of Tigray and resistance to Italian occupation
- Role in Ethiopian politics during Haile Selassie's reign
- Leadership during the Second Italo-Ethiopian War (1935-1941)
- Post-liberation political career and relationship with imperial government
- Legacy in Tigrayan political leadership and Ethiopian resistance

#### 10. Ras Woldemichael Gugsa - COMPLETED ✅

**Specific Research Points:**

- Son of Emperor Yohannes IV and important Tigrayan noble
- Early 20th-century modernizer and political leader
- Role in Ethiopian politics during transition to Haile Selassie era
- Contributions to Tigrayan administration and development
- Relationships with other Ethiopian regional leaders
- Legacy in Tigrayan political tradition and Ethiopian modernization
- Role in Ethiopian politics during transition to Haile Selassie era
- Contributions to Tigrayan administration and development
- Relationships with other Ethiopian regional leaders
- Legacy in Tigrayan political tradition and Ethiopian modernization

## Quality Control Workflow

### Stage 1: AI Generation (30 minutes)

1. **Select Target Figure** from priority queue
2. **Customize Prompt** with specific research points
3. **Generate Draft** using AI tool
4. **Initial Review** for structure and completeness

### Stage 2: Human Fact-Checking (2-3 hours)

**CRITICAL REQUIREMENTS:**

- [ ] Verify all dates, names, and historical events
- [ ] Cross-check major claims against reliable sources
- [ ] Ensure cultural sensitivity and appropriate perspective
- [ ] Check for AI "hallucinations" or factual errors
- [ ] Validate spelling of names in original languages

### Stage 3: Source Research (1-2 hours)

- [ ] Replace placeholder sources with real academic references
- [ ] Add primary sources where available
- [ ] Include recent scholarship and archaeological findings
- [ ] Ensure source diversity (books, journals, archives)
- [ ] Format citations according to academic standards

### Stage 4: Cross-Linking (30 minutes)

- [ ] Add links to related articles within knowledge base
- [ ] Update "Further Reading" section with internal links
- [ ] Check that referenced articles exist or add to stub list
- [ ] Ensure reciprocal linking from related articles

### Stage 5: Publication (15 minutes)

- [ ] Final formatting check
- [ ] Add to navigation structure if needed
- [ ] Update stub articles list
- [ ] Commit with descriptive message

## Quality Benchmarks

### Minimum Standards

- **Length**: 800-1200 words
- **Sources**: 5+ credible academic references
- **Structure**: Clear sections with proper markdown headings
- **Accuracy**: All major facts verified against sources
- **Neutrality**: Balanced perspective without bias

### Excellence Standards

- **Length**: 1200-2000 words
- **Sources**: 8+ diverse sources including primary materials
- **Multimedia**: Relevant images with proper attribution
- **Context**: Strong connections to broader historical themes
- **Scholarship**: Engagement with recent academic debates

## Common AI Pitfalls to Avoid

### Factual Errors

- **Invented Dates**: AI may create plausible but incorrect dates
- **Conflated Events**: Mixing up similar historical events
- **Anachronisms**: Placing events or concepts in wrong time periods

### Source Issues

- **Fake Citations**: AI may invent realistic-sounding but non-existent sources
- **Outdated Information**: Using superseded historical interpretations
- **Primary Source Claims**: Claiming direct quotes without verification

### Cultural Sensitivity

- **External Perspective**: Ensure Ethiopian/Tigrayan viewpoint is centered
- **Religious Neutrality**: Balanced treatment of religious topics
- **Colonial Bias**: Avoid perpetuating colonial-era interpretations

## Success Metrics

### Weekly Targets

- **2-3 Complete Articles**: Fully researched and sourced
- **5+ Stub Expansions**: Adding content to existing articles
- **Source Updates**: Improving citations on older articles

### Monthly Goals

- **10+ New Figures**: Complete biographical articles
- **Cross-Reference Network**: Strong internal linking system
- **Expert Review**: Subject matter expert validation of key articles

## Expert Reviewer Network

### Recruitment Strategy

- **Academic Partnerships**: Ethiopian Studies departments
- **Community Scholars**: Diaspora historians and cultural experts
- **Local Experts**: In-country researchers and archivists
- **Specialized Knowledge**: Religious scholars, archaeologists, linguists

### Review Coordination

- **Assignment System**: Match experts to their specialization areas
- **Feedback Integration**: Systematic incorporation of expert suggestions
- **Credit System**: Proper attribution for expert contributions
- **Ongoing Relationships**: Building long-term editorial partnerships

---

## Quick Reference: Next 10 Articles

1. **Queen of Sheba (Makeda)** - Biblical/Quranic sources and Ethiopian Orthodox traditions ✅
2. **Dejazmach Sabagadis** - 19th-century Ethiopian historical sources
3. **Ras Seyum Mengesha** - Grandson of Yohannes IV, anti-Italian resistance leader
4. **Ras Woldemichael Gugsa** - Son of Yohannes IV, early 20th-century modernizer  
5. **Archbishop Abune Mathias** - Current Patriarch, contemporary religious leadership
6. **Ras Mikael Ali** - 19th-century Tigrayan leader and warrior
7. **Empress Taitu Betul** - Wife of Menelik II, Battle of Adwa strategist
8. **Kantiba Gabru Desta** - Patriot and resistance leader during Italian occupation
9. **Dr. Aklilu Habte-Wold** - Former Prime Minister and diplomat
10. **Professor Asmerom Legesse** - Contemporary scholar and anthropologist

---

*This workflow balances AI efficiency with human expertise to create authoritative, well-sourced content for the Tigray Knowledge Base.*
