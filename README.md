# StarStyle

StarStyle is a fashion discovery platform that helps users recreate celebrity outfits at affordable price points. Find budget friendly alternatives to your favorite celebrity looks with direct shopping links. 

## Features

### Outfit Discovery 
- browse celebrity outfits
- view detailed breakdowns of each outfit piece with brand and price information
- filter by celebrity, occasion, or season

### Tired Alternatives
Each celebrity outfit includes three budget friendly alternatives:
- **Budget**: Fast fashion finds
- **Mid-Range**: Contemporary brands and sales
- **Investment**: Original desginer brands

### User Experience
- Personalized style quiz to match with celebrity aesthetics
- Direct shopping links to retailers

## Installation
1. **Clone the repository**: git clone https://github.com/your-repo-link/starstyle.git
2. **Set up Environment Variables**: The project requires a .env for both frontend and
backend. Since the .env files were excluded from version control, you must create
them manually. Both .env contain the firebase API keys, with backend
additionally requiring the mongodb uri and port number.
3. **Install Dependencies**: Make sure to cd into both frontend and backend directories
and run the npm install command.
4. **Set Up the Database**: From the backend directory, run the faker seed script (node
scripts/faker-seed.js) which populates the database with sample celebrities,
outfits, and items. If you want to run your own database, just run npm start.
5. **Run the Application**: In a new terminal, start the frontend by running the npm
start command. Then click on the localhost link to access the project
