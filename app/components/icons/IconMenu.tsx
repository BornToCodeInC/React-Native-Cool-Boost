import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

interface Props {
    fill?: string;
    width?: number;
    height?: number;
}

export const IconMenu: React.FC<Props> = ({
                                                fill = '#000000',
                                                width = 17,
                                                height = 13,
                                            }): JSX.Element => (
    <Svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio='xMidYMin meet'
    >
        <G id='Icons' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
            <Path d='M0 0H17V2.16667H0V0ZM0 5.41667H17V7.58333H0V5.41667ZM0 10.8333H17V13H0V10.8333Z'
                  fill={fill}
            />
        </G>
    </Svg>
);
