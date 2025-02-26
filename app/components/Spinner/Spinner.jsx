import { FadeLoader } from "react-spinners";

export default function Spinner() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <FadeLoader speedMultiplier={2} />
    </div>
  );
}
