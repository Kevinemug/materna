/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors:{
        "main" :"#c30a17"
          },
          backgroundImage: {
            'hero-pattern': "url('https://www.materna.com/SharedDocs/Bilder/DE/buehne_startseite.svg?__blob=panorama&v=1')",
             'img': "url('https://www.materna.com/SharedDocs/Bilder/DE/610x343/AS-388785133-Home-Portfolio-Cloud.png?__blob=normal&v=1')"
          }
      
     },
  },
  plugins: [],
}

