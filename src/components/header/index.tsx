import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getNavigationsValue } from '@ijl/cli';
import LogOutSVG from '../../assets/svg/log-out.svg';
import {
  ContainerHeader,
  HeaderItemsWrapper,
  LocalizeButton,
  LocalizeWrapper,
  LogOutSvg,
  MenuItem,
  MenuLink,
  MenuList,
  MenuNavigation,
  ProfileLink
} from './styles';
import { Burger } from './burger';

type Link = {
  text: string;
  url: string;
};

const Header: React.FC = (): JSX.Element => {
  const { i18n, t } = useTranslation();

  const [activeLink, setActiveLink] = useState<string>('');
  const [activeLocalizeBtn, setActiveLocalizeBtn] = useState<string>('ru');

  const handleLinkClick = (link: string): void => {
    setActiveLink(link);
    localStorage.setItem('activeMenuLink', link);
  };

  const handleLocalizeClick = (btn: string): void => {
    setActiveLocalizeBtn(btn);
    i18n.changeLanguage(btn);
    localStorage.setItem('language', btn);
  };

  const links: Link[] = [
    { text: t('main:header.menuLinks.schedule'), url: 'sirius-x.schedule' },
    { text: t('main:header.menuLinks.attendance'), url: 'sirius-x.attendance' },
    { text: t('main:header.menuLinks.statistic'), url: 'sirius-x.statistics' }
  ];

  const linkElements = links.map((link) => (
    <MenuItem key={link.text}>
      <MenuLink
        to={getNavigationsValue(link.url)}
        onClick={() => handleLinkClick(link.url)}
        activeMenuLink={activeLink === link.url}
      >
        {link.text}
      </MenuLink>
    </MenuItem>
  ));

  useEffect(() => {
    const storedActiveLink = localStorage.getItem('activeMenuLink');
    const storedActiveLanguage = localStorage.getItem('language');

    if (storedActiveLink) {
      setActiveLink(storedActiveLink);
    }

    if (storedActiveLanguage) {
      setActiveLocalizeBtn(storedActiveLanguage);
      i18n.changeLanguage(storedActiveLanguage);
    }
  }, [i18n]);

  return (
    <ContainerHeader>
      <MenuNavigation>
        <MenuList>{linkElements}</MenuList>
      </MenuNavigation>
      <HeaderItemsWrapper>
        <LocalizeWrapper>
          <LocalizeButton onClick={() => handleLocalizeClick('ru')} activeLocalizeButton={activeLocalizeBtn === 'ru'}>
            ru
          </LocalizeButton>
          <LocalizeButton onClick={() => handleLocalizeClick('en')} activeLocalizeButton={activeLocalizeBtn === 'en'}>
            en
          </LocalizeButton>
        </LocalizeWrapper>
        <ProfileLink to={'#'}>{t('main:header.menuLinks.profile')}</ProfileLink>
        <LogOutSvg src={LogOutSVG} alt={t('main:header.logoutIcon')} />
      </HeaderItemsWrapper>
      <Burger />
    </ContainerHeader>
  );
};

export default Header;
