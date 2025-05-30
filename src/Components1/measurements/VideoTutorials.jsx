// src/components/measurements/VideoTutorials.jsx
export default function VideoTutorials() {
  const videos = [
    {
      id: 1,
      title: "How to Measure Upper Body",
      duration: "2:45",
      thumbnail: "/video-thumbnails/upper-body.jpg",
    },
    {
      id: 2,
      title: "Accurate Waist & Hip Measurements",
      duration: "3:12",
      thumbnail: "/video-thumbnails/waist-hip.jpg",
    },
    // Add more videos...
  ];

  return (
    <div>
      <h3 className="font-semibold mb-4">Measurement Video Guides</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="border rounded-lg overflow-hidden hover:shadow-md transition"
          >
            <div className="relative">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-32 object-cover"
              />
              <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-1 rounded">
                {video.duration}
              </div>
            </div>
            <div className="p-3">
              <h4 className="font-medium">{video.title}</h4>
              <button className="mt-2 text-sm text-primary hover:underline">
                Watch Tutorial
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
