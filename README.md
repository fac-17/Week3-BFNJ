# Week3-BFPJ
Emmanuel, Jack, Colette, Georgia API week

# Project Week 3: APIs

## Repo
https://github.com/fac-17/Week3-BFPJ
## APIs used:
* Kanye West quotes - https://kanye.rest/
* Donald Trump quotes - https://www.tronalddump.io/ 

## Task:

Your project this week is to build a simple web app (ideally just a single page). You must query at least two APIs and use the results to update the DOM.

What you choose to build and how you choose to display the data is entirely up to you!

During the planning phase we suggest you spend time on:

Exploring APIs you are interested in working with
Considering your user journey
Deciding what you need to build for your Minimum Viable Product (MVP) and splitting up the tasks
You'll have most of day 3 and all of day 4 to work on your project. On day 5 we'll have code reviews in the morning and final presentations in the afternoon.

Considerations before starting:
* Are there issues with CORS requests?
* Is there a high enough rate limit?
* Is a free API key available?
* Are you able to use the API without user authentication (oAuth)?
* Is good documentation available?

## Requirements

- [ ]  Your app queries at least two APIs using the XMLHttpRequest method
- [ ] Your app features some dynamic content
- [ ] A clearly defined user journey, documented in your readme.
- [ ] A well-considered architecture for your app - think back to the workshops from the beginning of this week. - - [ ] Try to modularise your code, or break it down into separate files. Document any key decisions about how you structure your code in your readme!
- [ ] Code: break your JavaScript down into small functions with a clear input and output; this will make it easy to write tests
- [ ] Tests: write tests for your pure functions. We don't expect tests on the DOM or on the response from an API.
- [ ] Design: aim for a responsive, mobile-first design
- [ ] Accessibility: same as always, we'll be running your code through accessibility checkers
- [ ] Take appropriate measures when it comes to concealing private information (i.e. your API key!)

## Goals:

- [ ] Request information from the Kanye API
- [ ] Show Kanye quotes on a web page
- [ ] Request information from the Trump API
- [ ] Show Trump quotes on a webpage
- [ ] Generate either Kanye or Trump quotes randomly onto a web page

## Stretch goals:

- [ ] Tell you if you got it right
- [ ] Score count
- [ ] Prettified
- [ ] Gif of Trump/Kanye if you get it right
- [ ] Random gif of Trump/Kanye if you get it right (pulled from Giphy)
- [ ] Hide the API key using config.env
