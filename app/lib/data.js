export const projects = [
  {
    id: 1,
    name: "Sun Spotter",
    cover: "/images/sunspotter/cover.png",
    images: [
      { type: "video", url: "/images/sunspotter/demo-sunspotter.mp4" },
      { type: "image", url: "/images/sunspotter/explore.png" },
      { type: "image", url: "/images/sunspotter/one_spot.png" },
      { type: "image", url: "/images/sunspotter/one_visit.png" },
      { type: "image", url: "/images/sunspotter/profile.png" },
    ],
    stack:
      "React, NodeJS, Express, PostgreSQL, SASS, React Router, Google Maps API, Open Weather API",
    description:
      "A full stack web application for users to discover, discuss, and share their favourite local sunset spots in Victoria, BC, built as a collaborative group project.",
    features:
      "Browse and view details about sunset spots, create a spot or share a visit, and view all your sunset spots on your profile. Auto dark mode at sunset, as well as live weather updates.",
    github: "https://github.com/cvsluis/sun-spotter",
  },
  {
    id: 2,
    name: "Scheduler",
    cover: "/images/scheduler/cover.png",
    images: [
      { type: "image", url: "/images/scheduler/thursday.png" },
      { type: "image", url: "/images/scheduler/add_interview.png" },
    ],
    stack: "React, SASS, NodeJS, Express, PostgreSQL, Jest, Cypress",
    description:
      "A React-based SPA that allows a student to create, edit and delete interview appointments, built through test driven development.",
    features: "",
    github: "https://github.com/cvsluis/scheduler",
  },
  {
    id: 3,
    name: "Linkfolio",
    cover: "/images/linkfolio/cover.png",
    images: [
      { type: "image", url: "/images/linkfolio/demo-1.gif" },
      { type: "image", url: "/images/linkfolio/demo-2.gif" },
      { type: "image", url: "/images/linkfolio/ERD.png" },
    ],
    stack: "NodeJS, Express, HTML, SASS, JQuery, PostgreSQL",
    description:
      "A web app built as a group project that allows learners to save learning resources like tutorials, blogs and videos.",
    features: "",
    github: "https://github.com/cvsluis/resource-wall",
  },
  {
    id: 4,
    name: "Jamming!",
    cover: "/images/jamming/cover.png",
    images: [
      { type: "image", url: "/images/jamming/get_started.png" },
      { type: "image", url: "/images/jamming/name_error.png" },
    ],
    stack: "React, SASS, Spotify API",
    description:
      "An SPA that allows users to link to their Spotify account and create playlists.",
    features: "",
    github: "https://github.com/cvsluis/jamming",
  },
  {
    id: 5,
    name: "Jungle",
    cover: "/images/jungle/cover.png",
    images: [
      { type: "image", url: "/images/jungle/home_page.png" },
      { type: "image", url: "/images/jungle/product_sale.png" },
      { type: "image", url: "/images/jungle/stripe_checkout.png" },
    ],
    stack: "Ruby on Rails, Bootstrap, Active Record, PostgreSQL",
    description: "A mini e-commerce application built with Rails 6.1.",
    features: "",
    github: "https://github.com/cvsluis/jungle-rails",
  },
  {
    id: 6,
    name: "Tiny App",
    cover: "/images/tinyapp/cover.png",
    images: [{ type: "image", url: "/images/tinyapp/url-edit.png" }, { type: "image", url: "/images/tinyapp/url-create.png" }],
    stack: "EJS, NodeJS, Express, bcryptjs",
    description: "A full stack web app that allows users to shorten long URLs.",
    features: "",
    github: "https://github.com/cvsluis/tinyapp",
  },
  {
    id: 7,
    name: "PhotoLabs",
    cover: "/images/photolabs/cover.png",
    images: [
      { type: "image", url: "/images/photolabs/home_light.png" },
      { type: "image", url: "/images/photolabs/one_photo_light.png" },
      { type: "image", url: "/images/photolabs/topic_dark.png" },
      { type: "image", url: "/images/photolabs/similar_dark.png" },
    ],
    stack: "React, SASS, NodeJS, Express, PostgreSQL",
    description:
      "A React-based SPA that allows users to view photos in different contexts.",
    features: "",
    github: "https://github.com/cvsluis/photolabs",
  },
  {
    id: 8,
    name: "Tweeter",
    cover: "/images/tweeter/cover.png",
    images: [
      { type: "image", url: "/images/tweeter/desktop_view.png" },
      { type: "image", url: "/images/tweeter/error_and_button_view.png" },
    ],
    stack: "jQuery, Node, Express, SASS",
    description: "Tweeter is a simple, single-page Twitter clone.",
    features: "",
    github: "https://github.com/cvsluis/tweeter",
  },
];