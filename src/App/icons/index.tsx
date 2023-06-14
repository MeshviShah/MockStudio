import { Image, useMantineColorScheme, useMantineTheme } from '@mantine/core';

//light icons
import Light_IconChevronLeft from './light/chevron-left.svg';
import Light_IconChevronRight from './light/chevron-right.svg';
import Light_IconClockwiseArrow from './light/clockwise-arrow.svg';
import Light_IconLock from './light/lock.svg';
import Light_IconNewTab from './light/newtab.svg';
import Light_IconShare from './light/share.svg';
import Light_IconShield from './light/shield.svg';
import Light_IconSidebar from './light/sidebar.svg';
import Light_IconTabOverView from './light/tab-overview.svg';

//dark icons
import Dark_IconChevronLeft from './dark/chevron-left.svg';
import Dark_IconChevronRight from './dark/chevron-right.svg';
import Dark_IconClockwiseArrow from './dark/clockwise-arrow.svg';
import Dark_IconLock from './dark/lock.svg';
import Dark_IconNewTab from './dark/newtab.svg';
import Dark_IconShare from './dark/share.svg';
import Dark_IconShield from './dark/shield.svg';
import Dark_IconSidebar from './dark/sidebar.svg';
import Dark_IconTabOverView from './dark/tab-overview.svg';

const iconMap = {
  chevronLeft: 'chevronLeft',
  chevronRight: 'chevronRight',
  clockwiseArrow: 'clockwiseArrow',
  lock: 'lock',
  newTab: 'newTab',
  share: 'share',
  shield: 'shield',
  sidebar: 'sidebar',
  tabOverview: 'tabOverview',
};

const MSIcon = ({ variant }: any) => {
  const icons = {
    light: {
      chevronLeft: Light_IconChevronLeft,
      chevronRight: Light_IconChevronRight,
      clockwiseArrow: Light_IconClockwiseArrow,
      lock: Light_IconLock,
      newTab: Light_IconNewTab,
      share: Light_IconShare,
      shield: Light_IconShield,
      sidebar: Light_IconSidebar,
      tabOverview: Light_IconTabOverView,
    },
    dark: {
      chevronLeft: Dark_IconChevronLeft,
      chevronRight: Dark_IconChevronRight,
      clockwiseArrow: Dark_IconClockwiseArrow,
      lock: Dark_IconLock,
      newTab: Dark_IconNewTab,
      share: Dark_IconShare,
      shield: Dark_IconShield,
      sidebar: Dark_IconSidebar,
      tabOverview: Dark_IconTabOverView,
    },
  };
  const { colorScheme } = useMantineColorScheme();
  const iconName = (variant: keyof typeof iconMap) => {
    return icons[colorScheme][variant];
  };
  return (
    <div className='m-auto'>
      <Image src={iconName(variant)} style={{ objectFit: 'cover' }} maw={20} />
    </div>
  );
};

export { MSIcon, iconMap };
