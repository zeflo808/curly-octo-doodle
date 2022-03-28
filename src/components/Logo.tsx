import * as React from 'react';
import clsx from 'clsx';

export function Logo({
  hideTitle,
  title,
  size = 40,
  color = 'currentColor',
  className,
}: {
  title: string;
  size?: number;
  hideTitle?: boolean;
  color?: string;
  className?: string;
}) {
  return (
    <div className={clsx('Logo-wrapper', className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        height={size}
        width={size}
      >
        <circle
          cx="251.03"
          cy="250.046"
          r="230.366"
          fill="transparent"
          stroke={color}
          strokeWidth="33"
        />
        <path
          fill={color}
          d="M96.410995 327.435425q.54784-2.197266 1.361749-3.552246.813909-1.35498 2.26913-2.050782 1.45522-.6958 3.70727-.915527 2.25205-.219726 5.62119-.219726 3.808594 0 6.134181.219726 2.325587.219727 3.433843.915527 1.108256.695801 1.209874 2.050782.101619 1.35498-.519463 3.552246l-7.963711 29.296875q-.840218 3.076172-.985324 5.126953-.145107 2.050781.469109 3.259277.614215 1.208496 1.914608 1.721192 1.300394.512695 3.424417.512695 2.124024 0 3.716697-.512695 1.592673-.512696 2.772891-1.721192t2.057746-3.259277q.877528-2.050781 1.571262-5.126953l21.303883-96.020508q.401552-1.904297 1.133186-3.076172.731635-1.171875 2.32421-1.831055 1.592574-.65918 4.293207-.915527 2.700634-.256348 7.095165-.256348 4.32129 0 6.894093.256348 2.572804.256348 3.836675.915527 1.26387.65918 1.447764 1.831055.183893 1.171875-.364144 3.076172l-26.412968 95.361328q-1.333471 4.760742-4.003956 9.00879-2.670485 4.248046-6.898105 7.39746-4.22762 3.149414-10.104075 4.980469t-13.640127 1.831055q-7.69043 0-12.736191-1.794434-5.045762-1.794434-7.77615-4.943848-2.730388-3.149414-3.364932-7.36084-.634544-4.211425.405958-8.972168Zm78.678453-48.999024q1.223115-5.493164 4.332857-10.03418 3.109741-4.541015 8.197908-7.763671 5.088166-3.222656 12.310471-5.01709 7.222305-1.794434 16.74379-1.794434 9.448241 0 15.775741 1.794434 6.3275 1.794434 9.84529 5.01709 3.517791 3.222656 4.363128 7.763672.845337 4.541015-.670747 10.03418l-9.753912 35.595702q-.621082 2.197266-1.544854 3.552247-.923772 1.35498-2.488857 2.05078-1.565084.695802-3.926997.915528-2.361912.219727-5.731053.219727-3.442383 0-5.658107-.219727-2.215724-.219726-3.397221-.915527-1.181498-.6958-1.429601-2.050781-.248103-1.35498.226495-3.552247l8.488958-37.86621q.730256-3.222657.54587-5.126954-.184384-1.904296-1.137222-2.929687-.952837-1.02539-2.628474-1.35498-1.675636-.32959-4.019386-.32959t-4.183739.32959q-1.839988.32959-3.304143 1.35498-1.464155 1.02539-2.598129 2.929687t-2.010715 5.126954L179.225315 356.7323q-.840218 3.076172-.728977 5.126953.111242 2.050781 1.238152 3.259277 1.126911 1.208496 3.26959 1.721192 2.142678.512695 5.365334.512695 3.222657 0 5.657615-.512695 2.434958-.512696 4.164493-1.721192 1.729534-1.208496 2.826789-3.259277 1.097255-2.050781 1.790988-5.126953l1.88013-8.71582q.474597-2.197266 1.361748-3.552247.887151-1.35498 2.415614-2.05078 1.528463-.695802 3.853755-.915528 2.325292-.219727 5.694432-.219727 3.295899 0 5.328517.219727 2.032619.219726 2.99439.915527.961771.6958.990148 2.050781.028376 1.35498-.592706 3.552246l-2.264995 8.203125q-1.333471 4.760743-4.287794 8.972168-2.954324 4.211426-7.73126 7.36084-4.776936 3.149414-11.486546 4.943848-6.70961 1.794434-15.571914 1.794434-8.862305 0-14.7046-1.831055t-9.048757-4.980469q-3.206462-3.149414-4.051602-7.39746-.84514-4.248048.195362-9.00879Z"
          //   style="white-space:pre"
          transform="matrix(2.31612 0 0 1.76752 -139.076279 -309.409882)"
        />
      </svg>
      {title && (
        <h1
          className={clsx('Logo-title', { srOnly: hideTitle })}
          style={{ color }}
        >
          {title}
        </h1>
      )}
    </div>
  );
}
