# StarStyle 💫 

A fashion discovery platform that helps users recreate celebrity outfits at affordable price points. Find budget-friendly alternatives to your favorite celebrity looks with direct shopping links.

## Demo

[Watch the demo video →](https://youtu.be/uwathBsCHjc)

## Features

### Outfit Discovery 
- Browse celebrity outfits with detailed breakdowns of each piece
- View brand and price information for every item
- Filter by celebrity, occasion, or season

### Tiered Alternatives
Each celebrity outfit includes three budget-friendly alternatives:
- **Budget**: fast fashion finds
- **Mid-Range**: contemporary brands and sales
- **Investment**: original designer brands

### User Experience
- Personalized style quiz to match with celebrity aesthetics
- Direct shopping links to retailers

## Installation

1. **Clone the Repository**
```bash
   git clone https://github.com/Star-Style/StarStyle.git
```

2. **Set up Environment Variables**  
   Create `.env` files for both frontend and backend directories with your Firebase API keys. The backend `.env` also requires MongoDB URI and port number.

3. **Install Dependencies**
```bash
   cd frontend && npm install
   cd ../backend && npm install
```

4. **Set Up the Database**  
   From the backend directory, run the seed script to populate sample data:
```bash
   node scripts/faker-seed.js
```

5. **Run the Application**
```bash
   # terminal 1 - backend
   cd backend && npm start
   
   # terminal 2 - frontend
   cd frontend && npm start
```
   Then navigate to the localhost link in your browser.
