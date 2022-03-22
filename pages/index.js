import NextLink from "next/link"
import { Container, Box, Heading, Image, useColorModeValue, Link, Button } from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import Layout from "../components/layouts/article"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear  } from "../components/bio"

const Page = () => {
    return (
        <Layout>
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
                        <NextLink href="/">
                            <Link>Work</Link>
                        </NextLink>
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                                My Portfolio
                            </Button>
                        </NextLink>
                    </Box>  
                </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1997</BioYear>
                    Born in Bangkok, Thailand.
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    Graduate Bachelor of Science in Computer Science at King mongkut's institute of technology ladkrabang - KMITL 
                </BioSection>
                <BioSection>
                    <BioYear>2020 to Present</BioYear>
                    Software Engineer Worked at SCB – Siam Commercial Bank
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Interest ❤️
                </Heading>
                <Paragraph>
                    Programming, Music, {''}
                    <Link href="https://steamcommunity.com/id/Nekofrozen"> Gaming</Link>
                    , Cryptocurrency, Movie, NFT
                </Paragraph>
            </Section>
            </Container>
        </Layout>
    )
}

export default Page