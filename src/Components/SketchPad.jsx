import React, { useRef, useEffect } from "react";
import rough from "roughjs/bundled/rough.esm";

const SketchPad = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const rc = rough.canvas(canvas);

    // Sample rectangle
    rc.rectangle(10, 10, 200, 200); // x, y, width, height
  }, []);

  return <canvas ref={canvasRef} width={800} height={600}></canvas>;
};

export default SketchPad;