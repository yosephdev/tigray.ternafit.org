# Demographics & Population

# Demographics & Population

!!! abstract "Article Tags"
    **Tags**: demographics, population, ethnic-groups, urbanization, displacement, war-impact, statistics, central-zone, eastern-zone, western-zone, rural-urban

!!! info "Population Quick Facts"
    
    **Total Population**: 7.1 million (down from 7.8M in 2020)  
    **Population Density**: 89 people/km²  
    **Growth Rate**: -2.1% (2020-2024, due to war)  
    **Median Age**: 19.2 years  
    **Life Expectancy**: 62 years (down from 67 in 2019)

---

## 1. Population Distribution

### 1.1 Population Pyramid (2024)

```plotly
{
  "data": [
    {
      "y": ["0-4", "5-9", "10-14", "15-19", "20-24", "25-29", "30-34", "35-39", "40-44", "45-49", "50-54", "55-59", "60-64", "65-69", "70-74", "75-79", "80+"],
      "x": [-486000, -465000, -442000, -398000, -355000, -312000, -276000, -245000, -218000, -195000, -174000, -152000, -128000, -98000, -72000, -48000, -31000],
      "type": "bar",
      "orientation": "h",
      "name": "Male",
      "marker": {"color": "#118AB2"}
    },
    {
      "y": ["0-4", "5-9", "10-14", "15-19", "20-24", "25-29", "30-34", "35-39", "40-44", "45-49", "50-54", "55-59", "60-64", "65-69", "70-74", "75-79", "80+"],
      "x": [478000, 458000, 435000, 392000, 350000, 308000, 272000, 242000, 215000, 193000, 172000, 151000, 127000, 97000, 71000, 47000, 30000],
      "type": "bar",
      "orientation": "h",
      "name": "Female",
      "marker": {"color": "#F7931E"}
    }
  ],
  "layout": {
    "title": "Tigray Population Pyramid 2024",
    "xaxis": {
      "title": "Population",
      "tickformat": ",",
      "range": [-600000, 600000]
    },
    "yaxis": {"title": "Age Group"},
    "barmode": "overlay",
    "bargap": 0.1
  }
}
```

### 1.2 Population by Zone

{{ read_csv('assets/data/population_by_zone.csv') }}

```vegalite
{
  "data": {
    "values": [
      {"zone": "Mehakelegnaw", "urban": 720000, "rural": 480000, "total": 1200000},
      {"zone": "Misraqawi", "urban": 285000, "rural": 665000, "total": 950000},
      {"zone": "Semien Mi'irabawi", "urban": 160000, "rural": 640000, "total": 800000},
      {"zone": "Debubawi", "urban": 150000, "rural": 600000, "total": 750000},
      {"zone": "Mi'irabawi", "urban": 130000, "rural": 520000, "total": 650000},
      {"zone": "Debub Misraqawi", "urban": 104000, "rural": 416000, "total": 520000}
    ]
  },
  "transform": [
    {"fold": ["urban", "rural"], "as": ["type", "population"]}
  ],
  "mark": {"type": "bar", "tooltip": true},
  "encoding": {
    "x": {
      "field": "zone",
      "type": "nominal",
      "axis": {"title": "Administrative Zone", "labelAngle": -45}
    },
    "y": {
      "field": "population",
      "type": "quantitative",
      "axis": {"title": "Population", "format": ","}
    },
    "color": {
      "field": "type",
      "type": "nominal",
      "scale": {"domain": ["urban", "rural"], "range": ["#FF6B35", "#118AB2"]}
    }
  },
  "title": "Urban vs Rural Population by Zone"
}
```

---

## 2. Ethnic Composition

### 2.1 Ethnic Groups

| Ethnic Group | Population | Percentage | Primary Language | Geographic Distribution |
|--------------|------------|------------|------------------|------------------------|
| **Tigrayan** | 6,887,000 | 97.0% | Tigrigna | All zones |
| **Amhara** | 142,000 | 2.0% | Amharic | Southern & western zones |
| **Irob** | 35,500 | 0.5% | Saho | Eastern zone (border areas) |
| **Afar** | 21,300 | 0.3% | Afar | Eastern lowlands |

```plotly
{
  "data": [
    {
      "values": [97.0, 2.0, 0.5, 0.3],
      "labels": ["Tigrayan", "Amhara", "Irob", "Afar"],
      "type": "pie",
      "hole": 0.4,
      "textinfo": "label+percent",
      "textposition": "outside",
      "marker": {
        "colors": ["#FF6B35", "#F7931E", "#FFD23F", "#118AB2"]
      }
    }
  ],
  "layout": {
    "title": "Ethnic Composition of Tigray (2024)",
    "font": {"size": 14},
    "showlegend": false
  }
}
```

