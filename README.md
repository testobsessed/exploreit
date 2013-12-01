Explore It!
===========

This is a classroom training course based on my book published by Pragmatic Bookshelf, [Explore It!](http://pragprog.com/book/ehxta/explore-it)

# What Is This?

Obviously there is not much here yet. 
You're probably better off checking back sometime later.

But if you really want to know what's going on, here's my intention:

* These will be course notes for an open source class based on my book, Explore It!
* I have not yet chosen a license for these notes. Until I do, the contents of this repository (not including the reveal.js submodule) is copyrighted by me, Elisabeth Hendrickson, with all rights reserved.
* Once I do choose a license, the terms of use for my class will be that in lieu of a licensing fee to use this class, you must provide each of your students with a copy of Explore It! that you purchase direct from the Pragmatic Bookshelf website (so, that is, direct from the publisher, not from a distributor).

If you want to follow along to see what I'm planning to do next, see
the [project tracker](https://www.pivotaltracker.com/s/projects/966320).

# Displaying the Slides

This slide deck is written in markdown, and this repository allows you to
display the slides by running a local [Connect server with Grunt](https://github.com/gruntjs/grunt-contrib-connect).

Alternatively if you have an internet connection you can simply display the slides
hosted at _location to be determined later_.

## Prerequisites

In order to display the slides for the class, you need the following software installed:

* [git](http://git-scm.com/) (the instructions assume you are using a command line git client.)
* [NPM](https://npmjs.org/)
* [Chrome](http://www.google.com/chrome)

## Display the Slides

1. Clone this repository:

  `git clone --recursive https://github.com/testobsessed/exploreit`

1. Install the dependencies:

  `npm install`

1. Start the server to display the slides:

  `grunt serve`

1. Browse to [localhost:8000](http://localhost:8000).

1. Select Enter Presentation Mode from the View menu in Chrome to display the presentation.

## What to Expect

## Course Notes for Students

These slides are the instructors deck for this course. 
There are no handouts for students here; you will need to order
enough copies of [Explore It!](http://pragprog.com/book/ehxta/explore-it)
from Pragmatic Bookshelf so that each of your students gets their own copy.

## How This Course is Organized

This class is organized into _x_ modules, where each 
module takes 60 - 90 minutes to run.

You could choose to teach this class as 2-3 intense days,
or you could teach it as a weekly series with homework.

## Choosing a Target

The labs in the class ask participants to explore something. 
The charters in these labs read "Explore your target..."

Before you begin class, you need to choose the target for your
participants to explore. 
You could choose to explore something fun, like a handheld 
game.
Or you could choose to explore something very relevant to your
daily work, such as the software that your team is working on.

Whatever you choose, make sure that the target is sufficiently
rich that you can apply all the techniques and heuristics in
the labs.

## Anticipated Frequenty Asked Questions (FAQs)

### Why do you require purchasing Explore It! direct from the publisher instead of through some other channel?

I'm not asking for a licensing fee for this courseware, so the way I get paid for my effort is by selling more books. If you buy direct from my publisher, I get a higher percentage of the sale.

For what it's worth, the publisher is probably the best source for bulk orders anyway. If you will be running this class for a large number of participants, contact them to ask about a bulk discount.

### Why do I have to run a webserver on my computer just to display these slides?

As of this writing, the defacto standard for presentations is still PowerPoint with Keynote
coming in a close second for Mac users.

The problem with such presentation software packages is that they do not support authoring  decks in a modular way using source
control to manage the content. 
Instead, authors end up with numerous copies of a given deck, each with its own small
tweaks to customize the deck for a given audience, and then must remember which of the
many decks had the most up-to-date content when it is time to teach the next class.

There is a new category of presentation software that uses HTML and Javascript.
These packages all enable authors to manage content
the same way we manage code: in source control. 
Reveal.js is among the best of those.
It's flexible and powerful.

At some point in the future I hope to make it trivially easy to download and run this
deck locally.
For now, I believe that the ease of authoring and managing the content outweighs the
hassle of using Javascript tools to display the slides.

And until I can make it as easy to use this deck as to open a PPT file, I will host the deck at _location to be determined_ so that you can avoid having
to run the deck locally, as long as you have an internet connection.

# Acknowledgements

This course uses Hakim El Hattab's marvelous presentation framework, [reveal.js](https://github.com/hakimel/reveal.js/), for which I am extremely grateful. The framework is included as a submodule to make it easy to get started while still making it easy for me to keep the framework up to date.

Reveal.js is copyrighted by
Hakim El Hattab and redistributed here in accordance with [the licensing terms for reveal.js](https://github.com/hakimel/reveal.js/blob/master/LICENSE).

The design uses open source fonts. See the directory theme/fonts for details.
The web font files are included in order to ensure that the presentation displays as you expect even if you do not have internet access.