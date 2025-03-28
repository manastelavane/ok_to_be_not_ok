import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CoPresentIcon from '@mui/icons-material/CoPresent';

import Grid from '@mui/material/Grid';

import { bluegrey, richBlack, light, medium, dark, deepDark } from './colors';

import { customGlobalScrollBars, smoothScrolling } from './CustomGlobalCSS';
import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import { data } from "./ResourcesData"

export default function Resources({ themeChange, mode }) {

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
    };
    return (
        <Box
            sx={{
                minHeight: '100vh',
                backgroundColor: mode === 'light' ? light : bluegrey,
                padding: '5rem',
            }}
        >
            {customGlobalScrollBars(mode)}
            {smoothScrolling()}
            <Typography variant="h1" component="h2"
                sx={{
                    color: mode === 'light' ? deepDark : light,
                    margin: '2rem',
                    fontFamily: 'Poppins, Work Sans',
                    fontWeight: 'bold',
                    fontSize: '3rem',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                Resources
                <CoPresentIcon sx={{ fontSize: '3rem', marginLeft: '1rem' }} />
            </Typography>

            <Typography variant="h2" component="h3"
                sx={{
                    color: mode === 'light' ? deepDark.concat('aa') : light.concat('aa'),
                    margin: '2rem',
                    fontFamily: 'Work Sans',
                    fontWeight: 'medium',
                    fontSize: '1.5rem',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                We believe in you and your ability to get through this.
            </Typography>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gridGap: '2rem',
                    // height:'100%'
                }}
            >
                {data.map((resource, i) => (
                    // <Link to={resource.link}>
                    <Card
                        role="link"
                        onClick={() => openInNewTab(`${resource.link}`)}
                        key={i}
                        sx={{
                            backgroundColor:
                                mode === 'light' ? deepDark : richBlack,
                            color: mode === 'light' ? light : dark.concat('aa'),
                            borderRadius: '10px',
                            border:
                                mode === 'light'
                                    ? 'none'
                                    : `1px solid ${dark.concat('aa')}`,
                            // height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        <CardActionArea>
                            <CardMedia
                                image={require(`./ResourceAssets/${resource.cover}`)}
                                sx={{
                                    width: '100%',
                                    height: '270px',
                                }}
                            />
                            <CardContent>
                                <Typography
                                    variant='h5'
                                    sx={{
                                        color:
                                            mode === 'light' ? light : medium,
                                        font: '600 1.5rem/1.5rem Poppins, sans-serif',
                                        mb: '1rem',
                                    }}
                                >
                                    {resource.title}
                                </Typography>
                                <Box
                                    sx={{
                                        height: '5rem',
                                        overflow: 'hidden',
                                    }}
                                >
                                    <Typography
                                        variant='body1'
                                        sx={{
                                            font: '400 1rem/1.5rem Work Sans, sans-serif',
                                        }}
                                    >
                                        {resource.description}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    // </Link>
                ))}
            </Box>

        </Box >
    );
};



