import React, { useRef, useEffect } from "react";
import rough from "roughjs/bundled/rough.esm";

const SketchPad = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    // Add a check to ensure the canvas is available
    if (!canvas) return;

    const context = canvas.getContext("2d");
    const rc = rough.canvas(canvas);

    // Draw a sample rectangle
    rc.rectangle(10, 10, 200, 200); // x, y, width, height
  }, []);

  return <canvas ref={canvasRef} width={800} height={600}></canvas>;
};

export default SketchPad;