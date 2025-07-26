// Bootstrap dropdown initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all Bootstrap dropdowns
    const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
    const dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
        return new bootstrap.Dropdown(dropdownToggleEl);
    });

    // Manual dropdown handling for better control
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdownMenu = this.nextElementSibling;
            const isOpen = dropdownMenu.classList.contains('show');
            
            // Close all other dropdowns
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                menu.classList.remove('show');
            });
            
            // Toggle current dropdown
            if (!isOpen) {
                dropdownMenu.classList.add('show');
                this.setAttribute('aria-expanded', 'true');
            } else {
                dropdownMenu.classList.remove('show');
                this.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                menu.classList.remove('show');
            });
            document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
                toggle.setAttribute('aria-expanded', 'false');
            });
        }
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchSuggestions = document.getElementById('searchSuggestions');
    
    if (searchInput) {
        let searchTimeout;
        
        searchInput.addEventListener('input', function() {
            const query = this.value.trim();
            
            clearTimeout(searchTimeout);
            
            if (query.length > 2) {
                searchTimeout = setTimeout(() => {
                    fetchSuggestions(query);
                }, 300);
            } else {
                hideSuggestions();
            }
        });
        
        // Hide suggestions when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.search-container')) {
                hideSuggestions();
            }
        });
    }
    
    function fetchSuggestions(query) {
        // You can replace this with actual API call to your backend
        fetch(`/api/search/suggestions?q=${encodeURIComponent(query)}`)
            .then(response => response.json())
            .then(data => {
                displaySuggestions(data);
            })
            .catch(error => {
                console.log('Search suggestions not available');
                // Fallback: show some common suggestions
                const fallbackSuggestions = [
                    { type: 'location', value: query, label: `Search for "${query}"` },
                    { type: 'category', value: 'beach', label: 'Beach Properties' },
                    { type: 'category', value: 'mountains', label: 'Mountain Retreats' }
                ];
                displaySuggestions(fallbackSuggestions);
            });
    }
    
    function displaySuggestions(suggestions) {
        const suggestionsContent = document.querySelector('.suggestions-content');
        
        if (suggestions.length === 0) {
            hideSuggestions();
            return;
        }
        
        suggestionsContent.innerHTML = suggestions.map(suggestion => `
            <div class="suggestion-item" onclick="selectSuggestion('${suggestion.value}', '${suggestion.type}')">
                <div class="d-flex align-items-center">
                    <i class="fa-solid fa-${getSuggestionIcon(suggestion.type)} me-2 text-muted"></i>
                    <span>${suggestion.label}</span>
                </div>
            </div>
        `).join('');
        
        searchSuggestions.classList.remove('d-none');
    }
    
    function hideSuggestions() {
        if (searchSuggestions) {
            searchSuggestions.classList.add('d-none');
        }
    }
    
    function getSuggestionIcon(type) {
        switch(type) {
            case 'location': return 'location-dot';
            case 'country': return 'flag';
            case 'category': return 'tag';
            case 'title': return 'home';
            default: return 'magnifying-glass';
        }
    }
    
    window.selectSuggestion = function(value, type) {
        searchInput.value = value;
        hideSuggestions();
        
        // Submit the search form
        searchInput.closest('form').submit();
    }
});