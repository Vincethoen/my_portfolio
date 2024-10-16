# Vince 't Hoen's Portfolio Website

This is the source code for my personal portfolio website, showcasing my journey from a 3D designer to a frontend developer. The site includes sections for certificates, skills, projects, and a hero and about section. It features a modern, minimalistic design with a light/dark theme switcher and supports two languages: Dutch and English. The entire design was created by me.

## Features

- **Responsive Design**: Fully responsive for mobile, tablet, and desktop, with optimized layouts for screens smaller than 980px.
- **Modern Design**: The site incorporates Swiss design principles, with parallax scrolling and pixel-perfect alignment for a sleek, clean look.
- **Language Support**: The site is available in both Dutch and English, with a language switcher.
- **Dynamic Content**: Certificates and projects are dynamically loaded from a JSON file.
- **Skills Section**: A visually engaging section to display my skill set, with flexible icons and a minimal progress bar design.
- **Hero and About Sections**: These sections introduce who I am and my background in frontend development.
- **Projects Section**: Showcases various projects I have worked on, with descriptions and technologies used.
- **Contact Section**: Includes clickable links to my LinkedIn, GitHub, phone number, and email.

## Technologies Used

- **Frontend**: React, TypeScript, HTML5, CSS3 (with custom theming using CSS variables)
- **Font**: Poppins, to maintain a clean and modern aesthetic
- **Effects**: Parallax scrolling for images, flexbox for layout management
- **Styling**: Custom CSS with color scheme (#ff2b51, #000000, #474747, #d9d9d9, and #E40037)

## How to Run

1. Clone this repository:
   ```bash
   git clone https://github.com/Vincethoen/my_portfolio.git
   ```

2. Navigate into the project directory:
   ```bash
   cd portfolio-app
   ```

3. Install the necessary dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Project Structure

- **/src**: Contains the main source code for the project.
  - **components**: Reusable components such as the Skills, Projects, Hero, About, and Contact sections.
  - **assets**: Images and other static files.
  - **data**: JSON files containing certificate and project data.
  - **styles**: Global styles, including theming and layout.


## Note on Media Files

Some media files have been omitted from this repository to limit storage size. They can be added separately or hosted externally for use in the project.


## Future Improvements

- Adding more portfolio items as I complete new projects.
- Implementing backend functionality in the future as I expand my skill set to full-stack development.
