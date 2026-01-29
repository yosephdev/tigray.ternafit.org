# 🏛️ Tigray Knowledge Base

<div align="center">

![Tigray Knowledge Base](/assets/images/hero-image.svg)

**The World's Most Comprehensive Digital Archive of Tigray, Ethiopia**

[![Website](https://img.shields.io/website?url=https%3A%2F%2Ftigray.ternafit.org&style=for-the-badge&label=Live%20Site)](https://tigray.ternafit.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/yosephdev/tigray.ternafit.org?style=for-the-badge&color=green)](https://github.com/yosephdev/tigray.ternafit.org/commits/main)
[![MkDocs Material](https://img.shields.io/badge/MkDocs-Material-526CFE?style=for-the-badge&logo=markdown)](https://squidfunk.github.io/mkdocs-material/)

[🌐 **Visit Live Site**](https://tigray.ternafit.org) • [📚 **Documentation**](docs/) • [🤝 **Contribute**](CONTRIBUTING.md) • [🐛 **Report Issue**](https://github.com/yosephdev/tigray.ternafit.org/issues)

*A project by [Ternafit NGO](https://ternafit.org)*

</div>

## 📖 Overview

The **Tigray Knowledge Base** is an authoritative, multimedia-rich platform documenting every facet of Tigray, Ethiopia. Built and maintained by Ternafit NGO, this resource serves as the definitive digital repository for researchers, journalists, policymakers, students, and anyone seeking verified information about this historic region.

### 🎯 Mission Statement
> To preserve, document, and disseminate the rich cultural heritage, complex history, and contemporary realities of Tigray through an accessible, evidence-based, and ethically-maintained knowledge platform.

## ✨ Key Features

| Category | Features |
|----------|----------|
| **📊 Data & Analytics** | Interactive charts, downloadable datasets, real-time statistics |
| **🗺️ Geography** | Detailed interactive maps, administrative boundaries, GIS data |
| **📜 History & Culture** | Ancient civilizations to modern history, cultural heritage sites |
| **👥 Demographics** | Population statistics, ethnic composition, social indicators |
| **💼 Economy** | Sector analysis, trade statistics, development metrics |
| **🎓 Education & Health** | Institutional directories, system analyses, healthcare infrastructure |
| **⚖️ Governance** | Current affairs, political structure, legal frameworks |
| **🔍 Discovery** | Full-text search, advanced filtering, citation management |

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- Git
- Modern web browser

### Local Development Setup

```bash
# 1. Clone repository
git clone https://github.com/yosephdev/tigray.ternafit.org.git
cd tigray.ternafit.org

# 2. Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Launch development server
mkdocs serve

# 5. Open browser to:
# http://localhost:8000
```

### Production Build

```bash
mkdocs build  # Outputs to `site/` directory
```

## 🏗️ Architecture

### Technology Stack

- **Static Site Generator**: MkDocs with Material theme
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Data Visualization**: Plotly.js, Vega-Lite
- **Mapping**: Leaflet.js with OpenStreetMap
- **Hosting**: Cloudflare (CDN, SSL, CI/CD)
- **Version Control**: Git & GitHub

### Project Structure

```
tigray.ternafit.org/
├── docs/                    # Main content directory
│   ├── index.md            # Landing page
│   ├── geography/          # Geographic data & maps
│   ├── history-culture/    # Historical documentation
│   ├── demographics/       # Population statistics
│   ├── economy/            # Economic analysis
│   ├── education-health/   # Social infrastructure
│   ├── war-memorial/       # Conflict documentation
│   └── assets/             # Media & data files
│       ├── data/           # CSV, JSON, GeoJSON datasets
│       ├── images/         # Photos, diagrams, maps
│       ├── css/            # Custom styles
│       └── js/             # Interactive scripts
├── mkdocs.yml              # Configuration
├── requirements.txt        # Python dependencies
└── README.md               # This file
```

## 🤝 Contributing Guidelines

We welcome contributions from researchers, developers, designers, and subject matter experts.

### Contribution Areas

- **📝 Content Creation**: Research articles, data analysis, historical documentation
- **💻 Code Development**: Feature implementation, bug fixes, performance optimization
- **🎨 UI/UX Design**: Interface improvements, accessibility enhancements
- **📊 Data Curation**: Dataset collection, verification, visualization
- **🌐 Translation**: Content localization (Tigrinya, Amharic, Arabic, etc.)
- **🔍 Quality Assurance**: Fact-checking, proofreading, technical review

### Contribution Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/description`)
3. Implement changes following our style guide
4. Test thoroughly (content accuracy & technical functionality)
5. Commit with descriptive messages (`git commit -m 'Add: [feature] description'`)
6. Push to your fork (`git push origin feature/description`)
7. Submit a Pull Request with detailed description

### Quality Standards

- ✅ **Accuracy**: All claims must be verifiable with cited sources
- ✅ **Neutrality**: Maintain objective, balanced perspectives
- ✅ **Accessibility**: WCAG 2.1 AA compliance for all content
- ✅ **Performance**: Optimized loading times (<3s on 3G)
- ✅ **Security**: No sensitive personal information

## 📄 Licensing

### Code
- **Repository Code**: MIT License - Open source with attribution

### Content
- **Text & Articles**: CC BY-SA 4.0 - Share with attribution
- **Data & Statistics**: CC0 1.0 where possible
- **Media Assets**: Varied licenses - See individual asset metadata

## 🏢 About Ternafit NGO

Ternafit is a registered non-governmental organization committed to:

- **Cultural Preservation**: Documenting and protecting Tigrayan heritage
- **Educational Advancement**: Supporting academic research and public education
- **Humanitarian Response**: Providing aid during crises and recovery
- **Community Development**: Fostering sustainable social progress
- **Digital Advocacy**: Leveraging technology for social good

## 📞 Support & Contact

### Technical Support

- **Documentation**: [docs/](docs/) - Detailed guides and tutorials
- **Issue Tracker**: [GitHub Issues](https://github.com/yosephdev/tigray.ternafit.org/issues) - Bug reports
- **Discussions**: [GitHub Discussions](https://github.com/yosephdev/tigray.ternafit.org/discussions) - Q&A

### Organizational Contact

- **Website**: [ternafit.org](https://ternafit.org)
- **Project Site**: [tigray.ternafit.org](https://tigray.ternafit.org)
- **Email**: See contact form on organization website

## 🙏 Acknowledgments

### Contributors

Thanks to all researchers, developers, and volunteers who have contributed their expertise.

### Data Sources

- Academic institutions and research organizations
- Government and international agency publications
- Verified community-submitted information

### Technology Partners

- Open-source software communities
- Cloud infrastructure providers
- Educational institutions supporting research

## 📈 Version History

| Version | Date | Key Changes |
|---------|------|-------------|
| v2.1.0 | Jan 2026 | Fixed Vega-Lite rendering, restructured assets, added datasets |
| v2.0.0 | Aug 2025 | Complete redesign with professional branding |
| v1.5.0 | Jul 2025 | Added interactive data visualizations |
| v1.0.0 | Jun 2025 | Initial public release |

---

<div align="center">

Preserving Heritage • Empowering Knowledge • Building Community

[⭐ Star on GitHub](https://github.com/yosephdev/tigray.ternafit.org) • [📢 Share on Twitter](https://twitter.com/intent/tweet?text=Check%20out%20the%20Tigray%20Knowledge%20Base&url=https://tigray.ternafit.org) • [📧 Contact Us](https://ternafit.org)

© 2026 Ternafit NGO. All rights reserved where applicable.

</div>
