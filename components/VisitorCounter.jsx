'use client';

import { useState, useEffect } from 'react';

function getFlagEmoji(countryCode) {
  if (!countryCode || countryCode.length !== 2) return '🌐';
  try {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  } catch (e) {
    return '🌐';
  }
}

function getCountryName(code) {
  if (!code || code.length !== 2) return 'Worldwide';
  try {
    const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
    return regionNames.of(code.toUpperCase()) || code;
  } catch (e) {
    return code;
  }
}

export default function VisitorCounter() {
  const [location, setLocation] = useState({
    country: 'Pakistan',
    flag: '🇵🇰',
    city: '',
  });
  const [visitCount, setVisitCount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    // Fetch Visitor Geolocation (Country & Flag)
    async function fetchLocation() {
      // Primary API: api.country.is (Fast, CORS enabled)
      try {
        const res = await fetch('https://api.country.is', { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          if (data && data.country && isMounted) {
            const countryName = getCountryName(data.country);
            setLocation({
              country: countryName,
              flag: getFlagEmoji(data.country),
              city: '',
            });
            return;
          }
        }
      } catch (err) {
        console.warn('api.country.is failed, trying fallback...');
      }

      // Fallback API: ipapi.co
      try {
        const res = await fetch('https://ipapi.co/json/', { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          if (data && data.country_name && isMounted) {
            setLocation({
              country: data.country_name,
              flag: getFlagEmoji(data.country_code),
              city: data.city || '',
            });
            return;
          }
        }
      } catch (err) {
        console.warn('Primary IP API failed, trying fallback...');
      }

      // Fallback API: ip-api.com
      try {
        const res = await fetch('https://ip-api.com/json/?fields=status,country,countryCode,city', { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          if (data && data.status === 'success' && isMounted) {
            setLocation({
              country: data.country,
              flag: getFlagEmoji(data.countryCode),
              city: data.city || '',
            });
            return;
          }
        }
      } catch (err) {
        console.warn('Fallback IP API failed');
      }

      if (isMounted) {
        setLocation({
          country: 'Pakistan',
          flag: '🇵🇰',
          city: '',
        });
      }
    }

    // Fetch & Increment Visitor Counter
    async function trackVisit() {
      const storageKey = 'portfolio_visit_counted_v2';
      const lastVisit = typeof window !== 'undefined' ? localStorage.getItem(storageKey) : null;
      const isNewVisit = !lastVisit || (Date.now() - parseInt(lastVisit, 10) > 30 * 60 * 1000); // 30 min session

      try {
        const action = isNewVisit ? 'up' : 'get';
        if (isNewVisit && typeof window !== 'undefined') {
          localStorage.setItem(storageKey, Date.now().toString());
        }

        const res = await fetch(`https://api.counterapi.dev/v1/kamran_portfolio_v2/visits/${action}`, {
          cache: 'no-store',
        });

        if (res.ok) {
          const data = await res.json();
          if (data && typeof data.count === 'number' && isMounted) {
            setVisitCount(data.count);
            setLoading(false);
            return;
          }
        }
      } catch (err) {
        console.warn('Counter API failed, using local count');
      }

      // Fallback local counter simulation
      if (isMounted && typeof window !== 'undefined') {
        let localCount = parseInt(localStorage.getItem('portfolio_local_visit_count_v2') || '1', 10);
        if (isNewVisit) {
          localCount += 1;
          localStorage.setItem('portfolio_local_visit_count_v2', localCount.toString());
        }
        setVisitCount(localCount);
        setLoading(false);
      }
    }

    Promise.all([fetchLocation(), trackVisit()]).finally(() => {
      if (isMounted) setLoading(false);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="visitor-counter-badge" title="Live Visitor & Location Statistics">
      <div className="visitor-status">
        <span className="visitor-pulse"></span>
        <span className="visitor-status-text">Visiting from</span>
      </div>

      <div className="visitor-location">
        <span className="visitor-flag" role="img" aria-label={location.country}>
          {location.flag}
        </span>
        <span className="visitor-country">
          {location.city ? `${location.city}, ` : ''}{location.country}
        </span>
      </div>

      <div className="visitor-divider"></div>

      <div className="visitor-count">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="visitor-icon">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        <span>
          {loading ? (
            <span className="visitor-loading-dots">...</span>
          ) : (
            visitCount !== null ? visitCount.toLocaleString() : '1'
          )}{' '}
          Visits
        </span>
      </div>
    </div>
  );
}
