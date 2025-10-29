// Enhanced JavaScript for Tigray Knowledge Base
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initializeCharts();
    initializeCounters();
    initializeSearch();
    initializeTooltips();
    initializeProgressBars();
    initializeLiveUpdates();
    initializeFAB();
    initializeBreadcrumbs();
    initializeSocialShare();
    initializeNewsletter();
});

// Chart initialization and management
function initializeCharts() {
    // Responsive chart configuration
    const responsiveConfig = {
        responsive: true,
        displayModeBar: false,
        toImageButtonOptions: {
            format: 'png',
            filename: 'tigray_chart',
            height: 500,
            width: 800,
            scale: 1
        }
    };

    // Apply responsive config to all Plotly charts
    const charts = document.querySelectorAll('.chart-container [id^="plotly-div"]');
    charts.forEach(chart => {
        if (window.Plotly) {
            Plotly.relayout(chart.id, responsiveConfig);
        }
    });

    // Handle window resize for charts
    window.addEventListener('resize', debounce(() => {
        charts.forEach(chart => {
            if (window.Plotly) {
                Plotly.Plots.resize(chart.id);
            }
        });
    }, 250));
}

// Animated counters for statistics
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const target = parseInt(element.dataset.count.replace(/,/g, ''));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        element.textContent = formatNumber(Math.floor(current));
    }, 16);
}

// Enhanced search functionality
function initializeSearch() {
    const searchInput = document.getElementById('enhanced-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', debounce((e) => {
        const query = e.target.value.toLowerCase();
        performEnhancedSearch(query);
    }, 300));
}

function performEnhancedSearch(query) {
    if (query.length < 3) return;

    // Search through page content
    const searchableElements = document.querySelectorAll('h1, h2, h3, p, td, li');
    const results = [];

    searchableElements.forEach(element => {
        if (element.textContent.toLowerCase().includes(query)) {
            results.push({
                element: element,
                text: element.textContent,
                type: element.tagName.toLowerCase()
            });
        }
    });

    displaySearchResults(results, query);
}

function displaySearchResults(results, query) {
    let searchResults = document.getElementById('search-results');
    
    if (!searchResults) {
        searchResults = document.createElement('div');
        searchResults.id = 'search-results';
        searchResults.className = 'search-results-container';
        document.body.appendChild(searchResults);
    }

    if (results.length === 0) {
        searchResults.innerHTML = `<p>No results found for "${query}"</p>`;
        return;
    }

    const resultsHTML = results.slice(0, 10).map(result => {
        const highlightedText = highlightText(result.text, query);
        return `
            <div class="search-result-item" onclick="scrollToElement('${result.element.id}')">
                <span class="result-type">${result.type.toUpperCase()}</span>
                <p>${highlightedText}</p>
            </div>
        `;
    }).join('');

    searchResults.innerHTML = `
        <h4>Search Results (${results.length} found)</h4>
        ${resultsHTML}
    `;
}

// Tooltip system
function initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
        element.addEventListener('focus', showTooltip);
        element.addEventListener('blur', hideTooltip);
    });
}

function showTooltip(event) {
    const element = event.target;
    const tooltipText = element.dataset.tooltip;
    
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = tooltipText;
    tooltip.id = 'active-tooltip';
    
    document.body.appendChild(tooltip);
    
    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + 'px';
}

function hideTooltip() {
    const tooltip = document.getElementById('active-tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

// Progress bar animations
function initializeProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressFill = entry.target.querySelector('.progress-fill');
                const targetWidth = progressFill.dataset.width || '0%';
                
                setTimeout(() => {
                    progressFill.style.width = targetWidth;
                }, 200);
                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => observer.observe(bar));
}

// Live data updates
function initializeLiveUpdates() {
    // Update timestamps
    updateTimestamps();
    setInterval(updateTimestamps, 60000); // Update every minute

    // Check for data updates
    checkForDataUpdates();
    setInterval(checkForDataUpdates, 300000); // Check every 5 minutes
}

