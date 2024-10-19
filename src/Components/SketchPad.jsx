import React, { useRef, useEffect } from "react";
import rough from "roughjs/bundled/rough.cjs";
import FreehandDrawing from "./FreehandDrawing";

const SketchPad = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const rc = rough.canvas(canvas);

    // Sample rectangle
    rc.rectangle(10, 10, 200, 200); // x, y, width, height
  }, []);

  return (
    <div>
      <FreehandDrawing />
    </div>
  );
};

export default SketchPad;
