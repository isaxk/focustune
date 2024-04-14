<div id="wrapper">
  <div class="profile-main-loader">
    <div class="loader">
      <svg class="circular-loader" viewBox="25 25 50 50">
        <circle
          class="loader-path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke="var(--stroke-color)"
          stroke-width="2"
        />
      </svg>
    </div>
  </div>
</div>

<style>
  #wrapper {
    position: relative;
    /*background:#333;*/
	height: 100%;
	width: 100%;
	display: grid;
	place-items: center;
	--stroke-color: #fff;
  }

  .profile-main-loader {
    width: 50px;
    z-index: 9000 !important;
  }

  .profile-main-loader .loader {
    position: relative;
    margin: 0px auto;
    width: 50px;
    height: 50px;
  }
  .profile-main-loader .loader:before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  .circular-loader {
    -webkit-animation: rotate 2s linear infinite;
    animation: rotate 2s linear infinite;
    height: 100%;
    -webkit-transform-origin: center center;
    -ms-transform-origin: center center;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    margin: auto;
  }

  .loader-path {
    stroke-dasharray: 150, 200;
    stroke-dashoffset: -10;
    -webkit-animation:
      dash 1.5s ease-in-out infinite,
      color 6s ease-in-out infinite;
    animation:
      dash 1.5s ease-in-out infinite,
      color 6s ease-in-out infinite;
    stroke-linecap: round;
  }

  @-webkit-keyframes rotate {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes rotate {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124;
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124;
    }
  }
  @-webkit-keyframes color {
    0% {
      stroke: var(--stroke-color);
    }
    40% {
      stroke: var(--stroke-color);
    }
    66% {
      stroke: var(--stroke-color);
    }
    80%,
    90% {
      stroke: var(--stroke-color);
    }
  }
  @keyframes color {
    0% {
      stroke: var(--stroke-color);
    }
    40% {
      stroke: var(--stroke-color);
    }
    66% {
      stroke: var(--stroke-color);
    }
    80%,
    90% {
      stroke: var(--stroke-color);
    }
  }
</style>
