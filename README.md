<div align="center">

# SOLAR SYSTEM SIMULATOR
## Learn about the planets in our Solar System

<p> An interactive solar system simulator built with <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and the <strong>HTML5 Canvas </strong>. </p>

<a href="https://kartikeyamishra-ark.github.io/Solar-System/">Test the project!</a>

<img width="1470" height="822" alt="Screenshot 2026-11-15 at 8 58 28 PM" src="https://github.com/user-attachments/assets/07a9c459-8302-48e2-889c-9c4cb44bcf24" />

</div>

# About

Solar System is an interactive visualisation of our planetary system, built using the HTML5 Canvas API.

The project recreates the Sun and all eight planets, each with individual orbital paths, movement speeds, sizes, colours, and rotation properties.

Planets continuously move around the Sun while rotating on their own axes, creating an animated representation of our cosmic neighbourhood.

Users can select individual planets through either the on-screen navigation panel or directly on the Canvas to explore their properties and learn more about them.

The project combines mathematical positioning, Canvas rendering, animation, and an interactive interface to create an engaging astronomical visualisation.


# Features

## Solar System Visualisation

- Representation of the Sun and all eight planets.

- Individual orbital paths for each planet.

- Different planetary sizes and colours.

- Distinct orbital speeds.

- Continuously animated planetary movement.

- Randomised initial orbital positions.

## Planet Selection

- Users can select planets through the celestial body navigation panel or by clicking directly on a planet in the Canvas.

- Interactive planet selection.

- Return to the complete Solar System view using the Back button.

## Planetary Information Panel

The information panel displays details about the currently selected planet.

Information includes:

- Planet name

- Description

- Classification

- Average distance from the Sun

The information panel updates dynamically whenever a different planet is selected.

## Animation Controls

- Pause / Resume: Stop and resume planetary animation.

- Reset: Randomise the initial orbital positions and reset planetary rotation.

- Back: Clear the current selection and return to the system view.

## Animated Visuals

- Continuously moving planets.

- Individual planetary rotation.

- Different orbital speeds.

- Tilted planetary axes.

- Animated starfield.

- Custom celestial background.

# Technicalities

## Canvas Visualisation

The Solar System is rendered using the HTML5 Canvas API.



<strong>Planetary Orbits</strong>

Each planet has an individual orbital radius that determines its distance from the Sun in the simulation.

The orbital paths are drawn as circular trajectories around the central star.



<strong>Planetary Positioning</strong>

Planet positions are calculated using polar coordinates and trigonometry.

The position of each planet is determined using:

x = sun.x + Math.cos(planet.angle) * orbit;
y = sun.y + Math.sin(planet.angle) * orbit;

The orbital angle changes continuously, producing the planets' movement around the Sun.



<strong>Planetary Rotation</strong>

Each planet maintains an independent rotation value and rotation speed.

These properties allow individual rotational animation rather than treating the planets as static objects moving along their orbits.



<strong>Axial Tilt</strong>

Each planet has an individual axial tilt property, allowing the simulation to account for differences in planetary orientation.

# Animation System

The simulation uses requestAnimationFrame() to continuously update and render the Solar System.

The animation system tracks:

- Planetary orbital angles

- Orbital speeds

- Planetary rotation

- Rotation speeds

- Planet positions

- Animation state

- Selected planet

The rendering pipeline follows:

Planetary State
      ↓
Update Orbital Angles
      ↓
Calculate Planet Positions
      ↓
Update Planetary Rotation
      ↓
Clear Canvas
      ↓
Draw Background
      ↓
Draw Stars
      ↓
Draw Orbital Paths
      ↓
Draw Sun
      ↓
Draw Planets
      ↓
Render Next Frame

# UI / UX

The interface follows a playful aesthetic.

Dark, purplish background making it different from a regular black solar system project.

Colourful stars which may break a few rules of the solar system but add personality to my project.

Recognisable planet design.

Interactive planet navigation.

Planetary information panel.

Clear selection states.

Accessible animation controls.

The Solar System remains the primary visual focus, while the navigation and information panels provide additional functionality without dominating the Canvas.

# Built With

- Structure: HTML5

- UI, layout & styling: CSS3

- Logic & state management: JavaScript

- Solar System rendering: HTML5 Canvas API

- Animation: requestAnimationFrame()

Demo


# What I Learned

- HTML5 Canvas

- Canvas Drawing

- Canvas Coordinate Systems

- Canvas Rendering

- requestAnimationFrame()

- Animation Loops

- Polar Coordinates

- Trigonometry in Programming

- Circular Motion

- Orbital Mechanics Concepts

- Mathematical Positioning

- Interactive Canvas Elements

- Event Listeners

- Separating Rendering and Application Logic

- Animation State Management

# AI Declaration

AI has been used to explain programming concepts, help debug issues, and guide me towards relevant documentation and learning resources throughout the development process.

The implementation and development of the project have been part of my journey learning HTML, CSS, JavaScript, and Canvas.


# Credits

Documentation referred to:

- https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

- https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement

- https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

# Built while learning HTML, CSS and JavaScript
