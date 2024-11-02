import { MdOutlineLightMode, MdLightMode } from "react-icons/md";

function BackgroundColor({ color }) {
  return (
    <div className={`background-toggle ${color ? "dark-mode" : "light-mode"}`}>
      {color ? <MdOutlineLightMode /> : <MdLightMode />}
    </div>
  );
}

export default BackgroundColor;
