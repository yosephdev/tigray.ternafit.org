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
        this.loadPlotlyLibrary();
        this.renderJsonCharts();
        this.setupResponsiveCharts();
        this.addChartInteractivity();
        this.initializeDataTables();
    },

    // Load Plotly.js library dynamically
    loadPlotlyLibrary: function() {
        if (typeof Plotly === 'undefined') {
            const script = document.createElement('script');
            script.src = 'https://cdn.plot.ly/plotly-latest.min.js';
            script.onload = () => {
                console.log('Plotly.js loaded successfully');
                this.renderJsonCharts();
            };
            document.head.appendChild(script);
        }
    },

    // Find and render JSON chart configurations in markdown
    renderJsonCharts: function() {
        // Wait for Plotly to be available
        if (typeof Plotly === 'undefined') {
            setTimeout(() => this.renderJsonCharts(), 100);
            return;
        }

        console.log('Scanning for chart JSON configurations...');
        
        // Find all code blocks that might contain chart configurations
        const codeBlocks = document.querySelectorAll('div.highlight pre, pre code, .language-text pre');
        console.log(`Found ${codeBlocks.length} potential code blocks`);
        
        codeBlocks.forEach((codeBlock, index) => {
            const text = codeBlock.textContent.trim();
            
            // Check if it's a JSON chart configuration
            if (this.isChartJson(text)) {
                console.log(`Found chart JSON in block ${index}`);
                try {
                    const config = JSON.parse(text);
                    this.createChartFromJson(config, codeBlock, index);
                } catch (error) {
                    console.warn('Failed to parse chart JSON:', error);
                }
            }
        });
        
        console.log('Chart scanning complete');
    },

    // Check if text contains a chart JSON configuration
    isChartJson: function(text) {
        try {
            const parsed = JSON.parse(text);
            // Check if it has either Plotly format (data + layout) or Vega-Lite format
            const isPlotly = parsed.data && (parsed.layout || Array.isArray(parsed.data));
            const isVega = parsed.data && parsed.mark;
            const hasChartData = parsed.data && (parsed.data.values || Array.isArray(parsed.data));
            
            return isPlotly || isVega || hasChartData;
        } catch {
            return false;
        }
    },

    // Create a chart from JSON configuration
    createChartFromJson: function(config, originalElement, index) {
        console.log(`Creating chart ${index}`, config);
        
        // Create container for the chart
        const chartContainer = document.createElement('div');
        chartContainer.id = `chart-${index}`;
        chartContainer.className = 'plotly-chart interactive-chart';
        chartContainer.style.cssText = 'width: 100%; height: 400px; margin: 20px 0; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);';

        // Apply default layout settings
        const layout = {
            ...this.defaultLayout,
            ...config.layout
        };

        // Apply color scheme if not specified
        if (config.data && Array.isArray(config.data)) {
            config.data.forEach(trace => {
                if (!trace.marker || !trace.marker.color) {
                    if (!trace.marker) trace.marker = {};
                    trace.marker.color = this.colors.primary;
                }
                if (trace.line && !trace.line.color) {
                    trace.line.color = this.colors.secondary;
                }
            });
        }

        // Find the right parent to replace - could be pre, div.highlight, or div.language-text
        let parentToReplace = originalElement.closest('div.highlight') || 
                              originalElement.closest('div.language-text') || 
                              originalElement.parentElement; // fallback to immediate parent
        
        if (!parentToReplace) {
            parentToReplace = originalElement.parentElement;
        }
        
        console.log('Replacing element:', parentToReplace);
        
        // Replace the code block with the chart
        parentToReplace.replaceWith(chartContainer);

        // Render the chart
        Plotly.newPlot(chartContainer.id, config.data, layout, {
            responsive: true,
            displayModeBar: true,
            modeBarButtonsToRemove: ['pan2d', 'lasso2d', 'select2d'],
            displaylogo: false
        }).then(() => {
            console.log(`Chart ${index} rendered successfully`);
        }).catch(error => {
            console.error(`Failed to render chart ${index}:`, error);
        });

        // Add download functionality
        this.addChartDownloadButton(chartContainer);

        // Track chart rendering
        if (typeof Analytics !== 'undefined') {
            Analytics.trackChartInteraction('plotly', 'rendered');
        }
    },

    // Add download button to chart
    addChartDownloadButton: function(chartContainer) {
        const downloadBtn = document.createElement('button');
        downloadBtn.className = 'chart-download-btn';
        downloadBtn.innerHTML = '📥 Download Chart';
        downloadBtn.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: ${this.colors.primary};
            color: white;
            border: none;
            padding: 8px 12px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
            z-index: 1000;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            transition: background-color 0.3s ease;
        `;
        
        downloadBtn.addEventListener('mouseover', () => {
            downloadBtn.style.backgroundColor = this.colors.dark;
        });
        
        downloadBtn.addEventListener('mouseout', () => {
            downloadBtn.style.backgroundColor = this.colors.primary;
        });
        
        chartContainer.style.position = 'relative';
        chartContainer.appendChild(downloadBtn);
        
        downloadBtn.addEventListener('click', () => {
            this.downloadChart(chartContainer);
        });
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
        const title = chartElement.querySelector('.js-plotly-plot .plotly')?.layout?.title?.text || 
                     chartElement.id || 'chart';
        const filename = title.toLowerCase().replace(/[^a-z0-9]/g, '_') + '.png';
        
        if (typeof Plotly !== 'undefined' && chartElement.classList.contains('plotly-chart')) {
            Plotly.downloadImage(chartElement, {
                format: 'png',
                width: 1200,
                height: 800,
                filename: filename
            }).then(() => {
                if (typeof Analytics !== 'undefined') {
                    Analytics.trackDownload(filename, 'chart');
                }
            });
        } else {
            // Fallback for other chart types
            if (typeof html2canvas !== 'undefined') {
                html2canvas(chartElement).then(canvas => {
                    const link = document.createElement('a');
                    link.download = filename;
                    link.href = canvas.toDataURL();
                    link.click();
                    
                    if (typeof Analytics !== 'undefined') {
                        Analytics.trackDownload(filename, 'chart');
                    }
                });
            } else {
                console.warn('Chart download not available - html2canvas library not loaded');
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
