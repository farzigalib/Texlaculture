import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';
import {COLORS} from '../color';

const CompanyLogo = () => {
  return (
    <Svg
      width="190"
      height="47"
      viewBox="0 0 190 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect width="47" height="47" rx="3" fill={COLORS.primaryColor}></Rect>
      <Path
        d="M11.48 34V19.8933H5.82667V15.3333H22.6V19.8933H16.76V34H11.48ZM33.7502 34.2667C32.2924 34.2667 30.9502 34.0267 29.7235 33.5467C28.4969 33.0667 27.4302 32.4 26.5235 31.5467C25.6347 30.6756 24.9413 29.6533 24.4435 28.48C23.9635 27.2889 23.7235 25.9822 23.7235 24.56C23.7235 23.1556 23.9724 21.8667 24.4702 20.6933C24.9858 19.5022 25.6969 18.4711 26.6035 17.6C27.5102 16.7289 28.5858 16.0533 29.8302 15.5733C31.0747 15.0933 32.4347 14.8533 33.9102 14.8533C34.7991 14.8533 35.6613 14.9689 36.4969 15.2C37.3502 15.4133 38.1502 15.7333 38.8969 16.16C39.6435 16.5867 40.3102 17.12 40.8969 17.76L37.7235 21.44C37.4213 21.1022 37.0835 20.8 36.7102 20.5333C36.3369 20.2667 35.9102 20.0622 35.4302 19.92C34.968 19.76 34.4524 19.68 33.8835 19.68C33.2258 19.68 32.6035 19.7956 32.0169 20.0267C31.448 20.24 30.9502 20.56 30.5235 20.9867C30.0969 21.4133 29.7591 21.9289 29.5102 22.5333C29.2791 23.1378 29.1635 23.8311 29.1635 24.6133C29.1635 25.36 29.2791 26.0356 29.5102 26.64C29.7591 27.2267 30.1058 27.7333 30.5502 28.16C31.0124 28.5689 31.5547 28.8889 32.1769 29.12C32.8169 29.3511 33.528 29.4667 34.3102 29.4667C34.8613 29.4667 35.3769 29.3867 35.8569 29.2267C36.3547 29.0667 36.808 28.8533 37.2169 28.5867C37.6258 28.32 37.9902 28.0267 38.3102 27.7067L40.8169 31.68C40.3724 32.1778 39.768 32.6222 39.0035 33.0133C38.2569 33.4044 37.4213 33.7156 36.4969 33.9467C35.5902 34.16 34.6747 34.2667 33.7502 34.2667Z"
        fill="white"></Path>
      <Path
        d="M57.214 31.5V19.07H52.726V16.1H65.134V19.07H60.514V31.5H57.214ZM70.75 31.72C69.4887 31.72 68.3887 31.4633 67.45 30.95C66.5113 30.4367 65.778 29.7327 65.25 28.838C64.722 27.9433 64.458 26.9167 64.458 25.758C64.458 24.8633 64.6047 24.042 64.898 23.294C65.1913 22.546 65.602 21.9007 66.13 21.358C66.658 20.8007 67.2813 20.3753 68 20.082C68.7333 19.774 69.5253 19.62 70.376 19.62C71.168 19.62 71.9013 19.7667 72.576 20.06C73.2507 20.3387 73.83 20.742 74.314 21.27C74.8127 21.7833 75.194 22.392 75.458 23.096C75.722 23.8 75.8393 24.57 75.81 25.406L75.788 26.374H66.438L65.932 24.46H73.214L72.862 24.856V24.372C72.8327 23.976 72.7007 23.6167 72.466 23.294C72.246 22.9713 71.96 22.722 71.608 22.546C71.256 22.37 70.86 22.282 70.42 22.282C69.7747 22.282 69.2247 22.4067 68.77 22.656C68.33 22.9053 67.9927 23.272 67.758 23.756C67.5233 24.24 67.406 24.8267 67.406 25.516C67.406 26.22 67.5527 26.8287 67.846 27.342C68.154 27.8553 68.5793 28.2587 69.122 28.552C69.6793 28.8307 70.332 28.97 71.08 28.97C71.5933 28.97 72.0627 28.8893 72.488 28.728C72.9133 28.5667 73.368 28.288 73.852 27.892L75.348 29.982C74.9227 30.3633 74.4533 30.686 73.94 30.95C73.4267 31.1993 72.8987 31.39 72.356 31.522C71.8133 31.654 71.278 31.72 70.75 31.72ZM85.4022 31.5L82.5202 27.386L81.6402 26.154L76.9322 19.862H80.7162L83.5322 23.844L84.5002 25.164L89.1422 31.5H85.4022ZM76.8882 31.5L81.5302 25.142L83.2462 27.188L80.5622 31.5H76.8882ZM84.3682 26.264L82.6962 24.218L85.1822 19.862H88.8562L84.3682 26.264ZM91.0957 31.5V15.22H94.2197V31.5H91.0957ZM101.531 31.72C100.563 31.72 99.6906 31.456 98.9133 30.928C98.1359 30.4 97.5199 29.6813 97.0653 28.772C96.6106 27.8627 96.3833 26.8213 96.3833 25.648C96.3833 24.4747 96.6106 23.4407 97.0653 22.546C97.5346 21.6367 98.1653 20.9253 98.9573 20.412C99.7493 19.884 100.651 19.62 101.663 19.62C102.235 19.62 102.756 19.708 103.225 19.884C103.709 20.0453 104.127 20.2727 104.479 20.566C104.846 20.8593 105.154 21.1967 105.403 21.578C105.653 21.9593 105.829 22.37 105.931 22.81L105.271 22.7V19.862H108.373V31.5H105.227V28.706L105.931 28.64C105.814 29.0507 105.623 29.4393 105.359 29.806C105.095 30.1727 104.765 30.5027 104.369 30.796C103.988 31.0747 103.555 31.302 103.071 31.478C102.587 31.6393 102.074 31.72 101.531 31.72ZM102.389 29.014C102.976 29.014 103.489 28.8747 103.929 28.596C104.369 28.3173 104.707 27.9287 104.941 27.43C105.191 26.9167 105.315 26.3227 105.315 25.648C105.315 24.988 105.191 24.4087 104.941 23.91C104.707 23.4113 104.369 23.0227 103.929 22.744C103.489 22.4507 102.976 22.304 102.389 22.304C101.817 22.304 101.311 22.4507 100.871 22.744C100.446 23.0227 100.109 23.4113 99.8593 23.91C99.6099 24.4087 99.4853 24.988 99.4853 25.648C99.4853 26.3227 99.6099 26.9167 99.8593 27.43C100.109 27.9287 100.446 28.3173 100.871 28.596C101.311 28.8747 101.817 29.014 102.389 29.014ZM118.27 31.72C117.14 31.72 116.099 31.5293 115.146 31.148C114.207 30.752 113.386 30.202 112.682 29.498C111.992 28.7793 111.457 27.936 111.076 26.968C110.694 25.9853 110.504 24.9147 110.504 23.756C110.504 22.6267 110.702 21.5853 111.098 20.632C111.494 19.664 112.051 18.828 112.77 18.124C113.488 17.4053 114.332 16.848 115.3 16.452C116.268 16.056 117.316 15.858 118.446 15.858C119.179 15.858 119.898 15.9607 120.602 16.166C121.32 16.3567 121.973 16.6427 122.56 17.024C123.161 17.4053 123.674 17.86 124.1 18.388L122.032 20.676C121.68 20.324 121.313 20.0233 120.932 19.774C120.565 19.51 120.169 19.312 119.744 19.18C119.333 19.0333 118.893 18.96 118.424 18.96C117.793 18.96 117.199 19.0773 116.642 19.312C116.099 19.5467 115.622 19.8767 115.212 20.302C114.801 20.7127 114.471 21.2187 114.222 21.82C113.987 22.4067 113.87 23.0593 113.87 23.778C113.87 24.5113 113.987 25.1787 114.222 25.78C114.456 26.3667 114.786 26.8727 115.212 27.298C115.637 27.7087 116.143 28.0313 116.73 28.266C117.331 28.486 117.991 28.596 118.71 28.596C119.179 28.596 119.634 28.53 120.074 28.398C120.514 28.266 120.917 28.0827 121.284 27.848C121.665 27.6133 122.002 27.342 122.296 27.034L123.902 29.608C123.55 30.004 123.073 30.3633 122.472 30.686C121.885 31.0087 121.225 31.2653 120.492 31.456C119.758 31.632 119.018 31.72 118.27 31.72ZM130.248 31.72C129.397 31.72 128.664 31.5367 128.048 31.17C127.446 30.7887 126.977 30.2533 126.64 29.564C126.317 28.86 126.156 28.0167 126.156 27.034V19.862H129.28V26.528C129.28 27.056 129.368 27.518 129.544 27.914C129.72 28.2953 129.969 28.5887 130.292 28.794C130.614 28.9993 131.01 29.102 131.48 29.102C131.817 29.102 132.132 29.0507 132.426 28.948C132.719 28.8307 132.968 28.6693 133.174 28.464C133.379 28.2587 133.54 28.0167 133.658 27.738C133.775 27.4593 133.834 27.1587 133.834 26.836V19.862H136.958V31.5H133.988L133.878 29.102L134.45 28.838C134.274 29.3807 133.98 29.872 133.57 30.312C133.159 30.752 132.668 31.0967 132.096 31.346C131.524 31.5953 130.908 31.72 130.248 31.72ZM140.123 31.5V15.22H143.247V31.5H140.123ZM147.475 31.5V16.914H150.599V31.5H147.475ZM145.297 22.656V19.862H152.975V22.656H145.297ZM159.015 31.72C158.165 31.72 157.431 31.5367 156.815 31.17C156.214 30.7887 155.745 30.2533 155.407 29.564C155.085 28.86 154.923 28.0167 154.923 27.034V19.862H158.047V26.528C158.047 27.056 158.135 27.518 158.311 27.914C158.487 28.2953 158.737 28.5887 159.059 28.794C159.382 28.9993 159.778 29.102 160.247 29.102C160.585 29.102 160.9 29.0507 161.193 28.948C161.487 28.8307 161.736 28.6693 161.941 28.464C162.147 28.2587 162.308 28.0167 162.425 27.738C162.543 27.4593 162.601 27.1587 162.601 26.836V19.862H165.725V31.5H162.755L162.645 29.102L163.217 28.838C163.041 29.3807 162.748 29.872 162.337 30.312C161.927 30.752 161.435 31.0967 160.863 31.346C160.291 31.5953 159.675 31.72 159.015 31.72ZM168.869 31.5V19.862H171.883L171.993 23.602L171.465 22.832C171.641 22.2307 171.927 21.688 172.323 21.204C172.719 20.7053 173.181 20.3167 173.709 20.038C174.251 19.7593 174.816 19.62 175.403 19.62C175.652 19.62 175.894 19.642 176.129 19.686C176.363 19.73 176.561 19.7813 176.723 19.84L175.887 23.272C175.711 23.184 175.498 23.1107 175.249 23.052C174.999 22.9787 174.743 22.942 174.479 22.942C174.127 22.942 173.797 23.008 173.489 23.14C173.195 23.2573 172.939 23.4333 172.719 23.668C172.499 23.888 172.323 24.152 172.191 24.46C172.073 24.768 172.015 25.1053 172.015 25.472V31.5H168.869ZM183.543 31.72C182.282 31.72 181.182 31.4633 180.243 30.95C179.304 30.4367 178.571 29.7327 178.043 28.838C177.515 27.9433 177.251 26.9167 177.251 25.758C177.251 24.8633 177.398 24.042 177.691 23.294C177.984 22.546 178.395 21.9007 178.923 21.358C179.451 20.8007 180.074 20.3753 180.793 20.082C181.526 19.774 182.318 19.62 183.169 19.62C183.961 19.62 184.694 19.7667 185.369 20.06C186.044 20.3387 186.623 20.742 187.107 21.27C187.606 21.7833 187.987 22.392 188.251 23.096C188.515 23.8 188.632 24.57 188.603 25.406L188.581 26.374H179.231L178.725 24.46H186.007L185.655 24.856V24.372C185.626 23.976 185.494 23.6167 185.259 23.294C185.039 22.9713 184.753 22.722 184.401 22.546C184.049 22.37 183.653 22.282 183.213 22.282C182.568 22.282 182.018 22.4067 181.563 22.656C181.123 22.9053 180.786 23.272 180.551 23.756C180.316 24.24 180.199 24.8267 180.199 25.516C180.199 26.22 180.346 26.8287 180.639 27.342C180.947 27.8553 181.372 28.2587 181.915 28.552C182.472 28.8307 183.125 28.97 183.873 28.97C184.386 28.97 184.856 28.8893 185.281 28.728C185.706 28.5667 186.161 28.288 186.645 27.892L188.141 29.982C187.716 30.3633 187.246 30.686 186.733 30.95C186.22 31.1993 185.692 31.39 185.149 31.522C184.606 31.654 184.071 31.72 183.543 31.72Z"
        fill={COLORS.primaryColor}></Path>
    </Svg>
  );
};

export default CompanyLogo;
