// Custom JavaScript for Tigray Knowledge Base

// Chart configurations and utilities
const TigrayCharts = {
    // Default color scheme
    colors: {
        primary: '#ff6b35',
        secondary: '#118ab2',
        accent: '#f7931e',
        success: '#06ffa5',
        warning: '#ffd23f',
        danger: '#dc3545',
        dark: '#073b4c',
        light: '#f8f9fa'
    },

    // Common chart layout settings
    defaultLayout: {
        font: {
            family: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            size: 12
        },
        margin: { t: 60, r: 40, b: 40, l: 60 },
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
        autosize: true,
        responsive: true
    },

    // Initialize charts when page loads
    init: function() {
        this.setupResponsiveCharts();
        this.addChartInteractivity();
        this.initializeDataTables();
    },

    // Make charts responsive
    setupResponsiveCharts: function() {
        // Plotly charts
        const plotlyCharts = document.querySelectorAll('.plotly-chart');
        plotlyCharts.forEach(chart => {
            window.addEventListener('resize', () => {
                Plotly.Plots.resize(chart);
            });
        });

        // Vega-Lite charts
        window.addEventListener('resize', () => {
            const vegaCharts = document.querySelectorAll('.vega-embed');
            vegaCharts.forEach(chart => {
                if (chart.vegaView) {
                    chart.vegaView.resize();
                }
            });
        });
    },

    // Add interactivity to charts
    addChartInteractivity: function() {
        // Add download buttons to charts
        const charts = document.querySelectorAll('.plotly-chart, .vega-chart');
        charts.forEach(chart => {
            const downloadBtn = document.createElement('button');
            downloadBtn.className = 'chart-download-btn';
            downloadBtn.innerHTML = '📥 Download';
            downloadBtn.style.cssText = `
                position: absolute;
                top: 10px;
                right: 10px;
                background: ${this.colors.primary};
                color: white;
                border: none;
                padding: 5px 10px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 12px;
                z-index: 1000;
            `;
            
            chart.style.position = 'relative';
            chart.appendChild(downloadBtn);
            
            downloadBtn.addEventListener('click', () => {
                this.downloadChart(chart);
            });
        });
    },

    // Download chart as image
    downloadChart: function(chartElement) {
        const title = chartElement.querySelector('.chart-title')?.textContent || 'chart';
        const filename = title.toLowerCase().replace(/\s+/g, '_') + '.png';
        
        if (chartElement.classList.contains('plotly-chart')) {
            Plotly.downloadImage(chartElement, {
                format: 'png',
                width: 1200,
                height: 800,
                filename: filename
            });
        } else {
            // For other chart types, use html2canvas if available
            if (typeof html2canvas !== 'undefined') {
                html2canvas(chartElement).then(canvas => {
                    const link = document.createElement('a');
                    link.download = filename;
                    link.href = canvas.toDataURL();
                    link.click();
                });
            }
        }
    },

    // Initialize sortable/filterable data tables
    initializeDataTables: function() {
        const tables = document.querySelectorAll('table');
        tables.forEach(table => {
            // Add sort functionality to table headers
            const headers = table.querySelectorAll('th');
            headers.forEach((header, index) => {
                header.style.cursor = 'pointer';
                header.addEventListener('click', () => {
                    this.sortTable(table, index);
                });
            });
        });
    },

    // Simple table sorting
    sortTable: function(table, columnIndex) {
        const tbody = table.querySelector('tbody');
        if (!tbody) return;

        const rows = Array.from(tbody.querySelectorAll('tr'));
        const isNumeric = rows.every(row => {
            const cell = row.cells[columnIndex];
            return cell && !isNaN(parseFloat(cell.textContent.replace(/[^\d.-]/g, '')));
        });

        rows.sort((a, b) => {
            const aVal = a.cells[columnIndex]?.textContent.trim() || '';
            const bVal = b.cells[columnIndex]?.textContent.trim() || '';
            
            if (isNumeric) {
                return parseFloat(aVal.replace(/[^\d.-]/g, '')) - parseFloat(bVal.replace(/[^\d.-]/g, ''));
            } else {
                return aVal.localeCompare(bVal);
            }
        });

        // Check if already sorted in ascending order
        const currentOrder = tbody.innerHTML;
        rows.forEach(row => tbody.appendChild(row));
        
        if (tbody.innerHTML === currentOrder) {
            rows.reverse().forEach(row => tbody.appendChild(row));
        }
    }
};

// Real-time data updates (if API available)
const DataUpdates = {
    endpoints: {
        population: '/api/population',
        economy: '/api/economy',
        news: '/api/news'
    },

    async updateData(endpoint, elementId) {
        try {
            const response = await fetch(endpoint);
            const data = await response.json();
            const element = document.getElementById(elementId);
            if (element && data) {
                this.renderUpdate(element, data);
            }
        } catch (error) {
            console.log('Data update unavailable:', error.message);
        }
    },

    renderUpdate(element, data) {
        // Update specific elements with new data
        if (data.lastUpdated) {
            const timestamp = element.querySelector('.last-updated');
            if (timestamp) {
                timestamp.textContent = `Last updated: ${new Date(data.lastUpdated).toLocaleDateString()}`;
            }
        }
    },

    startPolling() {
        // Poll for updates every 15 minutes
        setInterval(() => {
            Object.keys(this.endpoints).forEach(key => {
                this.updateData(this.endpoints[key], `${key}-data`);
            });
        }, 15 * 60 * 1000);
    }
};

// Navigation enhancements
const Navigation = {
    init: function() {
        this.addScrollToTop();
        this.enhanceTableOfContents();
    },

    addScrollToTop: function() {
        const scrollBtn = document.createElement('button');
        scrollBtn.innerHTML = '↑';
        scrollBtn.className = 'scroll-to-top';
        scrollBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: ${TigrayCharts.colors.primary};
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            cursor: pointer;
            font-size: 20px;
            display: none;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        `;
        
        document.body.appendChild(scrollBtn);
        
        window.addEventListener('scroll', () => {
            scrollBtn.style.display = window.pageYOffset > 300 ? 'block' : 'none';
        });
        
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    },

    enhanceTableOfContents: function() {
        // Add smooth scrolling to TOC links
        const tocLinks = document.querySelectorAll('.md-nav__link[href^="#"]');
        tocLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }
};

// Analytics and tracking
const Analytics = {
    trackDownload: function(filename, category = 'download') {
        // Track downloads with Google Analytics if available
        if (typeof gtag !== 'undefined') {
            gtag('event', 'file_download', {
                'event_category': category,
                'event_label': filename
            });
        }
    },

    trackChartInteraction: function(chartType, action) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'chart_interaction', {
                'event_category': 'visualization',
                'event_label': `${chartType}_${action}`
            });
        }
    }
};

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    TigrayCharts.init();
    Navigation.init();
    
    // Start data polling if in production
    if (location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
        DataUpdates.startPolling();
    }
    
    console.log('Tigray Knowledge Base initialized');
});

// Handle print styles
window.addEventListener('beforeprint', function() {
    // Ensure charts are visible when printing
    const charts = document.querySelectorAll('.plotly-chart, .vega-chart');
    charts.forEach(chart => {
        chart.style.breakInside = 'avoid';
    });
});

// Export for global access
window.TigrayKB = {
    charts: TigrayCharts,
    data: DataUpdates,
    nav: Navigation,
    analytics: Analytics
};
