# iTunes Hub - Schwarzthal Tech Test Task

[![Build][build-shield]][build-url]

[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![LoC][loc-shield]][loc-url]

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ul>
    <li><a href="#about">About</a>
    </li>
    <li><a href="#getting_started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#manual-installation">Installation</a></li>
      </ul>
    </li>
  </ul>
</details>

## About <a name = "about"></a>

Application is implemented using HTML+CSS+JS+React+Typescript stack. For the backend [`iTunes Search API`](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api) is used [`vis-network`](https://github.com/visjs/vis-network) lib was used to visualize album statistics. Icons were imported from [`react-feather`](https://github.com/feathericons/react-feather) lib.

The application is SPA and contains 3 sections:

- `Search` - allows to search for songs by their titles and add to/delete from Favorite;
- `Favorite (History)` - displays all liked songs in historical order; allows to remove song from favorite;
- `Statistic` - shows statistic of top-5 ever liked artists. The graph represents all released albums of the top artists.  

Client Application is available on port `3000`.

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites <a name = "prerequisites"></a>

Download the app using

```bash
git clone https://github.com/mari1647iv/schwarzthal-tech-test-task
cd ./schwarzthal-tech-test-task
```

### Manual Installation <a name = "manual-installation"></a>

Install client dependencies using `npm`

```npm
cd client
npm i
```

Start the application

```npm
npm start
```

,or build it for production:

```npm
npm run build
```
Check the application running on the port 3000:

```
http://localhost:3000
```


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/mari1647iv/schwarzthal-tech-test-task.svg?style=for-the-badge
[contributors-url]: https://github.com/mari1647iv/schwarzthal-tech-test-task/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/mari1647iv/schwarzthal-tech-test-task.svg?style=for-the-badge
[issues-url]: https://github.com/mari1647iv/schwarzthal-tech-test-task/issues
[build-shield]: https://forthebadge.com/images/badges/made-with-javascript.svg?style=for-the-badge
[build-url]: https://forthebadge.com
[loc-shield]: https://img.shields.io/tokei/lines/github/mari1647iv/schwarzthal-tech-test-task?style=for-the-badge
[loc-url]: https://github.com/mari1647iv/schwarzthal-tech-test-task
