import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

interface Props {
    fill?: string;
    width?: number;
    height?: number;
}

export const IconHeart: React.FC<Props> = ({
                                                fill = '#000000',
                                                width = 19,
                                                height = 17,
                                            }): JSX.Element => (
    <Svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio='xMidYMin meet'
    >
        <G id='Icons' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
            <Path d='M17.5103 2.8407L17.5099 2.83995C16.9328 1.66524 15.1417 0.546684 12.9311 1.18634L12.9285 1.18708C11.8702 1.49025 10.9486 2.13992 10.3131 3.02804L9.49987 4.1645L8.68663 3.02804C8.05131 2.1402 7.13006 1.49065 6.07218 1.18736C3.84948 0.55588 2.06519 1.66889 1.48983 2.83995L1.48946 2.8407C0.596122 4.6551 0.874957 6.80126 2.77555 9.38627L17.5103 2.8407ZM17.5103 2.8407C18.4038 4.6555 18.1246 6.8021 16.2292 9.38756L16.2273 9.39006M17.5103 2.8407L16.2273 9.39006M16.2273 9.39006C14.7537 11.4133 12.6291 13.4654 9.50292 15.8937M16.2273 9.39006L9.50292 15.8937M9.50292 15.8937C6.37464 13.4617 4.25213 11.3915 2.77568 9.38644L9.50292 15.8937Z'
                  stroke={fill}
                  stroke-width="2"
            />
        </G>
    </Svg>
);
