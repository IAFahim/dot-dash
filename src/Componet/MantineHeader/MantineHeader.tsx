import {
    createStyles,
    Menu,
    Center,
    Header,
    Container,
    Group,
    ActionIcon,
    Burger, Image,
} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {BrandGithub, Login} from "tabler-icons-react";

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
    inner: {
        height: HEADER_HEIGHT,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },
}));


export function MantineHeader() {
    const {classes} = useStyles();
    const [opened, {toggle}] = useDisclosure(false);

    return (
        <Header height={HEADER_HEIGHT} sx={{borderBottom: 0}}>
            <Container className={classes.inner} fluid>
                <Group>
                    <Image src={require("./logo192.png")} height={58}/>
                </Group>
                <Group spacing={5} className={classes.links}>

                </Group>
                <ActionIcon component="a" href="https://github.com/IAFahim/dot-dash">
                    <BrandGithub radius='xl' height={64}/>
                </ActionIcon>
            </Container>
        </Header>
    );
}