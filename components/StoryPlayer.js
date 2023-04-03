// https://amp.dev/documentation/guides-and-tutorials/integrate/embed-stories/

export default function StoryPlayer() {
  return (
    <amp-story-player style={{ width: 360, height: 600 }}>
      <a href="/wproducts">
        <img
          src="wproducts.png"
          loading="lazy"
          width="100%"
          height="100%"
          amp-story-player-poster-img
          alt="story"
        />
        A title that describes story 1.
      </a>
      <a href="/carbon-native">
        <img
          src="carbon-native.png"
          loading="lazy"
          width="100%"
          height="100%"
          amp-story-player-poster-img
          alt="story"
        />
        A title that describes story 2.
      </a>
    </amp-story-player>
  );
}
