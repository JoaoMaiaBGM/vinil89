'use client';

import { IoPlayOutline } from 'react-icons/io5';

export default function Videos({ videos }) {
  const handlePlayVideo = (id) => {
    const video = videos.find((video) => video.id === id);
    if (video) {
      window.open(`https://www.youtube.com/watch?v=${video.id}`, '_blank');
    }
  };

  return (
    <div>
      <div className="space-y-4">
        {videos.map((video, idx) => (
          <div
            key={idx}
            className="bg-vin-blue-300 p-4 rounded-lg hover:border-accent border-2 border-transparent transition-colors cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <IoPlayOutline
                onClick={() => handlePlayVideo(video.id)}
                className="w-8 h-8 text-primary group-hover:text-accent transition-colors shrink-0"
              />
              <div>
                <p className="text-vin-secondaryForeground font-bold capitalize">{video.title}</p>
                <p className="text-sm text-vin-gray-400 capitalize">{video.artist}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
