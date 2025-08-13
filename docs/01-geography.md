# Geography & Administrative Structure

!!! info "Quick Facts"
    
    **Area**: 80,000 km² (31,000 sq mi) - *roughly the size of Austria*  
    **Capital**: Mekelle (pop. 545,000)  
    **Coordinates**: 14°N, 38.5°E  
    **Elevation**: Sea level to 4,550m (Ras Dashan)  
    **Climate Zones**: 5 distinct agro-ecological zones

---

## 1. Administrative Divisions

### 1.1 Regional Overview

Tigray is divided into **7 zones** and **35 woredas** (districts), with major administrative restructuring completed in 2020-2021.

```plotly
{
  "data": [
    {
      "values": [1200000, 950000, 800000, 750000, 650000, 520000],
      "labels": ["Central (Mehakelegnaw)", "Eastern (Misraqawi)", "Northwestern (Semien Mi'irabawi)", "Southern (Debubawi)", "Western (Mi'irabawi)", "Southeastern (Debub Misraqawi)"],
      "type": "pie",
      "hole": 0.3,
      "textinfo": "label+percent+value",
      "textposition": "outside",
      "marker": {
        "colors": ["#FF6B35", "#F7931E", "#FFD23F", "#06FFA5", "#118AB2", "#073B4C"]
      }
    }
  ],
  "layout": {
    "title": "Population by Zone (2024 estimates)",
    "font": {"size": 14},
    "showlegend": false
  }
}
```

### 1.2 Zone Profiles

{{ read_csv('assets/data/zones_detailed.csv') }}

| Zone | Capital | Area (km²) | Population | Density | Key Features |
|------|---------|------------|------------|---------|--------------|
| **Mehakelegnaw** | Mekelle | 13,400 | 1,200,000 | 89.6 | Regional capital, Aksum, airports |
| **Misraqawi** | Adigrat | 15,200 | 950,000 | 62.5 | Border trade, Adigrat University |
| **Semien Mi'irabawi** | Shire | 14,600 | 800,000 | 54.8 | Refugee camps, agricultural hub |
| **Debubawi** | Alamata | 15,000 | 750,000 | 50.0 | Transport corridor, livestock |
| **Mi'irabawi** | Humera | 12,800 | 650,000 | 50.8 | Sesame production, Sudanese border |
| **Debub Misraqawi** | Abiy Adi | 8,600 | 520,000 | 60.5 | Rock churches, historical sites |

---

## 2. Physical Geography

### 2.1 Topography & Elevation

Tigray's landscape varies dramatically from the **Eastern Lowlands** (500m above sea level) to the **Ethiopian Highlands** (4,550m at Ras Dashan).

```plotly
{
  "data": [
    {
      "x": ["Eastern Lowlands", "Central Plateau", "Western Highlands", "Northern Highlands", "Ras Dashan Peak"],
      "y": [500, 2200, 2800, 3200, 4550],
      "type": "bar",
      "marker": {
        "color": ["#8B0000", "#CD853F", "#228B22", "#32CD32", "#87CEEB", "#FFFFFF"],
        "line": {"color": "#000000", "width": 1}
      },
      "text": ["-116m", "500m", "2,200m", "2,800m", "3,200m", "4,550m"],
      "textposition": "outside"
    }
  ],
  "layout": {
    "title": "Elevation Profile Across Tigray",
    "xaxis": {"title": "Geographic Regions"},
    "yaxis": {"title": "Elevation (meters above sea level)"},
    "font": {"size": 12}
  }
}
```

### 2.2 Climate Zones

| Zone | Altitude (m) | Rainfall (mm/year) | Temperature (°C) | Characteristics |
|------|--------------|-------------------|------------------|-----------------|
| **Berha** | 0-500 | 200-400 | 35-45 | Hot, arid, pastoral |
| **Kolla** | 500-1,500 | 400-800 | 25-35 | Warm, semi-arid, sorghum |
| **Woina Dega** | 1,500-2,300 | 800-1,200 | 20-25 | Temperate, mixed farming |
| **Dega** | 2,300-3,200 | 1,000-1,400 | 15-20 | Cool, barley, livestock |
| **Wirch** | 3,200+ | 1,200+ | 5-15 | Alpine, limited agriculture |