function updateTimestamps() {
    const timestamps = document.querySelectorAll('.live-timestamp');
    const now = new Date();
    
    timestamps.forEach(timestamp => {
        const lastUpdate = new Date(timestamp.dataset.lastUpdate);
        const timeDiff = now - lastUpdate;
        timestamp.textContent = formatTimeDifference(timeDiff);
    });
}

function checkForDataUpdates() {
    // Disabled API status check for static site
    // In a production environment with a backend, this would check for data updates
    console.log('Data update check disabled for static site deployment');
    return;
    
    /*
    fetch('/api/v1/status')
        .then(response => response.json())
        .then(data => {
            if (data.lastUpdate && data.lastUpdate !== localStorage.getItem('lastDataUpdate')) {
                showUpdateNotification();
                localStorage.setItem('lastDataUpdate', data.lastUpdate);
            }
        })
        .catch(error => console.warn('Could not check for updates:', error));
    */
}

function showUpdateNotification() {
    const notification = document.createElement('div');
    notification.className = 'update-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <strong>New Data Available</strong>
            <p>Fresh data has been added to the knowledge base.</p>
            <button onclick="location.reload()" class="md-button md-button--primary">Refresh Page</button>
            <button onclick="this.parentElement.parentElement.remove()" class="md-button">Dismiss</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    // Auto-dismiss after 10 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 10000);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function formatNumber(num) {
    return num.toLocaleString();
}

function formatTimeDifference(timeDiff) {
    const minutes = Math.floor(timeDiff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    return 'Just now';
}

function highlightText(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        element.focus();
    }
}

// Data visualization helpers
function createResponsiveChart(containerId, data, layout) {
    const container = document.getElementById(containerId);
    if (!container || !window.Plotly) return;

    const responsiveLayout = {
        ...layout,
        autosize: true,
        responsive: true,
        margin: { t: 50, r: 50, b: 50, l: 50 }
    };

    const config = {
        responsive: true,
        displayModeBar: false,
        toImageButtonOptions: {
            format: 'png',
            filename: `tigray_${containerId}`,
            height: 500,
            width: 800,
            scale: 1
        }
    };

    Plotly.newPlot(containerId, data, responsiveLayout, config);
}

// Export functionality
function exportData(format, filename, data) {
    let content, mimeType;

    switch (format) {
        case 'csv':
            content = convertToCSV(data);
            mimeType = 'text/csv';
            break;
        case 'json':
            content = JSON.stringify(data, null, 2);
            mimeType = 'application/json';
            break;
        default:
            console.error('Unsupported export format');
            return;
    }

    const blob = new Blob([content], { type: mimeType });
    const url = window.URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

function convertToCSV(data) {
    if (!Array.isArray(data) || data.length === 0) return '';
    
    const headers = Object.keys(data[0]);
    const csvHeaders = headers.join(',');
    
    const csvRows = data.map(row => 
        headers.map(header => {
            const value = row[header];
            return typeof value === 'string' && value.includes(',') ? `"${value}"` : value;
        }).join(',')
    );
    
    return [csvHeaders, ...csvRows].join('\n');
}

// Accessibility improvements
function initializeAccessibility() {
    // Add skip links
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Improve keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Close any open modals or dropdowns
            const openElements = document.querySelectorAll('.modal.open, .dropdown.open');
            openElements.forEach(el => el.classList.remove('open'));
        }
    });

    // Add aria-labels to interactive elements
    const interactiveElements = document.querySelectorAll('.stat-card, .feature-card, .download-card');
    interactiveElements.forEach(element => {
        if (!element.getAttribute('aria-label')) {
            const heading = element.querySelector('h3, h4');
            if (heading) {
                element.setAttribute('aria-label', heading.textContent);
            }
        }
    });
}

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', initializeAccessibility);

// ========================================
// UI RECOMMENDATIONS IMPLEMENTATION
// ========================================

