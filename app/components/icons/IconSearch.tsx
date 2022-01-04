import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

interface Props {
    fill?: string;
    width?: number;
    height?: number;
}

export const IconSearch: React.FC<Props> = ({
                                                fill = '#000000',
                                                width = 17,
                                                height = 17,
                                            }): JSX.Element => (
    <Svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio='xMidYMin meet'
    >
        <G id='Icons' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
            <Path d='M6.31429 0C7.98894 0 9.595 0.665253 10.7792 1.84941C11.9633 3.03357 12.6286 4.63963 12.6286 6.31429C12.6286 7.87829 12.0554 9.316 11.1131 10.4234L11.3754 10.6857H12.1429L17 15.5429L15.5429 17L10.6857 12.1429V11.3754L10.4234 11.1131C9.316 12.0554 7.87829 12.6286 6.31429 12.6286C4.63963 12.6286 3.03357 11.9633 1.84941 10.7792C0.665253 9.595 0 7.98894 0 6.31429C0 4.63963 0.665253 3.03357 1.84941 1.84941C3.03357 0.665253 4.63963 0 6.31429 0ZM6.31429 1.94286C3.88571 1.94286 1.94286 3.88571 1.94286 6.31429C1.94286 8.74286 3.88571 10.6857 6.31429 10.6857C8.74286 10.6857 10.6857 8.74286 10.6857 6.31429C10.6857 3.88571 8.74286 1.94286 6.31429 1.94286Z'
                  fill={fill}
            />
        </G>
    </Svg>
);
