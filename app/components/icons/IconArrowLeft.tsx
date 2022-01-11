import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

interface Props {
    fill?: string;
    width?: number;
    height?: number;
}

export const IconArrowLeft: React.FC<Props> = ({
                                               fill = '#000000',
                                               width = 18,
                                               height = 18,
                                           }): JSX.Element => (
    <Svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio='xMidYMin meet'
    >
        <G id='Icons' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
            <Path d='M8.93231 0L10.4 1.4567L3.93967 7.96603H18V10.0339H3.93967L10.4 16.5433L8.93231 18L0 8.99998L8.93231 0Z'
                  fill={fill}
                  fillRule='evenodd'
                  clipRule='evenodd'
            />
        </G>
    </Svg>
);
