import React from 'react';
import '../App.css';
import './Home.css';

function Home() {
  return (
    <div className="content">
        <h3 id="hello-world">Hello World!</h3>
        <p id="terminal-command" className="terminal">$ curl https://about-me</p>
        <p id="terminal-response" className="terminal">
            {'{\n  "name": { \n    "first": "Amy",\n    "last": "Weitzman"\n  },\n  "education": {\n    "school": "UC Irvine",\n    "major": "Computer Science",\n    "gradYear": 2021\n  },\n  "interests": [\n    "coding",\n    "sports",\n    "music",\n    "astronomy",\n    "trivia",\n    "food"\n  ]\n}'}
        </p>
    </div>
  );
}

export default Home;
