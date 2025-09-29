import React, { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";

const locations = [
  { name: "Australia", coords: [-25.2744, 133.7751] },
  { name: "Switzerland", coords: [46.8182, 8.2275] },
  { name: "Ireland", coords: [53.3331, -8.0] },
  { name: "Netherlands", coords: [52.3676, 4.9041] },

        
];

const LiveMap = () => {
  const globeRef = useRef();
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  // Watch theme change
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDarkMode(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  // Globe auto rotate + default zoom
  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.7;

      // ✅ Default zoom (move camera closer to Earth)
      globeRef.current.camera().position.z = 280; // smaller = more zoom, default is ~500
    }
  }, []);

  return (
    <div className="bg-card dark:bg-dm-card p-6 rounded-xl shadow-md flex flex-col h-full">
      <h3 className="text-lg font-bold mb-4 text-text-primary dark:text-dm-text-primary">
        🌍 Global Office Locations
      </h3>

      <div className="relative flex-grow h-[750px] w-full overflow-hidden flex items-center justify-center">
        <Globe
          ref={globeRef}
          width={undefined}
          height={750}
          globeImageUrl={
            darkMode
              ? "//unpkg.com/three-globe/example/img/earth-night.jpg"
              : "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          }
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundImageUrl={
            darkMode
              ? "//unpkg.com/three-globe/example/img/night-sky.png"
              : "//unpkg.com/three-globe/example/img/sky.png"
          }
          pointsData={locations}
          pointLat={(d) => d.coords[0]}
          pointLng={(d) => d.coords[1]}
          pointColor={() => "#99ed07ff"}
          pointAltitude={0.05}
          pointRadius={0.45}
          pointLabel={(d) =>
            `<b>${d.name}</b><br/>Status: <span style="color:#3b82f6">LIVE</span>`
          }
          labelsData={locations}
          labelLat={(d) => d.coords[0]}
          labelLng={(d) => d.coords[1]}
          labelText={(d) => d.name}
          labelColor={() => (darkMode ? "white" : "white")}
          labelSize={1.2}
          labelDotRadius={0.35}
          ringsData={locations}
          ringLat={(d) => d.coords[0]}
          ringLng={(d) => d.coords[1]}
          ringColor={() => "#5869ccff"}
          ringMaxRadius={4}
          ringPropagationSpeed={2}
          ringRepeatPeriod={1200}
        />
      </div>

      <style>{`
        .bg-card canvas, .dark .dark\\:bg-dm-card canvas {
          border-radius: 12px !important;
          max-width: 100% !important;
          max-height: 100% !important;
          object-fit: contain !important;
        }
      `}</style>
    </div>
  );
};

export default LiveMap;
