## Countries App

In the project directory, you can run:

### docker build -t countries-react .

### docker compose-up

Go to **http://localhost:7050/**

### Main libraries used:

- React
- React-Redux
- graphql-hooks
- Leaflet
- SASS
- Apollo
- Thunk as middlewear

### How did you decide on the technical and architectural choices used as part of your solution?

Since the map is the most dynamic part of the App, I decided to do it on the top.
I also decided to add a Dark Mode since it is something I use everyday with extensions in my browser.
In order to get the geolocation of the countries I had to use another API, which then I had to store in the Redux Store.
The idea of using a Redux store is because the connection between components become easier and more scalable than passing only React's context.

### Are there any improvements you could make to the final piece?

There can always be improvements, I started tinkering on the App more and more, and it feels like one could keep developing and developing without having an end.

My future improvements: - instead of SASS, use Emotion (library I want to learn)

### What would you do differently if you had more time?

I tried to fetch images the moment the user selected a country and displayed relevant photos of the country, but none of the APIs I tried worked or the registration for the APIKEY was too much of a hassle. I would like to add more information in the future.

Also, even though I know how to configure the markers, I want to add specific information in the Pop-up (something actually simple), as well as coloring the country selected (A little bit complicated, adding layers to the Map I believe).

Also display as much information as possible for the country would be a great idea.

It took me sometime to figure it out how to get the coordinates, I had a json file that somebody created in StackOverflow, but some countries were not there and the map crashed if it wasnt found, so more investigation would improved my timing in the app.

Overall I had a really good time and would do another App like this one.
