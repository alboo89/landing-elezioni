import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlined from '@mui/icons-material/LightModeOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  useGetLocale,
  useGo,
  useSetLocale,
  useTranslate,
} from '@refinedev/core';
import { HamburgerMenu, RefineThemedLayoutV2HeaderProps } from '@refinedev/mui';
import i18n from 'i18next';
// import React, { useContext } from 'react';
// import { ColorModeContext } from '../../contexts/color-mode';
import { AppIcon } from '../app-icon';
import sa from '../../assets/sa.png';
import it from '../../assets/it.webp';
import { navItems } from './helpers';
import { useLocation } from 'react-router-dom';

export type THeaderProps = RefineThemedLayoutV2HeaderProps & {
  homepage?: boolean;
};

export const Header: React.FC<THeaderProps> = ({
  sticky = true,
  homepage = false,
}) => {
  // const { mode, setMode } = useContext(ColorModeContext);

  const changeLanguage = useSetLocale();
  const locale = useGetLocale();
  const currentLocale = locale();
  const translate = useTranslate();
  const go = useGo();
  const { pathname } = useLocation();
  const isSelected = (item: string) => {
    if (pathname === '/') {
      return item === 'home';
    }
    return item === pathname.split('/')[1];
  };

  const handleNavMenu = (item: string) => {
    // navigate eith router to /bio
    go({ to: `/${item}` });
  };

  return (
    <AppBar position={sticky ? 'sticky' : 'relative'} color="secondary">
      <Toolbar sx={{ height: '100px' }}>
        <AppIcon />
        <Stack direction="row" width="100%" alignItems="center">
          {!homepage && <HamburgerMenu />}
          <Stack direction="row" ml={10} width="100%" gap={1}>
            {navItems.map((item) => (
              <MenuItem
                key={item}
                onClick={() => handleNavMenu(item)}
                sx={{
                  borderRadius: '10px',
                }}
              >
                <Typography
                  textTransform="capitalize"
                  textAlign="center"
                  sx={{
                    color: isSelected(item) ? 'secondary.A200' : 'secondary.50',
                  }}
                >
                  {translate(item)}
                </Typography>
              </MenuItem>
            ))}
          </Stack>
          <Stack
            direction="row"
            width="100%"
            justifyContent="flex-end"
            alignItems="center"
            gap="16px"
          >
            {/* <FormControl sx={{ minWidth: 64 }}>
              <Select
                disableUnderline
                defaultValue={currentLocale}
                inputProps={{ 'aria-label': 'Without label' }}
                variant="standard"
                sx={{
                  color: 'inherit',
                  '& .MuiSvgIcon-root': {
                    color: 'inherit',
                  },
                  '& .MuiStack-root > .MuiTypography-root': {
                    display: {
                      xs: 'none',
                      sm: 'block',
                    },
                  },
                }}
              >
                {[...(i18n.languages ?? [])].sort().map((lang: string) => (
                  <MenuItem
                    selected={currentLocale === lang}
                    key={lang}
                    defaultValue={lang}
                    onClick={() => {
                      changeLanguage(lang);
                    }}
                    value={lang}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Avatar
                        sx={{
                          width: '24px',
                          height: '24px',
                          marginRight: '5px',
                        }}
                        src={lang === 'it' ? it : sa}
                      />
                      <Typography>
                        {lang === 'it' ? 'Italiano' : 'Sardu Campidanesu'}
                      </Typography>
                    </Stack>
                  </MenuItem>
                ))}
              </Select>
            </FormControl> */}

            {/* <IconButton
              color="inherit"
              onClick={() => {
                setMode();
              }}
            >
              {mode === 'dark' ? <LightModeOutlined /> : <DarkModeOutlined />}
            </IconButton> */}

            {/* <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Box> */}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
