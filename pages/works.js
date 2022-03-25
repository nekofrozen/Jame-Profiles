import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import Section from "../components/section"
import { WorkGridItem } from "../components/grid-item"
import Layout from "../components/layouts/article"

import homepage from '../public/images/works/homepage-1.png'
import myfirstVox from '../public/images/works/my-voxel-art-thumbnail.png'


const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem 
                            id="jame-homepage" 
                            title="Jame-Homepage" 
                            thumbnail={homepage}
                        >
                            First Website about me 
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem 
                            id="my-voxel-art" 
                            title="My First Voxel" 
                            thumbnail={myfirstVox}
                        >
                            My first voxel art create
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

            </Container>
        </Layout>
    )
}

export default Works