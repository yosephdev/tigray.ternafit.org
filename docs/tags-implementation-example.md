# Tagging System Implementation Example

## How to Add Tags to Your Content

### 1. Add Tags to Article Front Matter

```yaml
---
title: "Emperor Yohannes IV"
tags:
  - historical-figures
  - 19th-century
  - military-leaders
  - axum
  - ethiopian-empire
  - christianity
  - independence
---
```

### 2. Cross-Category Tag Examples

**Ancient Traditions** (spans History + Culture):
- Articles: "King Ezana", "Orthodox Churches", "Traditional Festivals"

**Military History** (spans History + War Memorial):
- Articles: "Battle of Adwa", "Emperor Yohannes IV", "War Timeline"

**Geographic Features** (spans Geography + Culture):
- Articles: "Axum", "Rock Churches", "Administrative Zones"

### 3. Enable Tags Plugin in mkdocs.yml

```yaml
plugins:
  - tags:
      tags_file: tags.md
```

### 4. Create Tags Index Page

```markdown
# Tags Index

[TAGS]
```