---

## 3. Major Cities & Towns

### 3.1 Urban Hierarchy

```vegalite
{
  "data": {
    "values": [
      {"city": "Mekelle", "population": 545000, "type": "Regional Capital", "zone": "Mehakelegnaw"},
      {"city": "Adigrat", "population": 165000, "type": "Zonal Capital", "zone": "Misraqawi"},
      {"city": "Shire", "population": 128000, "type": "Zonal Capital", "zone": "Semien Mi'irabawi"},
      {"city": "Aksum", "population": 85000, "type": "Historic City", "zone": "Mehakelegnaw"},
      {"city": "Alamata", "population": 75000, "type": "Zonal Capital", "zone": "Debubawi"},
      {"city": "Humera", "population": 68000, "type": "Border Town", "zone": "Mi'irabawi"},
      {"city": "Adwa", "population": 55000, "type": "Historic Town", "zone": "Mehakelegnaw"},
      {"city": "Abiy Adi", "population": 45000, "type": "Zonal Capital", "zone": "Debub Misraqawi"},
      {"city": "Maychew", "population": 42000, "type": "Woreda Capital", "zone": "Debubawi"}
    ]
    ]
  },
  "mark": {"type": "circle", "size": 200},
  "encoding": {
    "x": {
      "field": "population",
      "type": "quantitative",
      "scale": {"type": "log"},
      "axis": {"title": "Population (log scale)"}
    },
    "y": {
      "field": "zone",
      "type": "nominal",
      "axis": {"title": "Administrative Zone"}
    },
    "size": {
      "field": "population",
      "type": "quantitative",
      "scale": {"range": [100, 1000]}
    },
    "color": {
      "field": "type",
      "type": "nominal",
      "scale": {
        "domain": ["Regional Capital", "Zonal Capital", "Historic City", "Border Town", "Historic Town", "Woreda Capital"],
        "range": ["#FF6B35", "#F7931E", "#118AB2", "#06FFA5", "#073B4C", "#6A994E"]
      }
    },
    "tooltip": [
      {"field": "city", "type": "nominal", "title": "City"},
      {"field": "population", "type": "quantitative", "title": "Population", "format": ","},
      {"field": "type", "type": "nominal", "title": "Type"},
      {"field": "zone", "type": "nominal", "title": "Zone"}
    ]
  },
  "title": "Urban Centers by Population and Administrative Function"
}
```

### 3.2 City Profiles

=== "Mekelle"

    **Population**: 545,000 (2024)  
    **Elevation**: 2,254m  
    **Founded**: 13th century  
    **Economy**: Government, education, light industry  
    
    **Key Features**:
    - Regional government seat
    - Mekelle University (35,000 students)
    - Alula Aba Nega Airport
    - Yohannes IV Palace Museum
    
    **Infrastructure**:
    - 2 hospitals, 15 health centers
    - 127 primary schools, 23 secondary schools
    - Main roads to Addis Ababa, Adigrat, Shire

=== "Adigrat"

    **Population**: 165,000 (2024)  
    **Elevation**: 2,457m  
    **Founded**: 16th century  
    **Economy**: Education, trade, agriculture  
    
    **Key Features**:
    - Adigrat University
    - Historic churches (Abune Aregawi)
    - Border trade with Eritrea
    - Traditional markets
    
    **Challenges**: 
    - Proximity to Eritrean border (security)
    - Limited infrastructure development

=== "Aksum"

    **Population**: 85,000 (2024)  
    **Elevation**: 2,131m  
    **Founded**: 1st century AD  
    **Economy**: Tourism, religious pilgrimage  
    
    **UNESCO World Heritage Sites**:
    - Ancient obelisks (tallest: 33m)
    - Church of St. Mary of Zion
    - Archaeological ruins
    - Queen of Sheba's palace remains
    
    **Annual Visitors**: 180,000 (pre-war), 45,000 (2024)

---

## 4. Interactive Maps

### 4.1 Administrative Boundaries

<iframe src="../assets/maps/tigray_admin_interactive.html" width="100%" height="600px" frameborder="0"></iframe>

