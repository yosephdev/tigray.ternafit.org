# Internal Linking Template & Standards

This template provides standardized approaches for internal linking across the Tigray Knowledge Base.

## Standard Cross-Reference Sections

### For Historical Figure Articles

```markdown
## Related Topics

### Contemporary Figures
- **[Name](link.md)** - Relationship description

### Geographic Connections  
- **[Region/Zone](../01-geography.md)** - Geographic context
- **[Cities](../01-geography.md)** - Relevant urban centers

### Historical Context
- **[Period](../05-history-culture.md)** - Historical era and events
- **[Movements](../05-history-culture.md)** - Related historical movements

### Modern Legacy
- **[Current Affairs](../07-current-affairs.md)** - Modern relevance
- **[Education](../04-edu-health.md)** - How they're taught today
```

### For Geographic Articles

```markdown
## Related Topics

### Historical Context
- **[Historical Figures](figures/)** - Leaders from this region
- **[Historical Events](../05-history-culture.md)** - Regional history

### Demographics & Society  
- **[Population](../02-demographics.md)** - Demographic characteristics
- **[Ethnic Groups](../02-demographics.md)** - Cultural composition

### Economic Activity
- **[Economic Sectors](../03-economy.md)** - Regional economy
- **[Trade](../03-economy.md)** - Commercial activities

### Social Services
- **[Education](../04-edu-health.md)** - Educational infrastructure
- **[Health](../04-edu-health.md)** - Healthcare services
```

### For Cultural/Historical Articles

```markdown
## Related Topics

### Geographic Context
- **[Regions](../01-geography.md)** - Where these traditions are practiced
- **[Cities](../01-geography.md)** - Urban cultural centers

### Historical Figures
- **[Leaders](figures/)** - Influential personalities
- **[Saints](figures/)** - Religious figures

### Modern Context
- **[Current Practice](../07-current-affairs.md)** - Contemporary relevance
- **[Education](../04-edu-health.md)** - Cultural education
- **[Preservation](../07-current-affairs.md)** - Conservation efforts
```

## Linking Best Practices

### 1. Contextual Relevance
- Links should add value to the reader's understanding
- Include brief description of why the link is relevant
- Use descriptive anchor text

### 2. Link Density
- Aim for 3-5 contextual internal links per article
- Don't over-link - quality over quantity
- Spread links throughout the article, not just at the end

### 3. Bidirectional Linking
- If Article A links to Article B, Article B should ideally link back to Article A
- Create networks of related content
- Think about user journeys between topics

### 4. Link Maintenance
- Regular audit of broken links
- Update links when file names or structure changes
- Use relative paths for internal links

## Tag-Link Integration

### Coordinate Tags with Links
- Articles with shared tags should cross-reference each other
- Use tags to identify potential linking opportunities
- Create tag-based content clusters

### Example Tag-Link Relationships

**Military History Cluster:**
- Emperor Yohannes IV ↔ Ras Alula Aba Nega ↔ Battle histories ↔ War Memorial

**Geographic Cluster:**  
- Central Zone ↔ Axum ↔ King Ezana ↔ Religious Heritage ↔ Tourism

**Cultural Heritage Cluster:**
- Orthodox Christianity ↔ Historical Figures ↔ Traditional Festivals ↔ Modern Identity

## Quality Checklist

Before publishing any article, verify:

- [ ] At least 3 relevant internal links included
- [ ] All links are functional (no 404 errors)
- [ ] Link descriptions are informative
- [ ] Bidirectional linking where appropriate
- [ ] Tags align with linked content
- [ ] Cross-references add value to user experience

## Implementation Priority

1. **High Priority**: Fix all broken links in build warnings
2. **Medium Priority**: Add cross-references to main content pages
3. **Low Priority**: Enhance linking in supplementary content

This systematic approach ensures the knowledge base becomes a truly interconnected web of information rather than isolated articles.
