export default function navbar() {
  return `      
  <div>
      <nav class="p-4 flex">
        <div class="flex">
          <a class="logoImg" href=""></a>
          <a class="Button ml-5" href="">
            <img
              class="mr-[13px]"
              src="https://s.imgur.com/desktop-assets/desktop-assets/icon-new-post.13ab64f9f36ad8f25ae3544b350e2ae1.svg"
              alt=""
            />
            <span>New Post</span>
          </a>
        </div>

        <div class="NavbarContainer-center">
          <div class="Searchbar">
              <input
                placeholder="Images, #tags, @users oh my!"
                type="text"
                class="Searchbar-textInput" id="Searchbar"
                value=""
                style="height: 36px"
              /><button type="submit" class="Searchbar-submitInput">
                <img
                  class="search"
                  src="https://s.imgur.com/desktop-assets/desktop-assets/icon-search.8d0f9b564a4659d48d8eca38b968a7f2.svg"
                />
              </button>
          </div>
        </div>

        <div class="NavbarContainer-right">
          <div class="ProfileNavbar ProfileNavbar-loggedOut flex">
            <div class="NavbarNotifications NavbarNotifications-navbar">
              <div class="ProfileNavbar-item uScaleTransition">
                <a title="Top Comments" href="/leaderboard"
                  ><svg
                    width="32"
                    height="32"
                    viewBox="0 -2 34 34"
                    class="uScaleTransition ProfileNavbar-item"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Comment Leaderboard</title>
                    <g fill="none" fill-rule="evenodd">
                      <path d="M0 0h32v32H0z"></path>
                      <g
                        transform="translate(6.5 3)"
                        stroke="#ffffff"
                        stroke-width="2"
                      >
                        <path
                          d="M4 16.977v7.076l5.5-2.481 5.5 2.481v-7.076l-5.5 1.245L4 16.977z"
                        ></path>
                        <circle cx="9.5" cy="9.5" r="8.5"></circle>
                      </g>
                    </g></svg
                ></a>
              </div>
            </div>
            <a
              class="EmeraldButton Button"
              href="https://imgur.com/signin?redirect=%2F
              >Go Ad-Free</a
            ><a
              class="Navbar-signin"
              href="https://imgur.com/signin?redirect=%2F"
              >Sign in</a
            ><a
              class="ButtonLink Button Navbar-signup"
              title="Sign up"
              href="https://imgur.com/register?redirect=%2F"
              ><span class="Button-label">Sign up</span></a
            >
          </div>
        </div>
      </nav>
      <h1 class="text-[24px] font-bold text-center text-[#aed8ea]">'Tis better to have memed and been downvoted than to never have memed at all.</h1>
      <div>
      <div
          class="grid grid-cols-2 mx-[100px] mt-8 justify-between text-[#aed8ea] font-bold"
        >
          <div class="text-left">EXPLORE TAGS</div>
          <div class="text-right">MORE TAGS +</div>
        </div>
        <div
          class="home01 grid grid-cols-3 mx-[0px] sm:grid-cols-5 sm:mx-[0px] md:grid-cols-5 lg:grid-cols-10 md:mx-[100px] mt-2"
        >
        </div>
      </div>
    </div>`;
}
