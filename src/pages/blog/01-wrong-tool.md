---
layout: ../../layouts/Blog.astro
title: I picked the wrong tools for the job and learned more about everything
author: Elijah Lieu
date: 2023-12-28
---

# Introduction

A few years ago I created [Uncontained](https://github.com/technologeli/uncontained),
a puzzle platforming game. I set out to create this game using the general-purpose
game engine of... React.

Why would I ever do that?

# The Wrong Tools

Back then, I was more naive and simply learning about what were popular tools
that everyone was using. I had just gotten done with a course in Java and I
wanted to start using JavaScript again. React at the time was just introducing
hooks, though I used class components as there was more documentation.

I wanted the application to be a standalone app, not tied to a browser, so that
I could have file-system access for a scoreboard. However, instead of pursuing
a tool more tied to game development and abandoning React, I "simply" grabbed
Electron - the tool everyone (see Discord, Slack, Spotify, and more) uses when
they want to have both a web application and a desktop application that uses
the same codebase to unify styling and certain business logic.

The glaring issue, of course, is that I didn't want a web application. I just
wanted a game.

# The Job

The game featured platforming controls and some clickable tiles that could be
dragged along an axis to create a path for the playable character. It was something
easily doable in any game engine, as most provide gravity simulations,
collisions, and mouse and keyboard input. Lucky for me, JavaScript excelled in
exactly one of those.

I distinctly remember writing out collision logic on a whiteboard for both the
character and the moving tiles one morning, but then being unable to determine
a bug in which moving the tile fast enough resulted in breaking through the game
barrier. At the time I was in a voice call with some friends, though they had
gone to bed around 11:00 PM. When they woke up, I was still awake to greet them and tell
them I had fixed the bug. Unfortunately for me, when I woke up the next day (afternoon)
I encounted the bug in a similar scenario.

My development of the game progressed as such, with progress in some areas while
extreme difficulty in others such as window resizing and adding too many entities
in the game world. There's plenty of story to tell here, but they have a similar
story to the one above.

A brief description of my final implementation involved some files with about a thousand
lines of code to manage React state and JavaScript events to manage gravity/collision simulation.
I relied heavily on the browser to render the content, as almost everything was a `<div>` element.
I of course did not know about the `<canvas>` or powerful tools like [three.js](https://threejs.org/).

# What I Learned

The next semester I took a course on game development and realized that this project
was made so much harder by choosing the wrong tools. The semester after that I
used React to create an e-commerce website and realized that React was a lot easier
when I was making websites and not games.

However I think I learned something extremely valuable by using the wrong tools
for the job. In trying to get React and Electron to play well with game development
concepts like a game clock or entity systems, I learned at a core level what specific
parts of React and Electron were doing and what a game engine would have been able
to do for me.

Using a game engine allows users to attach functionality to entities using an
Entity Component System (ECS). For example, some objects might collide with
specific objects, in which they have a rigid body component and a mesh/shape component.
Why split it into two components? Some objects might have events on entry but
not collide with them, such as area-of-effect events.

Without a game engine, I was forced to discover the repetitive and
error-prone task of manually implementing gravity and collisions. I knew nothing
of delta time, but immediately after learning about it I knew exactly the problem
I had that delta time solved.

On the other hand, React had lifecycle functions that were called repeatedly (like
`render`) and ones called on creation and destruction. These were very useful to me
to be able to call `setTimeout` and `clearTimeout`, though later when I used
these lifecycle functions for actual web development I learned their purpose:
fetching data before / after a component rendered and clearing any network calls
when being unloaded. Granted, it was similar to what I learned to use it for,
but at the time I knew nothing about fetching data from a remote API and coercing
JSON into HTML.

# Conclusion

Although I would never do it again, I believe every developer should have a project
in which they *accidentally* choose the wrong tool for the job. I emphasize accidentally
because choosing purposefully will just result in frustration. Ignorance is bliss.

Choosing the wrong tool for the job taught me what the tool was good at and the
lesser known internals of the tool. It taught me what parts of the job were repetitive
or well-understood, but were necessary for any job.

Game development using React and Electron might not have been the best idea,
but being familiar with both now makes learning in either industry much easier.