### 2.2 Language Distribution

!!! note "Languages Spoken in Tigray"

    === "Tigrigna"
        - **Speakers**: 6.9 million (97.3%)
        - **Status**: Regional official language
        - **Script**: Ge'ez (Fidel)
        - **Dialects**: Central, Eastern, Western variants
        - **Literature**: Rich oral and written tradition

    === "Amharic"
        - **Speakers**: 350,000 (4.9%)
        - **Status**: Federal official language
        - **Usage**: Government, business, education
        - **Areas**: Urban centers, southern regions

    === "Saho"
        - **Speakers**: 38,000 (0.5%)
        - **Status**: Minority language
        - **Areas**: Eastern border regions (Irob)
        - **Script**: Ge'ez adaptation

    === "Other Languages"
        - **Afar**: 22,000 speakers (eastern lowlands)
        - **Arabic**: Trade language in border areas
        - **English**: Educated urban population

---

## 3. Religious Composition

### 3.1 Religious Affiliation

```plotly
{
  "data": [
    {
      "values": [6794400, 248300, 57000],
      "labels": ["Tigrayan Orthodox Tewahedo", "Islam", "Other (Protestant, Catholic, Traditional)"],
      "type": "pie",
      "hole": 0.3,
      "textinfo": "label+percent+value",
      "textposition": "outside",
      "marker": {
        "colors": ["#073B4C", "#06FFA5", "#F7931E"]
      }
    }
  ],
  "layout": {
    "title": "Religious Distribution in Tigray (2024)",
    "font": {"size": 14}
  }
}
```

### 3.1 Tigrayan Orthodox Tewahedo Church

The **Tigrayan Orthodox Tewahedo Church** is one of the Oriental Orthodox Churches with its headquarters in Aksum, Tigray Region.

**Key Details:**
- **Independence**: From the Ethiopian Orthodox Tewahedo Church in 2022
- **Recognition**: Not officially recognized in the broader Orthodox community
- **Region**: Tigray and Tigrayan diaspora
- **Theology**: Miaphysitism
- **Source**: Wikipedia

### 3.2 Religious Centers

| Religion | Major Centers | Estimated Adherents | Key Festivals |
|----------|---------------|-------------------|---------------|
| **Orthodox Christianity** | 2,847 churches | 6.79 million | Timkat, Meskel, Easter |
| **Islam** | 312 mosques | 248,300 | Eid al-Fitr, Eid al-Adha |
| **Protestant** | 89 churches | 43,000 | Christmas, Easter |
| **Catholic** | 12 churches | 11,000 | Christmas, Easter |
| **Traditional** | Various | 3,000 | Seasonal celebrations |

---

## 4. Age Structure & Demographics

### 4.1 Age Distribution

```vegalite
{
  "data": {
    "values": [
      {"age_group": "0-14 years", "male": 1393000, "female": 1371000, "total": 2764000, "percentage": 38.9},
      {"age_group": "15-24 years", "male": 707000, "female": 700000, "total": 1407000, "percentage": 19.8},
      {"age_group": "25-64 years", "male": 1353000, "female": 1357000, "total": 2710000, "percentage": 38.2},
      {"age_group": "65+ years", "male": 115000, "female": 115000, "total": 230000, "percentage": 3.1}
    ]
  },
  "mark": {"type": "arc", "innerRadius": 50, "outerRadius": 100},
  "encoding": {
    "theta": {"field": "total", "type": "quantitative"},
    "color": {
      "field": "age_group",
      "type": "nominal",
      "scale": {"range": ["#FF6B35", "#F7931E", "#118AB2", "#073B4C"]}
    },
    "tooltip": [
      {"field": "age_group", "type": "nominal", "title": "Age Group"},
      {"field": "total", "type": "quantitative", "title": "Population", "format": ","},
      {"field": "percentage", "type": "quantitative", "title": "Percentage", "format": ".1f"}
    ]
  },
  "title": "Age Structure Distribution"
}
```

### 4.2 Dependency Ratios

!!! example "Demographic Indicators"

    === "Dependency Ratios"
        - **Youth Dependency**: 68.4 per 100 working-age adults
        - **Elderly Dependency**: 7.7 per 100 working-age adults  
        - **Total Dependency**: 76.1 per 100 working-age adults
        - **Child-Woman Ratio**: 712 children per 1,000 women aged 15-49

    === "Life Expectancy"
        - **Overall**: 62.1 years (down from 67.3 in 2019)
        - **Male**: 60.2 years
        - **Female**: 64.1 years
        - **At birth (2024)**: 61.8 years
        - **Healthy life expectancy**: 54.2 years

---

## 5. Education Levels

