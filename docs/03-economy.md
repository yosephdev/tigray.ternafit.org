# Economy & Resources

!!! info "Economic Overview (2024)"
    
    **Gross Regional Product**: $3.2 billion (down from $4.8B in 2019)  
    **Per Capita Income**: $451 (down from $615 in 2019)  
    **Unemployment Rate**: 23.4% (up from 8.1% in 2019)  
    **Poverty Rate**: 38.2% (up from 22.1% in 2019)  
    **Economic Growth**: -1.2% (2024), recovering from -45% (2021)

---

## 1. Economic Structure

### 1.1 GDP by Sector (Pre-war vs Post-war)

```plotly
{
  "data": [
    {
      "x": ["Agriculture", "Industry", "Services", "Trade/Commerce"],
      "y": [45, 15, 30, 10],
      "type": "bar",
      "name": "2019 (Pre-war)",
      "marker": {"color": "#118AB2"}
    },
    {
      "x": ["Agriculture", "Industry", "Services", "Trade/Commerce"],
      "y": [25, 10, 40, 25],
      "type": "bar",
      "name": "2024 (Post-war)",
      "marker": {"color": "#FF6B35"}
    }
  ],
  "layout": {
    "title": "Economic Structure: Pre-war vs Post-war (%)",
    "xaxis": {"title": "Economic Sector"},
    "yaxis": {"title": "Percentage of GDP"},
    "barmode": "group",
    "font": {"size": 12}
  }
}
```

### 1.2 Employment Distribution

| Sector | Pre-war (2019) | Current (2024) | Change | Notes |
|--------|----------------|----------------|---------|-------|
| **Agriculture** | 68% | 55% | -13% | Reduced farmland access |
| **Services** | 18% | 25% | +7% | Humanitarian, reconstruction |
| **Industry** | 8% | 5% | -3% | Factory closures, looting |
| **Trade/Commerce** | 6% | 15% | +9% | Informal cross-border trade |

---

## 2. Agriculture

### 2.1 Agricultural Production

Tigray's economy has traditionally been dominated by agriculture, but the 2020-2022 war severely disrupted production.

```vegalite
{
  "data": {
    "values": [
      {"crop": "Teff", "production_2019": 485000, "production_2024": 267000, "area_hectares": 420000},
      {"crop": "Barley", "production_2019": 312000, "production_2024": 186000, "area_hectares": 280000},
      {"crop": "Wheat", "production_2019": 289000, "production_2024": 145000, "area_hectares": 195000},
      {"crop": "Sorghum", "production_2019": 245000, "production_2024": 134000, "area_hectares": 165000},
      {"crop": "Maize", "production_2019": 198000, "production_2024": 98000, "area_hectares": 125000},
      {"crop": "Sesame", "production_2019": 156000, "production_2024": 62000, "area_hectares": 85000}
    ]
  },
  "transform": [
    {"fold": ["production_2019", "production_2024"], "as": ["year", "production"]},
    {"calculate": "datum.year == 'production_2019' ? '2019' : '2024'", "as": "year_label"}
  ],
  "mark": {"type": "bar", "tooltip": true},
  "encoding": {
    "x": {
      "field": "crop",
      "type": "nominal",
      "axis": {"title": "Crop Type", "labelAngle": -45}
    },
    "y": {
      "field": "production",
      "type": "quantitative",
      "axis": {"title": "Production (tonnes)", "format": ","}
    },
    "color": {
      "field": "year_label",
      "type": "nominal",
      "scale": {"domain": ["2019", "2024"], "range": ["#118AB2", "#FF6B35"]}
    },
    "xOffset": {"field": "year_label"}
  },
  "title": "Agricultural Production: 2019 vs 2024"
}
```

### 2.2 Livestock

| Livestock | 2019 Count | 2024 Count | Change | Value (2024) |
|-----------|------------|------------|---------|--------------|
| **Cattle** | 3.2 million | 1.8 million | -44% | $720 million |
| **Sheep** | 2.1 million | 1.3 million | -38% | $195 million |
| **Goats** | 1.8 million | 1.1 million | -39% | $110 million |
| **Poultry** | 8.9 million | 4.2 million | -53% | $84 million |
| **Camels** | 45,000 | 28,000 | -38% | $42 million |
| **Donkeys** | 285,000 | 198,000 | -31% | $19.8 million |

