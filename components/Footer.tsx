import Image from "next/image"

export default function Footer() {
  return (
    <div className="grid w-full">
      <div className="justify-self-center">
        <Image src="/line.svg" alt="line" width={90} height={90} className="mt-6" />
      </div>

      <div className="grid grid-cols-2 mt-10 mb-8 text-xs w-full">
        <div className="justify-self-start">2025 © Rahul Rajkumar</div>
        <div className="justify-self-end">
          <div className="grid grid-cols-4 gap-4 pr-2">
            <a
              href="https://github.com/alt-rahul"
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-600 transition-colors duration-200"
            >
              <div>
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7 0.175049C3.128 0.175049 0 3.30305 0 7.17505C0 10.259 2.013 12.885 4.79 13.825C5.14 13.891 5.272 13.672 5.272 13.497V12.316C3.325 12.731 2.909 11.375 2.909 11.375C2.581 10.565 2.122 10.347 2.122 10.347C1.488 9.90905 2.166 9.93105 2.166 9.93105C2.866 9.97505 3.237 10.653 3.237 10.653C3.872 11.725 4.878 11.419 5.272 11.243C5.338 10.784 5.512 10.478 5.709 10.303C4.156 10.128 2.516 9.51605 2.516 6.84705C2.516 6.08105 2.778 5.46905 3.237 4.96605C3.172 4.79105 2.931 4.06905 3.303 3.10605C3.303 3.10605 3.893 2.90905 5.228 3.82805C5.79831 3.67179 6.38668 3.5911 6.978 3.58805C7.568 3.58805 8.181 3.67505 8.728 3.82805C10.063 2.93105 10.653 3.10605 10.653 3.10605C11.025 4.06905 10.784 4.79105 10.719 4.96605C11.179 5.44605 11.441 6.08105 11.441 6.84605C11.441 9.53705 9.8 10.128 8.247 10.303C8.487 10.522 8.728 10.937 8.728 11.593V13.519C8.728 13.716 8.859 13.934 9.209 13.847C11.988 12.884 14 10.259 14 7.17505C14 3.30305 10.872 0.175049 7 0.175049V0.175049Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=rahulrajkumar.personal@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-600 transition-colors duration-200"
            >
              <div>
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 512.000000 512.000000"
                >
                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="none">
                    <path
                      fill="currentColor"
                      d="M704 4070 c-109 -16 -212 -83 -273 -178 -64 -100 -62 -47 -59 -1358
                        3 -1159 4 -1190 23 -1237 43 -104 129 -188 232 -227 46 -17 82 -22 173 -23
                        l115 -2 5 1093 5 1092 819 -649 c451 -358 822 -649 825 -647 3 3 362 279 796
                        615 l790 610 5 -1057 5 -1057 90 -3 c115 -4 216 12 281 43 65 32 147 119 182
                        192 l27 58 0 1225 0 1225 -26 55 c-38 81 -109 154 -186 192 -58 28 -79 33
                        -163 36 l-96 4 -827 -702 c-456 -386 -834 -699 -840 -696 -7 2 -396 320 -866
                        705 l-853 701 -67 -1 c-36 -1 -89 -5 -117 -9z"
                    />
                  </g>
                </svg>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/rahulrajkumar01/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-600 transition-colors duration-200"
            >
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 16 16">
                  <path
                    fill="currentColor"
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                  />
                </svg>
              </div>
            </a>
            <a
              href="https://twitter.com/rahulrajkumar01"
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-600 transition-colors duration-200"
            >
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 16 16">
                  <path
                    fill="currentColor"
                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

