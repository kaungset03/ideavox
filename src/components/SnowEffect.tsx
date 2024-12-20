"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Snow = ({ amount, size }: { amount: number; size: number }) => {
  const { theme } = useTheme();
  const [snowflakes, setSnowflakes] = useState<
    Array<{ id: number; left: number; animationDuration: number }>
  >([]);

  useEffect(() => {
    const newSnowflakes = Array.from({ length: amount }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      animationDuration: 5 + Math.random() * 10,
    }));
    setSnowflakes(newSnowflakes);
  }, [amount]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {snowflakes.map((snowflake) => (
        <div
          key={snowflake.id}
          className="absolute rounded-full"
          style={{
            left: `${snowflake.left}%`,
            width: `${size}px`,
            height: `${size}px`,
            background:
              theme === "dark"
                ? "rgba(255, 255, 255, 0.8)"
                : "rgba(200, 200, 200, 0.8)",
            animation: `fall ${snowflake.animationDuration}s linear infinite`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-10px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export function SnowEffect() {
  const [isSnowing, setIsSnowing] = useState(true);

  return (
    <>
      <button
        onClick={() => setIsSnowing(!isSnowing)}
        className="fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
      >
        {isSnowing ? "❄️" : "☀️"}
      </button>
      {isSnowing && <Snow amount={50} size={5} />}
    </>
  );
}