!!! warning "War Impact on Agriculture"

    - **40% of farmland** abandoned during conflict (2020-2022)
    - **65% of agricultural equipment** destroyed or looted
    - **58% of seed stock** lost or destroyed
    - **73% of livestock** killed, stolen, or died from neglect
    - **85% of irrigation systems** damaged or non-functional

---

## 3. Industry & Mining

### 3.1 Industrial Sector

Pre-war, Tigray had a developing industrial base, particularly around Mekelle and other urban centers.

#### Manufacturing Facilities

| Industry Type | Pre-war (2019) | Operational (2024) | Employment (2024) |
|---------------|----------------|--------------------|-------------------|
| **Textiles** | 18 factories | 6 factories | 2,400 jobs |
| **Food Processing** | 24 facilities | 12 facilities | 3,800 jobs |
| **Construction Materials** | 15 plants | 7 plants | 1,900 jobs |
| **Pharmaceuticals** | 3 factories | 1 factory | 450 jobs |
| **Metal Works** | 12 shops | 5 shops | 680 jobs |
| **Leather & Shoes** | 8 factories | 2 factories | 320 jobs |

```plotly
{
  "data": [
    {
      "labels": ["Destroyed/Looted", "Damaged but Repairable", "Operational", "Under Reconstruction"],
      "values": [45, 25, 20, 10],
      "type": "pie",
      "hole": 0.4,
      "textinfo": "label+percent",
      "textposition": "outside",
      "marker": {
        "colors": ["#8B0000", "#FF6B35", "#118AB2", "#06FFA5"]
      }
    }
  ],
  "layout": {
    "title": "Status of Industrial Facilities (2024)",
    "font": {"size": 14}
  }
}
```

### 3.2 Mining Resources

Tigray possesses significant mineral wealth, though exploitation remains limited.

#### Major Mineral Deposits

| Mineral | Location | Estimated Reserves | Status | Export Potential |
|---------|----------|-------------------|---------|------------------|
| **Gold** | Shire, Tahtay Adiyabo | 15.2 tonnes proven | Limited extraction | High |
| **Potash** | Danakil Depression | 1.3 billion tonnes | Exploration phase | Very High |
| **Salt** | Afar lowlands | Extensive deposits | Traditional mining | Medium |
| **Iron Ore** | Togoga | 8.5 million tonnes | Unexploited | High |
| **Tantalum** | Adwa area | 2,400 tonnes | Small-scale mining | High |
| **Feldspar** | Various locations | Large deposits | Limited extraction | Medium |

```vegalite
{
  "data": {
    "values": [
      {"mineral": "Potash", "reserve_size": 1300, "economic_value": 9.5, "extraction_level": 0.1},
      {"mineral": "Iron Ore", "reserve_size": 8.5, "economic_value": 7.2, "extraction_level": 0.0},
      {"mineral": "Gold", "reserve_size": 0.015, "economic_value": 8.8, "extraction_level": 2.5},
      {"mineral": "Tantalum", "reserve_size": 0.0024, "economic_value": 9.2, "extraction_level": 1.8},
      {"mineral": "Salt", "reserve_size": 100, "economic_value": 4.5, "extraction_level": 3.2},
      {"mineral": "Feldspar", "reserve_size": 50, "economic_value": 5.1, "extraction_level": 0.8}
    ]
  },
  "mark": {"type": "circle", "size": 300},
  "encoding": {
    "x": {
      "field": "economic_value",
      "type": "quantitative",
      "axis": {"title": "Economic Value (0-10 scale)"}
    },
    "y": {
      "field": "extraction_level",
      "type": "quantitative",
      "axis": {"title": "Current Extraction Level (0-10 scale)"}
    },
    "size": {
      "field": "reserve_size",
      "type": "quantitative",
      "scale": {"range": [100, 1000]},
      "legend": {"title": "Reserve Size"}
    },
    "color": {
      "field": "mineral",
      "type": "nominal",
      "scale": {"range": ["#FF6B35", "#118AB2", "#F7931E", "#06FFA5", "#073B4C", "#6A994E"]}
    },
    "tooltip": [
      {"field": "mineral", "type": "nominal", "title": "Mineral"},
      {"field": "reserve_size", "type": "quantitative", "title": "Reserves (million tonnes)"},
      {"field": "economic_value", "type": "quantitative", "title": "Economic Value"},
      {"field": "extraction_level", "type": "quantitative", "title": "Extraction Level"}
    ]
  },
  "title": "Mineral Resources: Economic Value vs Current Extraction"
}
```

