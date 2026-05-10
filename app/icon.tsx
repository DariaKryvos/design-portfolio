import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#2d1547",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          fontWeight: 900,
          fontSize: 22,
          color: "#ffffff",
          letterSpacing: "-1px",
          gap: 1,
        }}
      >
        <span>D</span>
        <span style={{ color: "#f97316" }}>.</span>
      </div>
    ),
    { ...size }
  );
}
