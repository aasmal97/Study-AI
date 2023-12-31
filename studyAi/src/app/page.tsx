import Link from "next/link";
import NavigationWrapper from "./util/components/navigation/navigationWrapper";
export default function Home() {
  return (
    <NavigationWrapper
      appBars={{
        navbar: true,
        footer: true,
      }}
    >
      <Link href={"/about"}>About</Link>
      <Link href={"/auth/login"}>Login</Link>
      <Link href={"/auth/signup"}>Sign Up</Link>
      <Link href={"/dashboard"}>Dashboard</Link>
      <Link href={"/dashboard/exams"}>Exams Library</Link>
      <Link href={"/dashboard/questions"}>Questions Library</Link>
      <Link href={"/library/question/653ad11c215e46561c12e643"}>
        Questions Page
      </Link>
      <Link href={"/library/exam"}>Exam Page</Link>
    </NavigationWrapper>
  );
}