### 5.1 Literacy Rates

```plotly
{
  "data": [
    {
      "x": ["Overall", "Male", "Female", "Urban", "Rural", "Youth (15-24)", "Adults (25-64)", "Elderly (65+)"],
      "y": [61.2, 74.8, 47.9, 89.5, 52.1, 78.3, 55.7, 22.4],
      "type": "bar",
      "marker": {
        "color": ["#FF6B35", "#118AB2", "#F7931E", "#06FFA5", "#073B4C", "#6A994E", "#FFD23F", "#8B0000"]
      },
      "text": ["61.2%", "74.8%", "47.9%", "89.5%", "52.1%", "78.3%", "55.7%", "22.4%"],
      "textposition": "outside"
    }
  ],
  "layout": {
    "title": "Literacy Rates by Category (2024)",
    "xaxis": {"title": "Category"},
    "yaxis": {"title": "Literacy Rate (%)", "range": [0, 100]},
    "font": {"size": 12}
  }
}
```

### 5.2 Educational Attainment (Population 25+)

| Education Level | Number | Percentage | Male | Female |
|-----------------|--------|------------|------|---------|
| **No formal education** | 1,847,000 | 62.8% | 52.1% | 73.2% |
| **Primary (1-8)** | 758,000 | 25.8% | 30.2% | 21.5% |
| **Secondary (9-12)** | 245,000 | 8.3% | 11.4% | 5.3% |
| **Technical/Vocational** | 56,000 | 1.9% | 2.8% | 1.1% |
| **Higher education** | 35,000 | 1.2% | 1.8% | 0.6% |

---

## 6. Health Demographics

### 6.1 Vital Statistics

| Indicator | 2019 (Pre-war) | 2024 (Current) | Change | Source |
|-----------|-----------------|----------------|---------|---------|
| **Birth rate** | 28.5 per 1,000 | 31.2 per 1,000 | +9.5% | CSA |
| **Death rate** | 6.8 per 1,000 | 12.4 per 1,000 | +82.4% | WHO |
| **Infant mortality** | 41 per 1,000 | 67 per 1,000 | +63.4% | UNICEF |
| **Maternal mortality** | 267 per 100,000 | 412 per 100,000 | +54.3% | WHO |
| **Total fertility rate** | 3.7 children | 4.2 children | +13.5% | CSA |

### 6.2 Disease Prevalence

```vegalite
{
  "data": {
    "values": [
      {"disease": "Malaria", "prevalence": 15.2, "category": "Infectious"},
      {"disease": "Tuberculosis", "prevalence": 8.7, "category": "Infectious"},
      {"disease": "HIV/AIDS", "prevalence": 1.4, "category": "Infectious"},
      {"disease": "Hypertension", "prevalence": 12.8, "category": "Non-communicable"},
      {"disease": "Diabetes", "prevalence": 3.9, "category": "Non-communicable"},
      {"disease": "Mental health disorders", "prevalence": 22.1, "category": "Mental health"},
      {"disease": "Malnutrition (children)", "prevalence": 28.4, "category": "Nutritional"},
      {"disease": "Anemia (women)", "prevalence": 31.7, "category": "Nutritional"}
    ]
  },
  "mark": {"type": "circle", "size": 200},
  "encoding": {
    "x": {
      "field": "category",
      "type": "nominal",
      "axis": {"title": "Disease Category", "labelAngle": -45}
    },
    "y": {
      "field": "prevalence",
      "type": "quantitative",
      "axis": {"title": "Prevalence (%)"}
    },
    "size": {
      "field": "prevalence",
      "type": "quantitative",
      "scale": {"range": [100, 800]}
    },
    "color": {
      "field": "category",
      "type": "nominal",
      "scale": {"range": ["#FF6B35", "#118AB2", "#F7931E", "#06FFA5"]}
    },
    "tooltip": [
      {"field": "disease", "type": "nominal", "title": "Disease"},
      {"field": "prevalence", "type": "quantitative", "title": "Prevalence (%)", "format": ".1f"},
      {"field": "category", "type": "nominal", "title": "Category"}
    ]
  },
  "title": "Disease Prevalence in Tigray (2024)"
}
```

---

## 7. War Impact on Demographics

### 7.1 Population Displacement

!!! danger "Displacement Statistics (Peak Period 2020-2022)"

    - **Total IDPs**: 2.7 million (38% of population)
    - **Refugees in Sudan**: 63,000
    - **Host communities**: 1.2 million people
    - **Unaccompanied children**: 45,000
    - **Female-headed households**: 68% of IDP households

### 7.2 Casualty Estimates

Various sources provide different estimates of war casualties:

