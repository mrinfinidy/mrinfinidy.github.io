import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="">
            <Container>
                <Title>
                    YouTube Quick Search <Badge>2020</Badge>
                </Title>
                <P>
                    A Chrome extension that lets you search highlighted text directly
                    on YouTube by right clicking it and selecting 'Search on YouTube'.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://chrome.google.com/webstore/detail/youtube-quick-search/algmmcbdjmplgjmligafamelebkahfhh?hl=de">
                            Install from Chrome web store <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Chrome browser</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link href="https://github.com/mrinfinidy/YouTubeSearch">
                            Source code <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <WorkImage src="/images/works/ytsChrome_ss.jpg" alt="ytsChrome" />
            </Container>
        </Layout>
    )
}

export default Work
