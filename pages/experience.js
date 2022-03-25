import { Container, Heading, Divider, Text, Badge } from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import Paragraph from '../components/paragraph'
import { Stack } from '../components/work'
import Section from '../components/section'

const experience = () => {
    return (
        <Layout title="Jame-homepage">
            <Container>
                <Heading as="h1" size='lg'> Experience </Heading>
                <Divider my={2} />
                <Section delay={0.1}>   
                    <Heading size='lg'> Software Engineer </Heading>   
                    <Text fontSize='md' as='i' > SCB – Siam Commercial Bank </Text>        
                    <Text><Badge colorScheme="red" >Jul 2020 - Present</Badge></Text>   
                    <Text marginBottom={3}>
                        <Stack>Java</Stack>
                        <Stack>Spring</Stack>
                        <Stack>Kafka</Stack>
                        <Stack>Kubernetes</Stack>
                        <Stack>MySQL</Stack>
                        <Stack>Kibana</Stack>
                        <Stack>Jenkins</Stack>
                    </Text>
                    <Paragraph> 
                        Developed and Optimized API and microservice for Project validation, routing, and Mapping application to legacy 
                    </Paragraph>
                </Section>

                <Section delay={0.2}>
                <Divider my={5} />
                    <Heading size='lg'> Full-Stack Developer </Heading>   
                    <Text fontSize='md' as='i' > Achievers Thailands </Text>   
                    <Text><Badge colorScheme="red" >Jan 2019 - Jul 2019</Badge></Text>        
                    <Text marginBottom={3}>
                        <Stack>Java</Stack>
                        <Stack>JSP</Stack>
                        <Stack>Jquery</Stack>
                        <Stack>JavaScript</Stack>
                        <Stack>HTML</Stack>
                        <Stack>CSS</Stack>
                        <Stack>MySql</Stack>
                    </Text>
                    <Paragraph> 
                        Developed and Maintained web application for the ERP and POS system.
                        Improved and optimized main website’s UI for seamless customer experience.

                    </Paragraph>
                </Section>
                
                <Section delay={0.3}>
                    <Divider my={5} />
                    <Heading size='lg'> Software Developer Intern </Heading>   
                    <Text fontSize='md' as='i'> Gettgo </Text>            
                    <Text><Badge colorScheme="red" >Jan 2019 - Jul 2019</Badge></Text>   
                    <Text marginBottom={3}>
                        <Stack>Ruby on Rails 5</Stack>
                        <Stack>Jquery</Stack>
                        <Stack>HTML</Stack>
                        <Stack>JavaScript</Stack>
                        <Stack>Redis</Stack>
                        <Stack>postgreSQL</Stack>
                    </Text>
                    <Paragraph > 
                        Developed, troubleshot, debugged for insurance package comparison website. 
                        Worked closely with the product team on the scope of future projects and innovations
                    </Paragraph>
                </Section>
            </Container>
        </Layout>
    )
}

export default experience