---

## 4. Trade & Commerce

### 4.1 Pre-war Exports (2019)

| Product | Value (USD million) | Destination | Share of Total |
|---------|-------------------|-------------|----------------|
| **Sesame** | 425 | China, Turkey, Japan | 42.5% |
| **Livestock** | 186 | Saudi Arabia, UAE | 18.6% |
| **Coffee** | 89 | Germany, USA, Japan | 8.9% |
| **Leather & Hides** | 67 | Italy, China | 6.7% |
| **Gold** | 54 | UAE, Switzerland | 5.4% |
| **Pulse crops** | 43 | India, Turkey | 4.3% |
| **Other** | 136 | Various | 13.6% |

### 4.2 Current Trade Status (2024)

!!! danger "Trade Disruption"

    - **Total exports**: $189 million (down 81% from $1.0B in 2019)
    - **Main export route**: Via Djibouti (limited capacity)
    - **Border closures**: Eritrea (ongoing), Sudan (security issues)
    - **Infrastructure**: 65% of roads damaged, Tekeze bridge rebuilt (2025)

```plotly
{
  "data": [
    {
      "x": ["2019", "2020", "2021", "2022", "2023", "2024"],
      "y": [1000, 245, 89, 134, 156, 189],
      "type": "scatter",
      "mode": "lines+markers",
      "name": "Export Value",
      "line": {"color": "#FF6B35", "width": 3},
      "marker": {"size": 10}
    }
  ],
  "layout": {
    "title": "Export Value Trend (2019-2024)",
    "xaxis": {"title": "Year"},
    "yaxis": {"title": "Export Value (USD millions)"},
    "font": {"size": 12}
  }
}
```

---

## 5. Financial Sector

### 5.1 Banking Infrastructure

| Bank | Branches (2019) | Operational (2024) | Services Available |
|------|-----------------|--------------------|--------------------|
| **Commercial Bank of Ethiopia** | 89 | 42 | Basic banking, loans |
| **Dashen Bank** | 23 | 12 | Commercial banking |
| **Bank of Abyssinia** | 18 | 8 | Personal banking |
| **Awash Bank** | 15 | 7 | Business banking |
| **Cooperative Bank** | 12 | 6 | Rural finance |
| **Other private banks** | 28 | 13 | Various services |

### 5.2 Microfinance & Cooperatives

- **Microfinance Institutions**: 15 (down from 28 pre-war)
- **Active borrowers**: 186,000 (down from 425,000 in 2019)
- **Average loan size**: $145
- **Repayment rate**: 78% (down from 92% pre-war)
- **Agricultural cooperatives**: 1,240 (down from 2,150)

---

## 6. Infrastructure Economics

### 6.1 Transportation Infrastructure

```vegalite
{
  "data": {
    "values": [
      {"infrastructure": "Paved Roads", "pre_war": 85, "current": 65, "unit": "% functional"},
      {"infrastructure": "Bridges", "pre_war": 95, "current": 78, "unit": "% operational"},
      {"infrastructure": "Airports", "pre_war": 100, "current": 33, "unit": "% operational"},
      {"infrastructure": "Railway", "pre_war": 0, "current": 0, "unit": "% complete"},
      {"infrastructure": "Telecommunications", "pre_war": 95, "current": 70, "unit": "% coverage"}
    ]
  },
  "transform": [
    {"fold": ["pre_war", "current"], "as": ["period", "percentage"]},
    {"calculate": "datum.period == 'pre_war' ? 'Pre-war (2019)' : 'Current (2024)'", "as": "period_label"}
  ],
  "mark": {"type": "bar", "tooltip": true},
  "encoding": {
    "x": {
      "field": "infrastructure",
      "type": "nominal",
      "axis": {"title": "Infrastructure Type", "labelAngle": -45}
    },
    "y": {
      "field": "percentage",
      "type": "quantitative",
      "axis": {"title": "Functional/Operational (%)"}
    },
    "color": {
      "field": "period_label",
      "type": "nominal",
      "scale": {"domain": ["Pre-war (2019)", "Current (2024)"], "range": ["#118AB2", "#FF6B35"]}
    },
    "xOffset": {"field": "period_label"}
  },
  "title": "Infrastructure Functionality: Pre-war vs Current"
}
```

### 6.2 Energy Infrastructure

