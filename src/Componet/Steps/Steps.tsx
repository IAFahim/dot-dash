import {
    createStyles,
    Title,
    Container,
    Text,
    UnstyledButton,
    Overlay,
    SimpleGrid,
} from '@mantine/core';
import {ArrowAutofitDown, ListCheck, Star} from "tabler-icons-react";


const useStyles = createStyles((theme) => ({
    wrapper: {
        paddingTop: theme.spacing.xl
    },

    header: {
        height: 350,
        boxSizing: 'border-box',
        backgroundImage: `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
            theme.colors[theme.primaryColor][6]
        } 100%)`,
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        position: 'relative',
        padding: `${theme.spacing.xl * 1.5}px ${theme.spacing.xl * 2}px`,
        borderRadius: theme.radius.lg,
        marginBottom: theme.spacing.lg,

        '@media (max-width: 1080px)': {
            height: 'auto',
            flexDirection: 'column-reverse',
            alignItems: 'initial',
            padding: theme.spacing.xl,
        },
    },

    title: {
        color: theme.white,
        position: 'relative',
        zIndex: 1,
        fontSize: 46,
        fontWeight: 800,
        letterSpacing: -0.5,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        '@media (max-width: 1080px)': {
            fontSize: 22,
            textAlign: 'center',
            marginTop: theme.spacing.xl,
        },
    },

    titleOverlay: {
        zIndex: 0,
        position: 'absolute',
        color: theme.white,
        fontWeight: 900,
        opacity: 0.1,
        fontSize: 260,
        lineHeight: 1,
        top: 10,
        left: 32,
        pointerEvents: 'none',
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        '@media (max-width: 1080px)': {
            display: 'none',
        },
    },

    contactTitle: {
        color: theme.black,
        marginBottom: theme.spacing.xl,
        lineHeight: .75,
    },

    categoryCard: {
        height: 160,
        position: 'relative',
        backgroundSize: '100%',
        backgroundPosition: 'center',
        color: theme.white,
        borderRadius: theme.radius.lg,
        overflow: 'hidden',
        transition: 'background-size 300ms ease',

        '&:hover': {
            backgroundSize: '105%',
        },
    },

    categoryLabel: {
        color: theme.white,
        zIndex: 2,
        position: 'relative',
    },
}));



export function Steps(props:any) {
    const { classes } = useStyles();

    return (
        <div className={classes.wrapper}>
            <div className={classes.header}>
                <Title className={classes.title}>{props.subtext}</Title>
                <Title className={classes.titleOverlay} role="presentation">
                    {props.text}
                </Title>
            </div>
        </div>
    );
}