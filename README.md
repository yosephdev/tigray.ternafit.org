# Tigray Knowledge Base 🏛️

<div align="center">

![Tigray Knowledge Base](docs/assets/images/logo-primary.svg)

**The World's Most Comprehensive Resource on Tigray, Ethiopia**

[![Website](https://img.shields.io/website?url=https%3A%2F%2Ftigray.ternafit.org)](https://tigray.ternafit.org)
[![Build Status](https://img.shields.io/netlify/deployments/tigray-ternafit?style=flat&logo=netlify)](https://app.netlify.com/sites/tigray-ternafit/deploys)
[![License](https://img.shields.io/github/license/yosephdev/tigray.ternafit.org?style=flat&color=blue)](LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/yosephdev/tigray.ternafit.org?style=flat&color=green)](https://github.com/yosephdev/tigray.ternafit.org/commits/main)

[🌐 **Visit Live Site**](https://tigray.ternafit.org) • [📚 **Documentation**](docs/) • [🤝 **Contribute**](CONTRIBUTING.md) • [🐛 **Report Issues**](https://github.com/yosephdev/tigray.ternafit.org/issues)

</div>

---

## 📖 About

The **Tigray Knowledge Base** is a comprehensive, multimedia-rich documentation platform covering every aspect of Tigray, Ethiopia. Built by [Ternafit NGO](https://ternafit.org), this platform serves as the definitive source for researchers, journalists, students, policymakers, and anyone seeking authoritative information about this historic region.

### 🎯 Mission

To preserve, document, and share the rich heritage, complex history, and current realities of Tigray through an accessible, evidence-based knowledge platform.

### 🌟 Key Features

- **📍 Interactive Geography**: Detailed maps, administrative boundaries, and geographic data
- **👥 Demographics**: Population statistics, ethnic composition, and social indicators  
- **💼 Economic Analysis**: Sector-wise economic data, trade statistics, and development metrics
- **🎓 Education & Health**: Comprehensive coverage of educational institutions and healthcare systems
- **🏛️ History & Culture**: Ancient civilizations, cultural heritage, and notable figures
- **⚔️ War Memorial**: Documentation of the 2020-2022 Tigray War with verified sources
- **📊 Live Data**: Interactive charts and downloadable datasets
- **🔍 Advanced Search**: Full-text search across all content
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices

---

## 🚀 Technology Stack

- **Framework**: [MkDocs Material](https://squidfunk.github.io/mkdocs-material/)
- **Languages**: Python, HTML, CSS, JavaScript
- **Data Visualization**: [Plotly.js](https://plotly.com/javascript/)
- **Maps**: [Leaflet](https://leafletjs.com/)
- **Hosting**: [Netlify](https://netlify.com)
- **Version Control**: Git & GitHub
- **Content**: Markdown with extended syntax

### 📦 Dependencies

```yaml
mkdocs>=1.6.0
mkdocs-material>=9.5.0
mkdocs-glightbox>=0.4.0
mkdocs-git-revision-date-localized-plugin>=1.2.0
mkdocs-table-reader-plugin>=2.0.0
mkdocs-awesome-pages-plugin>=2.9.0
mkdocs-rss-plugin>=1.12.0
```

---

## 🛠️ Local Development

### Prerequisites

- Python 3.8+
- Git

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/yosephdev/tigray.ternafit.org.git
   cd tigray.ternafit.org
   ```

2. **Create virtual environment**

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Run development server**

   ```bash
   mkdocs serve
   ```

5. **Open in browser**

   ```
   http://localhost:8000
   ```

### 🔨 Building for Production

```bash
mkdocs build
```

The site will be built in the `site/` directory.

---

## 📊 Content Structure

```
docs/
├── index.md                    # Homepage
├── about.md                    # About Ternafit
├── 01-geography.md             # Geographic overview
├── 02-demographics.md          # Population and social data
├── 03-economy.md               # Economic analysis
├── 04-edu-health.md            # Education and healthcare
├── 05-history-culture.md       # Historical and cultural content
├── 06-war-memorial.md          # War documentation and memorial
├── 07-current-affairs.md       # Current events and governance
├── 08-downloads.md             # Data downloads and resources
└── assets/
    ├── css/                    # Custom styling
    ├── js/                     # Interactive components
    ├── images/                 # Logos, icons, graphics
    ├── data/                   # Datasets (CSV, JSON, GeoJSON)
    └── maps/                   # Geographic data files
```

---

## 🤝 Contributing

We welcome contributions from researchers, developers, and community members! Here's how you can help:

### 🎯 Ways to Contribute

- **📝 Content**: Add research, update statistics, contribute historical information
- **💻 Code**: Improve functionality, fix bugs, enhance user experience
- **🎨 Design**: Improve visual design, user interface, accessibility
- **📊 Data**: Contribute datasets, verify existing data, add visualizations
- **🌍 Translation**: Help translate content to other languages
- **📖 Documentation**: Improve guides, add tutorials, enhance explanations

### 📝 Content Guidelines

1. **Accuracy**: All information must be factual and well-sourced
2. **Sources**: Include citations and references for all claims
3. **Neutrality**: Maintain objectivity and balanced perspectives
4. **Timeliness**: Ensure data and information are current
5. **Accessibility**: Write clearly for diverse audiences

### 💻 Development Guidelines

1. **Code Quality**: Follow Python and JavaScript best practices
2. **Documentation**: Comment code and update documentation
3. **Testing**: Test changes across different devices and browsers
4. **Performance**: Optimize for speed and accessibility
5. **Security**: Follow security best practices

### 🔄 Contribution Process

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Make** your changes
4. **Test** thoroughly
5. **Commit** your changes (`git commit -m 'Add amazing feature'`)
6. **Push** to the branch (`git push origin feature/amazing-feature`)
7. **Open** a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### 📋 Content Licensing

- **Text Content**: CC BY-SA 4.0 (Creative Commons Attribution-ShareAlike)
- **Data**: CC0 1.0 (Public Domain Dedication) where possible
- **Images**: Various licenses (see individual image credits)

---

## 🏢 About Ternafit NGO

[Ternafit](https://ternafit.org) is a non-governmental organization dedicated to preserving Tigrayan heritage, promoting education, and supporting humanitarian causes. Our mission is to bridge communities through knowledge, cultural preservation, and social development.

### 🎯 Our Work

- **Heritage Preservation**: Documenting and protecting cultural heritage
- **Education**: Supporting educational initiatives and research
- **Humanitarian Aid**: Providing assistance during crises
- **Advocacy**: Promoting human rights and social justice

---

## 📞 Contact & Support

- **Website**: [https://tigray.ternafit.org](https://tigray.ternafit.org)
- **Organization**: [https://ternafit.org](https://ternafit.org)
- **Issues**: [GitHub Issues](https://github.com/yosephdev/tigray.ternafit.org/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yosephdev/tigray.ternafit.org/discussions)

### 🆘 Getting Help

1. **📖 Documentation**: Check the [docs](docs/) directory
2. **🐛 Bug Reports**: Use [GitHub Issues](https://github.com/yosephdev/tigray.ternafit.org/issues)
3. **💬 Questions**: Start a [Discussion](https://github.com/yosephdev/tigray.ternafit.org/discussions)
4. **✉️ Email**: Contact us through [ternafit.org](https://ternafit.org)

---

## 🙏 Acknowledgments

Special thanks to:

- **Contributors**: All researchers, developers, and volunteers who have contributed
- **Sources**: Academic institutions, research organizations, and documentation efforts
- **Technology**: Open-source projects that make this platform possible
- **Community**: The global Tigrayan community for their support and feedback

---

## 🔄 Version History

- **v2.0.0** (August 2025): Complete redesign with professional branding
- **v1.5.0** (July 2025): Added interactive charts and data visualization
- **v1.0.0** (June 2025): Initial launch with core content sections

---

<div align="center">

**Made with ❤️ by [Ternafit NGO](https://ternafit.org)**

[⭐ Star this repo](https://github.com/yosephdev/tigray.ternafit.org) • [🍴 Fork it](https://github.com/yosephdev/tigray.ternafit.org/fork) • [📢 Share](https://twitter.com/intent/tweet?text=Check%20out%20the%20Tigray%20Knowledge%20Base&url=https://tigray.ternafit.org)

</div>
