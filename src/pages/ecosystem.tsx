import Link from "next/link";
import { BackgroundRings } from "~/components/home-background-rings";
import {
  HomeFeature,
  HomeFeatureSection,
} from "~/components/home/home-feature-section";
import { HomeHeader } from "~/components/home/home-header";
import { HomeIntro } from "~/components/home/home-intro";
import { HomePartners } from "~/components/home/home-partners";
import { HomeProducts } from "~/components/home/home-products";
import { Layout } from "~/components/layout";

export default function Ecosystem() {
  return (
    <Layout>
      <div className="relative">
        <BackgroundRings className="top-20 md:top-0" />
        <div className="relative space-y-32 py-32 md:space-y-60">
          <HomeHeader title="The first Defi Ecosystem Powered By Memefi. Focused On Rwa And Mining" />
          <HomeIntro />
          <HomeProducts
            title="Gems DAO Products"
            text="Backed a skilled team with tons of onchain experience"
          />
          <HomeFeatureSection />
          <HomePartners
            title="Our Partners"
            text="Backed a skilled team with tons of onchain experience"
          />
          <HomeFeature
            title="Join the community"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaPhasellus egestas tellus rutrum tellus pellentesque eu. Enim neque volutpat ac tincidunt vitae semper. Phasellus egestas tellus rutrum tellus pellentesque eu Enim neque volutpat."
            button={
              <Link
                href=""
                className="mx-auto flex h-12 w-64 items-center justify-center rounded-xl text-center md:mx-0"
                style={{
                  background: "linear-gradient(0deg, #7806EA 0%, #C387FF 100%)",
                }}
              >
                Join on Discord
              </Link>
            }
            svg={
              <svg
                width="344"
                height="359"
                viewBox="0 0 344 359"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[200px] w-[200px] md:h-auto md:w-auto"
              >
                <path
                  d="M330.609 12.2096C313.247 -4.5091 285.513 -3.99381 268.783 13.3602C253.895 28.8048 252.667 52.4658 264.817 69.2692L201.967 133.8C193.506 127.765 183.156 124.211 171.995 124.211C159.286 124.211 147.64 128.817 138.625 136.444L95.1503 98.3407C102.29 84.922 99.5748 67.8433 87.6572 57.3963C80.9198 51.4917 72.2898 48.5623 63.3489 49.1517C54.4081 49.7376 46.2336 53.7681 40.326 60.5022C34.4184 67.2363 31.4876 75.8621 32.0773 84.7985C32.6635 93.7349 36.696 101.905 43.4334 107.81C49.7894 113.379 57.6709 116.115 65.5241 116.111C72.3992 116.111 79.2496 114.011 85.0265 109.892L128.488 147.985C123.293 156.043 120.278 165.628 120.278 175.906C120.278 187.726 124.268 198.628 130.974 207.346L68.1372 271.863C60.7465 266.869 52.0176 264.264 42.9073 264.437C31.2298 264.656 20.3363 269.403 12.2324 277.81C4.13553 286.214 -0.207755 297.271 0.00764387 308.943C0.226574 320.614 4.97594 331.503 13.3871 339.603C21.5969 347.508 32.3351 351.832 43.7018 351.832C43.9807 351.832 44.2597 351.832 44.5387 351.825C56.2161 351.606 67.1096 346.859 75.2135 338.452C90.1043 323.007 91.3296 299.346 79.179 282.543L142.029 218.012C148.513 222.635 156.105 225.801 164.321 227.029V268.948C142.948 272.604 126.627 291.257 126.627 313.647C126.627 338.657 146.984 359 172.002 359C197.02 359 217.377 338.653 217.377 313.647C217.377 291.257 201.056 272.604 179.682 268.948V227.029C193.263 225 205.131 217.673 213.118 207.226L263.797 235.034C259.725 249.681 266.078 265.771 279.973 273.395C285.079 276.197 290.605 277.528 296.057 277.528C307.911 277.528 319.419 271.242 325.514 260.142C329.825 252.293 330.821 243.236 328.314 234.639C325.81 226.041 320.104 218.933 312.251 214.623C298.356 207 281.364 210.279 271.187 221.576L220.533 193.782C222.592 188.209 223.722 182.192 223.722 175.913C223.722 164.093 219.732 153.191 213.026 144.473L275.866 79.9526C283.225 84.9079 291.749 87.3714 300.27 87.3714C311.739 87.3714 323.197 82.8997 331.764 74.0127C339.868 65.6057 344.211 54.5481 343.992 42.8764C343.773 31.2048 339.024 20.3166 330.613 12.2167L330.609 12.2096ZM280.174 235.26C283.479 229.246 289.715 225.836 296.138 225.836C299.094 225.836 302.088 226.556 304.857 228.074C309.112 230.41 312.205 234.261 313.561 238.92C314.917 243.579 314.38 248.488 312.043 252.741C307.219 261.522 296.145 264.744 287.36 259.923C278.574 255.102 275.351 244.034 280.174 235.253V235.26ZM53.5642 96.2655C49.913 93.0643 47.7273 88.6349 47.4095 83.7926C47.0917 78.9503 48.6807 74.2739 51.8799 70.6245C55.0826 66.9751 59.5106 64.7904 64.3588 64.4727C64.7649 64.4445 65.171 64.4339 65.5736 64.4339C69.9804 64.4339 74.1895 66.0116 77.5335 68.9445C85.0689 75.548 85.8246 87.0502 79.2178 94.5855C72.6076 102.117 61.0996 102.872 53.5642 96.2655ZM64.1505 327.8C58.8927 333.253 51.8269 336.334 44.2526 336.475C36.6748 336.624 29.5031 333.8 24.044 328.548C18.5884 323.293 15.5057 316.231 15.3645 308.66C15.2233 301.09 18.0411 293.918 23.2954 288.462C28.5533 283.009 35.619 279.928 43.1933 279.786C43.3734 279.786 43.5535 279.783 43.7371 279.783C51.1101 279.783 58.077 282.589 63.4019 287.717C74.6662 298.563 74.9981 316.545 64.147 327.804L64.1505 327.8ZM202.013 313.647C202.013 330.19 188.548 343.647 171.998 343.647C155.448 343.647 141.984 330.19 141.984 313.647C141.984 297.105 155.448 283.648 171.998 283.648C188.548 283.648 202.013 297.105 202.013 313.647ZM171.998 212.245C151.952 212.245 135.642 195.942 135.642 175.906C135.642 155.87 151.952 139.568 171.998 139.568C192.044 139.568 208.355 155.87 208.355 175.906C208.355 195.942 192.044 212.245 171.998 212.245ZM320.701 63.3504C315.143 69.1174 307.713 72.0186 300.27 72.0186C293.183 72.0186 286.089 69.3892 280.594 64.0986C269.33 53.2528 268.998 35.2706 279.849 24.0119C285.407 18.2449 292.84 15.3437 300.28 15.3437C307.72 15.3437 314.461 17.9731 319.956 23.2636C325.411 28.5189 328.494 35.5812 328.635 43.1517C328.776 50.7223 325.959 57.894 320.701 63.3504Z"
                  fill="url(#paint0_linear_154_2723)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_154_2723"
                    x1="0"
                    y1="179.5"
                    x2="344"
                    y2="179.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#875CFF" />
                    <stop offset="0.39" stopColor="#FF5995" />
                    <stop offset="0.68" stopColor="#FFD911" />
                    <stop offset="1" stopColor="#45FF9C" />
                  </linearGradient>
                </defs>
              </svg>
            }
            reverse
          />
        </div>
      </div>
    </Layout>
  );
}
