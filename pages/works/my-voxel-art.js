import { Container, Badge, List, ListItem } from "@chakra-ui/react";
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
                    This is my first voxel. created for decorate this site
                </P>
                <List ml={4} my={4}> 
                    <ListItem>
                        <Meta>Tools</Meta>
                        <span>Blender, MegicaVoxel</span>
                    </ListItem>            
                </List>
                <WorkImage src="/images/works/my-voxel-art-1.png" alt="profolio" />
                <WorkImage src="/images/works/my-voxel-art-2.png" alt="profolio" />
            </Container>
        </Layout>
    )
}

export default Work