// Floating Action Button (FAB) functionality
function initializeFAB() {
    // Create FAB if it doesn't exist
    if (!document.querySelector('.fab-container')) {
        const fabHTML = `
            <div class="fab-container">
                <button class="fab-button" id="fab-button" aria-label="Quick Actions Menu">
                    ✚
                </button>
                <div class="fab-menu" id="fab-menu">
                    <a href="/support/" class="fab-menu-item">
                        <span class="fab-menu-item-icon">💝</span>
                        <span>Support Us</span>
                    </a>
                    <a href="/contribute/" class="fab-menu-item">
                        <span class="fab-menu-item-icon">✍️</span>
                        <span>Contribute</span>
                    </a>
                    <a href="/sitemap/" class="fab-menu-item">
                        <span class="fab-menu-item-icon">🗺️</span>
                        <span>Site Map</span>
                    </a>
                    <a href="#newsletter-signup" class="fab-menu-item">
                        <span class="fab-menu-item-icon">📧</span>
                        <span>Newsletter</span>
                    </a>
                    <a href="#" onclick="window.scrollTo({top: 0, behavior: 'smooth'}); return false;" class="fab-menu-item">
                        <span class="fab-menu-item-icon">⬆️</span>
                        <span>Back to Top</span>
                    </a>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', fabHTML);
    }
    
    // Toggle FAB menu
    const fabButton = document.getElementById('fab-button');
    const fabMenu = document.getElementById('fab-menu');
    
    if (fabButton && fabMenu) {
        fabButton.addEventListener('click', () => {
            fabMenu.classList.toggle('active');
            fabButton.textContent = fabMenu.classList.contains('active') ? '✕' : '✚';
        });
        
        // Close FAB menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.fab-container')) {
                fabMenu.classList.remove('active');
                fabButton.textContent = '✚';
            }
        });
        
        // Close FAB menu when clicking a menu item
        fabMenu.querySelectorAll('.fab-menu-item').forEach(item => {
            item.addEventListener('click', () => {
                fabMenu.classList.remove('active');
                fabButton.textContent = '✚';
            });
        });
    }
    
    // Show/hide FAB based on scroll position
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const fabContainer = document.querySelector('.fab-container');
        if (fabContainer) {
            if (window.scrollY < 100) {
                fabContainer.style.opacity = '0.5';
            } else {
                fabContainer.style.opacity = '1';
            }
        }
    });
}

// Breadcrumb navigation
function initializeBreadcrumbs() {
    const article = document.querySelector('article');
    if (!article) return;
    
    // Get current page path
    const path = window.location.pathname;
    const pathParts = path.split('/').filter(part => part !== '');
    
    if (pathParts.length === 0 || pathParts[pathParts.length - 1] === 'index.html') {
        return; // Don't show breadcrumbs on homepage
    }
    
    // Build breadcrumb trail
    let breadcrumbHTML = '<nav class="breadcrumb" aria-label="Breadcrumb navigation">';
    breadcrumbHTML += '<a href="/">🏠 Home</a>';
    
    let currentPath = '';
    pathParts.forEach((part, index) => {
        if (part && part !== 'index.html') {
            currentPath += '/' + part;
            const isLast = index === pathParts.length - 1;
            const displayName = formatBreadcrumbName(part);
            
            breadcrumbHTML += '<span class="breadcrumb-separator">›</span>';
            
            if (isLast) {
                breadcrumbHTML += `<span>${displayName}</span>`;
            } else {
                breadcrumbHTML += `<a href="${currentPath}/">${displayName}</a>`;
            }
        }
    });
    
    breadcrumbHTML += '</nav>';
    
    // Insert breadcrumb before article content
    article.insertAdjacentHTML('afterbegin', breadcrumbHTML);
}

function formatBreadcrumbName(part) {
    // Remove file extensions and numbers
    let name = part.replace(/\.html|\.md/g, '').replace(/^\d+-/g, '');
    
    // Convert hyphens to spaces and capitalize
    name = name.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    return name;
}

// Social share functionality
function initializeSocialShare() {
    const contentPages = document.querySelector('article');
    if (!contentPages) return;
    
    // Don't add social share on homepage
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        return;
    }
    
    const pageTitle = document.querySelector('h1')?.textContent || 'Tigray Knowledge Base';
    const pageUrl = encodeURIComponent(window.location.href);
    const pageDescription = encodeURIComponent(document.querySelector('meta[name="description"]')?.content || 'The most comprehensive knowledge base on Tigray, Ethiopia');
    
    const socialShareHTML = `
        <div class="social-share">
            <span class="social-share-label">Share this page:</span>
            <div class="social-share-buttons">
                <a href="https://twitter.com/intent/tweet?url=${pageUrl}&text=${encodeURIComponent(pageTitle)}" 
                   class="social-share-button" target="_blank" rel="noopener" aria-label="Share on Twitter" title="Share on Twitter">
                    𝕏
                </a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${pageUrl}" 
                   class="social-share-button" target="_blank" rel="noopener" aria-label="Share on Facebook" title="Share on Facebook">
                    f
                </a>
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}" 
                   class="social-share-button" target="_blank" rel="noopener" aria-label="Share on LinkedIn" title="Share on LinkedIn">
                    in
                </a>
                <a href="mailto:?subject=${encodeURIComponent(pageTitle)}&body=${pageDescription}%0A%0A${pageUrl}" 
                   class="social-share-button" aria-label="Share via Email" title="Share via Email">
                    ✉
                </a>
                <a href="#" onclick="copyToClipboard('${window.location.href}'); return false;" 
                   class="social-share-button" aria-label="Copy link" title="Copy link">
                    🔗
                </a>
            </div>
        </div>
    `;
    
    // Add social share before footer or at end of article
    const footer = contentPages.querySelector('footer') || contentPages;
    footer.insertAdjacentHTML('beforebegin', socialShareHTML);
}

function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Link copied to clipboard!', 'success');
        }).catch(() => {
            fallbackCopyToClipboard(text);
        });
    } else {
        fallbackCopyToClipboard(text);
    }
}

function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        showNotification('Link copied to clipboard!', 'success');
    } catch (err) {
        showNotification('Could not copy link', 'error');
    }
    
    document.body.removeChild(textArea);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideUp 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideDown 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Newsletter signup functionality
function initializeNewsletter() {
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    
    newsletterForms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const emailInput = form.querySelector('.newsletter-input');
            const submitButton = form.querySelector('.newsletter-button');
            const email = emailInput.value.trim();
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Disable button during submission
            submitButton.disabled = true;
            submitButton.textContent = 'Subscribing...';
            
            try {
                // In production, this would send to your newsletter service
                // For now, we'll simulate the submission
                await simulateNewsletterSignup(email);
                
                showNotification('Successfully subscribed to newsletter!', 'success');
                emailInput.value = '';
                
                // Track newsletter signup
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'newsletter_signup', {
                        event_category: 'engagement',
                        event_label: 'newsletter'
                    });
                }
            } catch (error) {
                showNotification('Could not subscribe. Please try again later.', 'error');
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = 'Subscribe';
            }
        });
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

async function simulateNewsletterSignup(email) {
    // Simulate API call
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Newsletter signup:', email);
            // In production, this would be:
            // fetch('/api/newsletter/subscribe', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ email })
            // });
            resolve();
        }, 1000);
    });
}

// Add CSS animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from { transform: translateX(-50%) translateY(100px); opacity: 0; }
        to { transform: translateX(-50%) translateY(0); opacity: 1; }
    }
    
    @keyframes slideDown {
        from { transform: translateX(-50%) translateY(0); opacity: 1; }
        to { transform: translateX(-50%) translateY(100px); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Error handling and logging
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    
    // Optional: Send error to analytics or logging service
    if (typeof gtag !== 'undefined') {
        gtag('event', 'exception', {
            description: e.error.toString(),
            fatal: false
        });
    }
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.timing;
            const loadTime = perfData.loadEventEnd - perfData.navigationStart;
            
            console.log(`Page load time: ${loadTime}ms`);
            
            // Optional: Send to analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'timing_complete', {
                    name: 'load',
                    value: loadTime
                });
            }
        }, 0);
    });
}
