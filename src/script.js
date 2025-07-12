// Default theme values (Firefox Dark Theme)
const defaultThemeValues = {
    frame: "#1c1b22",
    toolbar: "#2b2a33",
    text: "#fbfbfe",
    tab_background: "#2b2a33",
    tab_text: "#fbfbfe",
    toolbar_field: "#1c1b22",
    toolbar_field_text: "#fbfbfe",
    bookmark_text: "#fbfbfe",
    accent: "#0061e0",
    popup_text: "#fbfbfe",
    popup_background: "#2b2a33",
    sidebar: "#2b2a33"
};

// Built-in themes
const builtInThemes = [
    {
        name: "Dark Modern",
        colors: {
            frame: "#1c1b22",
            toolbar: "#2b2a33",
            text: "#fbfbfe",
            tab_background: "#242526",
            tab_text: "#fbfbfe",
            toolbar_field: "#1c1b22",
            toolbar_field_text: "#fbfbfe",
            bookmark_text: "#fbfbfe",
            accent: "#0061e0",
            popup_text: "#fbfbfe",
            popup_background: "#2b2a33",
            sidebar: "#2b2a33"
        }
    },
    {
        name: "Light Modern",
        colors: {
            frame: "#f9f9fb",
            toolbar: "#ffffff",
            text: "#15141a",
            tab_background: "#f0f0f4",
            tab_text: "#15141a",
            toolbar_field: "#f9f9fb",
            toolbar_field_text: "#15141a",
            bookmark_text: "#15141a",
            accent: "#0061e0",
            popup_text: "#15141a",
            popup_background: "#ffffff",
            sidebar: "#ffffff"
        }
    },
    {
        name: "Dark Blue",
        colors: {
            frame: "#1a1b2e",
            toolbar: "#242645",
            text: "#ffffff",
            tab_background: "#1e1f2e",
            tab_text: "#ffffff",
            toolbar_field: "#1a1b2e",
            toolbar_field_text: "#ffffff",
            bookmark_text: "#ffffff",
            accent: "#0061e0",
            popup_text: "#ffffff",
            popup_background: "#2b2a33",
            sidebar: "#2b2a33"
        }
    },
    {
        name: "Sunset",
        colors: {
            frame: "#2d1b2e",
            toolbar: "#4a2b3a",
            text: "#ffd6e0",
            tab_background: "#3a2b3a",
            tab_text: "#ffd6e0",
            toolbar_field: "#2d1b2e",
            toolbar_field_text: "#ffd6e0",
            bookmark_text: "#ffd6e0",
            accent: "#ff4081",
            popup_text: "#ffd6e0",
            popup_background: "#4a2b3a",
            sidebar: "#4a2b3a"
        }
    },
    {
        name: "Forest",
        colors: {
            frame: "#1b2e1e",
            toolbar: "#2b452e",
            text: "#d6ffd9",
            tab_background: "#2e3b2e",
            tab_text: "#d6ffd9",
            toolbar_field: "#1b2e1e",
            toolbar_field_text: "#d6ffd9",
            bookmark_text: "#d6ffd9",
            accent: "#4caf50",
            popup_text: "#d6ffd9",
            popup_background: "#2b452e",
            sidebar: "#2b452e"
        }
    }
];

// Theme management
let customThemes = JSON.parse(localStorage.getItem('fluxThemes')) || [];

// Function to update page styling based on theme colors
function updatePageStyle(colors) {
    document.documentElement.style.setProperty('--page-background', colors.frame);
    document.documentElement.style.setProperty('--page-text', colors.text);
    document.documentElement.style.setProperty('--section-background', colors.toolbar);
    document.documentElement.style.setProperty('--input-background', colors.toolbar_field);
    document.documentElement.style.setProperty('--input-text', colors.toolbar_field_text);
    document.documentElement.style.setProperty('--accent-color', colors.accent);
    document.documentElement.style.setProperty('--button-text', colors.text);
}