| Source | Civilian Deaths | Total Deaths | Methodology |
|---------|----------------|--------------|-------------|
| **Tigray Government** | 120,000-150,000 | 400,000-500,000 | Hospital records, burial sites |
| **OHCHR Investigation** | 50,000-100,000 | 300,000-400,000 | Interviews, documentation |
| **Academic Studies** | 80,000-120,000 | 350,000-450,000 | Statistical modeling |
| **Humanitarian Orgs** | 60,000-110,000 | 280,000-380,000 | Field reports, surveys |

!!! warning "Data Limitations"
    
    Exact casualty figures remain disputed due to:
    - Limited access during conflict
    - Destruction of civil registration systems
    - Mass displacement affecting counting
    - Political sensitivities around numbers

---

## 8. Current Population Trends

### 8.1 Return and Recovery (2023-2025)

```plotly
{
  "data": [
    {
      "x": ["Jan 2023", "Apr 2023", "Jul 2023", "Oct 2023", "Jan 2024", "Apr 2024", "Jul 2024"],
      "y": [2.7, 2.4, 2.1, 1.8, 1.6, 1.4, 1.2],
      "type": "scatter",
      "mode": "lines+markers",
      "name": "Total IDPs",
      "line": {"color": "#FF6B35", "width": 3},
      "marker": {"size": 8}
    },
    {
      "x": ["Jan 2023", "Apr 2023", "Jul 2023", "Oct 2023", "Jan 2024", "Apr 2024", "Jul 2024"],
      "y": [0, 0.3, 0.6, 0.9, 1.1, 1.3, 1.5],
      "type": "scatter",
      "mode": "lines+markers",
      "name": "Returned",
      "line": {"color": "#118AB2", "width": 3},
      "marker": {"size": 8}
    }
  ],
  "layout": {
    "title": "IDP Return Trends (2023-2024)",
    "xaxis": {"title": "Time Period"},
    "yaxis": {"title": "Population (millions)"},
    "font": {"size": 12}
  }
}
```

### 8.2 Projected Population (2025-2030)

| Year | Total Population | Growth Rate | Urban % | Comments |
|------|------------------|-------------|---------|----------|
| **2025** | 7.25 million | +2.1% | 23.1% | Recovery phase |
| **2026** | 7.42 million | +2.3% | 24.0% | Stabilization |
| **2027** | 7.59 million | +2.3% | 24.9% | Normal growth resumes |
| **2028** | 7.77 million | +2.4% | 25.8% | Pre-war levels reached |
| **2029** | 7.96 million | +2.4% | 26.7% | Sustained recovery |
| **2030** | 8.15 million | +2.4% | 27.6% | Development targets |

---

## Data Downloads

!!! note "Available Demographics Data"

    - [Population by woreda 2024 (CSV)](../assets/data/tigray_population_woreda_2024.csv) - 23 KB
    - [Age-sex structure (CSV)](../assets/data/age_sex_structure_2024.csv) - 15 KB
    - [Ethnic composition by zone (CSV)](../assets/data/ethnic_composition_zones.csv) - 12 KB
    - [Education statistics (Excel)](../assets/data/education_statistics_2024.xlsx) - 145 KB
    - [Health indicators (CSV)](../assets/data/health_indicators_2024.csv) - 28 KB
    - [IDP displacement data (CSV)](../assets/data/idp_tracking_2020_2024.csv) - 67 KB

[:material-download: Access All Data](08-downloads.md){ .md-button .md-button--primary }

---

## Related Topics

### Geographic Context

- **[Administrative Zones](01-geography.md)** - Administrative divisions and zone profiles
- **[Major Cities](01-geography.md)** - Urban centers and population distribution
- **[Border Regions](01-geography.md)** - Cross-border population movements

### Economic Implications

- **[Labor Force](03-economy.md)** - Employment and economic participation by demographics
- **[Agricultural Population](03-economy.md)** - Rural economic activities and livelihoods
- **[Urban Development](03-economy.md)** - City growth and economic opportunities

### Social Services

- **[Education System](04-edu-health.md)** - School enrollment and literacy by demographic groups
- **[Healthcare Access](04-edu-health.md)** - Health services and demographic health outcomes
- **[Infrastructure](04-edu-health.md)** - Service delivery to different population groups

### Historical Context

- **[Population Changes](05-history-culture.md)** - Historical demographic shifts and migrations
- **[War Impact](06-war-memorial.md)** - Conflict-related demographic changes and displacement
- **[Cultural Identity](05-history-culture.md)** - Ethnic and cultural heritage

---

**Sources:** Ethiopian Central Statistical Agency (2024), OCHA Humanitarian Needs Overview (2025), WHO Health Cluster (2024), IOM Displacement Tracking Matrix (2024), UNICEF State of Children Report (2024)
