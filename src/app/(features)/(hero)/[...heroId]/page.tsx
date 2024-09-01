import { HeroProfile } from "@/app/(features)/(hero)/[...heroId]/components/Profile/Profile";

export default function Hero() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#E7F6E7",
      }}
    >
      <HeroProfile />
    </div>
  );
}
