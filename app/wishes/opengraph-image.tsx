import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          color: "#FFF8E7",
          background:
            "linear-gradient(180deg, #1B4332 0%, #0c1d15 52%, #050806 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 15% 20%, rgba(212,175,55,0.2), transparent 42%), radial-gradient(circle at 85% 18%, rgba(255,248,231,0.12), transparent 38%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 70,
            left: "50%",
            width: 120,
            height: 120,
            marginLeft: -60,
            borderRadius: "999px",
            background: "#D4AF37",
            boxShadow: "0 0 40px rgba(212,175,55,0.55)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 70,
            left: "50%",
            width: 120,
            height: 120,
            marginLeft: -25,
            borderRadius: "999px",
            background: "#0c1d15",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 180,
            background: "#000",
          }}
        />

        <div
          style={{
            margin: "auto",
            width: 980,
            padding: "40px 56px",
            borderRadius: 30,
            border: "2px solid rgba(212,175,55,0.5)",
            background:
              "linear-gradient(135deg, rgba(255,248,231,0.12), rgba(45,106,79,0.14))",
            boxShadow:
              "0 0 0 1px rgba(212,175,55,0.15), 0 20px 70px rgba(0,0,0,0.45)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 56, fontWeight: 700, color: "#FFF8E7" }}>
            عيد مبارك
          </div>
          <div
            style={{
              marginTop: 10,
              fontSize: 68,
              lineHeight: 1.1,
              fontWeight: 700,
              color: "#FFF8E7",
            }}
          >
            Selamat Hari Raya Aidilfitri
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 30,
              color: "#D4AF37",
              letterSpacing: 0.5,
            }}
          >
            1 Syawal 1447H • 21 March 2026
          </div>
          <div
            style={{
              marginTop: 18,
              width: 560,
              height: 2,
              background:
                "linear-gradient(90deg, rgba(212,175,55,0), rgba(212,175,55,1), rgba(212,175,55,0))",
            }}
          />
          <div style={{ marginTop: 18, fontSize: 34, color: "#FFF8E7" }}>
            Maaf Zahir &amp; Batin 🌙
          </div>
        </div>
      </div>
    ),
    size
  );
}
