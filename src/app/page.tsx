import Image from "next/image";
import Link from "next/link";

const links = [
  {
    url: "https://shard.dog/ethistanbul",
    title: "Start Hackin' here",
    description: "Get your near wallet and some free tokens to get you started",
  },
  {
    url: "https://docs.near.org/bos",
    title: "Dev Resources",
    description: "Build decentralized frontends for all chains",
  },
  {
    url: "https://docs.near.org/bos/tutorial/ethers-js",
    title: "For ETH Devs",
    description: "Dev resources for Ethereum developers",
  },
  {
    url: "https://t.me/NEARisBOS",
    title: "Dev Hub",
    description: "The Telegram channel for decentralized frontend builders",
  },
  {
    url: "https://jutsu.ai/",
    title: "Web IDE",
    description: "The fastest way to build and deploy decentralized frontend apps",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 font-sans">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <h1 className="fixed p-4 gap-1 left-0 top-0 flex flex-col items-center w-full justify-center border-b border-gray-300 bg-gradient-to-b backdrop-blur-2xl dark:border-neutral-800 dark:from-inherit lg:border lg:p-4 bg-[#07EB97]/80">
          <span className="text-4xl md:text-5xl font-head">
            <span className="text-black font-bold">React</span>
            <span className="">OnChain</span>
            <span className="text-black font-bold">.dev</span>
          </span>
          <span className="text-black text-lg">decentralize the frontend</span>
        </h1>
        <div className="fixed bottom-0 left-0 flex h-20 w-full items-end justify-center bg-gradient-to-b backdrop-blur-2xl dark:border-neutral-800 dark:from-inherit">
          <a
            className="flex place-items-center items-center gap-2 p-8 lg:pointer-events-auto"
            href="https://near.org?utm_source=reactonchain.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-gray-400">powered by</span>{" "}
            <Image
              src="/near-logo.svg"
              alt="NEAR Logo"
              className="dark:invert"
              width={16}
              height={16}
              priority
            />
            <span className="text-[#07EB97]">NEAR Protocol</span>
          </a>
        </div>
      </div>
      <h2 className="text-gray-200 px-14 py-6 text-center text-lg mb-auto">
        by storing the React JSX components on the blockchain
      </h2>
      <div className="space-x-2 mb-2 md:mb-10 bg-yellow-200 text-black text-center p-4 mx-12 max-w-2xl text-lg">
        <span>
          <b>$10_000</b> in prizes for the best decentralized frontend apps built at{" "}
          <b>ETHGlobal Istanbul.</b>
        </span>
        <Link
          href="https://ethglobal.com/events/istanbul/prizes#near-protocol"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Click here to see full details.
        </Link>
      </div>
      <div className="grid lg:max-w-5xl text-left mb-auto">
        {links.map(({ url, title, description }) => (
          <a
            href={url}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
            key={url}
          >
            <h2 className="mb-3 text-2xl font-semibold">
              {title}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">{description}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