// Initialize theme from browser
async function initializeFromBrowser() {
    try {
        const theme = await browser.theme.getCurrent();
        if (theme && theme.colors) {
            const colors = {
                frame: theme.colors.frame || defaultThemeValues.frame,
                toolbar: theme.colors.toolbar || defaultThemeValues.toolbar,
                text: theme.colors.toolbar_text || defaultThemeValues.text,
                tab_background: theme.colors.tab_selected || defaultThemeValues.tab_background,
                tab_text: theme.colors.tab_text || defaultThemeValues.tab_text,
                toolbar_field: theme.colors.toolbar_field || defaultThemeValues.toolbar_field,
                toolbar_field_text: theme.colors.toolbar_field_text || defaultThemeValues.toolbar_field_text,
                bookmark_text: theme.colors.bookmark_text || defaultThemeValues.bookmark_text,
                accent: theme.colors.button_background_hover || defaultThemeValues.accent,
                popup_text: theme.colors.popup_text || defaultThemeValues.popup_text,
                popup_background: theme.colors.popup_background || defaultThemeValues.popup_background,
                sidebar: theme.colors.sidebar || defaultThemeValues.sidebar
            };
            setThemeColors(colors);
            updatePageStyle(colors);
        }
    } catch (error) {
        console.log('Using default theme values');
        setThemeColors(defaultThemeValues);
        updatePageStyle(defaultThemeValues);
    }
}

function getThemeColors() {
    return {
        frame: document.getElementById('frameColor').value || defaultThemeValues.frame,
        toolbar: document.getElementById('toolbarColor').value || defaultThemeValues.toolbar,
        text: document.getElementById('textColor').value || defaultThemeValues.text,
        tab_background: document.getElementById('tabBackgroundColor').value || defaultThemeValues.tab_background,
        tab_text: document.getElementById('tabTextColor').value || defaultThemeValues.tab_text,
        toolbar_field: document.getElementById('toolbarFieldColor').value || defaultThemeValues.toolbar_field,
        toolbar_field_text: document.getElementById('toolbarFieldTextColor').value || defaultThemeValues.toolbar_field_text,
        bookmark_text: document.getElementById('bookmarkTextColor').value || defaultThemeValues.bookmark_text,
        accent: document.getElementById('accentColor').value || defaultThemeValues.accent,
        popup_text: document.getElementById('popupTextColor').value || defaultThemeValues.popup_text,
        popup_background: document.getElementById('popupBackgroundColor').value || defaultThemeValues.popup_background,
        sidebar: document.getElementById('sidebarColor').value || defaultThemeValues.sidebar
    };
}

function setThemeColors(colors) {
    document.getElementById('frameColor').value = colors.frame;
    document.getElementById('toolbarColor').value = colors.toolbar;
    document.getElementById('textColor').value = colors.text;
    document.getElementById('tabBackgroundColor').value = colors.tab_background;
    document.getElementById('tabTextColor').value = colors.tab_text;
    document.getElementById('toolbarFieldColor').value = colors.toolbar_field;
    document.getElementById('toolbarFieldTextColor').value = colors.toolbar_field_text;
    document.getElementById('bookmarkTextColor').value = colors.bookmark_text;
    document.getElementById('accentColor').value = colors.accent;
    document.getElementById('popupTextColor').value = colors.popup_text;
    document.getElementById('popupBackgroundColor').value = colors.popup_background;
    document.getElementById('sidebarColor').value = colors.sidebar;
}

function saveTheme() {
    const name = document.getElementById('themeName').value.trim();
    if (!name) {
        alert('Please enter a theme name');
        return;
    }

    const theme = {
        name,
        colors: getThemeColors()
    };

    customThemes.push(theme);
    localStorage.setItem('fluxThemes', JSON.stringify(customThemes));
    renderThemes();
    document.getElementById('themeName').value = '';
}

function deleteTheme(index) {
    customThemes.splice(index, 1);
    localStorage.setItem('fluxThemes', JSON.stringify(customThemes));
    renderThemes();
}

function applyTheme(theme) {
    setThemeColors(theme.colors);
    updatePageStyle(theme.colors);

    browser.theme.update({
        colors: {
            frame: theme.colors.frame,
            toolbar: theme.colors.toolbar,
            toolbar_text: theme.colors.text,
            tab_background_text: theme.colors.tab_text,
            tab_selected: theme.colors.tab_background,
            tab_text: theme.colors.tab_text,
            toolbar_field: theme.colors.toolbar_field,
            toolbar_field_text: theme.colors.toolbar_field_text,
            bookmark_text: theme.colors.bookmark_text,
            button_background_hover: theme.colors.accent,
            button_background_active: theme.colors.accent,
            popup_text: theme.colors.popup_text,
            popup_background: theme.colors.popup_background,
            sidebar: theme.colors.sidebar
        }
    });
}

