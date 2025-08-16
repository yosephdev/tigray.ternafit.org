# Test Chart Page

This page tests chart rendering.

```plotly
{
  "data": [
    {
      "x": ["Test A", "Test B", "Test C"],
      "y": [10, 15, 12],
      "type": "bar",
      "marker": {"color": "#FF6B35"}
    }
  ],
  "layout": {
    "title": "Simple Test Chart",
    "xaxis": {"title": "Categories"},
    "yaxis": {"title": "Values"}
  }
}
```

<script>
document.addEventListener('DOMContentLoaded', function() {
    console.log('Test page loaded');
    
    // Simple chart rendering function
    function renderCharts() {
        console.log('Rendering charts...');
        const codeBlocks = document.querySelectorAll('pre code');
        console.log('Found', codeBlocks.length, 'code blocks');
        
        codeBlocks.forEach((block, index) => {
            const text = block.textContent.trim();
            console.log('Processing block:', text.substring(0, 50) + '...');
            
            try {
                const config = JSON.parse(text);
                if (config.data && config.layout) {
                    console.log('Valid chart config found');
                    
                    // Create chart container
                    const chartDiv = document.createElement('div');
                    chartDiv.id = 'chart-' + index;
                    chartDiv.style.width = '100%';
                    chartDiv.style.height = '400px';
                    chartDiv.style.border = '1px solid #ddd';
                    chartDiv.style.margin = '20px 0';
                    
                    // Replace code block with chart
                    const pre = block.closest('pre');
                    if (pre) {
                        pre.parentNode.replaceChild(chartDiv, pre);
                        
                        // Render with Plotly
                        if (typeof Plotly !== 'undefined') {
                            Plotly.newPlot(chartDiv.id, config.data, config.layout, {
                                responsive: true,
                                displayModeBar: false
                            });
                            console.log('Chart rendered successfully');
                        } else {
                            console.error('Plotly not available');
                        }
                    }
                }
            } catch (e) {
                console.log('Not a valid chart config:', e.message);
            }
        });
    }
    
    // Wait for Plotly to load
    if (typeof Plotly !== 'undefined') {
        renderCharts();
    } else {
        let checkCount = 0;
        const checkPlotly = setInterval(() => {
            checkCount++;
            if (typeof Plotly !== 'undefined') {
                console.log('Plotly loaded after', checkCount, 'checks');
                clearInterval(checkPlotly);
                renderCharts();
            } else if (checkCount > 50) {
                console.error('Plotly failed to load after 5 seconds');
                clearInterval(checkPlotly);
            }
        }, 100);
    }
});
</script>
