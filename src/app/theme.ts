'use client';
import {createTheme} from '@mui/material/styles';
import { ElementProps, lightModePalette, myBreakpoints, typographyProperties } from '@/helpers/constant/themeConstant';

const theme = createTheme({
    palette: lightModePalette,
    typography: typographyProperties,
    breakpoints: myBreakpoints,
    components: ElementProps,
});

export default theme;