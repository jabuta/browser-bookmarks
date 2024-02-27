javascript:(function() {
    const options = document.querySelectorAll('[role="option"]');
    const suggestions = Array.from(options).map(option => {
      const ariaLabel = option.getAttribute('aria-label');
      return ariaLabel ? ariaLabel.trim() : null;
    });
    const filteredSuggestions = suggestions.filter(suggestion => suggestion !== null);
    const suggestionsText = filteredSuggestions.join('\n');
    navigator.clipboard.writeText(suggestionsText).then(() => {
      alert('Search suggestions copied to clipboard:\n' + suggestionsText);
    }).catch(err => {
      console.error('Failed to copy suggestions: ', err);
      alert('Failed to copy suggestions. See console for details.');
    });
  })();
  
