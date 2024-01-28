import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlined from '@mui/icons-material/LightModeOutlined';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useGetIdentity, useGetLocale, useSetLocale } from '@refinedev/core';
import { HamburgerMenu, RefineThemedLayoutV2HeaderProps } from '@refinedev/mui';
import i18n from 'i18next';
import React, { useContext } from 'react';
import { ColorModeContext } from '../../contexts/color-mode';
import { AppIcon } from '../app-icon';
import sa from '../../assets/sa.png';
import it from '../../assets/it.webp';

type IUser = {
  id: number;
  name: string;
  avatar: string;
};
export type THeaderProps = RefineThemedLayoutV2HeaderProps & {
  homepage?: boolean;
};

export const Header: React.FC<THeaderProps> = ({
  sticky = true,
  homepage = false,
}) => {
  const { mode, setMode } = useContext(ColorModeContext);
  const { data: user } = useGetIdentity<IUser>();

  const changeLanguage = useSetLocale();
  const locale = useGetLocale();
  const currentLocale = locale();

  return (
    <AppBar position={sticky ? 'sticky' : 'relative'} color="secondary">
      <Toolbar sx={{ height: '100px' }}>
        <AppIcon />
        <Stack direction="row" width="100%" alignItems="center">
          {!homepage && <HamburgerMenu />}
          <Stack
            direction="row"
            width="100%"
            justifyContent="flex-end"
            alignItems="center"
            gap="16px"
          >
            <FormControl sx={{ minWidth: 64 }}>
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
                  // @ts-ignore
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
            </FormControl>

            <IconButton
              color="inherit"
              onClick={() => {
                setMode();
              }}
            >
              {mode === 'dark' ? <LightModeOutlined /> : <DarkModeOutlined />}
            </IconButton>

            {(user?.avatar || user?.name) && (
              <Stack
                direction="row"
                gap="16px"
                alignItems="center"
                justifyContent="center"
              >
                {user?.name && (
                  <Typography
                    sx={{
                      display: {
                        xs: 'none',
                        sm: 'inline-block',
                      },
                    }}
                    variant="subtitle2"
                  >
                    {user?.name}
                  </Typography>
                )}
                <Avatar src={user?.avatar} alt={user?.name} />
              </Stack>
            )}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
