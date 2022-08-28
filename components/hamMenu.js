function hamMenu() {
  return `
    <div id="layer1">
        <div id="logo">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 143 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.404053 8.24483L15.821 0.258789L31.4041 8.24483L15.821 16.2588L0.404053 8.24483ZM92.9582 12.1276V11.9375C92.9582 9.30306 94.5076 8.46113 97.1172 8.65125V3.84414C90.8651 3.46392 87.902 6.58718 87.902 11.9375V12.1276H85.075V16.9347H87.902V31.4918H92.9582V16.9347H95.948H97.1172H98.7751V31.4918H103.831V16.9347H107.99V12.1276H103.831V11.9375C103.831 9.30306 105.354 8.46113 107.99 8.65125V3.84414C101.738 3.46392 98.7751 6.58718 98.7751 11.9375V12.1276H97.1172H95.948H92.9582ZM57.6198 17.3959C59.2236 16.1194 60.2021 14.2998 60.2021 11.9641C60.2021 7.42862 56.5052 4.33252 51.8568 4.33252H41.0652V31.437H52.7267C57.4838 31.437 61.2894 28.2322 61.2894 23.5881C61.2351 20.7907 59.8216 18.6452 57.6198 17.3959ZM51.8841 9.35689C53.6238 9.35689 54.8199 10.6334 54.8199 12.3444C54.8199 14.0554 53.5694 15.3318 51.8841 15.3318H46.4746V9.35689H51.8841ZM52.6996 26.4669H46.4746V20.0846H52.6996C54.5481 20.0846 55.88 21.4426 55.88 23.2622C55.88 25.109 54.5481 26.4669 52.6996 26.4669ZM77.0557 12.0996V22.5557C77.0557 25.9234 75.2072 27.3628 72.7336 27.3628C70.4502 27.3628 68.8463 26.0049 68.8463 23.3705V12.0996H63.7903V23.9952C63.7903 29.1553 67.0251 32.007 71.2113 32.007C73.8481 32.007 75.8868 31.0293 77.0285 29.2911V31.4638H82.0846V12.0996H77.0557ZM128.949 23.8327H114.161C114.895 26.3856 117.015 27.472 119.652 27.472C121.636 27.472 123.213 26.6572 124.056 25.5437L128.133 27.8522C126.312 30.4866 123.376 32.0075 119.598 32.0075C113.019 32.0075 108.86 27.5535 108.86 21.7686C108.86 15.9838 113.046 11.5298 119.217 11.5298C125.007 11.5298 129.139 16.0653 129.139 21.7686C129.139 22.5291 129.057 23.1809 128.949 23.8327ZM119.217 16.0653C116.499 16.0653 114.65 17.5047 114.079 19.9762H124.083C123.458 17.1788 121.337 16.0653 119.217 16.0653ZM136.451 15.441V12.1004H131.395V31.4646H136.451V22.2035C136.451 18.1297 139.768 16.9619 142.405 17.2878V11.7202C139.931 11.7202 137.457 12.8066 136.451 15.441ZM15.821 29.9625L5.30312 24.2588L0.404053 26.9069L15.821 35.2588L31.4041 26.9069L26.4496 24.2588L15.821 29.9625ZM5.30312 15.2588L15.821 20.4312L26.4496 15.2588L31.4041 17.6726L15.821 25.2588L0.404053 17.6726L5.30312 15.2588Z"
              fill="white"
            ></path>
          </svg>
        </div>
        <div id="cut">
          <img
            id="cut-menu"
            onclick="cutHam()"
            src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close"
            alt=""
          />
        </div>
      </div>

      <!-- Layer - 2 -->

      <div id="layer2">
        <ul>
          <li id="tool1"><a href="#" onclick="subMenu()">Tools > </a></li>
          <div id="tool2">
            <li><a href="#" onclick="subMenuClose()">Tools v </a></li>
            <div>
              <li><a href="Tool_publishing.html">Publish</a></li>
              <li><a href="analytics-home.html">Analyze</a></li>
              <li><a href="Tool_Engage.html">Engage</a></li>
              <li><a href="Tool_Startup.html">Start Up</a></li>
            </div>
          </div>
          <li><a href="">Pricing</a></li>
          <li><a href="blog_homepage.html">Blog</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="customers.html">Customers</a></li>
          <li>
            <a href="signup.html" class="get-started-btn" id="ham-btn">Get started now</a>
          </li>
          <li><a href="login.html">Log in</a></li>
        </ul>
      </div>`
}

export default hamMenu;