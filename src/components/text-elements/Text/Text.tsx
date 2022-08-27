import React from 'react';

import { 
    BaseColors,
    classNames,
    colorTheme,
    fontSize,
    fontWeight,
    getColorVariantsFromColorThemeValue,
    parseTruncateOption,
} from 'lib';
import { Color, Height, MarginTop, TextAlignment } from '../../../lib';

export interface TextProps {
    color?: Color,
    textAlignment?: TextAlignment,
    truncate?: boolean,
    height?: Height | '',
    marginTop?: MarginTop,
    children: React.ReactNode,
}

const Text = ({
    color = BaseColors.Gray,
    textAlignment = 'text-left',
    truncate = false,
    height = '',
    marginTop = 'mt-0',
    children
}: TextProps) => {
    return(
        <p className={classNames(
            parseTruncateOption(truncate),
            truncate ? 'whitespace-nowrap' : '',
            height,
            height ? 'overflow-y-auto' : '',
            marginTop,
            textAlignment,
            getColorVariantsFromColorThemeValue(colorTheme[color].text).textColor,
            fontSize.sm,
            fontWeight.sm,
        )}>
            { children }
        </p>
    );
};

export default Text;
