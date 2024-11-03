export function Olas() {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="100%"
      height="100%"
      viewBox="0 0 1600 900"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="bg">
          <stop
            offset="0%"
            // style={{ stopColor: "rgba(249, 115, 22,0.2)" }}
            style={{ stopColor: "rgba(245, 119, 36,0.45)" }}
          ></stop>
          <stop
            offset="100%"
            // style={{ stopColor: "rgba(249, 105, 80,0.2)" }}
            style={{ stopColor: "rgba(249, 110, 45,0.3)" }}
          ></stop>
        </linearGradient>
        <path
          id="wave"
          fill="url(#bg)"
          d="
    M-363.852,502.589
    c0,0,236.988-41.997,505.475,0
    c268.487,41.997,472.477,5.293,715.971,0
    c243.494-5.293,505.474,5.859,505.474,48.368
    c0,42.509,252.489,71.963,505.963,66.963
    c0,0,600,0,100,500
    v560.106H-363.852V502.589z"
        />
      </defs>
      <g>
        <use xlinkHref="#wave" opacity=".3">
          <animateTransform
            dur="10s"
            attributeName="transform"
            attributeType="XML"
            type="translate"
            calcMode="spline"
            values="270 230; -334 180; 270 230"
            keyTimes="0; 0.5; 1"
            keySplines="0.42, 0, 0.58, 1.0; 0.42, 0, 0.58, 1.0"
            repeatCount="indefinite"
          />
        </use>
        <use xlinkHref="#wave" opacity=".6">
          <animateTransform
            dur="8s"
            attributeName="transform"
            attributeType="XML"
            type="translate"
            calcMode="spline"
            values="270 230; -334 180; 270 230"
            keyTimes="0; 0.5; 1"
            keySplines="0.42, 0, 0.58, 1.0; 0.42, 0, 0.58, 1.0"
            repeatCount="indefinite"
          />
        </use>
        <use xlinkHref="#wave" opacity=".9">
          <animateTransform
            dur="6s"
            attributeName="transform"
            attributeType="XML"
            type="translate"
            calcMode="spline"
            values="270 230; -334 180; 270 230"
            keyTimes="0; 0.5; 1"
            keySplines="0.42, 0, 0.58, 1.0; 0.42, 0, 0.58, 1.0"
            repeatCount="indefinite"
          />
        </use>
      </g>
    </svg>
  );
}