| Energy Source | Capacity (MW) | Operational (2024) | Population Served |
|---------------|---------------|--------------------|--------------------|
| **Hydroelectric** | 2,300 | 1,150 | 45% |
| **Grid Connection** | - | 62% | 4.4 million |
| **Solar (off-grid)** | 45 | 28 | 280,000 |
| **Biomass/Traditional** | - | - | 85% rural |

---

## 7. Economic Recovery Plans

### 7.1 Government Recovery Strategy (2024-2027)

!!! example "Priority Sectors for Recovery"

    === "Agriculture"
        - **Seed distribution**: $45 million program
        - **Irrigation rehabilitation**: 15,000 hectares
        - **Livestock restocking**: 500,000 animals
        - **Extension services**: Train 2,500 agents
        - **Target**: Return to 80% of pre-war production by 2027

    === "Industry"
        - **Factory rehabilitation**: $125 million investment
        - **SME support**: Loans for 5,000 businesses
        - **Skills training**: 25,000 people
        - **Infrastructure**: Restore power, water, roads
        - **Target**: 60% of pre-war industrial capacity by 2026

    === "Trade & Commerce"
        - **Border facilitation**: Improve customs procedures
        - **Transport corridors**: Rehabilitate key roads
        - **Market infrastructure**: Rebuild 50 markets
        - **Export promotion**: Support 200 exporters
        - **Target**: $500 million in exports by 2026

### 7.2 International Support

| Donor/Organization | Commitment (USD) | Focus Area | Timeline |
|-------------------|------------------|------------|----------|
| **World Bank** | $450 million | Infrastructure, agriculture | 2024-2027 |
| **EU** | $280 million | Humanitarian, recovery | 2024-2026 |
| **USAID** | $195 million | Health, education, agriculture | 2024-2025 |
| **UN Agencies** | $340 million | Humanitarian, development | 2024-2026 |
| **African Development Bank** | $125 million | Infrastructure | 2024-2028 |

---

## 8. Economic Challenges

### 8.1 Key Constraints

!!! warning "Major Economic Challenges"

    1. **Infrastructure Destruction**: 
       - $2.1 billion in damaged infrastructure
       - Limited power generation (50% capacity)
       - Poor road connectivity

    2. **Human Capital Loss**:
       - 450,000 skilled workers displaced
       - Brain drain to other regions/countries
       - Disrupted education system

    3. **Access to Finance**:
       - Limited banking services (47% coverage)
       - High interest rates (18-22%)
       - Collateral requirements difficult to meet

    4. **Market Access**:
       - Border closures limiting trade
       - High transportation costs
       - Limited export diversification

### 8.2 Economic Indicators Comparison

```plotly
{
  "data": [
    {
      "categories": ["GDP per capita", "Unemployment", "Poverty Rate", "Literacy Rate", "Infrastructure Index"],
      "Tigray_2019": [615, 8.1, 22.1, 71.2, 6.8],
      "Tigray_2024": [451, 23.4, 38.2, 61.2, 4.2],
      "Ethiopia_Average": [890, 19.1, 29.6, 51.8, 5.1],
      "type": "scatterpolar",
      "fill": "toself"
    }
  ],
  "layout": {
    "polar": {
      "radialaxis": {
        "visible": true,
        "range": [0, 100]
      }
    },
    "title": "Economic Indicators: Tigray vs National Average"
  }
}
```

---

## Data Downloads

!!! note "Available Economic Data"

    - [GDP by sector 2019-2024 (CSV)](../assets/data/gdp_by_sector_2019_2024.csv) - 18 KB
    - [Agricultural production statistics (Excel)](../assets/data/agricultural_production_2024.xlsx) - 156 KB
    - [Industrial facilities database (CSV)](../assets/data/industrial_facilities_2024.csv) - 89 KB
    - [Trade statistics 2019-2024 (CSV)](../assets/data/trade_statistics_2019_2024.csv) - 67 KB
    - [Employment data by sector (CSV)](../assets/data/employment_by_sector_2024.csv) - 23 KB
    - [Infrastructure assessment (PDF)](../assets/data/infrastructure_assessment_2024.pdf) - 2.3 MB

[:material-download: Access All Economic Data](08-downloads.md){ .md-button .md-button--primary }

---

*Sources: Ethiopian Central Statistical Agency (2024), Tigray Bureau of Finance and Economic Development (2024), World Bank Tigray Recovery Report (2024), African Development Bank (2024), UNDP Human Development Report (2024)*
