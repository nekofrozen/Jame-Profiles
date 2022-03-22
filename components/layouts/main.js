import Head from 'next/head'
import Navbar from '../navbar.js'
import NoSsr from '../no-ssr.js'
import { Box, Container } from '@chakra-ui/react' 
import Voxelpumpkin from '../voxel-demo'

const Main = ({ children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title> Nattanan Jame - HomePage</title>
            </Head>
            
            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <NoSsr>
                    <Voxelpumpkin/>
                </NoSsr>
                {children}
            </Container>
        </Box>
    )
}

export default Main