import React, { useState, useEffect } from 'react';
import './memorial.css';

const Memorial = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [memorialEntries, setMemorialEntries] = useState([]);

  // Sample memorial data - in a real implementation, this would come from an API
  const defaultMemorialData = [
    {
      id: 1,
      name: "Victims of Aksum Massacre",
      category: "civilian",
      date: "November 28-29, 2020",
      location: "Aksum, Central Tigray",
      description: "Hundreds of civilians killed during the conflict in the holy city of Aksum",
      estimatedVictims: "400+",
      verified: true,
      memorialType: "mass_casualty"
    },
    {
      id: 2,
      name: "Mai Kadra Victims",
      category: "civilian",
      date: "November 9, 2020",
      location: "Mai Kadra, Western Tigray",
      description: "Civilians killed in Mai Kadra during early days of the conflict",
      estimatedVictims: "200+",
      verified: true,
      memorialType: "mass_casualty"
    },
    {
      id: 3,
      name: "Healthcare Workers Memorial",
      category: "healthcare",
      date: "2020-2022",
      location: "Tigray Region",
      description: "Healthcare workers who lost their lives serving their communities during the conflict",
      estimatedVictims: "50+",
      verified: true,
      memorialType: "professional"
    },
    {
      id: 4,
      name: "Students and Teachers Memorial",
      category: "education",
      date: "2020-2022",
      location: "Tigray Region",
      description: "Students and educators who lost their lives during the conflict",
      estimatedVictims: "100+",
      verified: true,
      memorialType: "professional"
    },
    {
      id: 5,
      name: "Internally Displaced Persons Memorial",
      category: "displaced",
      date: "2020-2022",
      location: "Various Camps, Tigray",
      description: "IDPs who lost their lives in displacement camps due to inadequate conditions",
      estimatedVictims: "300+",
      verified: true,
      memorialType: "displacement"
    },
    {
      id: 6,
      name: "Religious Leaders Memorial",
      category: "religious",
      date: "2020-2022",
      location: "Tigray Region",
      description: "Religious leaders and clergy who lost their lives during the conflict",
      estimatedVictims: "30+",
      verified: true,
      memorialType: "religious"
    }
  ];

  useEffect(() => {
    // Simulate loading data
    const loadMemorialData = async () => {
      setIsLoading(true);
      try {
        // In a real implementation, fetch from API
        await new Promise(resolve => setTimeout(resolve, 1000));
        setMemorialEntries(defaultMemorialData);
      } catch (error) {
        console.error('Error loading memorial data:', error);
        setMemorialEntries(defaultMemorialData);
      } finally {
        setIsLoading(false);
      }
    };

    loadMemorialData();
  }, []);

  const categories = {
    all: "All Victims",
    civilian: "Civilians",
    healthcare: "Healthcare Workers",
    education: "Students & Teachers",
    displaced: "Displaced Persons",
    religious: "Religious Leaders"
  };

  const filteredEntries = memorialEntries.filter(entry => {
    const matchesCategory = selectedCategory === 'all' || entry.category === selectedCategory;
    const matchesSearch = entry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalVictims = memorialEntries.reduce((total, entry) => {
    const victims = parseInt(entry.estimatedVictims.replace(/[^\d]/g, '')) || 0;
    return total + victims;
  }, 0);

  if (isLoading) {
    return (
      <div className="memorial-loading">
        <div className="loading-spinner"></div>
        <p>Loading Memorial...</p>
      </div>
    );
  }

  return (
    <div className="memorial-container">
      {/* Header Section */}
      <header className="memorial-header">
        <div className="memorial-hero">
          <h1>Tigray Memorial</h1>
          <p className="memorial-subtitle">
            In Memory of Those We Lost During the Tigray Conflict (2020-2022)
          </p>
          <div className="memorial-stats">
            <div className="stat-item">
              <span className="stat-number">{totalVictims.toLocaleString()}+</span>
              <span className="stat-label">Estimated Victims</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{memorialEntries.length}</span>
              <span className="stat-label">Memorial Entries</span>
            </div>
          </div>
        </div>
      </header>

      {/* Memorial Statement */}
      <section className="memorial-statement">
        <div className="statement-content">
          <h2>Never Forgotten</h2>
          <p>
            This memorial honors the memory of all those who lost their lives during the conflict in Tigray 
            from 2020 to 2022. We remember civilians, healthcare workers, students, teachers, religious leaders, 
            and all who suffered. Their stories must be told, their lives must be remembered, and their 
            sacrifices must never be forgotten.
          </p>
          <p className="memorial-quote">
            "The dead cannot cry out for justice; it is a duty of the living to do so for them."
          </p>
        </div>
      </section>

      {/* Search and Filter Controls */}
      <section className="memorial-controls">
        <div className="controls-container">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search memorial entries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="category-filters">
            {Object.entries(categories).map(([key, label]) => (
              <button
                key={key}
                className={`filter-btn ${selectedCategory === key ? 'active' : ''}`}
                onClick={() => setSelectedCategory(key)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Memorial Entries */}
      <section className="memorial-entries">
        <div className="entries-container">
          {filteredEntries.length === 0 ? (
            <div className="no-results">
              <p>No memorial entries found matching your criteria.</p>
            </div>
          ) : (
            <div className="entries-grid">
              {filteredEntries.map(entry => (
                <MemorialCard key={entry.id} entry={entry} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="memorial-action">
        <div className="action-content">
          <h2>Help Us Remember</h2>
          <p>
            If you have information about victims or incidents that should be included in this memorial, 
            please reach out to us. Every life matters and every story deserves to be told.
          </p>
          <div className="action-buttons">
            <button className="btn-primary">Submit Information</button>
            <button className="btn-secondary">Download Memorial Data</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="memorial-footer">
        <p>
          This memorial is maintained with respect and dignity. Information is compiled from verified sources 
          and eyewitness accounts. Our commitment is to accuracy, remembrance, and justice.
        </p>
        <div className="footer-links">
          <a href="/about">About This Memorial</a>
          <a href="/sources">Sources & Methodology</a>
          <a href="/contact">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

const MemorialCard = ({ entry }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getCategoryIcon = (category) => {
    const icons = {
      civilian: "👥",
      healthcare: "⚕️",
      education: "📚",
      displaced: "🏕️",
      religious: "⛪"
    };
    return icons[category] || "🕊️";
  };

  const getCategoryColor = (category) => {
    const colors = {
      civilian: "#e74c3c",
      healthcare: "#3498db",
      education: "#f39c12",
      displaced: "#9b59b6",
      religious: "#2ecc71"
    };
    return colors[category] || "#95a5a6";
  };

  return (
    <div className="memorial-card">
      <div className="card-header">
        <div className="card-icon" style={{ backgroundColor: getCategoryColor(entry.category) }}>
          {getCategoryIcon(entry.category)}
        </div>
        <div className="card-title">
          <h3>{entry.name}</h3>
          {entry.verified && <span className="verified-badge">Verified</span>}
        </div>
      </div>
      
      <div className="card-content">
        <div className="card-meta">
          <span className="date">📅 {entry.date}</span>
          <span className="location">📍 {entry.location}</span>
          <span className="victims">👥 {entry.estimatedVictims} victims</span>
        </div>
        
        <p className={`card-description ${isExpanded ? 'expanded' : ''}`}>
          {entry.description}
        </p>
        
        {entry.description.length > 100 && (
          <button 
            className="expand-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        )}
      </div>
      
      <div className="card-footer">
        <div className="memorial-actions">
          <button className="action-btn light-candle">
            🕯️ Light a Candle
          </button>
          <button className="action-btn share">
            📤 Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Memorial;
