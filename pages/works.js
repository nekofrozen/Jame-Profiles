import { Container, Heading, SimpleGrid, Divider  } from "@chakra-ui/react"
import Section from "../components/section"
import { WorkGridItem } from "../components/grid-item"
import Layout from "../components/layouts/article"

import axie1 from '../public/images/works/axie-temp1.png'
import axie2 from '../public/images/works/axie-temp2.png'
import axie3 from '../public/images/works/axie-temp3.png'
import axie4 from '../public/images/works/axie-temp4.png'

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
                            id="axie1" 
                            title="Strong boy" 
                            thumbnail={axie1}
                        >
                            waiting for descriptions
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem 
                            id="axie2" 
                            title="Litte Girl" 
                            thumbnail={axie2}
                        >
                            waiting for descriptions
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                <Section delay={0.1}>
                    <Divider my={6} />
                    <Heading as="h3" fontSize={20} mb={4}>
                        Old Works
                    </Heading>
                </Section>
                
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem 
                            id="axie3" 
                            title="Strong boy" 
                            thumbnail={axie3}
                        >
                            It&apos;s me in real life
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem 
                            id="axie4" 
                            title="Litte Girl" 
                            thumbnail={axie4}
                        >
                            waiting for descriptions
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works