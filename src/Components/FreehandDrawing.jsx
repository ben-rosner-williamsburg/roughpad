import React, { useRef, useState, useEffect } from 'react';
import rough from 'roughjs/bundled/rough.cjs';

const FreehandDrawing = ({ color, strokeWidth, onDraw }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const rc = rough.canvas(canvas);

    if (points.length > 1) {
      rc.line(points[0].x, points[0].y, points[1].x, points[1].y, {
        stroke: color,
        strokeWidth,
      });
    }
  }, [points]);

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    const { offsetX, offsetY } = e.nativeEvent;
    setPoints([{ x: offsetX, y: offsetY }]);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;

    const { offsetX, offsetY } = e.nativeEvent;
    setPoints((prevPoints) => [...prevPoints, { x: offsetX, y: offsetY }]);

    onDraw({ x1: points[points.length - 1]?.x, y1: points[points.length - 1]?.y, x2: offsetX, y2: offsetY });
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    setPoints([]);
  };

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      style={{ border: '1px solid #000' }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    />
  );
};

export default FreehandDrawing;
