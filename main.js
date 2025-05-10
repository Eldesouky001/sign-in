document.querySelector('input[type="search"]').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      const searchTerm = this.value.trim().toLowerCase();
      
      if (!searchTerm) {
        alert('Please enter a search term');
        return;
      }

      const searchTargets = {
        'main hall': 'statues.html',
        'mummy exhibit': 'mummy.html'
      };

      for (const [key, value] of Object.entries(searchTargets)) {
        if (searchTerm.includes(key)) {
          window.location.href = value;
          return;
        }
      }

      alert('No results found. Try searching for "Main Hall" or "Mummy Exhibit"');
    }
  });