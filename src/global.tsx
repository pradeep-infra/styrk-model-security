import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
--white: #fff;
 --brand-teal-100: #F2F8F7;
 --brand-teal-200: #E5F0EF;
 --brand-teal-300: #CBE1DF;
 --brand-teal-400: #B1D2D0;
 --brand-teal-500: #8CBDB9;
 --brand-teal-600: #71ADA8;
 --brand-teal-700: #599B96;
 --brand-teal-800: #528E89;
 --brand-teal-900: #437570;
 --brand-teal-1000:#345B57;
 
 --brand-gold-100: #FCF6EE;
 --brand-gold-200: #F6E3CB;
 --brand-gold-300: #F0D0A8;
 --brand-gold-400: #E7B374;
 --brand-gold-500: #E09E50;
 --brand-gold-600: #DA8D2F;
 --brand-gold-700: #D08325;
 --brand-gold-800: #BF7822;
 --brand-gold-900: #AD6D1F;
 --brand-gold-1000:#8B5718;


 --neutral-gray-100: #F4F6F5;
 --neutral-gray-200: #E8ECEB;
 --neutral-gray-300: #C7D1CF;
 --neutral-gray-400:  #B0BFBB;
 --light-shadow: 176, 191, 187;
 --neutral-gray-500: #A5B6B1;
 --neutral-gray-600: #9AACA8;
 --neutral-gray-700: #849A94;
 --neutral-gray-800: #6E8781;
 --neutral-gray-900: #657B76;
 --neutral-gray-1000: #536560;
 
 
 --neutral-blue-100: #BECCDA;
 --gradient-blue-100: 190, 204, 218;
 --neutral-blue-200: #A4B8CB;
 --neutral-blue-300: #8AA4BC;
 --neutral-blue-400: #7190AD;
 --neutral-blue-500: #597C9B;
 --neutral-blue-600: #4A6782;
 --neutral-blue-700: #3C5268;
 --neutral-blue-800: #2D3E4E;
 --neutral-blue-900: #1E2934;
 --neutral-blue-1000: #0F151A;
 --dark-shadow: 15, 21, 26;

 --semantic-green-100: #D6FFF1;
 --semantic-green-200: #33FFBB;
 --semantic-green-300: #00D68F;
 --semantic-green-400: #00A36D;

 --semantic-amber-100: #FFF1D6;
 --semantic-amber-200: #FFCF70;
 --semantic-amber-300: #FFAA00;
 --semantic-amber-400: #CC8800;

 --semantic-red-100: #FFEBF0;
 --semantic-red-200: #FF99B4;
 --semantic-red-300: #FF3D71;
 --semantic-red-400: #CC0036;
}
body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
}
nav.responsive-toolbar .nav-right .search-box input[type=text], .nav-right-items {
    background-color: ${({ theme }) => theme.toolbarBg};
}
nav.responsive-toolbar .nav-right .search-box input[type=text]::placeholder {
    color: ${({ theme }) => theme.searchPlaceholder};
}

nav.responsive-toolbar ul li a {
    color: ${({ theme }) => theme.text};
}
nav.responsive-toolbar ul li a:hover, nav.responsive-toolbar ul li a.active {
    color: ${({ theme }) => theme.navTextHover};
}
.navToggle, .modeIcon svg, .selectedDateDataRow .label {
    color: ${({theme})=> theme.toggleNav};
    text-decoration: none!important;
}
.card-bg {
    background-color: ${({theme})=> theme.toolbarBg}
}
.card-shadow {
    box-shadow: 
    0px 19px 8px rgba(${({theme})=> theme.cardShadow},0.1), 
    0px 11px 7px rgba(${({theme})=> theme.cardShadow},0.5), 
    0px 5px 5px rgba(${({theme})=> theme.cardShadow},0.9), 
    0px 1px 3px rgba(${({theme})=> theme.cardShadow},0.1), 
}
.btn-group .MuiButtonBase-root {
    border-color: ${({theme})=> theme.btnGroupBorder};
    color: ${({theme})=> theme.btnGroupColor};
}
.btn-group .MuiButtonBase-root:hover {
    border-color: ${({theme})=> theme.btnGroupBorder};
    background-color: ${({theme})=> theme.btnGroupBorder};
}
.compliance-box {
    background: ${({theme})=> theme.gradient};
}
.datepicker-month-label {
    color: ${({ theme }) => theme.text}!important;
}
.datarowBg {
    background-color: ${({theme})=> theme.dataRowBg};
}
@media (max-width: 768px) {
    nav.responsive-toolbar ul {
        background-color: ${({ theme }) => theme.toolbarBg};
    }
}
`