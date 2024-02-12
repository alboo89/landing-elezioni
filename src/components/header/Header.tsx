import AppBar from '@mui/material/AppBar';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useGo, useTranslate } from '@refinedev/core';
import { RefineThemedLayoutV2HeaderProps } from '@refinedev/mui';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { AppIcon } from '../app-icon';
import { navItems } from './helpers';
import { useLocation } from 'react-router-dom';
import { Box, Button, ButtonGroup, Theme, useMediaQuery } from '@mui/material';

export type THeaderProps = RefineThemedLayoutV2HeaderProps & {
  homepage?: boolean;
};

export const Header: React.FC<THeaderProps> = ({ sticky = true }) => {
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
    go({ to: `/${item}` });
  };
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  return (
    <AppBar position={sticky ? 'sticky' : 'relative'} color="secondary">
      <Toolbar sx={{ height: '100px' }}>
        <Stack direction="row" width="100%" justifyContent="center">
          <Stack
            component="a"
            target="_blank"
            href="https://votasardigna.org/"
            justifySelf="flex-start"
          >
            <AppIcon />
          </Stack>
          <Stack
            flex="1"
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {navItems.map((item) => (
              <MenuItem
                key={item}
                onClick={() => handleNavMenu(item)}
                sx={{
                  borderRadius: 20,
                  height: 40,
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
          <Box alignSelf="center" height="100%">
            <ButtonGroup orientation={matches ? 'horizontal' : 'vertical'}>
              <Button
                variant="outlined"
                size="medium"
                sx={{ borderColor: 'secondary.50', color: 'secondary.50' }}
                href="https://www.facebook.com/luciana.mele.756"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon sx={{ color: 'secondary.50' }} />
              </Button>
              <Button
                variant="outlined"
                size="medium"
                sx={{ borderColor: 'secondary.50', color: 'secondary.50' }}
                href="https://www.instagram.com/lucianamele_62"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon sx={{ color: 'secondary.50' }} />
              </Button>
            </ButtonGroup>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