[View Fullscreen Map](assets/maps/tigray_admin_interactive.html){ .md-button .md-button--primary }

### 4.2 Population Density

<iframe src="../assets/maps/population_density.html" width="100%" height="500px" frameborder="0"></iframe>

### 4.3 Transportation Network

!!! example "Infrastructure Status (Post-War)"

    === "Roads"
        - **Paved roads**: 65% functional (down from 85% pre-war)
        - **All-weather roads**: 2,400 km total
        - **Major corridors**: Mekelle-Addis, Mekelle-Adigrat, Mekelle-Shire
        - **Critical bridges**: Tekeze (rebuilt 2025), Genfel (damaged)

    === "Airports"
        - **Mekelle**: International, 2,400m runway, partially operational
        - **Shire**: Domestic, 1,800m runway, closed since 2020
        - **Humera**: Airstrip, military control
        - **Dansha**: Under construction (suspended)

    === "Communications"
        - **Mobile coverage**: 70% (down from 95% pre-war)
        - **Internet**: Limited fiber, satellite backup
        - **Banking**: 45% of branches reopened

---

## 5. Natural Resources

### 5.1 Mineral Resources

```plotly
{
  "data": [
    {
      "theta": ["Gold", "Potash", "Salt", "Iron Ore", "Tantalum", "Feldspar", "Gypsum"],
      "r": [8.5, 9.2, 9.8, 6.1, 7.3, 5.4, 6.8],
      "type": "scatterpolar",
      "fill": "toself",
      "marker": {"color": "#FF6B35"},
      "line": {"color": "#073B4C"}
    }
  ],
  "layout": {
    "polar": {
      "radialaxis": {
        "visible": true,
        "range": [0, 10],
        "title": "Resource Abundance (0-10 scale)"
      }
    },
    "title": "Mineral Resource Distribution in Tigray"
  }
}
```

### 5.2 Water Resources

- **Major Rivers**: Tekeze, Gash, Weri, Agam
- **Dams**: Tekeze (2,300 MW), Welkayt (planned), Geba (micro-hydro)
- **Groundwater**: Significant aquifers in western lowlands
- **Challenges**: Seasonal variation, war damage to infrastructure

---

## 6. Environmental Challenges

!!! warning "Climate Change Impacts"

    - **Temperature rise**: +1.2°C since 1960
    - **Rainfall variability**: ±25% from historical average
    - **Drought frequency**: Every 3-4 years (previously 5-7 years)
    - **Soil degradation**: 35% of agricultural land affected

!!! danger "War-Related Environmental Damage"

    - **Deforestation**: Military camps, IDP fuel needs
    - **Agricultural disruption**: 40% of farmland abandoned 2020-2022
    - **Water system damage**: 60% of rural water points non-functional
    - **Waste management**: Medical and military waste concerns

---

## 7. Border Regions

### 7.1 International Borders

| Border | Length (km) | Key Crossings | Status (2025) | Issues |
|--------|-------------|---------------|---------------|---------|
| **Eritrea** | 450 | Zalambessa, Rama | Closed | Ongoing tensions |
| **Sudan** | 180 | Humera, Metema | Limited | Security concerns |

### 7.2 Regional Borders

- **Amhara Region**: 520 km border, disputed territories
- **Afar Region**: 280 km border, pastoral conflicts
- **Oromia Region**: 120 km border, stable

---

## Downloads & Resources

!!! note "Available Downloads"

    - [Complete administrative boundaries (GeoJSON)](../assets/data/tigray_admin_2025.geojson) - 2.3 MB
    - [City coordinates and populations (CSV)](../assets/data/tigray_cities_2025.csv) - 45 KB  
    - [Elevation model (GeoTIFF)](../assets/data/tigray_elevation.tif) - 127 MB
    - [Climate data 1990-2025 (NetCDF)](../assets/data/tigray_climate.nc) - 89 MB
    - [Transportation network (Shapefile)](../assets/data/tigray_roads.zip) - 15 MB

[:material-download: Visit Downloads Section](08-downloads.md){ .md-button .md-button--primary }

---

*Sources: Ethiopian Central Statistical Agency (2024), Ethiopian Mapping Agency (2023), Tigray Regional Government (2025), OCHA (2025)*
