import Link from "next/link"
import { SVGProps } from "react";
// import MaxWidthWrapper from "../global/max-width-wrapper";
import MaxWidthWrapper from "@repo/ui/components/max-width-wrapper.tsx";


const Footer = () => {
  return (
    <footer className="bg-[#fcfdff] dark:bg-gray-900 w-full py-12">
      {/* <div className=" px-1"> */}
      <MaxWidthWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-center text-center">
          <div className="flex flex-col items-center gap-4 lg:items-start lg:text-left">
            <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
              <Gorlabs className="w-6 h-6" />
              <span className="text-4xl">Gorlabs</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Our mission is to providing best AI saas tools by making Gorlabs effortless, affordable, and accessible to all.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm font-medium lg:text-base">
            <div className="flex flex-col gap-1.5 lg:text-left">
              <h4 className="font-semibold">Product</h4>
              <nav className="flex flex-col gap-2">
                <Link className="text-gray-500 dark:text-gray-400 hover:underline" href="#section-plans">
                  Pricing
                </Link>
                <Link className="text-gray-300 dark:text-gray-600 pointer-events-none hover:underline" href="#">
                  Features
                </Link>
                <Link className="text-gray-300 dark:text-gray-600 pointer-events-none hover:underline" href="#">
                  How It Works
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-1.5 lg:text-left">
              <h4 className="font-semibold">Legal</h4>
              <nav className="flex flex-col gap-2">
                <Link className="text-gray-500 dark:text-gray-400 hover:underline" href="mailto:hello@gorlabs.com">
                  Support
                </Link>
                <Link className="text-gray-500 dark:text-gray-400 hover:underline" href="mailto:bugs@gorlabs.com">
                  Bug Report
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <hr className="border-gray-200 dark:border-gray-800 w-full mx-auto my-12" />
        <div className="flex flex-col lg:flex-row items-center justify-between text-sm lg:text-base">
          <p className="mb-4 text-gray-500 dark:text-gray-400 lg:order-2">2024 © Gorlabs. All rights reserved.</p>
          <div className="flex gap-4 lg:gap-8 lg:order-1">
            <Link className="text-gray-300 dark:text-gray-600 pointer-events-none hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-gray-300 dark:text-gray-600 pointer-events-none hover:underline underline-offset-4" href="#">
              Privacy Policy
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
      {/* </div> */}
    </footer>
  )
};

export default Footer

function Gorlabs(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="52"
      height="75"
      viewBox="0 0 52 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.5 0C33.567 0 32 1.567 32 3.5C32 5.433 30.433 7 28.5 7H23C21.3431 7 20 5.65685 20 4C20 2.34315 18.6569 1 17 1H5C2.23858 1 0 3.23858 0 6V18C0 19.6569 1.34315 21 3 21C4.65685 21 6 22.3431 6 24V28C6 29.6569 4.65685 31 3 31C1.34315 31 0 32.3431 0 34V46C0 48.7614 2.23858 51 5 51H12.9792C14.3053 51 15.577 51.5268 16.5147 52.4645L22.5355 58.4853C23.4732 59.423 24 60.6947 24 62.0208V70C24 72.7614 26.2386 75 29 75H39C41.7614 75 44 72.7614 44 70V60C44 57.2386 41.7614 55 39 55H31.0208C29.6947 55 28.423 54.4732 27.4853 53.5355L21.4645 47.5147C20.5268 46.577 20 45.3053 20 43.9792V34.5C20 32.567 18.433 31 16.5 31C14.567 31 13 29.433 13 27.5V24.5C13 22.567 14.567 21 16.5 21C18.433 21 20 19.433 20 17.5C20 15.567 21.567 14 23.5 14H29C30.6569 14 32 15.3431 32 17C32 18.6569 33.3431 20 35 20H47C49.7614 20 52 17.7614 52 15V5C52 2.23858 49.7614 0 47 0H35.5ZM30.3982 49.2356C32.3977 50.4145 34.6764 51.0364 36.9974 51.0371V51.0021C39.1247 51.0023 41.2197 50.4805 43.0983 49.4826C44.977 48.4845 46.5821 47.0407 47.7727 45.2779C48.9635 43.5149 49.7034 41.4868 49.9276 39.3714C50.1518 37.2559 49.8535 35.1177 49.0588 33.1445C48.2642 31.1711 46.9973 29.423 45.3696 28.0533C43.7419 26.6836 41.803 25.7342 39.7228 25.2885C37.6428 24.8428 35.485 24.9144 33.439 25.497C31.393 26.0795 29.5212 27.1551 27.9877 28.6296C27.8792 28.6176 27.7696 28.6176 27.6609 28.6296C27.1781 28.6296 26.715 28.8213 26.3737 29.1628C26.0322 29.5043 25.8403 29.9674 25.8403 30.4502C25.8383 30.687 25.8861 30.9216 25.9804 31.1388C24.749 33.1063 24.0669 35.3676 24.0047 37.6879C23.9425 40.0083 24.5027 42.3028 25.627 44.3335C26.7512 46.3642 28.3988 48.0568 30.3982 49.2356ZM36.9974 26.2023C34.0541 26.1958 31.2148 27.2907 29.038 29.2717C29.3248 29.5936 29.4863 30.0077 29.4932 30.4387C29.4932 30.6788 29.4457 30.9165 29.3535 31.1382C29.2613 31.3598 29.1262 31.561 28.9558 31.7302C28.7855 31.8994 28.5835 32.0333 28.3611 32.1241C28.1389 32.2149 27.901 32.2609 27.6609 32.2593C27.35 32.2596 27.0445 32.1792 26.774 32.0259C25.449 34.2761 24.9047 36.9011 25.2257 39.4925C25.5468 42.084 26.7151 44.4968 28.549 46.3557C30.3831 48.2145 32.7799 49.4153 35.3668 49.7713C37.9537 50.1272 40.5857 49.6185 42.8536 48.324C45.1214 47.0296 46.898 45.0221 47.907 42.6136C48.9161 40.2051 49.1011 37.5307 48.4331 35.0064C47.7652 32.4819 46.2818 30.249 44.2138 28.6547C42.1456 27.0603 39.6087 26.1941 36.9974 26.1906V26.2023ZM36.9974 41.8642C36.2421 41.8642 35.5038 41.6402 34.8759 41.2202C34.2481 40.8003 33.759 40.2036 33.4705 39.5057C33.182 38.8077 33.1071 38.0398 33.2553 37.2992C33.4035 36.5586 33.7681 35.8785 34.303 35.3453C34.8379 34.8121 35.519 34.4496 36.26 34.3036C37.0011 34.1577 37.7688 34.2349 38.4659 34.5255C39.163 34.8161 39.7583 35.3071 40.1762 35.9363C40.5941 36.5653 40.816 37.3043 40.8137 38.0596C40.8137 38.5602 40.7148 39.0559 40.5229 39.5183C40.331 39.9806 40.0497 40.4006 39.6952 40.754C39.3407 41.1075 38.9199 41.3875 38.4569 41.578C37.9939 41.7685 37.4979 41.8658 36.9974 41.8642Z"
        fill="#4845D2"
      />
    </svg>

  )
}
