import React, { type SVGProps, type ReactElement } from "react";

function Logo ({ ...props }: SVGProps<SVGSVGElement>): ReactElement {
  return (
    <svg
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      fill="#00ff00E6"
      {...props}
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a3ff84" />
          <stop offset="100%" stopColor="#00ff00" />
        </linearGradient>
      </defs>
      <path fill="url(#gradient)" d=" M 27.49 0.00 L 273.79 0.00 C 282.48 7.43 291.21 14.80 300.00 22.12 L 300.00 23.43 C 292.35 31.30 285.24 39.70 277.16 47.12 C 274.24 49.87 269.52 48.12 266.06 49.01 C 244.08 49.32 222.10 48.82 200.12 49.04 C 186.82 71.75 173.09 94.20 159.63 116.82 C 136.09 116.87 112.56 117.10 89.05 118.14 C 77.91 137.36 67.04 156.74 55.91 175.97 C 37.27 175.98 18.64 176.06 0.00 176.00 L 0.00 24.33 C 4.45 12.27 14.69 2.44 27.49 0.00 Z" />
      <path fill="url(#gradient)" d=" M 291.58 75.79 C 294.39 71.97 297.38 68.27 300.00 64.31 L 300.00 274.66 C 296.64 287.35 285.99 296.67 273.56 300.00 L 80.52 300.00 C 88.84 287.84 95.81 274.79 103.42 262.17 C 126.79 261.98 150.16 262.02 173.52 261.82 C 185.88 240.14 198.46 218.58 211.31 197.19 C 213.02 194.13 215.63 190.24 213.30 186.78 C 203.15 169.36 191.93 152.57 181.76 135.17 C 179.61 132.19 180.94 128.54 182.61 125.71 C 192.04 109.11 202.21 92.94 211.30 76.14 C 238.06 75.86 264.82 76.18 291.58 75.79 Z" />
      <path fill="url(#gradient)" d=" M 122.44 138.58 C 137.73 136.18 154.45 139.14 166.03 149.97 C 186.17 165.98 191.01 197.93 175.86 218.89 C 166.63 233.65 149.45 242.89 132.00 242.02 C 105.21 243.47 80.49 219.66 80.13 192.97 C 77.34 167.58 97.51 142.56 122.44 138.58 M 127.44 161.51 C 111.91 163.78 100.11 180.66 103.99 196.02 C 106.63 209.83 120.90 220.34 134.86 218.87 C 149.54 217.92 162.09 203.74 160.93 189.05 C 161.32 172.35 143.80 158.17 127.44 161.51 Z" />
      <path fill="url(#gradient)" d=" M 0.00 201.00 C 17.90 200.91 35.81 201.01 53.71 201.15 C 61.86 214.61 70.70 227.63 79.24 240.84 C 80.70 243.47 83.10 246.29 82.38 249.53 C 81.33 253.34 79.02 256.64 77.19 260.11 C 69.43 273.22 62.44 286.76 54.92 300.00 L 20.26 300.00 C 11.07 296.66 3.92 289.55 0.00 280.66 L 0.00 201.00 Z" />
    </svg>
  );
};

export default Logo;
