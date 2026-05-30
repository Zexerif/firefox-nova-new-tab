document.addEventListener('DOMContentLoaded', () => {
    // ---- DOM Elements ----
    const clockElement = document.getElementById('clock');
    const greetingElement = document.getElementById('greeting');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const shortcutsContainer = document.getElementById('shortcuts');

    // Cat & Mouse Elements
    const catElement = document.getElementById('animal');
    const mouseElement = document.getElementById('mouse');

    // Settings DOM Elements
    const settingsBtn = document.getElementById('settings-btn');
    const closeSettingsBtn = document.getElementById('close-settings');
    const settingsPanel = document.getElementById('settings-panel');
    const settingsOverlay = document.getElementById('settings-overlay');
    const nameInput = document.getElementById('name-input');
    const toggleGlow = document.getElementById('toggle-glow');
    const toggleWeather = document.getElementById('toggle-weather');
    const animalSelect = document.getElementById('animal-select');
    const langSelect = document.getElementById('lang-select');
    const weatherCityInput = document.getElementById('weather-city-input');
    const weatherUnitSelect = document.getElementById('weather-unit-select');
    const addShortcutBtn = document.getElementById('add-shortcut-btn');
    const newShortcutName = document.getElementById('new-shortcut-name');
    const newShortcutUrl = document.getElementById('new-shortcut-url');

    // Components to Toggle
    const ambientBg = document.querySelector('.background-ambient');
    const weatherWidget = document.querySelector('.weather-widget');

    // ---- Default Shortcuts ----
    const defaultShortcuts = [
        { name: 'YouTube', url: 'https://youtube.com', icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>' },
        { name: 'GitHub', url: 'https://github.com', icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>' },
        { name: 'Reddit', url: 'https://reddit.com', icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="8" x2="12" y2="16"></line></svg>' },
        { name: 'Figma', url: 'https://figma.com', icon: '<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>' }
    ];

    // ---- Localization (i18n) ----
    const translations = {
        en: {
            settings_title: "Settings",
            label_name: "Your Name",
            label_glow: "Ambient Glow Background",
            label_weather: "Show Weather",
            label_animal: "Active Companion",
            opt_animal_none: "None",
            opt_animal_cat: "Black Cat",
            opt_animal_fox: "Fox",
            opt_animal_dog: "Dog",
            label_lang: "Language",
            label_city: "Weather City",
            label_temp: "Temperature",
            label_unit: "Temperature Unit",
            label_icon: "Weather Condition",
            label_shortcuts: "Quick Shortcuts",
            add_shortcut_title: "Add New Shortcut",
            btn_add: "Add",
            placeholder_name_input: "e.g. Your Name",
            placeholder_city_input: "e.g. New York",
            placeholder_sc_name: "Name",
            placeholder_sc_url: "URL (https://...)",
            search_placeholder: "Search the web",
            greeting_morning: "Good morning",
            greeting_afternoon: "Good afternoon",
            greeting_evening: "Good evening"
        },
        es: {
            settings_title: "Ajustes",
            label_name: "Tu Nombre",
            label_glow: "Fondo de Brillo Ambiental",
            label_weather: "Mostrar Clima",
            label_animal: "Compañero Activo",
            opt_animal_none: "Ninguno",
            opt_animal_cat: "Gato Negro",
            opt_animal_fox: "Zorro",
            opt_animal_dog: "Perro",
            label_lang: "Idioma",
            label_city: "Ciudad",
            label_temp: "Temperatura",
            label_unit: "Unidad de Temperatura",
            label_icon: "Condición del Clima",
            label_shortcuts: "Accesos Rápidos",
            add_shortcut_title: "Añadir Nuevo Acceso",
            btn_add: "Añadir",
            placeholder_name_input: "ej. Tu Nombre",
            placeholder_city_input: "ej. Madrid",
            placeholder_sc_name: "Nombre",
            placeholder_sc_url: "URL (https://...)",
            search_placeholder: "Buscar en la web",
            greeting_morning: "Buenos días",
            greeting_afternoon: "Buenas tardes",
            greeting_evening: "Buenas noches"
        },
        fr: {
            settings_title: "Paramètres",
            label_name: "Votre Nom",
            label_glow: "Arrière-Plan Brillant",
            label_weather: "Afficher la Météo",
            label_animal: "Compagnon Actif",
            opt_animal_none: "Aucun",
            opt_animal_cat: "Chat Noir",
            opt_animal_fox: "Renard",
            opt_animal_dog: "Chien",
            label_lang: "Langue",
            label_city: "Ville Météo",
            label_temp: "Température",
            label_unit: "Unité de Température",
            label_icon: "Conditions Météo",
            label_shortcuts: "Raccourcis Rapides",
            add_shortcut_title: "Ajouter un Raccourci",
            btn_add: "Ajouter",
            placeholder_name_input: "ex. Votre Nom",
            placeholder_city_input: "ex. Paris",
            placeholder_sc_name: "Nom",
            placeholder_sc_url: "URL (https://...)",
            search_placeholder: "Rechercher sur le web",
            greeting_morning: "Bon matin",
            greeting_afternoon: "Bon après-midi",
            greeting_evening: "Bonsoir"
        },
        de: {
            settings_title: "Einstellungen",
            label_name: "Ihr Name",
            label_glow: "Umgebungsleuchten",
            label_weather: "Wetter Anzeigen",
            label_animal: "Aktiver Begleiter",
            opt_animal_none: "Keiner",
            opt_animal_cat: "Schwarze Katze",
            opt_animal_fox: "Fuchs",
            opt_animal_dog: "Hund",
            label_lang: "Sprache",
            label_city: "Wetter-Stadt",
            label_temp: "Temperatur",
            label_unit: "Temperatureinheit",
            label_icon: "Wetterlage",
            label_shortcuts: "Schnellzugriffe",
            add_shortcut_title: "Neuen Shortcut hinzufügen",
            btn_add: "Hinzufügen",
            placeholder_name_input: "z.B. Ihr Name",
            placeholder_city_input: "z.B. Berlin",
            placeholder_sc_name: "Name",
            placeholder_sc_url: "URL (https://...)",
            search_placeholder: "Im Web suchen",
            greeting_morning: "Guten Morgen",
            greeting_afternoon: "Guten Tag",
            greeting_evening: "Guten Abend"
        }
    };

    function applyTranslations(lang) {
        const dict = translations[lang] || translations.en;
        
        // Translate inner text elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.textContent = dict[key];
            }
        });

        // Translate placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key]) {
                el.placeholder = dict[key];
            }
        });
    }

    // ---- State Management ----
    let settings = {
        name: '',
        glowEnabled: true,
        weatherEnabled: true,
        animal: 'fox',
        lang: 'en',
        weatherCity: 'New York',
        weatherUnit: 'C',
        shortcuts: []
    };

    function loadSettings() {
        if (typeof browser !== 'undefined' && browser.storage) {
            browser.storage.local.get(['novaSettings']).then(res => {
                if (res.novaSettings) {
                    settings = { ...settings, ...res.novaSettings };
                }
                sanitizeShortcuts();
                applySettings();
                initCompanionAI();
            });
        } else {
            const saved = localStorage.getItem('novaSettings');
            if (saved) {
                settings = { ...settings, ...JSON.parse(saved) };
            }
            sanitizeShortcuts();
            applySettings();
            initCompanionAI();
        }
    }

    function sanitizeShortcuts() {
        if (!settings.shortcuts || settings.shortcuts.length === 0) {
            settings.shortcuts = [...defaultShortcuts];
        }
    }

    function saveSettings() {
        if (typeof browser !== 'undefined' && browser.storage) {
            browser.storage.local.set({ novaSettings: settings });
        } else {
            localStorage.setItem('novaSettings', JSON.stringify(settings));
        }
    }

    function applySettings() {
        // Apply Name to Inputs
        nameInput.value = settings.name;

        // Apply Toggles & Dropdowns to UI inputs
        toggleGlow.checked = settings.glowEnabled;
        toggleWeather.checked = settings.weatherEnabled;
        animalSelect.value = settings.animal;
        langSelect.value = settings.lang;
        weatherCityInput.value = settings.weatherCity || '';
        weatherUnitSelect.value = settings.weatherUnit || 'C';

        // Apply visual states
        ambientBg.style.display = settings.glowEnabled ? 'block' : 'none';
        weatherWidget.style.display = settings.weatherEnabled ? 'flex' : 'none';

        // Apply dynamic parts
        applyTranslations(settings.lang);
        renderShortcuts();
        renderSettingsShortcutsList();
        fetchWeather();
        updateTime(); // Force refresh greeting immediately
    }

    // ---- Settings Panel Interactions ----
    function openSettings() {
        settingsPanel.classList.add('active');
        settingsOverlay.classList.add('active');
        renderSettingsShortcutsList();
    }

    function closeSettings() {
        settingsPanel.classList.remove('active');
        settingsOverlay.classList.remove('active');
    }

    settingsBtn.addEventListener('click', openSettings);
    closeSettingsBtn.addEventListener('click', closeSettings);
    settingsOverlay.addEventListener('click', closeSettings);

    // Settings Input Listeners
    nameInput.addEventListener('input', (e) => {
        settings.name = e.target.value.trim();
        saveSettings();
        updateTime();
    });

    toggleGlow.addEventListener('change', (e) => {
        settings.glowEnabled = e.target.checked;
        saveSettings();
        applySettings();
    });

    toggleWeather.addEventListener('change', (e) => {
        settings.weatherEnabled = e.target.checked;
        saveSettings();
        applySettings();
    });

    animalSelect.addEventListener('change', (e) => {
        settings.animal = e.target.value;
        saveSettings();
        initCompanionAI();
    });

    langSelect.addEventListener('change', (e) => {
        settings.lang = e.target.value;
        saveSettings();
        applyTranslations(settings.lang);
        updateTime();
    });

    let weatherTimeout = null;
    weatherCityInput.addEventListener('input', (e) => {
        settings.weatherCity = e.target.value.trim();
        saveSettings();
        clearTimeout(weatherTimeout);
        weatherTimeout = setTimeout(() => {
            fetchWeather();
        }, 1000);
    });

    weatherUnitSelect.addEventListener('change', (e) => {
        settings.weatherUnit = e.target.value;
        saveSettings();
        fetchWeather();
    });

    // ---- Weather Integration ----
    function fetchWeather() {
        if (!settings.weatherEnabled) return;

        const city = settings.weatherCity || 'New York';
        const unit = settings.weatherUnit || 'C';
        
        const tempEl = document.querySelector('.weather-temp');
        if (tempEl) {
            tempEl.textContent = '...';
        }

        const geocodeUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;
        
        fetch(geocodeUrl)
            .then(res => {
                if (!res.ok) throw new Error('Geocoding service error');
                return res.json();
            })
            .then(data => {
                if (data.results && data.results.length > 0) {
                    const result = data.results[0];
                    const lat = result.latitude;
                    const lon = result.longitude;
                    const displayName = result.name;

                    const forecastUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code`;
                    return fetch(forecastUrl)
                        .then(res => {
                            if (!res.ok) throw new Error('Forecast service error');
                            return res.json();
                        })
                        .then(weatherData => {
                            return { weatherData, displayName };
                        });
                } else {
                    throw new Error('City not found');
                }
            })
            .then(({ weatherData, displayName }) => {
                if (weatherData && weatherData.current) {
                    let temp = weatherData.current.temperature_2m;
                    const code = weatherData.current.weather_code;

                    if (unit === 'F') {
                        temp = (temp * 9/5) + 32;
                    }

                    let emoji = '🌤️';
                    if (code === 0) emoji = '☀️';
                    else if (code >= 1 && code <= 3) emoji = '🌤️';
                    else if (code === 45 || code === 48) emoji = '🌫️';
                    else if ((code >= 51 && code <= 55) || (code >= 61 && code <= 65)) emoji = '🌧️';
                    else if (code >= 71 && code <= 77) emoji = '❄️';
                    else if (code >= 80 && code <= 82) emoji = '🌦️';
                    else if (code >= 95 && code <= 99) emoji = '⛈️';

                    const iconEl = document.querySelector('.weather-icon');
                    if (iconEl) iconEl.textContent = emoji;
                    
                    if (tempEl) {
                        tempEl.textContent = `${displayName}: ${Math.round(temp)}°${unit}`;
                    }
                }
            })
            .catch(err => {
                console.error('Weather error:', err);
                if (tempEl) {
                    tempEl.textContent = 'N/A';
                }
            });
    }

    // ---- Shortcuts Rendering ----
    function getShortcutIcon(name) {
        const char = name.trim().charAt(0).toUpperCase() || 'L';
        return `<span class="shortcut-letter-icon">${char}</span>`;
    }

    function renderShortcuts() {
        shortcutsContainer.innerHTML = '';
        settings.shortcuts.forEach((sc, index) => {
            const a = document.createElement('a');
            a.href = sc.url;
            a.className = 'shortcut-card';
            a.innerHTML = `
                <div class="shortcut-icon">${sc.icon || getShortcutIcon(sc.name)}</div>
                <span class="shortcut-label">${sc.name}</span>
            `;
            shortcutsContainer.appendChild(a);
        });
    }

    function renderSettingsShortcutsList() {
        const listContainer = document.getElementById('settings-shortcuts-list');
        if (!listContainer) return;
        
        listContainer.innerHTML = '';
        settings.shortcuts.forEach((sc, index) => {
            const item = document.createElement('div');
            item.className = 'settings-shortcut-item';
            item.innerHTML = `
                <div class="settings-shortcut-info">
                    <span class="settings-shortcut-name">${sc.name}</span>
                    <span class="settings-shortcut-url">${sc.url}</span>
                </div>
                <button type="button" class="delete-shortcut-btn" data-index="${index}" aria-label="Delete shortcut">&times;</button>
            `;
            
            item.querySelector('.delete-shortcut-btn').addEventListener('click', (e) => {
                const idx = parseInt(e.target.getAttribute('data-index'), 10);
                settings.shortcuts.splice(idx, 1);
                saveSettings();
                renderShortcuts();
                renderSettingsShortcutsList();
            });

            listContainer.appendChild(item);
        });
    }

    addShortcutBtn.addEventListener('click', () => {
        const name = newShortcutName.value.trim();
        let url = newShortcutUrl.value.trim();
        
        if (name && url) {
            if (!/^https?:\/\//i.test(url)) {
                url = 'https://' + url;
            }

            settings.shortcuts.push({
                name: name,
                url: url,
                icon: ''
            });
            
            saveSettings();
            renderShortcuts();
            renderSettingsShortcutsList();
            
            newShortcutName.value = '';
            newShortcutUrl.value = '';
        }
    });

    // ---- Features ----
    function updateTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');

        clockElement.textContent = `${hours}:${minutes}`;

        let timeOfDay = 'evening';
        if (hours >= 5 && hours < 12) timeOfDay = 'morning';
        else if (hours >= 12 && hours < 18) timeOfDay = 'afternoon';

        const dict = translations[settings.lang] || translations.en;
        let greetingStr = dict[`greeting_${timeOfDay}`] || `Good ${timeOfDay}`;
        
        if (settings.name) {
            greetingStr += `, ${settings.name}`;
        }
        greetingElement.textContent = greetingStr;
    }

    setInterval(updateTime, 1000);

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
        }
    });

    // ---- Companion AI System ----
    class CompanionAI {
        constructor(catEl, mouseEl) {
            this.cat = catEl;
            this.mouse = mouseEl;
            this.x = window.innerWidth / 2;
            this.y = 0;
            this.direction = 1; // 1 = right, -1 = left
            this.speed = 1.0;

            this.mouseX = 0;
            this.mouseActive = false;

            // Track cursor coordinates for eye dilation
            this.cursorX = undefined;
            this.cursorY = undefined;
            
            this.onMouseMove = (e) => {
                this.cursorX = e.clientX;
                this.cursorY = e.clientY;
            };
            this.onMouseLeave = () => {
                this.cursorX = undefined;
                this.cursorY = undefined;
            };
            
            document.addEventListener('mousemove', this.onMouseMove);
            document.addEventListener('mouseleave', this.onMouseLeave);

            // Find eye elements to manipulate attributes directly
            this.eyes = this.cat.querySelectorAll('.svg-eye');
            this.pupils = this.cat.querySelectorAll('.svg-pupil');

            this.stateTimer = 0;
            this.lastTime = performance.now();
            this.isDestroyed = false;

            this.loop = this.loop.bind(this);
            // Random mouse spawner
            this.mouseSpawnerInterval = setInterval(() => this.trySpawnMouse(), 4000);
        }

        destroy() {
            this.isDestroyed = true;
            document.removeEventListener('mousemove', this.onMouseMove);
            document.removeEventListener('mouseleave', this.onMouseLeave);
            clearInterval(this.mouseSpawnerInterval);
        }

        changeState(newState) {
            this.cat.classList.remove('state-idle', 'state-loaf', 'state-spotted', 'state-pouncing', 'state-post-pounce-idle', 'state-sniffing', 'state-chasing', 'state-post-chase-idle');
            this.state = newState;
        }

        trySpawnMouse() {
            if (settings.animal === 'none') return;
            if (!this.mouseActive && Math.random() < 0.4) {
                this.mouseActive = true;
                
                // Toggle squirrel style for dog companion
                if (settings.animal === 'dog') {
                    this.mouse.classList.add('squirrel');
                } else {
                    this.mouse.classList.remove('squirrel');
                }

                this.mouseX = Math.random() * (window.innerWidth - 200) + 100;
                this.mouse.style.left = `${this.mouseX}px`;
                this.mouse.classList.remove('hidden');

                if (this.mouseX > window.innerWidth / 2) {
                    this.mouse.classList.add('facing-left');
                } else {
                    this.mouse.classList.remove('facing-left');
                }

                if (this.state !== 'pouncing' && this.state !== 'chasing') {
                    this.changeState('spotted');
                }
            }
        }

        loop(time) {
            if (this.isDestroyed) return;
            const dt = time - this.lastTime;
            this.lastTime = time;

            if (settings.animal === 'none') {
                this.cat.style.display = 'none';
                this.mouse.style.display = 'none';
                this.mouseActive = false;
                requestAnimationFrame(this.loop);
                return;
            } else {
                this.cat.style.display = 'block';
                Array.from(this.cat.querySelectorAll('.animal-svg')).forEach(svg => {
                    svg.style.display = (svg.id === settings.animal + '-svg') ? 'block' : 'none';
                });
            }

            // Subclasses must implement updateState
            this.updateState(dt);

            // Calculate eye dilation proximity factor
            let proximity = 0;
            if (this.state === 'spotted' || this.state === 'pouncing' || this.state === 'chasing') {
                proximity = 1;
            } else if (this.cursorX !== undefined && this.cursorY !== undefined) {
                const rect = this.cat.getBoundingClientRect();
                const catCenterX = rect.left + rect.width / 2;
                const catCenterY = rect.top + rect.height / 2;
                const dx = this.cursorX - catCenterX;
                const dy = this.cursorY - catCenterY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                const maxDist = 400; // Threshold distance in pixels
                proximity = Math.max(0, 1 - dist / maxDist);
                proximity = Math.pow(proximity, 1.5);
            }

            // Calculate pupil dilation based on species
            let pupilRx, pupilRy;
            if (settings.animal === 'fox') {
                const size = 1.3 + 0.5 * proximity;
                pupilRx = size;
                pupilRy = size;
            } else {
                pupilRx = 1.6 + 1.9 * proximity;
                pupilRy = 3.5 + 1.0 * proximity;
            }

            // Calculate tracking offset
            let offsetX = 0;
            let offsetY = 0;
            if (this.state === 'loafing' && this.cursorX !== undefined && this.cursorY !== undefined) {
                const rect = this.cat.getBoundingClientRect();
                const companionCenterX = rect.left + rect.width / 2;
                const companionCenterY = rect.top + rect.height / 2;
                
                const dx = this.cursorX - companionCenterX;
                const dy = this.cursorY - companionCenterY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance > 10) {
                    const maxOffset = 1.2; // Max offset units inside eye circle
                    const factor = Math.min(1, distance / 350);
                    // Adjust for horizontal facing scale direction
                    offsetX = (dx / distance) * maxOffset * factor * this.direction;
                    offsetY = (dy / distance) * maxOffset * factor;
                }
            }

            // Process Pupils (Dilate and track for all companions)
            if (this.pupils) {
                this.pupils.forEach(pupil => {
                    // Cache the base coordinates from the SVG if not already cached
                    if (pupil._baseCx === undefined) {
                        pupil._baseCx = parseFloat(pupil.getAttribute('cx'));
                        pupil._baseCy = parseFloat(pupil.getAttribute('cy'));
                    }

                    // Apply pupil dilation
                    pupil.setAttribute('rx', pupilRx.toFixed(2));
                    pupil.setAttribute('ry', pupilRy.toFixed(2));

                    // Track cursor
                    pupil.setAttribute('cx', (pupil._baseCx + offsetX).toFixed(2));
                    pupil.setAttribute('cy', (pupil._baseCy + offsetY).toFixed(2));
                });
            }

            // Update physical DOM position
            const scaleX = this.direction === 1 ? 1.5 : -1.5;
            this.cat.style.transform = `translate(${this.x}px, -${this.y}px) scale(${scaleX}, 1.5)`;

            requestAnimationFrame(this.loop);
        }
    }

    // ---- Feline (Cat & Fox) AI ----
    class FelineAI extends CompanionAI {
        constructor(catEl, mouseEl) {
            super(catEl, mouseEl);
            this.changeState('walking');
            requestAnimationFrame(this.loop);
        }

        changeState(newState) {
            super.changeState(newState);
            if (newState === 'idle') {
                this.cat.classList.add('state-idle');
                this.stateTimer = Math.random() * 2000 + 1000;
            } else if (newState === 'post_pounce_idle') {
                this.cat.classList.add('state-idle');
                this.stateTimer = 2000;
            } else if (newState === 'walking') {
                if (Math.random() > 0.7) this.direction *= -1;
                this.stateTimer = Math.random() * 6000 + 2000;
            } else if (newState === 'loafing') {
                this.cat.classList.add('state-loaf');
                this.stateTimer = Math.random() * 10000 + 4000;
            } else if (newState === 'spotted') {
                this.cat.classList.add('state-spotted');
                this.direction = (this.mouseX > this.x) ? 1 : -1;
                this.stateTimer = 1000;
            } else if (newState === 'pouncing') {
                this.cat.classList.add('state-pouncing');
                this.startX = this.x;
                this.targetX = this.direction === 1 ? this.mouseX - 20 : this.mouseX + 20;
                
                this.mouseEscapeDirection = this.direction;
                if (this.mouseEscapeDirection === 1) {
                    this.mouse.classList.remove('facing-left');
                } else {
                    this.mouse.classList.add('facing-left');
                }

                const distance = Math.abs(this.targetX - this.startX);
                this.pounceDuration = Math.max(400, distance * 1.2);
                this.stateTimer = this.pounceDuration;
            }
        }

        updateState(dt) {
            if (this.state === 'walking') {
                this.x += this.speed * this.direction * (dt / 16);

                if (this.x < 50) { this.x = 50; this.direction = 1; }
                if (this.x > window.innerWidth - 100) { this.x = window.innerWidth - 100; this.direction = -1; }

                this.stateTimer -= dt;
                if (this.stateTimer <= 0) {
                    const r = Math.random();
                    if (r < 0.4) this.changeState('idle');
                    else if (r < 0.7) this.changeState('loafing');
                    else { this.changeState('walking'); this.direction *= -1; }
                }
            } else if (this.state === 'idle' || this.state === 'loafing') {
                this.stateTimer -= dt;
                if (this.stateTimer <= 0) this.changeState('walking');
            } else if (this.state === 'post_pounce_idle') {
                this.stateTimer -= dt;
                if (this.stateTimer <= 0) this.changeState('loafing');
            } else if (this.state === 'spotted') {
                this.stateTimer -= dt;
                if (this.stateTimer <= 0) this.changeState('pouncing');
            } else if (this.state === 'pouncing') {
                this.stateTimer -= dt;
                const progress = 1 - Math.max(0, this.stateTimer / this.pounceDuration);

                if (this.mouseActive) {
                    this.mouseX += this.mouseEscapeDirection * 10 * (dt / 16);
                    this.mouse.style.left = `${this.mouseX}px`;

                    if (this.mouseX < -50 || this.mouseX > window.innerWidth + 50) {
                        this.mouse.classList.add('hidden');
                    }
                }

                this.x = this.startX + (this.targetX - this.startX) * progress;
                this.y = Math.sin(progress * Math.PI) * 50;

                if (progress >= 1) {
                    this.mouse.classList.add('hidden');
                    this.mouseActive = false;
                    this.y = 0;
                    this.changeState('post_pounce_idle');
                }
            }
        }
    }

    // ---- Canine (Dog) AI ----
    class CanineAI extends CompanionAI {
        constructor(catEl, mouseEl) {
            super(catEl, mouseEl);
            this.changeState('walking');
            requestAnimationFrame(this.loop);
        }

        changeState(newState) {
            super.changeState(newState);
            if (newState === 'idle') {
                this.cat.classList.add('state-idle');
                this.stateTimer = Math.random() * 2000 + 1000;
            } else if (newState === 'post_chase_idle') {
                this.cat.classList.add('state-idle');
                this.stateTimer = 2000;
            } else if (newState === 'walking') {
                if (Math.random() > 0.7) this.direction *= -1;
                this.stateTimer = Math.random() * 5000 + 2000;
            } else if (newState === 'sniffing') {
                this.cat.classList.add('state-sniffing');
                this.stateTimer = Math.random() * 4000 + 2000;
            } else if (newState === 'spotted') {
                this.cat.classList.add('state-spotted');
                this.direction = (this.mouseX > this.x) ? 1 : -1;
                this.stateTimer = 1000;
            } else if (newState === 'chasing') {
                this.cat.classList.add('state-chasing');
                this.startX = this.x;
                this.targetX = this.direction === 1 ? this.mouseX - 20 : this.mouseX + 20;

                this.mouseEscapeDirection = this.direction;
                if (this.mouseEscapeDirection === 1) {
                    this.mouse.classList.remove('facing-left');
                } else {
                    this.mouse.classList.add('facing-left');
                }

                const distance = Math.abs(this.targetX - this.startX);
                this.chaseDuration = Math.max(300, distance * 0.8);
                this.stateTimer = this.chaseDuration;

                // Sync stride cycles to the exact chase duration (3 strides/hops total)
                const strideDuration = this.chaseDuration / 3;
                this.cat.style.setProperty('--dog-chase-duration', `${strideDuration}ms`);
                this.cat.style.setProperty('--dog-chase-delay', `-${strideDuration / 2}ms`);
            }
        }

        updateState(dt) {
            if (this.state === 'walking') {
                this.x += 1.2 * this.direction * (dt / 16);

                if (this.x < 50) { this.x = 50; this.direction = 1; }
                if (this.x > window.innerWidth - 100) { this.x = window.innerWidth - 100; this.direction = -1; }

                this.stateTimer -= dt;
                if (this.stateTimer <= 0) {
                    const r = Math.random();
                    if (r < 0.3) this.changeState('idle');
                    else if (r < 0.6) this.changeState('sniffing');
                    else { this.changeState('walking'); this.direction *= -1; }
                }
            } else if (this.state === 'idle' || this.state === 'sniffing') {
                this.stateTimer -= dt;
                if (this.stateTimer <= 0) this.changeState('walking');
            } else if (this.state === 'post_chase_idle') {
                this.stateTimer -= dt;
                if (this.stateTimer <= 0) this.changeState('walking');
            } else if (this.state === 'spotted') {
                this.stateTimer -= dt;
                if (this.stateTimer <= 0) this.changeState('chasing');
            } else if (this.state === 'chasing') {
                this.stateTimer -= dt;
                const progress = 1 - Math.max(0, this.stateTimer / this.chaseDuration);

                if (this.mouseActive) {
                    this.mouseX += this.mouseEscapeDirection * 12 * (dt / 16);
                    this.mouse.style.left = `${this.mouseX}px`;

                    if (this.mouseX < -50 || this.mouseX > window.innerWidth + 50) {
                        this.mouse.classList.add('hidden');
                    }
                }

                this.x = this.startX + (this.targetX - this.startX) * progress;
                // Bound running hop bounce
                this.y = Math.abs(Math.sin(progress * Math.PI * 3)) * 6;

                if (progress >= 1) {
                    this.mouse.classList.add('hidden');
                    this.mouseActive = false;
                    this.y = 0;
                    this.changeState('post_chase_idle');
                }
            }
        }
    }

    let currentAIInstance = null;

    function initCompanionAI() {
        if (currentAIInstance) {
            currentAIInstance.destroy();
            currentAIInstance = null;
        }

        if (settings.animal === 'none') {
            catElement.style.display = 'none';
            mouseElement.style.display = 'none';
            return;
        }

        catElement.style.display = 'block';

        if (settings.animal === 'dog') {
            currentAIInstance = new CanineAI(catElement, mouseElement);
        } else {
            currentAIInstance = new FelineAI(catElement, mouseElement);
        }
    }

    // Init
    loadSettings();
    renderShortcuts();
});

