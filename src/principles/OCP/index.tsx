import { Button } from "./button";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";

export function OCP() {
  return (
    <div className="flex space-x-10">
      <Button
        text="Go Home"
        icon={<HiOutlineArrowNarrowRight />}
      />
      <Button
        text="Go Back"
        icon={<HiOutlineArrowNarrowLeft />}
      />
    </div>
  );
}
