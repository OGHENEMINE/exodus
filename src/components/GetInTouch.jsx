import React from "react";

const GetInTouch = () => {
  return (
    <section class="bg-black py-16 px-6 text-center text-white">
      <div class="space-y-6 max-w-2xl mx-auto">
        <h2 class="text-4xl font-bold font-primary">Get in Touch</h2>
        <p class="text-lg leading-relaxed">
          Whether you're a model, brand, scout, or bold visionary — we're always
          open to conversations and collaborations.
        </p>

        <div class="flex max-sm:flex-col items-center gap-5 justify-center">
          {/* Email */}
          {/* <div class="flex items-center gap-2">
                <svg
                  class="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.08 1.914l-7.5 4.5a2.25 2.25 0 01-2.28 0l-7.5-4.5a2.25 2.25 0 01-1.08-1.914V6.75"
                  />
                </svg>
                <a
                  href="mailto:hello@exodusgroup.com"
                  class="transition-all duration-300 ease-in-out hover:underline hover:text-gray-300"
                  >hello@exodusgroup.com</a
                >
              </div> */}

          {/* Phone */}
          <div class="flex items-center gap-2">
            <svg
              class="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75A2.25 2.25 0 014.5 4.5h2.249a1.5 1.5 0 011.415 1.012l.766 2.298a1.5 1.5 0 01-.34 1.57l-.835.835a16.016 16.016 0 006.242 6.242l.835-.835a1.5 1.5 0 011.57-.34l2.298.766A1.5 1.5 0 0119.5 17.25V19.5a2.25 2.25 0 01-2.25 2.25H18a15.75 15.75 0 01-15.75-15.75v0z"
              />
            </svg>
            <p class="transition-all duration-300 ease-in-out hover:text-gray-300">
              +234 701 662 3126
            </p>
          </div>

          <span>&bull;</span>

          {/* Instagram */}
          <div class="flex items-center gap-2">
            <svg
              class="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.25 2a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
            </svg>
            <a
              href="https://instagram.com/exodusmodelsafrica"
              target="_blank"
              class="transition-all duration-300 ease-in-out hover:underline hover:text-gray-300"
            >
              @exodusgroup
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
