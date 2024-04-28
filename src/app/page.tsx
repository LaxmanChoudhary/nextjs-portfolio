import NextLinkButton from "@/components/next-link-btn";

export default function Home() {
  return (
    <div className="m-10">
      <div className="flex h-[300px] place-items-center w-full">
        <div>
          <p>Page is under construction...</p>
          <p className="text-xl sm:text-2xl font-bold">
            Please check other routes, eg.
            <NextLinkButton to={"/portfolio"}>/portfolio</NextLinkButton>
          </p>
        </div>
      </div>
    </div>
  );
}
