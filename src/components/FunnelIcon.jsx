import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FunnelIcon = ({ width = 456, height = 223 }) => {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const maskRectRef = useRef(null);
  const gradStopsRef = useRef([]);

  useEffect(() => {
    const path = pathRef.current;
    const maskRect = maskRectRef.current;
    const [gradStart, gradEnd] = gradStopsRef.current;

    // Start with outline only (no fill)
    gsap.set(path, { fill: "none", stroke: "white", strokeWidth: 2 });

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Step 1: Reveal the path from bottom to top using a clipping mask
    tl.fromTo(
      maskRect,
      { y: height, height: 0 },
      { y: 0, height: height, duration: 0.8 }
    );

    // Step 2: Switch to gradient fill (diagonal movement)
    tl.to(path, { fill: "url(#funnelGrad)", stroke: "white", strokeWidth: 2, duration: 0 });

    tl.to(
      gradStart,
      { attr: { offset: "100%" }, duration: 1, ease: "power2.inOut" },
     
    );
    tl.to(
      gradEnd,
      { attr: { offset: "100%" }, duration: 1, ease: "power2.inOut" },
      
    );
  }, [height]);

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={width}
      height={height}
    >
      <defs>
        {/* Gradient for diagonal fill */}
        <linearGradient id="funnelGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop
            ref={(el) => (gradStopsRef.current[0] = el)}
            offset="-50%"
            stopColor="white"
            stopOpacity="1"
          />
          <stop
            ref={(el) => (gradStopsRef.current[1] = el)}
            offset="0%"
            stopColor="white"
            stopOpacity="0"
          />
        </linearGradient>

        {/* Mask for bottom-to-top reveal */}
        <mask id="revealMask">
          <rect
            ref={maskRectRef}
            x="0"
            y="0"
            width="512"
            height={height}
            fill="white"
          />
        </mask>
      </defs>

      <g transform="translate(-100, 50) scale(1.8)" mask="url(#revealMask)">
        <path
          ref={pathRef}
          d="M0 0 C133.98 0 267.96 0 406 0 C405 7 405 7 402.8347168 9.66479492 C398.11038774 13.09318121 392.27982535 14.30553685 386.72342873 15.80285072 C384.60061987 16.37511891 382.48387492 16.96635523 380.36759949 17.56230164 C375.85390445 18.82950843 371.33356824 20.07190488 366.8125 21.3125 C360.8978229 22.93840196 354.9863354 24.57506622 349.08203125 26.23828125 C348.36906199 26.43911316 347.65609272 26.63994507 346.92151833 26.84686279 C304.54483302 38.86477816 267.99388205 63.21731675 246.00390625 102.19921875 C245.03565274 103.98232631 244.07581873 105.77003488 243.125 107.5625 C242.48316772 108.76398682 242.48316772 108.76398682 241.82836914 109.98974609 C235.41232583 122.49312411 231.42024486 135.65179876 227.65234375 149.1328125 C227.46150711 149.81533773 227.27067047 150.49786297 227.0740509 151.20107079 C225.27890076 157.6327677 223.49892147 164.06860298 221.73803711 170.50976562 C220.76512295 174.0656656 219.77722065 177.61712191 218.7800312 181.16628647 C218.40712481 182.50502245 218.03991316 183.8453595 217.67878532 185.18732071 C214.18224188 198.17295572 214.18224188 198.17295572 209 203 C205.81929763 204.59035119 202.41669549 204.78937448 199 204 C193.52507146 200.26077104 191.79689103 197.11646015 190.0859375 190.81640625 C189.84467133 189.99491592 189.60340515 189.1734256 189.35482788 188.32704163 C188.54798896 185.55715694 187.77317159 182.77945785 187 180 C186.41814536 177.95523791 185.83510092 175.91081408 185.25097656 173.86669922 C183.03923793 166.09446485 180.83719455 158.31930068 178.68261719 150.53100586 C174.78547455 136.47316658 170.48475819 123.08938843 164 110 C163.54343018 109.07325722 163.54343018 109.07325722 163.07763672 108.12779236 C157.01585224 95.90551182 149.24899314 85.06764912 139.953125 75.10546875 C138.35939276 73.38742539 136.88541074 71.65134665 135.4375 69.8125 C119.82692514 51.80029824 95.6469355 38.71017835 73.3125 31.29296875 C72.55636414 31.04140518 71.80022827 30.78984161 71.0211792 30.53065491 C63.80580338 28.1799336 56.51280439 26.12477954 49.203125 24.08984375 C47.98993591 23.75156555 46.77674683 23.41328735 45.52679443 23.0647583 C40.48359289 21.66177855 35.43994261 20.26079638 30.38964844 18.88354492 C26.65682743 17.86193826 22.92977381 16.82120661 19.203125 15.77734375 C17.49687958 15.31931618 17.49687958 15.31931618 15.75616455 14.85203552 C9.77639463 13.16049523 5.09684605 11.81227193 1 7 C0.67 4.69 0.34 2.38 0 0 Z"
        />
      </g>
    </svg>
  );
};

export default FunnelIcon;

