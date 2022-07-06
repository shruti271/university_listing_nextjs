import Image from "next/image";
import CoverImage from "../../assets/steps-cover-1.png";

export default function Step() {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2"
      style={{ height: "100vh" }}
    >
      <div
        className="p-4 cover-image hidden sm:block animate__animated animate__zoomIn"
        style={{ height: "calc(100vh - 30px)" }}
      >
        <Image src={CoverImage} alt="CoverImage" />
      </div>
      <div className="p-4 ml-0 sm:ml-4 md:ml-4 lg:ml-12 animate__animated animate__zoomIn">
        Hello
      </div>
    </div>
  );
}
