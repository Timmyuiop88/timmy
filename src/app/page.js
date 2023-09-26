'use client'
import Image from "next/image";
import {
  Box,
  Stack,
  Text,
  Heading,
  Center,
  Hide,
  Show,
} from "@chakra-ui/react";

import Nav from "./components/nav";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Exper from "./components/experience";
import Skills from "./components/skills";
import Contact from "./components/contact";
export default function Home() {
  return (
    <Box bg={'#fefefe'}>
<Nav/>
      <Box
        w={"full"}
        h={"auto"}
        pb={"50"}
        bg={"#fefefe"}
        backgroundSize={"54px 54px"}
        backgroundImage={
          " linear-gradient(#ececec 2.7px, transparent 2.7px), linear-gradient(to right, #ececec 2.7px, #fefefe 2.7px)"
        }
      >
   

<Hero />


<Box w={"full"} display={"flex"} justifyContent={"center"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="175"
          height="175"
          viewBox="0 0 175 175"
          fill="none"
        >
          <circle cx="87.4999" cy="87.6269" r="55.9866" fill="white" />
          <circle
            cx="87.5"
            cy="87.5"
            r="87.25"
            fill="white"
            stroke="#99A2AF"
            stroke-width="0.5"
          />
          <path
            d="M134.901 136.324L139.502 141.417L136.177 144.42L135.365 143.522L137.728 141.387L136.744 140.298L134.806 142.049L133.994 141.151L135.932 139.4L134.75 138.091L132.388 140.225L131.576 139.327L134.901 136.324Z"
            fill="black"
          />
          <path
            d="M128.733 141.619L128.799 145.785L132.568 147.311L131.256 148.214L128.758 147.155L128.869 149.856L127.549 150.763L127.472 146.698L123.612 145.141L124.924 144.239L127.505 145.333L127.414 142.526L128.733 141.619Z"
            fill="black"
          />
          <path
            d="M120.366 146.993L123.447 153.126L120.857 154.427C120.798 154.457 120.717 154.494 120.615 154.538C120.511 154.586 120.416 154.623 120.329 154.649C119.934 154.776 119.574 154.806 119.249 154.739C118.92 154.672 118.63 154.527 118.378 154.301C118.128 154.078 117.916 153.795 117.744 153.452C117.571 153.108 117.471 152.767 117.443 152.429C117.414 152.095 117.471 151.777 117.614 151.474C117.754 151.172 117.992 150.902 118.327 150.663C118.401 150.611 118.487 150.557 118.587 150.5C118.686 150.443 118.764 150.4 118.821 150.372L120.252 149.653L119.208 147.575L120.366 146.993ZM120.795 150.735L119.415 151.428C119.356 151.458 119.292 151.494 119.224 151.535C119.155 151.576 119.096 151.62 119.045 151.667C118.91 151.788 118.825 151.92 118.79 152.062C118.756 152.207 118.754 152.349 118.784 152.486C118.813 152.628 118.855 152.755 118.911 152.866C118.966 152.976 119.042 153.084 119.137 153.189C119.231 153.298 119.346 153.381 119.481 153.438C119.617 153.497 119.774 153.509 119.952 153.473C120.02 153.46 120.091 153.439 120.165 153.409C120.239 153.379 120.305 153.349 120.365 153.319L121.745 152.626L120.795 150.735Z"
            fill="black"
          />
          <path
            d="M111.756 150.939L114.002 157.425L112.777 157.849L110.927 152.507L108.135 153.474L107.739 152.33L111.756 150.939Z"
            fill="black"
          />
          <path
            d="M100.637 153.931C101.311 153.801 101.921 153.834 102.468 154.033C103.011 154.232 103.466 154.569 103.834 155.045C104.198 155.521 104.448 156.109 104.583 156.808C104.718 157.506 104.706 158.145 104.546 158.723C104.383 159.301 104.087 159.784 103.657 160.172C103.224 160.56 102.671 160.819 101.997 160.95C101.323 161.08 100.714 161.046 100.171 160.847C99.6244 160.649 99.169 160.312 98.8049 159.835C98.4376 159.359 98.1862 158.772 98.0509 158.073C97.9155 157.374 97.9293 156.736 98.0923 156.157C98.2522 155.579 98.5486 155.096 98.9816 154.708C99.4114 154.321 99.9632 154.062 100.637 153.931ZM100.869 155.129C100.441 155.205 100.103 155.366 99.8557 155.612C99.6087 155.857 99.4489 156.168 99.3762 156.545C99.3004 156.922 99.3078 157.344 99.3985 157.812C99.4891 158.28 99.6394 158.672 99.8494 158.987C100.056 159.303 100.32 159.529 100.641 159.664C100.962 159.799 101.336 159.829 101.765 159.752C102.193 159.675 102.531 159.515 102.778 159.269C103.025 159.024 103.187 158.713 103.262 158.336C103.335 157.959 103.326 157.537 103.235 157.069C103.145 156.601 102.996 156.209 102.789 155.893C102.579 155.578 102.314 155.352 101.993 155.217C101.672 155.082 101.298 155.052 100.869 155.129Z"
            fill="black"
          />
          <path
            d="M92.9645 155.171L93.27 162.027L90.375 162.156C90.3084 162.159 90.2194 162.16 90.108 162.159C89.9936 162.161 89.8915 162.156 89.802 162.144C89.3896 162.098 89.0487 161.978 88.7793 161.784C88.5066 161.589 88.3014 161.337 88.1635 161.029C88.0259 160.723 87.9485 160.378 87.9314 159.994C87.9058 159.42 88.0267 158.921 88.2941 158.499C88.5617 158.08 88.9981 157.809 89.6033 157.687L90.173 157.623L91.7729 157.552L91.6693 155.228L92.9645 155.171ZM89.0981 155.343L90.5747 158.073L89.253 158.39L87.6316 155.408L89.0981 155.343ZM91.8268 158.761L90.2841 158.83C90.2174 158.833 90.1445 158.84 90.0655 158.85C89.9864 158.859 89.9139 158.875 89.8481 158.897C89.6757 158.953 89.5443 159.038 89.454 159.153C89.3639 159.272 89.3044 159.4 89.2756 159.538C89.2437 159.68 89.2305 159.812 89.236 159.936C89.2415 160.06 89.2664 160.189 89.3106 160.324C89.3517 160.462 89.4224 160.585 89.5225 160.691C89.6229 160.801 89.7614 160.876 89.9381 160.916C90.0056 160.932 90.0792 160.942 90.1588 160.945C90.2385 160.947 90.3116 160.947 90.3783 160.944L91.921 160.876L91.8268 158.761Z"
            fill="black"
          />
          <path
            d="M83.5881 155.263L82.9875 162.1L78.5245 161.708L78.6304 160.502L81.802 160.78L81.9305 159.318L79.3286 159.09L79.4346 157.884L82.0364 158.112L82.1908 156.355L79.0191 156.077L79.1251 154.871L83.5881 155.263Z"
            fill="black"
          />
          <path
            d="M69.7316 153.079L67.6198 159.609L66.5132 159.251L65.7566 154.218L62.1959 157.855L61.0894 157.497L63.2012 150.967L64.3531 151.339L63.0919 155.239L66.2487 151.952L66.6841 152.093L67.3185 156.606L68.5797 152.706L69.7316 153.079Z"
            fill="black"
          />
          <path
            d="M56.4701 147.728C57.0807 148.042 57.5397 148.445 57.847 148.939C58.1516 149.431 58.3014 149.978 58.2964 150.579C58.2886 151.178 58.1222 151.795 57.7971 152.428C57.4721 153.061 57.0682 153.556 56.5855 153.911C56.1 154.266 55.5685 154.463 54.9911 154.502C54.4109 154.54 53.8155 154.402 53.205 154.089C52.5944 153.775 52.1368 153.372 51.8323 152.88C51.5249 152.387 51.3751 151.84 51.3829 151.241C51.3879 150.639 51.5529 150.022 51.8779 149.389C52.203 148.756 52.6083 148.262 53.0938 147.908C53.5765 147.552 54.108 147.355 54.6882 147.317C55.2655 147.278 55.8595 147.415 56.4701 147.728ZM55.9128 148.814C55.5285 148.609 55.1634 148.527 54.8177 148.568C54.4719 148.608 54.1542 148.754 53.8644 149.005C53.5719 149.255 53.3168 149.592 53.0991 150.016C52.8814 150.44 52.7578 150.841 52.7282 151.219C52.6957 151.595 52.7639 151.935 52.9326 152.24C53.1013 152.544 53.3778 152.799 53.7622 153.003C54.1466 153.208 54.5116 153.29 54.8574 153.249C55.2031 153.209 55.5223 153.064 55.8149 152.814C56.1046 152.563 56.3583 152.225 56.576 151.801C56.7936 151.377 56.9187 150.977 56.9511 150.601C56.9807 150.223 56.9112 149.882 56.7425 149.577C56.5737 149.273 56.2972 149.018 55.9128 148.814Z"
            fill="black"
          />
          <path
            d="M49.6699 143.965L45.6758 149.546L43.3192 147.86C43.2649 147.821 43.1944 147.767 43.1077 147.697C43.0165 147.628 42.9394 147.561 42.8762 147.496C42.5799 147.206 42.3859 146.901 42.2942 146.581C42.1999 146.26 42.1939 145.935 42.2762 145.607C42.3566 145.282 42.5087 144.963 42.7325 144.65C43.0672 144.183 43.4701 143.865 43.9412 143.698C44.4104 143.534 44.9208 143.591 45.4724 143.868L45.9597 144.17L47.2621 145.102L48.6156 143.211L49.6699 143.965ZM46.5226 141.713L45.998 144.772L44.7629 144.204L45.3288 140.858L46.5226 141.713ZM46.5576 146.086L45.3017 145.188C45.2475 145.149 45.1862 145.109 45.1179 145.068C45.0496 145.027 44.9828 144.995 44.9174 144.971C44.7476 144.908 44.5915 144.894 44.4493 144.929C44.3052 144.967 44.1792 145.031 44.0712 145.122C43.9589 145.213 43.8666 145.31 43.7945 145.41C43.7224 145.511 43.6621 145.628 43.6136 145.761C43.5606 145.895 43.5406 146.035 43.5534 146.181C43.5643 146.33 43.627 146.474 43.7414 146.615C43.7845 146.669 43.8366 146.722 43.8975 146.773C43.9584 146.825 44.0159 146.87 44.0702 146.909L45.326 147.807L46.5576 146.086Z"
            fill="black"
          />
          <path
            d="M42.2384 138.247L37.5436 143.253L34.2755 140.189L35.1036 139.305L37.426 141.483L38.4302 140.412L36.5249 138.626L37.353 137.743L39.2583 139.529L40.4646 138.243L38.1421 136.065L38.9702 135.182L42.2384 138.247Z"
            fill="black"
          />
          <path
            d="M22.7609 109.04L16.2014 111.06L14.883 106.778L16.04 106.422L16.9769 109.464L18.3799 109.032L17.6113 106.536L18.7684 106.18L19.5369 108.676L21.2224 108.157L20.2855 105.114L21.4425 104.758L22.7609 109.04Z"
            fill="black"
          />
          <path
            d="M20.5656 101.213L16.7614 99.5135L13.7862 102.285L13.5223 100.715L15.5367 98.8977L13.0419 97.8575L12.7765 96.2782L16.4944 97.9248L19.5354 95.0841L19.7992 96.654L17.7176 98.5311L20.3002 99.6339L20.5656 101.213Z"
            fill="black"
          />
          <path
            d="M19.2277 91.3598L12.3673 91.5622L12.2819 88.6656C12.2799 88.5989 12.2805 88.5099 12.2835 88.3985C12.2833 88.2841 12.2899 88.1822 12.3031 88.0928C12.3546 87.6812 12.4797 87.3421 12.6784 87.0756C12.8771 86.8059 13.1318 86.6045 13.4426 86.4713C13.7502 86.3383 14.0962 86.2661 14.4805 86.2548C14.8648 86.2434 15.216 86.2966 15.5342 86.4144C15.8491 86.5291 16.1137 86.7152 16.3279 86.9727C16.542 87.2271 16.6868 87.5566 16.7624 87.9612C16.7777 88.0498 16.7902 88.1512 16.7999 88.2653C16.8097 88.3795 16.8155 88.4683 16.8173 88.5318L16.8645 90.1326L19.1894 90.064L19.2277 91.3598ZM15.6545 90.1683L15.6089 88.6247C15.607 88.558 15.6016 88.485 15.5929 88.4058C15.5842 88.3266 15.5694 88.2539 15.5484 88.1878C15.4956 88.0145 15.4122 87.8819 15.2982 87.7899C15.1811 87.6979 15.0537 87.6365 14.9161 87.6056C14.7752 87.5716 14.6428 87.5565 14.519 87.5601C14.3951 87.5638 14.2654 87.5867 14.13 87.6288C13.9913 87.6679 13.8677 87.7367 13.7594 87.8352C13.6479 87.9339 13.5708 88.0713 13.5284 88.2474C13.5113 88.3146 13.5007 88.3881 13.4967 88.4676C13.4927 88.5472 13.4917 88.6204 13.4936 88.6871L13.5392 90.2307L15.6545 90.1683Z"
            fill="black"
          />
          <path
            d="M19.2864 81.8883L12.4592 81.1849L12.5921 79.8954L18.2151 80.4747L18.5179 77.5352L19.7221 77.6592L19.2864 81.8883Z"
            fill="black"
          />
          <path
            d="M21.2701 70.546C21.1039 71.2119 20.8155 71.7507 20.4049 72.1623C19.9951 72.5709 19.4969 72.8412 18.9105 72.9732C18.3249 73.1022 17.6868 73.0804 16.9962 72.9081C16.3056 72.7357 15.7322 72.455 15.2758 72.066C14.8202 71.6739 14.5075 71.2012 14.3378 70.648C14.1688 70.0916 14.1674 69.4805 14.3336 68.8146C14.4998 68.1487 14.7879 67.6114 15.1977 67.2028C15.6083 66.7911 16.1064 66.5208 16.6921 66.3919C17.2785 66.2599 17.917 66.2801 18.6076 66.4525C19.2981 66.6249 19.8712 66.9071 20.3268 67.2992C20.7832 67.6882 21.0958 68.1609 21.2648 68.7172C21.4346 69.2705 21.4363 69.8801 21.2701 70.546ZM20.0863 70.2505C20.1979 69.8297 20.1947 69.4555 20.0766 69.128C19.9586 68.8005 19.7443 68.5243 19.4336 68.2994C19.1237 68.0714 18.7376 67.8997 18.2751 67.7843C17.8127 67.6689 17.3942 67.6397 17.0197 67.6969C16.646 67.751 16.33 67.8948 16.072 68.1284C15.8139 68.362 15.629 68.6892 15.5175 69.1101C15.4059 69.5309 15.4091 69.905 15.5271 70.2325C15.6452 70.56 15.8591 70.8377 16.169 71.0657C16.4797 71.2906 16.8662 71.4608 17.3286 71.5762C17.7911 71.6917 18.2092 71.7223 18.5829 71.6683C18.9574 71.6111 19.2737 71.4657 19.5318 71.2321C19.7899 70.9985 19.9747 70.6713 20.0863 70.2505Z"
            fill="black"
          />
          <path
            d="M23.3864 63.0674L17.0422 60.4489L18.1478 57.7703C18.1733 57.7086 18.2102 57.6275 18.2585 57.5272C18.3051 57.4226 18.3527 57.3323 18.4013 57.2561C18.6164 56.9015 18.8691 56.6431 19.1595 56.4811C19.451 56.3161 19.7658 56.2363 20.1038 56.2418C20.439 56.2461 20.7842 56.3215 21.1396 56.4682C21.6712 56.6877 22.0719 57.0077 22.3417 57.4285C22.6086 57.848 22.6697 58.3579 22.525 58.9582L22.3421 59.5014L21.7311 60.9817L23.881 61.8691L23.3864 63.0674ZM24.863 59.49L21.7648 59.6756L22.0361 58.3439L25.4231 58.1331L24.863 59.49ZM20.612 60.5198L21.2012 59.0924C21.2266 59.0307 21.2516 58.9619 21.276 58.8861C21.3005 58.8102 21.3166 58.7378 21.3244 58.6689C21.347 58.4892 21.3251 58.334 21.2587 58.2035C21.1893 58.0717 21.0982 57.9636 20.9852 57.8792C20.8705 57.7906 20.7559 57.7227 20.6414 57.6754C20.5268 57.6281 20.3991 57.596 20.2583 57.5791C20.1157 57.5581 19.9748 57.5704 19.8357 57.6161C19.6936 57.6606 19.5671 57.7545 19.4564 57.8979C19.4133 57.9523 19.3737 58.015 19.3375 58.086C19.3013 58.157 19.2705 58.2233 19.2451 58.285L18.6559 59.7124L20.612 60.5198Z"
            fill="black"
          />
          <path
            d="M27.2627 54.5294L21.3188 51.0977L23.559 47.2177L24.6074 47.823L23.0155 50.5803L24.2868 51.3143L25.5927 49.0523L26.6412 49.6576L25.3352 51.9196L26.8625 52.8014L28.4544 50.0441L29.5028 50.6494L27.2627 54.5294Z"
            fill="black"
          />
          <path
            d="M35.0942 42.8914L30.0665 38.2194L30.8582 37.3674L35.7404 38.8072L33.9469 34.0436L34.7386 33.1917L39.7662 37.8637L38.9421 38.7505L35.9395 35.9603L37.586 40.21L37.2745 40.5451L32.9157 39.2143L35.9183 42.0046L35.0942 42.8914Z"
            fill="black"
          />
          <path
            d="M45.5442 33.1298C45.0022 33.5508 44.4426 33.7965 43.8654 33.8667C43.2908 33.935 42.732 33.8399 42.1893 33.5816C41.6491 33.3213 41.1606 32.9101 40.7239 32.3481C40.2872 31.786 40.0096 31.2111 39.8909 30.6233C39.7747 30.0335 39.8207 29.4687 40.0289 28.9287C40.2395 28.3868 40.6159 27.9052 41.1578 27.4842C41.6998 27.0631 42.2582 26.8184 42.8328 26.7501C43.41 26.6799 43.9687 26.775 44.509 27.0353C45.0517 27.2936 45.5414 27.7038 45.9781 28.2659C46.4148 28.8279 46.6912 29.4038 46.8074 29.9936C46.9261 30.5814 46.8801 31.1462 46.6694 31.6882C46.4612 32.2281 46.0862 32.7087 45.5442 33.1298ZM44.7956 32.1662C45.1432 31.9042 45.3718 31.6079 45.4812 31.2775C45.5906 30.947 45.5926 30.5974 45.4872 30.2286C45.3842 29.8579 45.1866 29.4844 44.8941 29.108C44.6017 28.7317 44.2906 28.4503 43.9607 28.264C43.6334 28.0757 43.2961 27.9937 42.9488 28.0181C42.6016 28.0424 42.2541 28.1856 41.9064 28.4477C41.5588 28.7097 41.3303 29.006 41.2208 29.3365C41.1114 29.6669 41.1082 30.0175 41.2111 30.3882C41.3165 30.757 41.5155 31.1295 41.8079 31.5059C42.1003 31.8823 42.4102 32.1646 42.7376 32.3529C43.0674 32.5392 43.406 32.6202 43.7532 32.5959C44.1005 32.5715 44.4479 32.4283 44.7956 32.1662Z"
            fill="black"
          />
          <path
            d="M51.8274 28.555L48.4548 22.5775L50.9787 21.1535C51.0368 21.1207 51.1159 21.0797 51.2158 21.0306C51.317 20.9772 51.4103 20.9355 51.4956 20.9056C51.8838 20.7596 52.2421 20.7124 52.5705 20.7643C52.9017 20.8146 53.1985 20.9463 53.461 21.1593C53.722 21.3696 53.9469 21.6422 54.1358 21.9771C54.4185 22.478 54.5359 22.9772 54.4883 23.4747C54.4391 23.9694 54.1722 24.4082 53.6877 24.791L53.2083 25.1053L51.8136 25.8922L52.9565 27.918L51.8274 28.555ZM55.1981 26.6532L52.6467 24.8859L53.6826 24.0059L56.4766 25.9319L55.1981 26.6532ZM51.2187 24.8379L52.5636 24.079C52.6218 24.0462 52.6839 24.0076 52.7499 23.963C52.816 23.9184 52.8734 23.8714 52.9221 23.822C53.0509 23.6947 53.1295 23.5591 53.1579 23.4154C53.1847 23.2689 53.1797 23.1276 53.143 22.9914C53.1075 22.8509 53.0593 22.7267 52.9985 22.6188C52.9376 22.5109 52.8569 22.4068 52.7566 22.3065C52.6574 22.2019 52.539 22.1246 52.4014 22.0746C52.2621 22.0218 52.1047 22.0176 51.9291 22.062C51.8616 22.0782 51.7917 22.103 51.7194 22.1365C51.6471 22.17 51.5819 22.2032 51.5238 22.2359L50.1788 22.9948L51.2187 24.8379Z"
            fill="black"
          />
          <path
            d="M60.1489 24.2335L57.5934 17.8637L61.7515 16.1955L62.2022 17.3191L59.2473 18.5046L59.7939 19.867L62.218 18.8945L62.6688 20.018L60.2447 20.9906L60.9013 22.6273L63.8562 21.4418L64.307 22.5653L60.1489 24.2335Z"
            fill="black"
          />
          <path
            d="M100.149 19.6934L101.617 12.989L105.994 13.9474L105.735 15.13L102.625 14.4489L102.311 15.8829L104.862 16.4417L104.603 17.6243L102.052 17.0655L101.674 18.7882L104.785 19.4693L104.526 20.6519L100.149 19.6934Z"
            fill="black"
          />
          <path
            d="M108.043 21.6324L111.395 19.1564L110.445 15.2026L111.942 15.7451L112.533 18.393L114.666 16.7327L116.172 17.2784L112.909 19.7054L113.886 23.7504L112.39 23.2079L111.78 20.4721L109.549 22.1781L108.043 21.6324Z"
            fill="black"
          />
          <path
            d="M117.28 25.3145L120.479 19.2421L123.043 20.5926C123.102 20.6237 123.179 20.6679 123.275 20.7254C123.374 20.7815 123.46 20.8373 123.531 20.8929C123.864 21.1401 124.098 21.4158 124.232 21.72C124.369 22.0256 124.419 22.3465 124.382 22.6826C124.347 23.0158 124.239 23.3525 124.06 23.6927C123.881 24.0329 123.662 24.3125 123.403 24.5316C123.148 24.7493 122.856 24.8881 122.526 24.948C122.2 25.0093 121.841 24.9733 121.452 24.8399C121.367 24.8097 121.273 24.7708 121.169 24.7231C121.065 24.6754 120.984 24.6368 120.928 24.6071L119.511 23.8608L118.427 25.9187L117.28 25.3145ZM120.075 22.7897L121.442 23.5094C121.501 23.5405 121.567 23.5717 121.64 23.6031C121.713 23.6345 121.784 23.6573 121.852 23.6716C122.029 23.7108 122.185 23.7035 122.321 23.6495C122.459 23.5927 122.575 23.512 122.67 23.4074C122.769 23.3015 122.847 23.1937 122.905 23.0841C122.963 22.9744 123.006 22.8503 123.036 22.7116C123.071 22.5716 123.071 22.4302 123.039 22.2874C123.008 22.1418 122.926 22.0072 122.794 21.8836C122.744 21.8356 122.685 21.7903 122.618 21.7476C122.55 21.705 122.487 21.6681 122.428 21.637L121.062 20.9174L120.075 22.7897Z"
            fill="black"
          />
          <path
            d="M125.497 30.0249L129.468 24.4269L130.526 25.1769L127.255 29.7875L129.666 31.4972L128.965 32.4846L125.497 30.0249Z"
            fill="black"
          />
          <path
            d="M134.397 37.3315C133.899 36.8592 133.572 36.3431 133.415 35.7831C133.261 35.2252 133.271 34.6586 133.444 34.0831C133.62 33.5098 133.953 32.9649 134.443 32.4485C134.933 31.932 135.459 31.5708 136.022 31.3649C136.588 31.1611 137.153 31.1214 137.718 31.2457C138.286 31.3723 138.819 31.6717 139.317 32.144C139.815 32.6163 140.141 33.1313 140.295 33.6892C140.451 34.2492 140.442 34.8158 140.266 35.3891C140.092 35.9646 139.76 36.5106 139.271 37.027C138.781 37.5435 138.253 37.9036 137.688 38.1074C137.125 38.3133 136.559 38.353 135.992 38.2265C135.427 38.1021 134.895 37.8038 134.397 37.3315ZM135.237 36.4462C135.548 36.7503 135.875 36.9316 136.219 36.9899C136.562 37.0482 136.908 36.9975 137.256 36.8377C137.607 36.68 137.947 36.4283 138.275 36.0824C138.603 35.7366 138.834 35.3866 138.968 35.0324C139.105 34.6804 139.135 34.3346 139.059 33.995C138.982 33.6554 138.788 33.3335 138.477 33.0293C138.166 32.7252 137.838 32.5439 137.495 32.4856C137.152 32.4273 136.805 32.4769 136.454 32.6346C136.105 32.7944 135.767 33.0472 135.439 33.393C135.111 33.7389 134.879 34.0878 134.742 34.4398C134.607 34.794 134.578 35.1409 134.655 35.4805C134.731 35.8201 134.925 36.142 135.237 36.4462Z"
            fill="black"
          />
          <path
            d="M139.867 42.853L145.267 38.6176L147.056 40.8979C147.097 40.9504 147.149 41.0224 147.213 41.1138C147.281 41.2058 147.336 41.2917 147.379 41.3715C147.582 41.7332 147.682 42.0803 147.68 42.4128C147.681 42.7478 147.595 43.0611 147.424 43.3527C147.256 43.6424 147.02 43.9059 146.717 44.1431C146.265 44.498 145.789 44.6895 145.29 44.7174C144.794 44.7433 144.32 44.5457 143.868 44.1245L143.485 43.698L142.497 42.4378L140.667 43.8731L139.867 42.853ZM142.255 45.8984L143.617 43.1097L144.644 44.001L143.161 47.0535L142.255 45.8984ZM143.45 41.6907L144.403 42.9059C144.444 42.9584 144.491 43.0139 144.545 43.0725C144.599 43.1311 144.654 43.1808 144.711 43.2215C144.856 43.3296 145.002 43.3868 145.148 43.3932C145.297 43.3976 145.436 43.3714 145.565 43.3146C145.699 43.2584 145.814 43.192 145.912 43.1155C146.009 43.039 146.1 42.9436 146.184 42.8293C146.272 42.7155 146.331 42.5868 146.36 42.4432C146.391 42.2976 146.371 42.1413 146.301 41.9744C146.275 41.9101 146.24 41.8448 146.196 41.7784C146.151 41.7119 146.109 41.6525 146.068 41.6L145.115 40.3848L143.45 41.6907Z"
            fill="black"
          />
          <path
            d="M145.394 50.4277L151.305 46.9409L153.582 50.7999L152.539 51.4149L150.921 48.6726L149.657 49.4184L150.984 51.6681L149.941 52.2831L148.614 50.0334L147.095 50.9294L148.713 53.6717L147.67 54.2867L145.394 50.4277Z"
            fill="black"
          />
          <path
            d="M151.674 62.9711L158.215 60.892L158.567 62.0003L154.912 65.5427L159.941 66.3246L160.294 67.4329L153.753 69.5119L153.386 68.3582L157.293 67.1166L152.783 66.4595L152.644 66.0235L155.947 62.8832L152.041 64.1248L151.674 62.9711Z"
            fill="black"
          />
          <path
            d="M155.032 76.8713C154.932 76.1922 154.993 75.5842 155.216 75.0471C155.439 74.5132 155.797 74.0735 156.289 73.7281C156.781 73.3858 157.379 73.1628 158.084 73.0591C158.788 72.9554 159.425 72.9964 159.995 73.1822C160.566 73.3712 161.035 73.6891 161.403 74.136C161.771 74.586 162.005 75.1505 162.105 75.8295C162.205 76.5085 162.143 77.115 161.92 77.6489C161.697 78.186 161.34 78.6257 160.847 78.968C160.355 79.3134 159.757 79.538 159.053 79.6417C158.349 79.7454 157.712 79.7028 157.141 79.5138C156.571 79.328 156.102 79.0101 155.733 78.5601C155.366 78.1132 155.132 77.5503 155.032 76.8713ZM156.239 76.6935C156.296 77.1251 156.442 77.4698 156.676 77.7276C156.909 77.9854 157.213 78.1591 157.586 78.2487C157.959 78.3415 158.382 78.3531 158.853 78.2837C159.325 78.2142 159.723 78.0817 160.047 77.8862C160.372 77.6938 160.609 77.4405 160.759 77.1262C160.909 76.8119 160.955 76.4389 160.898 76.0073C160.841 75.5757 160.695 75.231 160.461 74.9732C160.227 74.7154 159.924 74.5401 159.55 74.4473C159.177 74.3577 158.755 74.3476 158.284 74.4171C157.812 74.4865 157.414 74.6175 157.089 74.8099C156.764 75.0054 156.527 75.2603 156.378 75.5746C156.228 75.8889 156.182 76.2619 156.239 76.6935Z"
            fill="black"
          />
          <path
            d="M155.924 84.5922L162.787 84.5963L162.786 87.4942C162.786 87.5609 162.782 87.6499 162.776 87.7611C162.773 87.8755 162.763 87.9771 162.747 88.0661C162.683 88.4759 162.548 88.8111 162.342 89.0715C162.135 89.3351 161.874 89.5288 161.559 89.6525C161.248 89.7763 160.9 89.838 160.516 89.8378C159.94 89.8374 159.448 89.6941 159.038 89.4079C158.632 89.1217 158.381 88.6735 158.286 88.0634L158.248 87.4914L158.249 85.89L155.923 85.8886L155.924 84.5922ZM155.922 88.4623L158.716 87.1104L158.972 88.4451L155.921 89.9303L155.922 88.4623ZM159.46 85.8907L159.459 87.435C159.459 87.5017 159.462 87.5748 159.468 87.6542C159.475 87.7337 159.487 87.8067 159.506 87.8735C159.554 88.0483 159.633 88.1834 159.744 88.2788C159.859 88.3741 159.984 88.4394 160.121 88.4744C160.261 88.5126 160.392 88.5318 160.516 88.5318C160.64 88.5319 160.771 88.5129 160.907 88.4749C161.047 88.44 161.173 88.3749 161.284 88.2797C161.398 88.1844 161.479 88.0494 161.527 87.8747C161.546 87.808 161.559 87.7349 161.565 87.6555C161.572 87.576 161.575 87.503 161.575 87.4362L161.576 85.892L159.46 85.8907Z"
            fill="black"
          />
          <path
            d="M155.593 93.9631L162.396 94.8716L161.803 99.3124L160.603 99.1521L161.024 95.9963L159.569 95.802L159.224 98.3909L158.024 98.2307L158.369 95.6418L156.621 95.4083L156.2 98.5641L155 98.4039L155.593 93.9631Z"
            fill="black"
          />
          <mask
            id="mask0_10_584"
            maskUnits="userSpaceOnUse"
            x="52"
            y="52"
            width="71"
            height="71"
          >
            <rect
              x="88.7631"
              y="52.3832"
              width="49.8741"
              height="49.8741"
              transform="rotate(47.0522 88.7631 52.3832)"
              fill="#D9D9D9"
            />
          </mask>
          <g mask="url(#mask0_10_584)">
            <path
              d="M81.1001 102.101L81.2474 97.9895L94.7575 98.4736L71.8204 73.8317L74.8626 71L97.7997 95.6419L98.2838 82.1318L102.396 82.2791L101.659 102.838L81.1001 102.101Z"
              fill="black"
            />
          </g>
        </svg>
      </Box>
      <Box pt={"10"}>
        <Text
          textAlign={"center"}
          textTransform={"uppercase"}
          fontSize={["14px", "14px", "24px", "24px"]}
          fontWeight={"400"}
          color={"#99A2AF"}
        >
          recent projects
        </Text>
        <Heading
          textAlign={"center"}
          textTransform={"uppercase"}
          fontSize={["30px", "30px", "70px", "96px"]}
          fontWeight={"700"}
          color={"#121212"}
        >
          projects
        </Heading>
      </Box>




      </Box>
      <Projects/>
      <Exper/>
      <Skills/>
      <Contact/>
    </Box>
  );
}
