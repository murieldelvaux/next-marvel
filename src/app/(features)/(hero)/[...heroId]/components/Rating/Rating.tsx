import { RatingProps } from "@/app/(features)/(hero)/[...heroId]/components/Rating/Rating.types";

export const Rating = ({ status }: RatingProps) => {
  return (
    <>
      {status === "on" && (
        <svg
          width="16px"
          height="15px"
          viewBox="0 0 16 15"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <title>avaliacao_on</title>
          <desc>Created with Sketch.</desc>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Guide"
              transform="translate(-483.000000, -831.000000)"
              fill="#FF0000"
              fillRule="nonzero"
            >
              <path
                d="M498.317612,836.265811 L493.683489,835.533992 C493.683489,835.533992 492.495409,832.881647 491.727131,831.578968 C490.957834,830.27629 490.399457,831.578968 490.399457,831.578968 L488.325921,835.533992 L483.598056,836.219822 C482.38756,836.768687 483.389174,837.569489 483.389174,837.569489 L486.625316,840.652728 L485.832584,845.178611 C485.669554,846.526278 487.09097,845.795458 487.09097,845.795458 L491.026103,843.828944 L495.034599,845.840447 C496.409144,846.457295 496.152372,845.086633 496.152372,845.086633 L495.452363,840.675722 L498.5968,837.545495 C499.645286,836.583733 498.317612,836.265811 498.317612,836.265811 Z"
                id="avaliacao_on"
              ></path>
            </g>
          </g>
        </svg>
      )}
      {status === "off" && (
        <svg
          width="16px"
          height="15px"
          viewBox="0 0 16 15"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <title>avaliacao_off</title>
          <desc>Created with Sketch.</desc>
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Guide"
              transform="translate(-483.000000, -877.000000)"
              fill="#FFBEBE"
              fillRule="nonzero"
            >
              <path
                d="M498.317612,882.265811 L493.683489,881.533992 C493.683489,881.533992 492.495409,878.881647 491.727131,877.578968 C490.957834,876.27629 490.399457,877.578968 490.399457,877.578968 L488.325921,881.533992 L483.598056,882.219822 C482.38756,882.768687 483.389174,883.569489 483.389174,883.569489 L486.625316,886.652728 L485.832584,891.178611 C485.669554,892.526278 487.09097,891.795458 487.09097,891.795458 L491.026103,889.828944 L495.034599,891.840447 C496.409144,892.457295 496.152372,891.086633 496.152372,891.086633 L495.452363,886.675722 L498.5968,883.545495 C499.645286,882.583733 498.317612,882.265811 498.317612,882.265811 Z"
                id="avaliacao_off"
              ></path>
            </g>
          </g>
        </svg>
      )}
    </>
  );
};
