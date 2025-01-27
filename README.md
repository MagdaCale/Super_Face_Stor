# Super Fake Store 🛍️

Ein moderner Online-Shop mit dynamischer Produktanzeige und interaktiven Animationen.

## Funktionen

- Dynamische Produktkarten mit Bildern und Beschreibungen
- Preisanzeige mit 2 Dezimalstellen
- Animierte "In den Warenkorb" Buttons
- Responsive Design für alle Bildschirmgrößen
- Produktfilter und Suchfunktion
- Sortierung nach Preis und Name

## Technologien

- TypeScript
- HTML5
- CSS3
- Vite als Build-Tool
- Fake Store API für Produktdaten

## Installation

1. Repository klonen:
```bash
git clone [repository-url]


## 📸 Vorschau
![screenshot](/public/bild.png)


src/
  ├── main.ts       # Hauptlogik
  ├── style.css     # Styling
  └── types.ts      # TypeScript Definitionen



## Nutzung
Produkte durchsuchen mit der Suchleiste
Nach Preis oder Name sortieren
Produkte nach Kategorien filtern
Artikel in den Warenkorb legen mit animiertem Button
API
Die Fake Store API stellt folgende Endpunkte bereit:

GET /products - Alle Produkte abrufen
GET /products/categories - Verfügbare Kategorien
GET /products/category/{name} - Produkte nach Kategorie