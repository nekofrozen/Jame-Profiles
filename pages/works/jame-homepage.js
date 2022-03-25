import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Jame-homepage">
            <Container>
                <Title>
                    Jame Homepage <Badge>2022</Badge>
                </Title>
                <P>
                    This is my First Website about me. Inspired and build as devaslife channel on Youtube 
                </P>
                <List ml={4} my={4}> 
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link href='https://github.com/nekofrozen/Jame-Profiles'>
                             Repo - GitHub <ExternalLinkIcon mx="2px"/></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Next.js, Chakra UI, Framer Motion, and Three.js</span>
                    </ListItem>                
                </List>
                <WorkImage src="/images/works/homepage-1.png" alt="profolio" />
            </Container>
        </Layout>
    )
}

export default Work

