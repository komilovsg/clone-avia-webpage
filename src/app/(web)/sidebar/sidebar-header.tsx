import Image from "next/image";

function AppSideBarHeader() {
  return (
    <>
      <div className="flex h-[68px] items-center justify-center border-b border-gray-700 dark:border-[#ffffff1a]">
        <Image
          src="/logo.svg"
          alt="Next.js Logo"
          width={90}
          height={20}
          priority
        />
      </div>
    </>
  );
}

export default AppSideBarHeader;
