import { redirect } from "next/navigation";

export default function ExperimentsRedirectPage() {
  redirect("/work?type=personal#lab");
}
