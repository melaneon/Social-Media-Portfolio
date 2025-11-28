import { motion } from "framer-motion";
import { useState } from "react";

// --- Media Arrays ---
const alphallowerVideos = [
  "alphallower/video1.mp4",
  "alphallower/video2.mp4",
  "alphallower/video3.mp4",
  "alphallower/video4.mp4",
];

const eventsVideos = [
  "events/video1.mp4",
  "events/video2.mp4",
  "events/video3.mp4",
  "events/video4.mp4",
  "events/video5.mp4",
  "events/video6.mp4",
];

const eventsPhotos = [
  "events/photo1.jpg",
  "events/photo2.jpg",
  "events/photo3.jpg",
  "events/photo4.jpg",
  "events/photo5.jpg",
  "events/photo6.jpg",
  "events/photo7.jpg",
  "events/photo8.jpg",
  "events/photo9.jpg",
  "events/photo10.jpg",
];

const expertVideos = Array.from({ length: 9 }, (_, i) => `expert/video${i + 1}.mp4`);
const storyVideos = Array.from({ length: 18 }, (_, i) => `stories/story${i + 1}.mp4`);

// --- MAIN COMPONENT ---
export default function Portfolio() {
  const [page, setPage] = useState("landing");

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {page === "landing" && <LandingPage setPage={setPage} />}
      {page === "alphallower" && <VideoPage title="Alphallower — Fall 2025 Project" videos={alphallowerVideos} />}
      {page === "events" && <EventsPage />}
      {page === "expert" && <VideoPage title="Expert Content" videos={expertVideos} />}
      {page === "stories" && <StoryPage />}
    </div>
  );
}

// --- LANDING PAGE WITH CIRCLE SLIDE ANIMATION ---
function LandingPage({ setPage }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      {/* Sliding Circle Animation */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: -400 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="w-80 h-80 rounded-full overflow-hidden border-4 border-neutral-700 shadow-2xl absolute left-1/2 -translate-x-1/2"
      >
        <img src="profile.jpg" className="w-full h-full object-cover" />
      </motion.div>

      {/* Text Reveal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="text-center mt-96"
      >
        <h1 className="text-5xl font-bold mb-4">Melaniia Frolova</h1>
        <h2 className="text-2xl mb-2 text-neutral-300">Digital Creator • Social Media Manager</h2>
        <p className="max-w-xl mx-auto text-neutral-400">
          A portfolio of creative direction, vertical video production, storytelling, and digital brand
          development.
        </p>
      </motion.div>

      {/* BUTTONS */}
      <div className="mt-16 grid grid-cols-1 gap-4 w-72">
        <Button label="Alphallower — Fall 2025" onClick={() => setPage("alphallower")} />
        <Button label="Events" onClick={() => setPage("events")} />
        <Button label="Expert Content" onClick={() => setPage("expert")} />
        <Button label="Stories" onClick={() => setPage("stories")} />
      </div>
    </div>
  );
}

function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-neutral-900 rounded-xl p-4 text-center border border-neutral-700 hover:bg-neutral-800 transition"
    >
      {label}
    </button>
  );
}

// --- VIDEO PAGE (REEL FORMAT) ---
function VideoPage({ title, videos }) {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-10">{title}</h1>
      <div className="grid md:grid-cols-3 gap-10 mx-auto max-w-6xl">
        {videos.map((v, i) => (
          <div key={i} className="w-[260px] mx-auto bg-neutral-900 p-4 rounded-2xl">
            <div className="w-[250px] h-[500px] rounded-3xl overflow-hidden border-4 border-neutral-700">
              <video src={v} controls className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- EVENTS PAGE (VIDEOS + PHOTOS) ---
function EventsPage() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-10">Events</h1>

      {/* Videos */}
      <h2 className="text-2xl font-semibold mb-6">Videos</h2>
      <div className="grid md:grid-cols-3 gap-10 mx-auto max-w-6xl mb-16">
        {eventsVideos.map((v, i) => (
          <div key={i} className="w-[260px] mx-auto bg-neutral-900 p-4 rounded-2xl">
            <div className="w-[250px] h-[500px] rounded-3xl overflow-hidden border-4 border-neutral-700">
              <video src={v} controls className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>

      {/* Photos */}
      <h2 className="text-2xl font-semibold mb-6">Photo Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mx-auto max-w-4xl">
        {eventsPhotos.map((p, i) => (
          <img key={i} src={p} className="w-full h-48 object-cover rounded-xl" />
        ))}
      </div>
    </div>
  );
}

// --- STORIES PAGE (INSTAGRAM STORIES FORMAT) ---
function StoryPage() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-10">Stories</h1>

      <div className="grid md:grid-cols-3 gap-10 mx-auto max-w-6xl">
        {storyVideos.map((v, i) => (
          <div key={i} className="w-[260px] mx-auto bg-neutral-900 p-4 rounded-2xl">
            <div className="w-[250px] h-[500px] rounded-3xl overflow-hidden border-4 border-neutral-700">
              <video src={v} controls className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
