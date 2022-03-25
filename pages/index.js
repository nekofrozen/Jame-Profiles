import NextLink from 'next/link'
import { Container, Box, Heading, Image, useColorModeValue, Link, List, ListItem, Button, Icon } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear  } from '../components/bio'
import {
    IoMail,
    IoLogoLinkedin,
    IoLogoGithub,
    IoLogoDiscord
} from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, This is Jame a Software Engineer 
                </Box>
                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Nattanan Chiarsilanuwat
                        </Heading>
                        <p>Software Engineer / Treder</p>
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
                        <NextLink href="/experience">
                            <Link>Work</Link>
                        </NextLink>
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/experience">
                            <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                                Experience
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
                    <BioYear>2019</BioYear>
                    Software Developer Internship Worked at Gettgo
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    Graduate Bachelor of Science in Computer Science at King Mongkut&apos;s institute of technology ladkrabang - KMITL 
                </BioSection>
                <BioSection>
                    <BioYear>2020 </BioYear>
                    Full-Stack Developer Worked at Achievers Thailands
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
                    , Movie, Cryptocurrency, NFT
                </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Contact
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/nekofrozen" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                                  @Nekofrozen
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.linkedin.com/in/nattanan-jame/" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />}>
                                    Nattanan Chiarsilanuwat
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoMail} />}>
                                    nattanan.chiarsilanuwat@gmail.com
                            </Button>
                    </ListItem>
                    <ListItem>
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoDiscord} />}>
                                    Miyabi#2389
                            </Button>
                    </ListItem>
                </List>
            </Section>
            </Container>
        </Layout>
    )
}

export default Page