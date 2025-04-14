# odin-etch-and-sketch
🎨 Grid Drawing App (Etch-A-Sketch Style)
This is a fun and interactive web-based drawing app built using HTML, CSS, and JavaScript. It generates a customizable grid where each cell changes color and darkens each time you hover over it — kind of like a digital Etch-A-Sketch with a twist!

🚀 Features
🧮 Dynamic Grid Size: Enter your desired grid size (e.g., 16 for a 16×16 grid).

🎨 Random Color Hover: Hover over cells to give them a random RGB background color.

🌘 Shading Effect: Repeated hovering over a cell dims the color by 10% each time.

🔁 Clear Button: Click "Clear" to reset the grid and choose a new size.

🛠 How It Works
On page load, the user is prompted to enter a grid size.

A square grid is created dynamically using CSS Grid and JavaScript.

Each grid cell listens for a mouseover event to:

Assign a random color on first hover

Gradually decrease its brightness on subsequent hovers

A "Clear" button allows users to reset the grid at any time.

📦 Files
index.html – Main HTML structure, includes embedded JavaScript and CSS

JavaScript (inside <script> tag) – Handles grid generation, hover effects, and reset logic

CSS (inside <style> tag) – Styles the grid layout, cells, and clear button

📸 Demo
To see it in action, simply open the HTML file in your browser and follow the prompt.

💡 Future Enhancements (Ideas)
Toggle between color modes (e.g. grayscale, rainbow, fixed color)

Track how many times each cell is hovered

Export grid as an image

Add dark mode

🧑‍💻 Author
Built with ❤️ and JavaScript for fun and practice.