function exportThemes() {
    const data = {
        customThemes,
        exportDate: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'flux-themes.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function importThemes(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            if (Array.isArray(data.customThemes)) {
                customThemes = [...customThemes, ...data.customThemes];
                localStorage.setItem('fluxThemes', JSON.stringify(customThemes));
                renderThemes();
                alert('Themes imported successfully!');
            }
        } catch (error) {
            alert('Error importing themes. Please check the file format.');
        }
    };
    reader.readAsText(file);
}

function createThemeElement(theme, isBuiltIn, index) {
    const themeItem = document.createElement('div');
    themeItem.className = 'theme-item';
    
    const themeInfo = document.createElement('div');
    themeInfo.className = 'theme-info';
    
    const nameDiv = document.createElement('div');
    nameDiv.textContent = theme.name;
    if (isBuiltIn) {
        nameDiv.classList.add('built-in-label');
    }
    
    const previewDiv = document.createElement('div');
    previewDiv.className = 'theme-preview';
    
    ['frame', 'toolbar', 'text'].forEach(colorType => {
        const colorPreview = document.createElement('div');
        colorPreview.className = 'color-preview';
        colorPreview.style.backgroundColor = theme.colors[colorType];
        previewDiv.appendChild(colorPreview);
    });
    
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'theme-actions';
    
    const applyButton = document.createElement('button');
    applyButton.textContent = 'Apply';
    applyButton.addEventListener('click', () => applyTheme(theme));
    
    actionsDiv.appendChild(applyButton);
    
    if (!isBuiltIn) {
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTheme(index));
        actionsDiv.appendChild(deleteButton);
    }
    
    themeInfo.appendChild(nameDiv);
    themeInfo.appendChild(previewDiv);
    themeItem.appendChild(themeInfo);
    themeItem.appendChild(actionsDiv);
    
    return themeItem;
}

function renderThemes() {
    const themesList = document.getElementById('themesList');
    themesList.innerHTML = '';
    
    // Add built-in themes section
    const builtInSection = document.createElement('div');
    builtInSection.className = 'themes-section';
    const builtInTitle = document.createElement('h3');
    builtInTitle.textContent = 'Built-in Themes';
    builtInSection.appendChild(builtInTitle);
    
    builtInThemes.forEach((theme) => {
        builtInSection.appendChild(createThemeElement(theme, true));
    });
    
    // Add custom themes section
    const customSection = document.createElement('div');
    customSection.className = 'themes-section';
    const customTitle = document.createElement('h3');
    customTitle.textContent = 'Custom Themes';
    customSection.appendChild(customTitle);
    
    customThemes.forEach((theme, index) => {
        customSection.appendChild(createThemeElement(theme, false, index));
    });
    
    themesList.appendChild(builtInSection);
    themesList.appendChild(customSection);
}

// Event listeners
document.getElementById('saveTheme').addEventListener('click', saveTheme);
document.getElementById('exportThemes').addEventListener('click', exportThemes);
document.getElementById('importTheme').addEventListener('click', () => {
    document.getElementById('themeImport').click();
});
document.getElementById('themeImport').addEventListener('change', importThemes);

document.getElementById('apply').addEventListener('click', () => {
    const colors = getThemeColors();
    updatePageStyle(colors);
    browser.theme.update({
        colors: {
            frame: colors.frame,
            toolbar: colors.toolbar,
            toolbar_text: colors.text,
            tab_background_text: colors.tab_text,
            tab_selected: colors.tab_background,
            tab_text: colors.tab_text,
            toolbar_field: colors.toolbar_field,
            toolbar_field_text: colors.toolbar_field_text,
            bookmark_text: colors.bookmark_text,
            button_background_hover: colors.accent,
            button_background_active: colors.accent,
            popup_text: colors.popup_text,
            popup_background: colors.popup_background,
            sidebar: colors.sidebar
        }
    });
});

document.getElementById('reset').addEventListener('click', () => {
    browser.theme.reset();
    setThemeColors(defaultThemeValues);
    updatePageStyle(defaultThemeValues);
});

// Add live preview for color changes
document.querySelectorAll('input[type="color"]').forEach(input => {
    input.addEventListener('input', () => {
        const colors = getThemeColors();
        updatePageStyle(colors);
    });
});

// Initialize
initializeFromBrowser();
renderThemes();
