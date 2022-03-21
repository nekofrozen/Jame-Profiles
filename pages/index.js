import NextLink from "next/link"
import { Container, Box, Heading, Image, useColorModeValue, Link } from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I&apos;m a Software Engineer Based in Thailand!
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Nattanan Chiarsilanuwat
                    </Heading>
                    <p>Developer / Investor / Crypto Treder</p>
                </Box>
                <Box 
                    flexShrink={0} 
                    mt={{base: 4, md: 0}} 
                    ml={{md:6}} 
                    align="center"
                >
                    <Image 
                        borderColor="whiteAlpha.800" 
                        borderWidth={2} 
                        borderStyle="solid" 
                        maxWidth="100px" 
                        display="inline-block" 
                        borderRadius="full" 
                        src="/images/nattanan.jpg" 
                        alt="Profile Image"
                    />
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph> 
                    Software engineer with 2+ years of experience. 
                    developing, testing, and maintaining enterprise software applications at{' '}
                    <NextLink href="/"><Link>Work</Link></NextLink>
                </Paragraph>
            </Section>
        </Container>
    )
}

export default Page