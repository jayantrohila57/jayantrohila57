import { redirect } from "next/navigation";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  redirect("/api/image?type=icon&size=32");
}
