import { FadeLoader } from "react-spinners";
export default function loading() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
     <FadeLoader /> 
    </div>
  );
}
