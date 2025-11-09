"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider } from "@mui/material/styles";
import { theme, color } from "../lib/theme";

const settings = ["X Profile"];

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [loginUser, setLoginUser] = useState(false);

  const handleLogin = () => setLoginUser(true);
  const handleLogout = () => {
    setLoginUser(false);
    handleCloseUserMenu();
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElUser(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  // Define páginas visíveis com base no login
  const pages = loginUser ? ["Mural", "Paineis"] : ["Mural"];

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            {/* Logo + Título responsivo com Link */}
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Box
                sx={{
                  width: { xs: 60, sm: 80, md: 100 },
                  height: { xs: 60, sm: 80, md: 100 },
                  position: "relative",
                  mr: 2,
                  ml: 2,
                }}
              >
                <Image
                  src="/eg.png"
                  alt="Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 600px) 60px, (max-width: 960px) 80px, 100px"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  lineHeight: 1.2,
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                    fontWeight: 700,
                    letterSpacing: ".1rem",
                    color: "inherit",
                  }}
                >
                  EXILADOS
                </Typography>
                <Typography
                  variant="h6"
                  component="span"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                    fontWeight: 700,
                    letterSpacing: ".1rem",
                    color: "inherit",
                  }}
                >
                  DE GLADERA
                </Typography>
              </Box>
            </Link>

            {/* Menu mobile */}
            <Box sx={{ display: { xs: "flex", sm: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Menu desktop */}
            <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ color: color.white }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {/* Avatar ou botão de login */}
            <Box sx={{ flexGrow: 0 }}>
              {loginUser ? (
                <>
                  <Tooltip title="Log Options">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Exilado padrão" src="/eg.png" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    anchorEl={anchorElUser}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    transformOrigin={{ vertical: "top", horizontal: "right" }}
                    sx={{ mt: "45px" }}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                    <MenuItem onClick={handleLogout}>
                      <Typography textAlign="center" color="error">
                        Logout
                      </Typography>
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={handleLogin}
                  sx={{ ml: 2 }}
                >
                  Login
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
